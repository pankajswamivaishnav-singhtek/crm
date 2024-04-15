import React from "react";
// CSS
import "../../styles/dashboardCss/leads.css";
// Components
import FilterSidebar from "../../components/LeadsLeftSection";
import LeadsRightSection from "../../components/LeadsRightSection";
const Leads = () => {
  return (
    <div className="container-fluid dashboard_leads_main_container">
      <div className="row dashboard_filter_sidebar_row">
        <div className="col-xl-3 col-md-3 filter_sidebar_col">
          <div className="filter_sidebar_mainDiv">
            <FilterSidebar />
          </div>
        </div>
        <div className="col-xl-9 col-md-9">
          <LeadsRightSection />
        </div>
      </div>
    </div>
  );
};

export default Leads;
