import React, { useState, useEffect } from "react";
import leadIdContext from "../LeadIdContext";
// CSS
import "../../styles/dashboardCss/leads.css";
// Components
import FilterSidebar from "../../components/LeadsLeftSection";
import LeadsRightSection from "../../components/LeadsRightSection";

const initialFilterState = {
  cityName: "",
  companyName: "",
  date: "",
  leadOwnerName: "",
  verified: "",
  unverified: "",
  rejected: "",
};

// Function to load filter state from localStorage
const loadFilterState = () => {
  const savedFilter = localStorage.getItem("filterData");
  return savedFilter ? JSON.parse(savedFilter) : initialFilterState;
};

const Leads = () => {
  // const [filterData, setFilterData] = useState({
  //   unverified: true,
  // });

  // Function to load filter state from localStorage
  const [filterData, setFilterData] = useState(loadFilterState);

  // Save filter state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("filterData", JSON.stringify(filterData));
  }, [filterData]);
  const [leadCostumerId, setLeadCostumerId] = useState([]);
  console.log("FilerData", filterData);
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
