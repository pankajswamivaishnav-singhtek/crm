import React from "react";
// React Icon
import { IoSearchOutline } from "react-icons/io5";

const FilterSidebar = ({
  filters,
  handleCheckboxChange,
  handleSearchChange,
}) => {
  return (
    <div className="filter-sidebar">
      <div className="filter-sidebar-header">
        <h3>Filter Leads By</h3>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearchChange}
        />
        <span className="search-icon">
          <IoSearchOutline />
        </span>
      </div>
      <div className="filter-container">
        <h4>Filter By Fields</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="leadNameFilter"
            // checked={filters.leadName}
            // onChange={() => handleCheckboxChange("leadName")}
          />
          <label className="form-check-label" htmlFor="leadNameFilter">
            Lead Name
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="companyFilter"
            // checked={filters.company}
            // onChange={() => handleCheckboxChange("company")}
          />
          <label className="form-check-label" htmlFor="companyFilter">
            Company
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="phoneNumberFilter"
            // checked={filters.phoneNumber}
            // onChange={() => handleCheckboxChange("phoneNumber")}
          />
          <label className="form-check-label" htmlFor="phoneNumberFilter">
            Phone Number
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="emailFilter"
            // checked={filters.email}
            // onChange={() => handleCheckboxChange("email")}
          />
          <label className="form-check-label" htmlFor="emailFilter">
            Email
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="leadSourceFilter"
            // checked={filters.leadSource}
            // onChange={() => handleCheckboxChange("leadSource")}
          />
          <label className="form-check-label" htmlFor="leadSourceFilter">
            Lead Source
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
