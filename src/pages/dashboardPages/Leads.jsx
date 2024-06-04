import React, { useState } from "react";
import leadIdContext from "../LeadIdContext";
// CSS
import "../../styles/dashboardCss/leads.css";
// Components
import FilterSidebar from "../../components/LeadsLeftSection";
import LeadsRightSection from "../../components/LeadsRightSection";

const Leads = () => {
  const [filterData, setFilterData] = useState();
  const [leadCostumerId, setLeadCostumerId] = useState([]);


  
  return (
    <div className="container-fluid dashboard_leads_main_container">
      <div className="row dashboard_filter_sidebar_row">
        {/* In Leads Page Left Filter Side Bar Section */}
        <div className="col-xl-3 col-md-3 filter_sidebar_col">
          <div className="filter_sidebar_mainDiv">
            <FilterSidebar setFilterData={setFilterData} />
          </div>
        </div>
        {/* Right Section Who's Section Have Tables Form Data */}
        <div className="col-xl-9 col-md-9">
          <leadIdContext.Provider value={{ leadCostumerId, setLeadCostumerId }}>
            <LeadsRightSection
              leadCostumerId={leadCostumerId}
              filterData={filterData}
            />
          </leadIdContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Leads;
