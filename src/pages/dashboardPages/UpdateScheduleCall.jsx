import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
// React Icon
import { FaUserTie } from "react-icons/fa";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { MdOutlineBook } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ScheduleCallSchema } from "../../schema/FormValidation";
import { TfiAgenda } from "react-icons/tfi";
// Controller Api Methods
import { updateScheduleCall } from "../../controller/fetchApi";
// Get TokenId and Uid
const userIdTokenData = JSON.parse(localStorage.getItem("user"));
const scheduleCallId = JSON.parse(localStorage.getItem("scheduleCallId"));

const tokenId = userIdTokenData?.data?.token;

const UpdateScheduleCall = ({
  scheduleCallCostumerId,
  defaultValue,
  onUpdateSuccess,
}) => {
  // Toast Manage State
  const [showToast, setShowToast] = useState(false);
  const hideToast = () => {
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  if (showToast) {
    hideToast();
  }
  // Form Handle & Validations

  const formik = useFormik({
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
        await updateScheduleCall(scheduleCallId, values, setShowToast, tokenId);
        onUpdateSuccess();
      } catch (error) {
        console.log("Did Not Create Account", error);
      }
    },
  });
  useEffect(() => {
    if (defaultValue) {
      formik.setValues({
        ...formik.values,
        callTo: defaultValue.callTo,
        relatedTo: defaultValue.relatedTo,
        callType: defaultValue.callType,
        callStatus: defaultValue.callStatus,
        callStartTime: defaultValue.callStartTime,
        callOwner: defaultValue.callOwner,
        subject: defaultValue.subject,
        reminder: defaultValue.reminder,
        callPurpose: defaultValue.callPurpose,
        callAgenda: defaultValue.callAgenda,
        // set other fields similarly
      });
    }
  }, [defaultValue]);
  console.log("Default Value: " + defaultValue);
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
            <label htmlFor="callOwner">Call Owner</label>
            <input
              type="text"
              id="callOwner"
              className="form-control create_lead_form_input"
              value={formik.values.callOwner}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="callOwner"
              placeholder={
                formik.touched.callOwner && formik.errors.callOwner
                  ? formik.errors.callOwner
                  : null
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
            <label htmlFor="reminder">Reminder</label>
            <select
              id="reminder"
              className="form-control"
              value={formik.values.reminder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="reminder"
            >
              <option value="">
                {formik.touched.reminder && formik.errors.reminder ? (
                  <p className="text-danger">{formik.errors.reminder}</p>
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

export default UpdateScheduleCall;
