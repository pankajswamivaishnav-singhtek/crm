import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
// React Icon
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { MdOutlineBook } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TfiAgenda } from "react-icons/tfi";
import { GiDuration } from "react-icons/gi";
import { FaTreeCity } from "react-icons/fa6";
// Schema
import { LogCallSchema } from "../../schema/FormValidation";
// Controller Api Methods
import { updateLogCall } from "../../controller/fetchApi";
const UpdateLogCall = ({ logCostumerId, defaultValue, onUpdateSuccess }) => {
  // Toast
  const [showToast, setShowToast] = useState({ success: false, message: "" });
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
  const logCallId = JSON.parse(localStorage.getItem("logCallId"));
  const tokenId = userIdTokenData?.data?.token;
  // Form Handle & Validations
  const formik = useFormik({
    initialValues: {
      callTo: "",
      relatedTo: "",
      callType: "",
      callStatus: "",
      callStartTime: "",
      callDuration: "",
      subject: "",
      leadId: "",
      callPurpose: "",
      callAgenda: "",
      callResult: "",
    },
    validationSchema: LogCallSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log("-----", values);
        updateLogCall(logCallId, values, setShowToast, tokenId);
        onUpdateSuccess();
      } catch (error) {
        console.log("Did Not Update ", error);
      }
    },
  });
  // Update Form Already Filled
  useEffect(() => {
    if (defaultValue) {
      formik.setValues({
        ...formik.values,
        callTo: defaultValue.callTo,
        relatedTo: defaultValue.relatedTo,
        callType: defaultValue.callType,
        callStatus: defaultValue.callStatus,
        leadId: defaultValue.leadId,
        callStartTime: defaultValue.callStartTime,
        callDuration: defaultValue.callDuration,
        callPurpose: defaultValue.callPurpose,
        callAgenda: defaultValue.callAgenda,
        subject: defaultValue.subject,
        callResult: defaultValue.callResult,
        description: defaultValue.description,
        // set other fields similarly
      });
    }
  }, [defaultValue]);
  return (
    <div className="container-fluid dashboard_create_lead_main_container">
      <form onSubmit={formik.handleSubmit}>
        {/* User Account Information */}
        <div className="row">
          <p className="create_lead_section2_company_info">Call Information</p>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callTo">Call To</label>
            <select
              id="callTo"
              className="form-control"
              value={formik.values.callTo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="callTo"
            >
              <option value="">
                {formik.touched.callTo && formik.errors.callTo ? (
                  <p className="text-danger">{formik.errors.callTo}</p>
                ) : (
                  "Select call to "
                )}
              </option>
              <option value="lead">Lead</option>
              <option value="contact">Contact</option>
            </select>
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="relatedTo">Related To</label>
            <select
              id="relatedTo"
              className="form-control"
              value={formik.values.relatedTo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="relatedTo"
            >
              <option value="">
                {formik.touched.relatedTo && formik.errors.relatedTo ? (
                  <p className="text-danger">{formik.errors.relatedTo}</p>
                ) : (
                  "Related to "
                )}
              </option>
              <option value="account">Account</option>
              <option value="deal">Deal</option>
              <option value="project">Project</option>
              <option value="quote">Quote</option>
              <option value="sales-order">Sales Order</option>
              <option value="purchase-order">Purchase Order</option>
              <option value="invoice">Invoice</option>
              <option value="campaing">Campaing</option>
              <option value="vendor">Vendor</option>
              <option value="case">Case</option>
            </select>
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callType">Call Type</label>
            <select
              id="callType"
              className="form-control"
              value={formik.values.callType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="callType"
            >
              <option value="">
                {formik.touched.callType && formik.errors.callType ? (
                  <p className="text-danger">{formik.errors.callType}</p>
                ) : (
                  "Call type "
                )}
              </option>
              <option value="account">outbound</option>
              <option value="deal">inbound</option>
              <option value="project">missed</option>
            </select>
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callStatus">Outgoing Call Status</label>
            <input
              type="text"
              id="callStatus"
              className="form-control create_lead_form_input"
              value={formik.values.callStatus}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="callStatus"
              placeholder={
                formik.touched.callStatus && formik.errors.callStatus
                  ? formik.errors.callStatus
                  : null
              }
            />
            <HiOutlinePhoneOutgoing className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callStartTime">Call Start Time</label>
            <input
              type="datetime-local"
              id="callStartTime"
              className="form-control create_lead_form_input"
              value={formik.values.callStartTime}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="callStartTime"
              placeholder={
                formik.touched.callStartTime && formik.errors.callStartTime
                  ? formik.errors.callStartTime
                  : null
              }
            />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callDuration">Call Duration</label>
            <input
              type="text"
              id="callDuration"
              className="form-control create_lead_form_input"
              value={formik.values.callDuration}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="callDuration"
              placeholder={
                formik.touched.callDuration && formik.errors.callDuration
                  ? formik.errors.callDuration
                  : null
              }
            />
            <GiDuration className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountNumber">Subject</label>
            <input
              type="subject"
              id="subject"
              className="form-control create_lead_form_input"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="subject"
              placeholder={
                formik.touched.subject && formik.errors.subject
                  ? formik.errors.subject
                  : null
              }
            />
            <MdOutlineBook className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="leadId">
              Lead Id <span className="required_sign">*</span>
            </label>
            <input
              type="tel"
              id="leadId"
              className="form-control create_lead_form_input"
              value={formik.values.leadId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="leadId"
              placeholder="Enter address"
            />
            {formik.touched.leadId && formik.errors.leadId && (
              <small className="errorMessage">{formik.errors.leadId}</small>
            )}
            <FaTreeCity className="create_lead_input_icon" />
          </div>
        </div>
        {/* Calling Purpose */}
        <div className="row">
          <p className="create_lead_section2_company_info">
            Purpose Of Outgoing Call
          </p>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callPurpose">Call Purpose</label>
            <select
              id="callPurpose"
              className="form-control"
              value={formik.values.callPurpose}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="callPurpose"
            >
              <option value="">
                {formik.touched.callPurpose && formik.errors.callPurpose ? (
                  <p className="text-danger">{formik.errors.callPurpose}</p>
                ) : (
                  "None"
                )}
              </option>
              <option value="prospecting">Prospecting</option>
              <option value="administrative">Administrative</option>
              <option value="negotitation">Negotitation</option>
              <option value="demo">Demo</option>
              <option value="project">Project</option>
              <option value="desk">Desk</option>
            </select>
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callAgenda">Call Agenda</label>
            <input
              type="text"
              id="callAgenda"
              className="form-control create_lead_form_input"
              value={formik.values.callAgenda}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="callAgenda"
              placeholder={
                formik.touched.callAgenda && formik.errors.callAgenda
                  ? formik.errors.callAgenda
                  : null
              }
            />
            <TfiAgenda className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callResult">Call Result</label>
            <select
              id="callResult"
              className="form-control"
              value={formik.values.callResult}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="callResult"
            >
              <option value="">
                {formik.touched.callResult && formik.errors.callResult ? (
                  <p className="text-danger">{formik.errors.callResult}</p>
                ) : (
                  "Result Type "
                )}
              </option>
              <option value="interested">Interested</option>
              <option value="not-interested">Not Interested</option>
              <option value="no-response">No Response/Buy</option>
              <option value="requested-info">Requested More Info</option>
              <option value="requested-call-back">Requested Call Back</option>
              <option value="invalid-number">Invalid Number</option>
            </select>
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
        </div>
        {/* Description */}
        <div className="row">
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
        <div className="text-center mb-2">
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

export default UpdateLogCall;
