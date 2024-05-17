import React, { useCallback, useEffect, useState } from "react";
// CSS
import "../../styles/dashboardCss/report.css";
// Components
import ReportLeadGenFirstSection from "../../components/ReportLeadGenFirstSection";
import ReportCallsSecondSection from "../../components/ReportCallsSecondSection";
import ReportDealSection from "../../components/ReportDealSection";
// Controller MEthods
import { getGenratedLeads } from "../../controller/fetchApi";
const Reports = () => {
  // Get TokenId
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;
  // Get Genrated Leads Data
  const [getGenratedLeadsData, setGenratedLeadsData] = useState();
  const [leadBy, setLeadBy] = useState();
  const allGenratedLeads = useCallback(async () => {
    try {
      const res = await getGenratedLeads(tokenId, leadBy);
      setGenratedLeadsData(res);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId, leadBy]);
  // Use Effect Function
  useEffect(() => {
    allGenratedLeads();
  }, [allGenratedLeads]);
  return (
    <>
      {/* Section 1 */}
      <div className="account_view_details_Row">
        <ReportLeadGenFirstSection
          getGenratedLeadsData={getGenratedLeadsData}
          setLeadBy={setLeadBy}
        />
      </div>
      {/* Section 2 */}
      <div className="account_view_details_Row">
        <div className="row">
          {/* Left Column */}
          <ReportCallsSecondSection />
          {/* Right Column */}
          <ReportDealSection />
        </div>
      </div>
    </>
  );
};

export default Reports;
