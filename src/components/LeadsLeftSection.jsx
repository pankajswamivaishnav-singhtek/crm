import React from "react";
import { useFormik } from "formik";
// CSS
import "../styles/component_css/leadsLeftSection.css";
// React Icon
const FilterSidebar = ({ setFilterData }) => {
  // Get By Default Data From Local Storage
  const savedFilter = JSON.parse(localStorage.getItem("filterData") || "{}");
  console.log("jshqwh", savedFilter);
  // Form Handle & Validations
  const { values, handleBlur, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        cityName: "",
        companyName: "",
        date: "",
        leadOwnerName: "",
        verified: savedFilter.verified || false,
        unverified: savedFilter.unverified || false,
      },
      onSubmit: async (values, { resetForm }) => {
        setFilterData(values);
        // resetForm();
      },
    });

  // Vise Versa Filters
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    // If "verified" checkbox is checked, uncheck "unverified" checkbox
    if (name === "verified" && checked) {
      setFieldValue("verified", true);
      setFieldValue("unverified", false);
    }
    // If "unverified" checkbox is checked, uncheck "verified" checkbox
    else if (name === "unverified" && checked) {
      setFieldValue("unverified", true);
      setFieldValue("verified", false);
    }
  };

  return (
    <div className="filter-sidebar">
      <form onSubmit={handleSubmit}>
        <div className="filter-sidebar-header">
          <h3>Filter Leads By</h3>
        </div>
        {/* System Defined Filter */}
        <div className="filter-container">
          <h4>System Defined Filter</h4>
          <div className="form-check">
            <input
              name="verified"
              type="radio"
              className="form-check-input lead_filter_radio_btn"
              id="touchedFilter"
              value={values.verified}
              // onChange={handleChange}
              onChange={handleCheckboxChange}
              onBlur={handleBlur}
              checked={true ? values.verified : "verified" || ""}
            />
            <label className="form-check-label" htmlFor="touchedFilter">
              Verified
            </label>
          </div>
          <div className="form-check">
            <input
              name="unverified"
              type="radio"
              className="form-check-input lead_filter_radio_btn"
              id="untouchedFilter"
              value={values.unverified}
              onChange={handleCheckboxChange}
              onBlur={handleBlur}
              checked={true ? values.unverified : "unverified" || ""}
            />
            <label className="form-check-label" htmlFor="untouchedFilter">
              Unverified
            </label>
          </div>
        </div>
        {/* Filter By Fields */}
        <div className="filter-container">
          <h4>Filter By Fields</h4>
          <div>
            <label htmlFor="cityName"></label>
            <input
              type="text"
              name="cityName"
              placeholder="Enter City"
              className="filters leads_filter_input_field"
              value={values.cityName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor="companyName"></label>
            <input
              type="text"
              name="companyName"
              placeholder="Company name"
              className="filters leads_filter_input_field"
              value={values.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor="date"></label>
            <input
              type="date"
              name="date"
              placeholder="Select date"
              className="filters leads_filter_input_field"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor="leadOwner"></label>
            <input
              type="text"
              name="leadOwnerName"
              placeholder="Enter Lead Owner"
              className="filters leads_filter_input_field"
              value={values.leadOwnerName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        {/* Btns */}
        <div>
          <button className="btn btn-primary filterBtn " type="submit">
            Apply Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterSidebar;
