import React from "react";
import { useFormik } from "formik";
// CSS
import "../styles/component_css/leadsLeftSection.css";
// React Icon
const FilterSidebar = ({ setFilterData }) => {
  // Form Handle & Validations
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      cityName: "",
      companyName: "",
      date: "",
      leadOwnerName: "",
      verified: false,
      unverified: false,
    },
    onSubmit: async (values, { resetForm }) => {
      setFilterData(values);
      // resetForm();
    },
  });

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
              type="checkbox"
              className="form-check-input"
              id="touchedFilter"
              value={values.verified}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label className="form-check-label" htmlFor="touchedFilter">
              Verified
            </label>
          </div>
          <div className="form-check">
            <input
              name="unverified"
              type="checkbox"
              className="form-check-input"
              id="untouchedFilter"
              value={values.unverified}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label className="form-check-label" htmlFor="untouchedFilter">
              Unverified
            </label>
          </div>
        </div>
        {/* <div className="filter-container">
          <h4>System Defined Filter</h4>
          <div className="form-check">
            <input
              name="status"
              type="radio"
              className="form-check-input"
              id="touchedFilter"
              value="verified"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.status === "verified"}
            />
            <label className="form-check-label" htmlFor="touchedFilter">
              Verified
            </label>
          </div>
          <div className="form-check">
            <input
              name="status"
              type="radio"
              className="form-check-input"
              id="untouchedFilter"
              value="unverified"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.status === "unverified"}
            />
            <label className="form-check-label" htmlFor="untouchedFilter">
              Unverified
            </label>
          </div>
        </div> */}
        {/* Filter By Fields */}
        <div className="filter-container">
          <h4>Filter By Fields</h4>
          <div>
            <label htmlFor="cityName"></label>
            <input
              type="text"
              name="cityName"
              placeholder="Enter City"
              className="filters"
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
              className="filters"
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
              className="filters"
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
              className="filters"
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
