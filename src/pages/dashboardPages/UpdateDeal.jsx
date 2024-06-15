import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
// React Icon
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
// Schema
import { DealFormSchema } from "../../schema/FormValidation";
// Controller Methods & Api
import { updateDeal } from "../../controller/fetchApi";
const UpdateDeal = ({ dealCostumerId, defaultValue, onUpdateSuccess }) => {
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
  const dealId = JSON.parse(localStorage.getItem("dealId"));
  const tokenId = userIdTokenData?.data?.token;
  // Form Handle & Validations
  const formik = useFormik({
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
        console.log("Enter Submit");
        await updateDeal(dealId, values, setShowToast, tokenId);

        if (updateDeal) {
          onUpdateSuccess();
        }
      } catch (error) {
        console.log("Found Error", error);
      }
    },
  });
  // Update Form Automatic Filled
  useEffect(() => {
    if (defaultValue) {
      formik.setValues({
        ...formik.values,
        dealOwner: defaultValue.dealOwner,
        dealName: defaultValue.dealName,
        accountName: defaultValue.accountName,
        type: defaultValue.type,
        leadSource: defaultValue.leadSource,
        contactName: defaultValue.contactName,
        amount: defaultValue.amount,
        nextStep: defaultValue.nextStep,
        stage: defaultValue.stage,
        expectedRevenue: defaultValue.expectedRevenue,
        campaignSource: defaultValue.campaignSource,
        description: defaultValue.description,
        closingDate: defaultValue.closingDate,
      });
    }
  }, [defaultValue]);
  return (
    <div className="create_lead_form_main_div">
      <form onSubmit={formik.handleSubmit}>
        {/* User Account Information */}
        <div className="row">
          <p className="create_lead_section2_company_info">Deal Information</p>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="dealOwner">Deal Owner</label>
            <input
              type="text"
              id="dealOwner"
              className="form-control create_lead_form_input"
              value={formik.values.dealOwner}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="dealOwner"
              placeholder="Enter name"
            />
            {formik.touched.dealOwner && formik.errors.dealOwner && (
              <small className="errorMessage">{formik.errors.dealOwner}</small>
            )}
            <MdAdminPanelSettings className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="dealName">Deal Name</label>
            <input
              type="text"
              id="dealName"
              className="form-control create_lead_form_input"
              value={formik.values.dealName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="dealName"
              placeholder="Enter deal name"
            />
            {formik.touched.dealName && formik.errors.dealName && (
              <small className="errorMessage">{formik.errors.dealName}</small>
            )}
            <FaUserTie className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="amount">Amount</label>
            <input
              type="tel"
              id="amount"
              className="form-control create_lead_form_input"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="amount"
              placeholder="Enter amount"
            />
            {formik.touched.amount && formik.errors.amount && (
              <small className="errorMessage">{formik.errors.amount}</small>
            )}
            <FaUserTie className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="closingDate">Closing Date</label>
            <input
              type="date"
              id="closingDate"
              className="form-control create_lead_form_input"
              value={formik.values.closingDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="closingDate"
            />
            {formik.touched.closingDate && formik.errors.closingDate && (
              <small className="errorMessage">
                {formik.errors.closingDate}
              </small>
            )}
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountName">Account Name</label>
            <input
              type="tel"
              id="accountName"
              className="form-control create_lead_form_input"
              value={formik.values.accountName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="accountName"
              placeholder="Enter account name"
            />
            {formik.touched.accountName && formik.errors.accountName && (
              <small className="errorMessage">
                {formik.errors.accountName}
              </small>
            )}
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="stage">Stage</label>
            <select
              id="stage"
              className="form-control"
              value={formik.values.stage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="stage"
            >
              <option value="">
                {/* {formik.touched.stage && formik.errors.stage ? (
                  <p className="text-danger">{formik.errors.stage}</p>
                ) : (
                  "Qualification"
                )} */}
                Choose Stage
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
            {formik.touched.stage && formik.errors.stage && (
              <small className="errorMessage">{formik.errors.stage}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="type">Type</label>
            <select
              id="type"
              className="form-control"
              value={formik.values.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="type"
            >
              <option value="">
                {/* {formik.touched.type && formik.errors.type ? (
                  <p className="text-danger">{formik.errors.type}</p>
                ) : (
                  "Qualification"
                )} */}
                Choose Type
              </option>
              <option value="existing-business">Existing Business</option>
              <option value="new-business">New Business</option>
            </select>
            {formik.touched.type && formik.errors.type && (
              <small className="errorMessage">{formik.errors.type}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="nextStep">Next Step</label>
            <input
              type="text"
              id="nextStep"
              className="form-control create_lead_form_input"
              value={formik.values.nextStep}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="nextStep"
              placeholder="Your next step"
            />
            {formik.touched.nextStep && formik.errors.nextStep && (
              <small className="errorMessage">{formik.errors.nextStep}</small>
            )}
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="expectedRevenue">Expected Revenue</label>
            <input
              type="tel"
              id="expectedRevenue"
              className="form-control create_lead_form_input"
              value={formik.values.expectedRevenue}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="expectedRevenue"
              placeholder="Enter revenue"
            />
            {formik.touched.expectedRevenue &&
              formik.errors.expectedRevenue && (
                <small className="errorMessage">
                  {formik.errors.expectedRevenue}
                </small>
              )}
            <FaPhone className="create_lead_input_icon" />
          </div>
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
                {/* {formik.touched.leadSource && formik.errors.leadSource ? (
                  <p className="text-danger">{formik.errors.leadSource}</p>
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
            {formik.touched.leadSource && formik.errors.leadSource && (
              <small className="errorMessage">{formik.errors.leadSource}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="campaignSource">Campaign Source</label>
            <input
              type="text"
              id="campaignSource"
              className="form-control create_lead_form_input"
              value={formik.values.campaignSource}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="campaignSource"
              placeholder="Enter Campaign Source"
            />
            {formik.touched.campaignSource && formik.errors.campaignSource && (
              <small className="errorMessage">
                {formik.errors.campaignSource}
              </small>
            )}
            <MdAdminPanelSettings className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="contactName">Contact Name</label>
            <input
              type="text"
              id="contactName"
              className="form-control create_lead_form_input"
              value={formik.values.contactName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="contactName"
              placeholder="Enter contact name"
            />
            {formik.touched.contactName && formik.errors.contactName && (
              <small className="errorMessage">
                {formik.errors.contactName}
              </small>
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
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="description"
              rows="3"
              // placeholder={
              //   formik.touched.description && formik.errors.description
              //     ? formik.errors.description
              //     : null
              // }
            ></textarea>
            {formik.touched.description && formik.errors.description && (
              <small className="errorMessage">
                {formik.errors.description}
              </small>
            )}
          </div>
        </div>
        {/* Submit Button */}
        <div className="text-center mb-2">
          <button className="create_lead_form_submitBtn" type="submit">
            Update
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

export default UpdateDeal;
