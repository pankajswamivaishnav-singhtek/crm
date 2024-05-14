import React, { useState } from "react";
import { useFormik } from "formik";
// React Icon
import { FaUserTie } from "react-icons/fa";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { MdOutlineBook } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ScheduleCallSchema } from "../../schema/FormValidation";
import { TfiAgenda } from "react-icons/tfi";
// Controller Api Methods
import { createScheduleCall } from "../../controller/fetchApi";
// Get TokenId and Uid
const userIdTokenData = JSON.parse(localStorage.getItem("user"));
const uid = userIdTokenData?.data?.userId;
const tokenId = userIdTokenData?.data?.token;

const ScheduleCall = () => {
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
        callOwner: "",
        subject: "",
        reminder: "",
        callPurpose: "",
        callAgenda: "",
      },
      validationSchema: ScheduleCallSchema,
      onSubmit: async (values, { resetForm }) => {
        try {
          console.log("-----", values);
          const createSuccessfully = await createScheduleCall(
            uid,
            values,
            setShowToast,
            tokenId
          );
          if (createSuccessfully) {
            resetForm();
          }
        } catch (error) {
          console.log("Did Not Create Account", error);
        }
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
              <option value="outbound">outbound</option>
              <option value="inbound">inbound</option>
              <option value="missed">missed</option>
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
            <label htmlFor="callOwner">Call Owner</label>
            <input
              type="text"
              id="callOwner"
              className="form-control create_lead_form_input"
              value={values.callOwner}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callOwner"
              placeholder={
                touched.callOwner && errors.callOwner ? errors.callOwner : null
              }
            />
            <FaUserTie className="create_lead_input_icon" />
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
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="reminder">Reminder</label>
            <select
              id="reminder"
              className="form-control"
              value={values.reminder}
              onChange={handleChange}
              onBlur={handleBlur}
              name="reminder"
            >
              <option value="">
                {touched.reminder && errors.reminder ? (
                  <p className="text-danger">{errors.reminder}</p>
                ) : (
                  "None"
                )}
              </option>
              <option value="5">5 Minute Before</option>
              <option value="10">10 Minute Before</option>
              <option value="15">15 Minute Before</option>
              <option value="30">30 Minute Before</option>
            </select>
            <MdKeyboardArrowDown className="create_lead_input_icon" />
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

export default ScheduleCall;
