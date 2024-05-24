import React, { useCallback, useEffect, useState } from "react";
// CSS
import "../../styles/dashboardCss/report.css";
// Components
import ReportLeadGenFirstSection from "../../components/ReportLeadGenFirstSection";
import ReportCallsSecondSection from "../../components/ReportCallsSecondSection";
import ReportDealSection from "../../components/ReportDealSection";
// Controller MEthods
import {
  getGenratedLeads,
  getDealsDone,
  getCallsDone,
} from "../../controller/fetchApi";
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

  // Get Deals Done Data
  const [getDealsDoneData, setDealsDoneData] = useState();
  const [dealBy, setDealBy] = useState();
  const allDealsDone = useCallback(async () => {
    try {
      const res = await getDealsDone(tokenId, dealBy);
      setDealsDoneData(res);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId, dealBy]);

  // Get Calls Done Data
  const [getCallsDoneData, setCallsDoneData] = useState();
  const [callBy, setCallBy] = useState();
  const allCallsDone = useCallback(async () => {
    try {
      const res = await getCallsDone(tokenId, callBy);
      setCallsDoneData(res);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId, callBy]);

  // Use Effect Function
  useEffect(() => {
    allGenratedLeads();
    allDealsDone();
    allCallsDone();
  }, [allGenratedLeads, allDealsDone, allCallsDone]);
  return (
    <>
      {/* Section 1  Where Present Genrated Lead Graph */}
      <div className="account_view_details_Row">
        <ReportLeadGenFirstSection
          getGenratedLeadsData={getGenratedLeadsData}
          setLeadBy={setLeadBy}
        />
      </div>
      {/* Section 2 */}
      <div className="account_view_details_Row">
        <div className="row">
          {/* Left Column Call Chart*/}
          <ReportCallsSecondSection
            getCallsDoneData={getCallsDoneData}
            setCallBy={setCallBy}
          />
          {/* Right Column Deals Chart */}
          <ReportDealSection
            getDealsDoneData={getDealsDoneData}
            setDealBy={setDealBy}
          />
        </div>
      </div>
    </>
  );
};

export default Reports;
