import React from "react";
// CSS
import "../../styles/dashboardCss/report.css";
// Components
import ReportLeadGenFirstSection from "../../components/ReportLeadGenFirstSection";
import ReportCallsSecondSection from "../../components/ReportCallsSecondSection";
import ReportDealSection from "../../components/ReportDealSection";
const Reports = () => {
  return (
    <>
      {/* Section 1 */}
      <div className="account_view_details_Row">
        <ReportLeadGenFirstSection />
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
