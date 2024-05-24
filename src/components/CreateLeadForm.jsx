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
const CreateLeadForm = () => {
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
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
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
  return (
    <div className="create_lead_form_main_div">
      <form onSubmit={handleSubmit}>
        {/* User Information */}
        <div className="row">
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
              onBlur={handleBlur}
              name="leadOwner"
              placeholder={
                touched.leadOwner && errors.leadOwner ? errors.leadOwner : null
              }
            />
            <MdAdminPanelSettings className="create_lead_input_icon" />
          </div>
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
              onBlur={handleBlur}
              name="firstName"
              placeholder={
                touched.firstName && errors.firstName ? errors.firstName : null
              }
            />
            <FaUserTie className="create_lead_input_icon" />
          </div>
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
              onBlur={handleBlur}
              name="lastName"
              placeholder={
                touched.lastName && errors.lastName ? errors.lastName : null
              }
            />
            <FaUserTie className="create_lead_input_icon" />
          </div>
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
              onBlur={handleBlur}
              name="email"
              placeholder={touched.email && errors.email ? errors.email : null}
            />
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="mobileNumber">
              Phone Number <span className="required_sign">*</span>
            </label>
            <input
              type="tel"
              id="mobileNumber"
              className="form-control create_lead_form_input"
              value={values.mobileNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              name="mobileNumber"
              placeholder={
                touched.mobileNumber && errors.mobileNumber
                  ? errors.mobileNumber
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
              value={values.secondaryMobileNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              name="secondaryMobileNumber"
              placeholder={
                touched.secondaryMobileNumber && errors.secondaryMobileNumber
                  ? errors.secondaryMobileNumber
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="leadSource">
              Lead Source <span className="required_sign">*</span>
            </label>
            <select
              id="leadSource"
              className="form-control"
              value={values.leadSource}
              onChange={handleChange}
              onBlur={handleBlur}
              name="leadSource"
            >
              <option value="">
                {touched.leadSource && errors.leadSource ? (
                  <span style={{ color: "red" }}>{errors.leadSource}</span>
                ) : (
                  "Select Lead Source"
                )}
              </option>
              <option value="web-download">Web Download</option>
              <option value="web-search">Web Search</option>
              <option value="advertisement">Advertisement</option>
              <option value="employee-referral">Employee Referral</option>
              <option value="external-source">External Source</option>
              <option value="others">Others</option>
            </select>
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="leadStatus">
              Lead Status <span className="required_sign">*</span>
            </label>
            <select
              id="leadStatus"
              className="form-control"
              value={values.leadStatus}
              onChange={handleChange}
              onBlur={handleBlur}
              name="leadStatus"
            >
              <option value="">
                {touched.leadStatus && errors.leadStatus ? (
                  <p className="text-danger">{errors.leadStatus}</p>
                ) : (
                  "Select Lead Status"
                )}
              </option>

              {/* <option value="lead">Select Lead Status</option> */}
              <option value="lead">Lead</option>
              <option value="contacted">Contacted</option>
              <option value="deal">Deal</option>
            </select>
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
        </div>
        {/* Company Information */}
        <div className="row">
          <p className="create_lead_section2_company_info">Company Details</p>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="annualRevenue">
              Annual Revenue <span className="required_sign">*</span>
            </label>
            <input
              type="tel"
              id="annualRevenue"
              className="form-control create_lead_form_input"
              value={values.annualRevenue}
              onChange={handleChange}
              onBlur={handleBlur}
              name="annualRevenue"
              placeholder={
                touched.annualRevenue && errors.annualRevenue
                  ? errors.annualRevenue
                  : null
              }
            />
            <BsCurrencyRupee className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="companyName">
              Company Name <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              className="form-control create_lead_form_input"
              value={values.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="companyName"
              placeholder={
                touched.companyName && errors.companyName
                  ? errors.companyName
                  : null
              }
            />
            <BsBuildingsFill className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="companyEmail">
              Company Email <span className="required_sign">*</span>
            </label>
            <input
              type="email"
              id="companyEmail"
              className="form-control create_lead_form_input"
              value={values.companyEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              name="companyEmail"
              placeholder={
                touched.companyEmail && errors.companyEmail
                  ? errors.companyEmail
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
              value={values.companyContact}
              onChange={handleChange}
              onBlur={handleBlur}
              name="companyContact"
              placeholder={
                touched.companyContact && errors.companyContact
                  ? errors.companyContact
                  : null
              }
            />
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="secondaryContact">Secondary Contact </label>
            <input
              type="tel"
              id="secondaryContact"
              className="form-control create_lead_form_input"
              value={values.secondaryContact}
              onChange={handleChange}
              onBlur={handleBlur}
              name="secondaryContact"
              placeholder={
                touched.secondaryContact && errors.secondaryContact
                  ? errors.secondaryContact
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="city">
              city <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="city"
              className="form-control create_lead_form_input"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              name="city"
              placeholder={touched.city && errors.city ? errors.city : null}
            />
            <FaTreeCity className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="district">
              District <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="district"
              className="form-control create_lead_form_input"
              value={values.district}
              onChange={handleChange}
              onBlur={handleBlur}
              name="district"
              placeholder={
                touched.district && errors.district ? errors.district : null
              }
            />
            <FaTreeCity className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="state">
              State <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="state"
              className="form-control create_lead_form_input"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              name="state"
              placeholder={touched.state && errors.state ? errors.state : null}
            />
            <FaTreeCity className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="country">
              Country <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="country"
              className="form-control create_lead_form_input"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              name="country"
              placeholder={
                touched.country && errors.country ? errors.country : null
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
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              name="description"
              rows="3"
              placeholder={
                touched.description && errors.description
                  ? errors.description
                  : null
              }
            ></textarea>
          </div>
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
