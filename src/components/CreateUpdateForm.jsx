import React, { useState, useEffect } from "react";
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
import { updateRegisterSchema } from "../schema/FormValidation";
// Controller Api Methods
import { updateSingleLead } from "../controller/fetchApi";
// Import Redux useSelector
import { useSelector } from "react-redux";
// Import Toast
import Toast from "./Toast";
// import Context
const CreateUpdateForm = ({ leadCostumerId, defaultValue, getLeadsData }) => {
  // Get Lead Dropdown Data from redux store
  const { leadStatus, leadServices, leadSources } = useSelector(
    (state) => state.dropDown
  );
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;
  // Toast
  const [showToast, setShowToast] = useState({ success: false, message: "" });
  
  // Form Handle & Validations
  const formik = useFormik({
    initialValues: {
      leadOwner: "",
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      secondaryMobileNumber: "",
      leadSource: "",
      leadStatus: "",
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

    validationSchema: updateRegisterSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("-----", values);
      try {
        await updateSingleLead(values, leadCostumerId, setShowToast, tokenId);
        if (updateSingleLead) {
          getLeadsData();
        }
      } catch (error) {
        console.log("Found Error", error);
      }
    },
  });
  useEffect(() => {
    if (defaultValue) {
      formik.setValues({
        ...formik.values,
        leadOwner: defaultValue.leadOwner || "",
        firstName: defaultValue.firstName || "",
        lastName: defaultValue.lastName || "",
        email: defaultValue.email || "",
        mobileNumber: defaultValue.mobile || "",
        secondaryMobileNumber: defaultValue.secondaryMobile || "",
        leadSource: defaultValue.leadSource || "",
        leadStatus: defaultValue.leadStatus || "",
        annualRevenue: defaultValue.annualRevenue || "",
        companyName: defaultValue.companyName || "",
        companyEmail: defaultValue.companyEmail || "",
        companyContact: defaultValue.companyContact || "",
        secondaryContact: defaultValue.secondaryContact || "",
        city: defaultValue.city || "",
        district: defaultValue.district || "",
        state: defaultValue.state || "",
        country: defaultValue.country || "",
        description: defaultValue.description || "",
        // set other fields similarly
      });
    }
  }, [defaultValue]);
  return (
    <div className="create_lead_form_main_div">
      <form onSubmit={formik.handleSubmit}>
        {/* User Information */}
        <div className="row">
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="leadOwner">Lead Owner</label>
            <input
              type="text"
              id="leadOwner"
              className="form-control create_lead_form_input"
              value={formik.values.leadOwner}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="leadOwner"
              placeholder={
                formik.touched.leadOwner && formik.errors.leadOwner
                  ? formik.errors.leadOwner
                  : null
              }
            />
            <MdAdminPanelSettings className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="form-control create_lead_form_input"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="firstName"
              placeholder={
                formik.touched.firstName && formik.errors.firstName
                  ? formik.errors.firstName
                  : null
              }
            />
            <FaUserTie className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="form-control create_lead_form_input"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="lastName"
              placeholder={
                formik.touched.lastName && formik.errors.lastName
                  ? formik.errors.lastName
                  : null
              }
            />
            <FaUserTie className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control create_lead_form_input"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
              placeholder={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
            />
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="mobileNumber">Phone Number</label>
            <input
              type="tel"
              id="mobileNumber"
              className="form-control create_lead_form_input"
              value={formik.values.mobileNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="mobileNumber"
              placeholder={
                formik.touched.mobileNumber && formik.errors.mobileNumber
                  ? formik.errors.mobileNumber
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="secondaryMobileNumber">
              Secondary Phone Number
            </label>
            <input
              type="tel"
              id="secondaryMobileNumber"
              className="form-control create_lead_form_input"
              value={formik.values.secondaryMobileNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="secondaryMobileNumber"
              placeholder={
                formik.touched.secondaryMobileNumber &&
                formik.errors.secondaryMobileNumber
                  ? formik.errors.secondaryMobileNumber
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          {/* Lead Sources Drop-down */}
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="leadSource">Lead Source</label>
            <select
              id="leadSource"
              className="form-control"
              value={formik.values.leadSource}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="leadSource"
            >
              <option value="">
                {formik.touched.leadSource && formik.errors.leadSource ? (
                  <p className="text-danger">{formik.errors.leadSource}</p>
                ) : (
                  "Select Lead Source"
                )}
              </option>
              {leadSources && leadSources?.length > 0
                ? leadSources?.map((source) => (
                    <option key={source?.id} value={source?.value}>
                      {source?.leadSource}
                    </option>
                  ))
                : ""}
            </select>
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          {/* Lead Status dropDown */}
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="leadStatus">Lead Status</label>
            <select
              id="leadStatus"
              className="form-control"
              value={formik.values.leadStatus}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="leadStatus"
            >
              <option value="">
                {formik.touched.leadStatus && formik.errors.leadStatus ? (
                  <p className="text-danger">{formik.errors.leadStatus}</p>
                ) : (
                  "Select Lead Status"
                )}
              </option>

              {leadStatus && leadStatus?.length > 0
                ? leadStatus?.map((lead) => (
                    <option key={lead.id} value={lead.value}>
                      {lead.leadSource}
                    </option>
                  ))
                : ""}
            </select>
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
              value={formik.values.leadService}
              onChange={formik.handleChange}
              onFocus={formik.handleFocus}
              onBlur={formik.handleBlur}
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
            {formik.touched.leadService && formik.errors.leadService && (
              <small className="errorMessage">
                {formik.errors.leadService}
              </small>
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
              className="form-control create_lead_form_input"
              value={formik.values.annualRevenue}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="annualRevenue"
              placeholder={
                formik.touched.annualRevenue && formik.errors.annualRevenue
                  ? formik.errors.annualRevenue
                  : null
              }
            />
            <BsCurrencyRupee className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              className="form-control create_lead_form_input"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="companyName"
              placeholder={
                formik.touched.companyName && formik.errors.companyName
                  ? formik.errors.companyName
                  : null
              }
            />
            <BsBuildingsFill className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="companyEmail">Company Email</label>
            <input
              type="email"
              id="companyEmail"
              className="form-control create_lead_form_input"
              value={formik.values.companyEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="companyEmail"
              placeholder={
                formik.touched.companyEmail && formik.errors.companyEmail
                  ? formik.errors.companyEmail
                  : null
              }
            />
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="companyContact">Company Contact</label>
            <input
              type="tel"
              id="companyContact"
              className="form-control create_lead_form_input"
              value={formik.values.companyContact}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="companyContact"
              placeholder={
                formik.touched.companyContact && formik.errors.companyContact
                  ? formik.errors.companyContact
                  : null
              }
            />
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="secondaryContact">Secondary Contact</label>
            <input
              type="tel"
              id="secondaryContact"
              className="form-control create_lead_form_input"
              value={formik.values.secondaryContact}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="secondaryContact"
              placeholder={
                formik.touched.secondaryContact &&
                formik.errors.secondaryContact
                  ? formik.errors.secondaryContact
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="city">city</label>
            <input
              type="text"
              id="city"
              className="form-control create_lead_form_input"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="city"
              placeholder={
                formik.touched.city && formik.errors.city
                  ? formik.errors.city
                  : null
              }
            />
            <FaTreeCity className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="district">District</label>
            <input
              type="text"
              id="district"
              className="form-control create_lead_form_input"
              value={formik.values.district}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="district"
              placeholder={
                formik.touched.district && formik.errors.district
                  ? formik.errors.district
                  : null
              }
            />
            <FaTreeCity className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              className="form-control create_lead_form_input"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="state"
              placeholder={
                formik.touched.state && formik.errors.state
                  ? formik.errors.state
                  : null
              }
            />
            <FaTreeCity className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              className="form-control create_lead_form_input"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="country"
              placeholder={
                formik.touched.country && formik.errors.country
                  ? formik.errors.country
                  : null
              }
            />
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
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="description"
              rows="3"
              placeholder={
                formik.touched.description && formik.errors.description
                  ? formik.errors.description
                  : null
              }
            ></textarea>
          </div>
        </div>
        {/* Submit Button */}
        <div className="text-center">
          <button className="create_lead_form_submitBtn" type="submit">
            Update
          </button>
        </div>
      </form>
      <Toast showToast={showToast} setShowToast={setShowToast} />
    </div>
  );
};

export default CreateUpdateForm;
