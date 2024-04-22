import React, { useState } from "react";
import { useFormik } from "formik";
// React Icon
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { MdOutlineBook } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TfiAgenda } from "react-icons/tfi";
import { GiDuration } from "react-icons/gi";
// Schema
import { LogCallSchema } from "../../schema/FormValidation";
const LogCall = () => {
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
  // Form Handle & Validations
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        callTo: "",
        relatedTo: "",
        callType: "",
        callStatus: "",
        callStartTime: "",
        callDuration: "",
        subject: "",
        callPurpose: "",
        callAgenda: "",
        callResult: "",
      },
      validationSchema: LogCallSchema,
      onSubmit: (values, { resetForm }) => {
        console.log("-----", values);
        resetForm();
        setShowToast(true);
      },
    });
  return (
    <div className="container-fluid dashboard_create_lead_main_container">
      <form onSubmit={handleSubmit}>
        {/* User Account Information */}
        <div className="row">
          <p className="create_lead_section2_company_info">Call Information</p>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callTo">Call To</label>
            <select
              id="callTo"
              className="form-control"
              value={values.callTo}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callTo"
            >
              <option value="">
                {touched.callTo && errors.callTo ? (
                  <p className="text-danger">{errors.callTo}</p>
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
              value={values.relatedTo}
              onChange={handleChange}
              onBlur={handleBlur}
              name="relatedTo"
            >
              <option value="">
                {touched.relatedTo && errors.relatedTo ? (
                  <p className="text-danger">{errors.relatedTo}</p>
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
              value={values.callType}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callType"
            >
              <option value="">
                {touched.callType && errors.callType ? (
                  <p className="text-danger">{errors.callType}</p>
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
              value={values.callStatus}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callStatus"
              placeholder={
                touched.callStatus && errors.callStatus
                  ? errors.callStatus
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
              value={values.callStartTime}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callStartTime"
              placeholder={
                touched.callStartTime && errors.callStartTime
                  ? errors.callStartTime
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
              value={values.callDuration}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callDuration"
              placeholder={
                touched.callDuration && errors.callDuration
                  ? errors.callDuration
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
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              name="subject"
              placeholder={
                touched.subject && errors.subject ? errors.subject : null
              }
            />
            <MdOutlineBook className="create_lead_input_icon" />
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
              value={values.callPurpose}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callPurpose"
            >
              <option value="">
                {touched.callPurpose && errors.callPurpose ? (
                  <p className="text-danger">{errors.callPurpose}</p>
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
              value={values.callAgenda}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callAgenda"
              placeholder={
                touched.callAgenda && errors.callAgenda
                  ? errors.callAgenda
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
              value={values.callResult}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callResult"
            >
              <option value="">
                {touched.callResult && errors.callResult ? (
                  <p className="text-danger">{errors.callResult}</p>
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
                onClick={() => setShowToast(false)}
              />
            </div>
            <div className="toast-body">Make Call Log successfully.</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogCall;
