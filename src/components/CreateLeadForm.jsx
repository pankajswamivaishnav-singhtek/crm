import React, { useState } from "react";
import { useFormik } from "formik";
// React Icon
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";
import { BsBuildingsFill } from "react-icons/bs";
import { FaTreeCity } from "react-icons/fa6";
import { FaLandmarkFlag } from "react-icons/fa6";
import { registerSchema } from "../schema/FormValidation";
// Controller Api Methods
import { createLead } from "../controller/fetchApi";
const CreateLeadForm = ({ leadStatus, leadServices, leadSource }) => {
  // Get TokenId And User Id
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;
  // Toast
  const [showToast, setShowToast] = useState({ success: false, message: "" });
  // Function to hide the toast after 3 seconds
  const hideToast = () => {
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  if (showToast) {
    hideToast();
  }
  // Form Handle & Validations
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      leadOwner: "",
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      secondaryMobileNumber: "",
      leadSource: "",
      leadStatus: "",
      leadService: "",
      annualRevenue: "",
      companyName: "",
      companyEmail: "",
      companyContact: "",
      secondaryContact: "",
      city: "",
      district: "",
      state: "",
      country: "",
      description: "",
    },

    validationSchema: registerSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("-----", values);
      try {
        const registerSuccessFully = await createLead(
          values,
          uid,
          setShowToast,
          tokenId
        );

        if (registerSuccessFully) {
          resetForm();
        }
      } catch (error) {
        console.log("Found Error", error);
      }
    },
  });
  // Function to handle input focus
  const handleFocus = (e) => {
    const { name } = e.target;
    setFieldTouched(name, true);
  };
  
  return (
    <div className="create_lead_form_main_div">
      <form onSubmit={handleSubmit}>
        {/* Create Lead Heading */}
        <div className="create-lead-heading">
          <div>
            <p className="create_lead_section2_company_info">Lead Details</p>
          </div>
          {/* <div className="create-lead-heading-right-part">
            <p className="create-lead-heading-right-para">
              Lead Name :{" "}
              <span className="create-lead-heading-span">Pankaj Swami Vaishnav</span>
            </p>
            <p className="create-lead-heading-right-para">
              Lead Id : <span className="create-lead-heading-span">2024</span>
            </p>
          </div> */}
        </div>
        {/* User Information */}
        <div className="row">
          {/* Lead Owner */}
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="leadOwner">
              Lead Owner <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="leadOwner"
              className="form-control create_lead_form_input"
              value={values.leadOwner}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="leadOwner"
              placeholder="Enter Loead Owner Name"
            />
            {touched.leadOwner && errors.leadOwner && (
              <small className="errorMessage">{errors.leadOwner}</small>
            )}
            <MdAdminPanelSettings className="create_lead_input_icon" />
          </div>
          {/* First Name */}
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="firstName">
              First Name <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              className="form-control create_lead_form_input"
              value={values.firstName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="firstName"
              placeholder="Enter first name"
            />
            {touched.firstName && errors.firstName && (
              <small className="errorMessage">{errors.firstName}</small>
            )}
            <FaUserTie className="create_lead_input_icon" />
          </div>
          {/* Last Name */}
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="lastName">
              Last Name <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="form-control create_lead_form_input"
              value={values.lastName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="lastName"
              placeholder="Enter last name"
            />
            {touched.lastName && errors.lastName && (
              <small className="errorMessage">{errors.lastName}</small>
            )}
            <FaUserTie className="create_lead_input_icon" />
          </div>
          {/* Email */}
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="email">
              Email <span className="required_sign">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="form-control create_lead_form_input"
              value={values.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="email"
              placeholder="Enter your email "
            />
            {touched.email && errors.email && (
              <small className="errorMessage">{errors.email}</small>
            )}
            <MdEmail className="create_lead_input_icon" />
          </div>
          {/* Phone Number */}
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="mobileNumber">
              Phone Number <span className="required_sign">*</span>
            </label>
            <input
              type="tel"
              id="mobileNumber"
              maxlength="15"
              minlength="10"
              className="form-control create_lead_form_input"
              value={values.mobileNumber}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="mobileNumber"
              placeholder="Enter Mobile Number"
            />
            {touched.mobileNumber && errors.mobileNumber && (
              <small className="errorMessage">{errors.mobileNumber}</small>
            )}
            <FaPhone className="create_lead_input_icon" />
          </div>
          {/* Secondary Phone Number */}
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="secondaryMobileNumber">
              Secondary Phone Number
            </label>
            <input
              type="tel"
              id="secondaryMobileNumber"
              className="form-control create_lead_form_input"
              value={values.secondaryMobileNumber}
              onChange={handleChange}
              maxlength="15"
              minlength="10"
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="secondaryMobileNumber"
              placeholder="Other Mobile Number"
            />
            {touched.secondaryMobileNumber && errors.secondaryMobileNumber && (
              <small className="errorMessage">
                {errors.secondaryMobileNumber}
              </small>
            )}
            <FaPhone className="create_lead_input_icon" />
          </div>
          {/* Lead Source */}
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="leadSource">
              Lead Source <span className="required_sign">*</span>
            </label>
            <select
              id="leadSource"
              className="form-control"
              value={values.leadSource}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="leadSource"
            >
              <option value="">
                {/* {touched.leadSource && errors.leadSource ? (
                  <span style={{ color: "red" }}>{errors.leadSource}</span>
                ) : (
                  ""
                )} */}
                Select Lead Source
              </option>
              {leadSource && leadSource?.length > 0
                ? leadSource.map((source) => (
                    <option key={source.id} value={source.value}>
                      {source.leadSource}
                    </option>
                  ))
                : ""}
            </select>
            {touched.leadSource && errors.leadSource && (
              <small className="errorMessage">{errors.leadSource}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          {/* Lead Status */}
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="leadStatus">
              Lead Status <span className="required_sign">*</span>
            </label>
            <select
              id="leadStatus"
              className="form-control"
              value={values.leadStatus}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="leadStatus"
            >
              <option value="">
                {/* {touched.leadStatus && errors.leadStatus ? (
                  <p className="text-danger">{errors.leadStatus}</p>
                ) : (
                  "Select Lead Status"
                )} */}
                Select Lead Status
              </option>

              {/* <option value="lead">Select Lead Status</option> */}
              {leadStatus && leadStatus?.length > 0
                ? leadStatus?.map((lead) => (
                    <option key={lead.id} value={lead.value}>
                      {lead.leadSource}
                    </option>
                  ))
                : ""}
              {/* <option value="contacted">Contacted</option>
              <option value="deal">Deal</option> */}
            </select>
            {touched.leadStatus && errors.leadStatus && (
              <small className="errorMessage">{errors.leadStatus}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          {/* Lead Service */}
          <div className="form-group createLeadInput col-xl-4 costum-select">
            <label htmlFor="leadStatus">
              Lead Service <span className="required_sign">*</span>
            </label>

            <select
              id="leadService"
              className="form-control"
              value={values.leadService}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="leadService"
            >
              <option value="">
                {/* {touched.leadStatus && errors.leadStatus ? (
                  <p className="text-danger">{errors.leadStatus}</p>
                ) : (
                  "Select Lead Status"
                )} */}
                Select Lead Service
              </option>

              {/* <option value="lead">Select Lead Status</option> */}
              {leadServices && leadServices?.length > 0
                ? leadServices?.map((services) => (
                    <option key={services.id} value={services.leadSoruce}>
                      {services.leadSoruce}
                    </option>
                  ))
                : ""}
            </select>
            {touched.leadService && errors.leadService && (
              <small className="errorMessage">{errors.leadService}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
        </div>
        {/* Company Information */}
        <div className="row">
          <p className="create_lead_section2_company_info">Company Details</p>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="annualRevenue">Annual Revenue</label>
            <input
              type="tel"
              id="annualRevenue"
              maxLength={12}
              className="form-control create_lead_form_input"
              value={values.annualRevenue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="annualRevenue"
              placeholder="Enter Annual Revenue"
            />
            {touched.annualRevenue && errors.annualRevenue && (
              <small className="errorMessage">{errors.annualRevenue}</small>
            )}
            <BsCurrencyRupee className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              className="form-control create_lead_form_input"
              value={values.companyName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="companyName"
              placeholder="Enter company name"
            />
            {touched.companyName && errors.companyName && (
              <small className="errorMessage">{errors.companyName}</small>
            )}
            <BsBuildingsFill className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="companyEmail">Company Email</label>
            <input
              type="email"
              id="companyEmail"
              className="form-control create_lead_form_input"
              value={values.companyEmail}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="companyEmail"
              placeholder="Enter comapny email"
            />
            {touched.companyEmail && errors.companyEmail && (
              <small className="errorMessage">{errors.companyEmail}</small>
            )}
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="companyContact">Company Contact</label>
            <input
              type="tel"
              id="companyContact"
              className="form-control create_lead_form_input"
              value={values.companyContact}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="companyContact"
              placeholder="Enter company contact"
            />
            {touched.companyContact && errors.companyContact && (
              <small className="errorMessage">{errors.companyContact}</small>
            )}
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="secondaryContact">Secondary Contact </label>
            <input
              type="tel"
              id="secondaryContact"
              className="form-control create_lead_form_input"
              value={values.secondaryContact}
              onChange={handleChange}
              maxLength={15}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="secondaryContact"
              placeholder="Enter Secondary Contact"
            />
            {touched.secondaryContact && errors.secondaryContact && (
              <small className="errorMessage">{errors.secondaryContact}</small>
            )}
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="city">city</label>
            <input
              type="text"
              id="city"
              className="form-control create_lead_form_input"
              value={values.city}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="city"
              placeholder="Enter city"
            />
            {touched.city && errors.city && (
              <small className="errorMessage">{errors.city}</small>
            )}
            <FaTreeCity className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="district">District</label>
            <input
              type="text"
              id="district"
              className="form-control create_lead_form_input"
              value={values.district}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="district"
              placeholder="Enter District"
            />
            {touched.district && errors.district && (
              <small className="errorMessage">{errors.district}</small>
            )}
            <FaTreeCity className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              className="form-control create_lead_form_input"
              value={values.state}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="state"
              placeholder="Enter state"
            />
            {touched.state && errors.state && (
              <small className="errorMessage">{errors.state}</small>
            )}
            <FaTreeCity className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              className="form-control create_lead_form_input"
              value={values.country}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="country"
              placeholder="Enter country name"
            />
            {touched.country && errors.country && (
              <small className="errorMessage">{errors.country}</small>
            )}
            <FaLandmarkFlag className="create_lead_input_icon" />
          </div>
        </div>
        {/* Description */}
        <div className="row">
          <p className="create_lead_section2_description">Description</p>
          <div className="form-group ">
            <label
              htmlFor="description"
              className="create_lead_section2_description_label"
            >
              Description
            </label>
            <textarea
              id="description"
              className="form-control create_lead_form_input"
              value={values.description}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="description"
              rows="3"
              placeholder="Enter description"
            ></textarea>
          </div>
          {touched.description && errors.description && (
            <small className="errorMessage">{errors.description}</small>
          )}
        </div>
        {/* Submit Button */}
        <div className="text-center">
          <button className="create_lead_form_submitBtn" type="submit">
            Submit
          </button>
        </div>
      </form>
      {/* Toast */}
      {showToast.message && (
        <div className="toast-container position-fixed bottom-0 end-0 p-3 ">
          <div
            className="toast show create_lead_toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header create_lead_toast_header">
              <strong className="me-auto">Form Submitted Successfully</strong>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowToast({ success: false, message: "" })}
              />
            </div>
            <div className="toast-body">{showToast.message}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateLeadForm;
