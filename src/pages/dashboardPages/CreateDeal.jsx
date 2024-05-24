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
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
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
  return (
    <div className="create_lead_form_main_div dashboard_create_lead_main_container">
      <form onSubmit={handleSubmit}>
        {/* User Account Information */}
        <div className="row">
          <p className="create_lead_section2_company_info ">Deal Information</p>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="dealOwner">Deal Owner <span className="required_sign">*</span></label>
            <input
              type="text"
              id="dealOwner"
              className="form-control create_lead_form_input"
              value={values.dealOwner}
              onChange={handleChange}
              onBlur={handleBlur}
              name="dealOwner"
              placeholder={
                touched.dealOwner && errors.dealOwner ? errors.dealOwner : null
              }
            />
            <MdAdminPanelSettings className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="dealName">Deal Name <span className="required_sign">*</span></label>
            <input
              type="text"
              id="dealName"
              className="form-control create_lead_form_input"
              value={values.dealName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="dealName"
              placeholder={
                touched.dealName && errors.dealName ? errors.dealName : null
              }
            />
            <FaUserTie className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="amount">Amount <span className="required_sign">*</span></label>
            <input
              type="text"
              id="amount"
              className="form-control create_lead_form_input"
              value={values.amount}
              onChange={handleChange}
              onBlur={handleBlur}
              name="amount"
              placeholder={
                touched.amount && errors.amount ? errors.amount : null
              }
            />
            <FaUserTie className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="closingDate">Closing Date <span className="required_sign">*</span></label>
            <input
              type="date"
              id="closingDate"
              className="form-control create_lead_form_input"
              value={values.closingDate}
              onChange={handleChange}
              onBlur={handleBlur}
              name="closingDate"
              placeholder={
                touched.closingDate && errors.closingDate
                  ? errors.closingDate
                  : null
              }
            />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountName">Account Name <span className="required_sign">*</span></label>
            <input
              type="tel"
              id="accountName"
              className="form-control create_lead_form_input"
              value={values.accountName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="accountName"
              placeholder={
                touched.accountName && errors.accountName
                  ? errors.accountName
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="stage">Stage <span className="required_sign">*</span></label>
            <select
              id="stage"
              className="form-control"
              value={values.stage}
              onChange={handleChange}
              onBlur={handleBlur}
              name="stage"
            >
              <option value="">
                {touched.stage && errors.stage ? (
                  <p className="text-danger">{errors.stage}</p>
                ) : (
                  "Qualification"
                )}
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
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="type">Type <span className="required_sign">*</span></label>
            <select
              id="type"
              className="form-control"
              value={values.type}
              onChange={handleChange}
              onBlur={handleBlur}
              name="type"
            >
              <option value="">
                {touched.type && errors.type ? (
                  <p className="text-danger">{errors.type}</p>
                ) : (
                  "Qualification"
                )}
              </option>
              <option value="existing-business">Existing Business</option>
              <option value="new-business">New Business</option>
            </select>
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="nextStep">Next Step <span className="required_sign">*</span></label>
            <input
              type="text"
              id="nextStep"
              className="form-control create_lead_form_input"
              value={values.nextStep}
              onChange={handleChange}
              onBlur={handleBlur}
              name="nextStep"
              placeholder={
                touched.nextStep && errors.nextStep ? errors.nextStep : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="expectedRevenue">Expected Revenue <span className="required_sign">*</span></label>
            <input
              type="text"
              id="expectedRevenue"
              className="form-control create_lead_form_input"
              value={values.expectedRevenue}
              onChange={handleChange}
              onBlur={handleBlur}
              name="expectedRevenue"
              placeholder={
                touched.expectedRevenue && errors.expectedRevenue
                  ? errors.expectedRevenue
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="leadSource">Lead Source <span className="required_sign">*</span></label>
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
                  <p className="text-danger">{errors.leadSource}</p>
                ) : (
                  "Select Source"
                )}
              </option>
              <option value="advertisement">Advertisement</option>
              <option value="cold-call">Cold Call</option>
              <option value="employee-referral">Employee Referral</option>
              <option value="external-referral">External Refferal</option>
              <option value="other">Other</option>
            </select>
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="campaignSource">Campaign Source <span className="required_sign">*</span></label>
            <input
              type="text"
              id="campaignSource"
              className="form-control create_lead_form_input"
              value={values.campaignSource}
              onChange={handleChange}
              onBlur={handleBlur}
              name="campaignSource"
              placeholder={
                touched.campaignSource && errors.campaignSource
                  ? errors.campaignSource
                  : null
              }
            />
            <MdAdminPanelSettings className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="contactName">Contact Name <span className="required_sign">*</span></label>
            <input
              type="text"
              id="contactName"
              className="form-control create_lead_form_input"
              value={values.contactName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="contactName"
              placeholder={
                touched.contactName && errors.contactName
                  ? errors.contactName
                  : null
              }
            />
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
