import React, { useState } from "react";
import { useFormik } from "formik";
// React Icon
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
// Schema
import { DealFormSchema } from "../../schema/FormValidation";
// Controller Methods & Api
import { createDeal } from "../../controller/fetchApi";
const CreateDeal = () => {
  // Toast
  const [showToast, setShowToast] = useState(false);
  // Function to hide the toast after 3 seconds
  const hideToast = () => {
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  if (showToast) {
    hideToast();
  }
  // Get TokenId and Uid
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;
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
      dealOwner: "",
      dealName: "",
      amount: "",
      closingDate: "",
      accountName: "",
      stage: "",
      type: "",
      nextStep: "",
      expectedRevenue: "",
      leadSource: "",
      campaignSource: "",
      contactName: "",
    },

    validationSchema: DealFormSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await createDeal(uid, values, setShowToast, tokenId);
        if (createDeal) {
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
    <div className="create_lead_form_main_div dashboard_create_lead_main_container">
      <form onSubmit={handleSubmit}>
        {/* User Account Information */}
        <div className="row">
          <p className="create_lead_section2_company_info ">Deal Information</p>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="dealOwner">
              Deal Owner <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="dealOwner"
              className="form-control create_lead_form_input"
              value={values.dealOwner}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="dealOwner"
              placeholder="Enter owner name"
            />
            {touched.dealOwner && errors.dealOwner && (
              <small className="errorMessage">{errors.dealOwner}</small>
            )}
            <MdAdminPanelSettings className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="dealName">
              Deal Name <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="dealName"
              className="form-control create_lead_form_input"
              value={values.dealName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="dealName"
              placeholder="Enter deal name"
            />
            {touched.dealName && errors.dealName && (
              <small className="errorMessage">{errors.dealName}</small>
            )}
            <FaUserTie className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="amount">
              Amount <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="amount"
              className="form-control create_lead_form_input"
              value={values.amount}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="amount"
              placeholder="Enter amount"
            />
            {touched.amount && errors.amount && (
              <small className="errorMessage">{errors.amount}</small>
            )}
            <FaUserTie className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="closingDate">
              Closing Date <span className="required_sign">*</span>
            </label>
            <input
              type="date"
              id="closingDate"
              className="form-control deal_form_input"
              value={values.closingDate}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="closingDate"
              placeholder="Enter closing date"
            />
            {touched.closingDate && errors.closingDate && (
              <small className="errorMessage">{errors.closingDate}</small>
            )}
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountName">
              Account Name <span className="required_sign">*</span>
            </label>
            <input
              type="tel"
              id="accountName"
              className="form-control create_lead_form_input"
              value={values.accountName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="accountName"
              placeholder="Enter account name"
            />
            {touched.accountName && errors.accountName && (
              <small className="errorMessage">{errors.accountName}</small>
            )}
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="stage">
              Stage <span className="required_sign">*</span>
            </label>
            <select
              id="stage"
              className="form-control "
              value={values.stage}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="stage"
            >
              <option value="">
                {/* {touched.stage && errors.stage ? (
                  <p className="text-danger">{errors.stage}</p>
                ) : (
                  "Qualification"
                )} */}
                Qualification
              </option>
              <option value="need-analysis">Need Analysis</option>
              <option value="value-proposition">Value Proposition</option>
              <option value="identify-decision-maker">
                Identify Decision Maker
              </option>
              <option value="proposal">Proposal</option>
              <option value="negotitation">Negotitation</option>
              <option value="won">Closed Won </option>
              <option value="lost">Closed Lost </option>
              <option value="lost-to-compition">
                Closed Lost To Compition
              </option>
            </select>
            {touched.stage && errors.stage && (
              <small className="errorMessage">{errors.stage}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="type">
              Type <span className="required_sign">*</span>
            </label>
            <select
              id="type"
              className="form-control"
              value={values.type}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="type"
            >
              <option value="">
                {/* {touched.type && errors.type ? (
                  <p className="text-danger">{errors.type}</p>
                ) : (
                  "Qualification"
                )} */}
                Choose Business Type
              </option>
              <option value="existing-business">Existing Business</option>
              <option value="new-business">New Business</option>
            </select>
            {touched.type && errors.type && (
              <small className="errorMessage">{errors.type}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="nextStep">
              Next Step <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="nextStep"
              className="form-control create_lead_form_input"
              value={values.nextStep}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="nextStep"
              placeholder="Enter next step"
            />
            {touched.nextStep && errors.nextStep && (
              <small className="errorMessage">{errors.nextStep}</small>
            )}
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="expectedRevenue">
              Expected Revenue <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="expectedRevenue"
              className="form-control create_lead_form_input"
              value={values.expectedRevenue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="expectedRevenue"
              placeholder="Enter expected revenue"
            />
            {touched.expectedRevenue && errors.expectedRevenue && (
              <small className="errorMessage">{errors.expectedRevenue}</small>
            )}
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
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="leadSource"
            >
              <option value="">
                {/* {touched.leadSource && errors.leadSource ? (
                  <p className="text-danger">{errors.leadSource}</p>
                ) : (
                  "Select Source"
                )} */}
                Select Source
              </option>
              <option value="advertisement">Advertisement</option>
              <option value="cold-call">Cold Call</option>
              <option value="employee-referral">Employee Referral</option>
              <option value="external-referral">External Refferal</option>
              <option value="other">Other</option>
            </select>
            {touched.leadSource && errors.leadSource && (
              <small className="errorMessage">{errors.leadSource}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="campaignSource">
              Campaign Source <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="campaignSource"
              className="form-control create_lead_form_input"
              value={values.campaignSource}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="campaignSource"
              placeholder="Enter campaign source"
            />
            {touched.campaignSource && errors.campaignSource && (
              <small className="errorMessage">{errors.campaignSource}</small>
            )}
            <MdAdminPanelSettings className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="contactName">
              Contact Name <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="contactName"
              className="form-control create_lead_form_input"
              value={values.contactName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="contactName"
              placeholder="Enter contact name"
            />
            {touched.contactName && errors.contactName && (
              <small className="errorMessage">{errors.contactName}</small>
            )}
            <MdAdminPanelSettings className="create_lead_input_icon" />
          </div>
        </div>
        {/* Description */}
        <div className="row">
          <p className="create_lead_section2_description">
            Description Information
          </p>
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
              placeholder={
                touched.description && errors.description
                  ? errors.description
                  : null
              }
            ></textarea>
          </div>
        </div>
        {/* Submit Button */}
        <div className="text-center mb-2">
          <button className="create_lead_form_submitBtn" type="submit">
            Submit
          </button>
        </div>
      </form>
      {/* Toast */}
      {showToast && (
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

export default CreateDeal;
