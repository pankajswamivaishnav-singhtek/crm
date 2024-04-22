import React from "react";
// React Icon
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
      {/* <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearchChange}
        />
        <span className="search-icon">
          <IoSearchOutline />
        </span>
      </div> */}
      {/* System Defined Filter */}
      <div className="filter-container">
        <h4>System Defined Filter</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="touchedFilter"
            // checked={filters.leadName}
            // onChange={() => handleCheckboxChange("leadName")}
          />
          <label className="form-check-label" htmlFor="touchedFilter">
            Touched Records
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="untouchedFilter"
            // checked={filters.company}
            // onChange={() => handleCheckboxChange("company")}
          />
          <label className="form-check-label" htmlFor="untouchedFilter">
            Untouched Records
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="recordActionFilter"
            // checked={filters.phoneNumber}
            // onChange={() => handleCheckboxChange("phoneNumber")}
          />
          <label className="form-check-label" htmlFor="recordActionFilter">
            Record Action
          </label>
        </div>
      </div>
      {/* Filter By Fields */}
      <div className="filter-container">
        <h4>Filter By Fields</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="cityFilter"
            // checked={filters.leadName}
            // onChange={() => handleCheckboxChange("leadName")}
          />
          <label className="form-check-label" htmlFor="cityFilter">
            City
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
            id="createdAtFilter"
            // checked={filters.phoneNumber}
            // onChange={() => handleCheckboxChange("phoneNumber")}
          />
          <label className="form-check-label" htmlFor="createdAtFilter">
            Created At
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="leadOwnerFilter"
            // checked={filters.email}
            // onChange={() => handleCheckboxChange("email")}
          />
          <label className="form-check-label" htmlFor="leadOwnerFilter">
            Lead Owner
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
