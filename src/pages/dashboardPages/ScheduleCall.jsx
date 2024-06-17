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
          await createScheduleCall(uid, values, setShowToast, tokenId);
          resetForm();
        } catch (error) {
          console.log("Did Not Create Account", error);
        }
      },
    });

  // Set Current Date and Time
  const [currentDateTime, setCurrentDateTime] = useState("");
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, "0");
    const hh = String(today.getHours()).padStart(2, "0");
    setCurrentDateTime(`${yyyy}-${mm}-${dd}T${hh}:00`);
  }, []);

  return (
    <div className="container-fluid dashboard_create_lead_main_container">
      <form onSubmit={handleSubmit}>
        {/* Create Schedule Call Heading */}
        <div className="create-lead-heading">
          <div>
            <p className="create_lead_section2_company_info">
              Call Information
            </p>
          </div>
          <div className="create-lead-heading-right-part">
            <p className="create-lead-heading-right-para">
              Lead Name :{" "}
              <span className="create-lead-heading-span">
                Pankaj Swami Vaishnav
              </span>
            </p>
            <p className="create-lead-heading-right-para">
              Lead Id : <span className="create-lead-heading-span">2024</span>
            </p>
          </div>
        </div>
        {/* User Account Information */}
        <div className="row">
          {/* <p className="create_lead_section2_company_info">Call Information</p> */}
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callTo">
              Call To <span className="required_sign">*</span>
            </label>
            <select
              id="callTo"
              className="form-control"
              value={values.callTo}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callTo"
            >
              <option value="">
                {/* {touched.callTo && errors.callTo ? (
                  <p className="text-danger">{errors.callTo}</p>
                ) : (
                  "Select call to "
                )} */}
                Select call to
              </option>
              <option value="lead">Lead</option>
              <option value="contact">Contact</option>
            </select>
            {touched.callTo && errors.callTo && (
              <small className="errorMessage">{errors.callTo}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="relatedTo">
              Related To <span className="required_sign">*</span>
            </label>
            <select
              id="relatedTo"
              className="form-control"
              value={values.relatedTo}
              onChange={handleChange}
              onBlur={handleBlur}
              name="relatedTo"
            >
              <option value="">
                {/* {touched.relatedTo && errors.relatedTo ? (
                  <p className="text-danger">{errors.relatedTo}</p>
                ) : (
                  "Related to "
                )} */}
                Related to
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
            {touched.relatedTo && errors.relatedTo && (
              <small className="errorMessage">{errors.relatedTo}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callType">
              Call Type <span className="required_sign">*</span>
            </label>
            <select
              id="callType"
              className="form-control"
              value={values.callType}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callType"
            >
              <option value="">
                {/* {touched.callType && errors.callType ? (
                  <p className="text-danger">{errors.callType}</p>
                ) : (
                  "Call type "
                )} */}
                Call type
              </option>
              <option value="outbound">outbound</option>
              <option value="inbound">inbound</option>
              <option value="missed">missed</option>
            </select>
            {touched.callType && errors.callType && (
              <small className="errorMessage">{errors.callType}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callStatus">
              Outgoing Call Status <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="callStatus"
              className="form-control create_lead_form_input"
              value={values.callStatus}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callStatus"
              placeholder="Enter call status"
            />
            {touched.callStatus && errors.callStatus && (
              <small className="errorMessage">{errors.callStatus}</small>
            )}
            <HiOutlinePhoneOutgoing className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callStartTime">
              Call Start Time <span className="required_sign">*</span>
            </label>
            <input
              type="datetime-local"
              id="callStartTime"
              min={currentDateTime}
              className="form-control create_lead_form_input"
              value={values.callStartTime}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callStartTime"
            />
            {touched.callStartTime && errors.callStartTime && (
              <small className="errorMessage">{errors.callStartTime}</small>
            )}
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callOwner">
              Call Owner <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="callOwner"
              className="form-control create_lead_form_input"
              value={values.callOwner}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callOwner"
              placeholder="Enter call owner name"
            />
            {touched.callOwner && errors.callOwner && (
              <small className="errorMessage">{errors.callOwner}</small>
            )}
            <FaUserTie className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountNumber">
              Subject <span className="required_sign">*</span>
            </label>
            <input
              type="subject"
              id="subject"
              className="form-control create_lead_form_input"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              name="subject"
              placeholder="Enter subject"
            />
            {touched.subject && errors.subject && (
              <small className="errorMessage">{errors.subject}</small>
            )}
            <MdOutlineBook className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="reminder">
              Reminder <span className="required_sign">*</span>
            </label>
            <select
              id="reminder"
              className="form-control"
              value={values.reminder}
              onChange={handleChange}
              onBlur={handleBlur}
              name="reminder"
            >
              <option value="">
                {/* {touched.reminder && errors.reminder ? (
                  <p className="text-danger">{errors.reminder}</p>
                ) : (
                  "None"
                )} */}
                None
              </option>
              <option value="5">5 Minute Before</option>
              <option value="10">10 Minute Before</option>
              <option value="15">15 Minute Before</option>
              <option value="30">30 Minute Before</option>
            </select>
            {touched.reminder && errors.reminder && (
              <small className="errorMessage">{errors.reminder}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
        </div>
        {/* Calling Purpose */}
        <div className="row">
          <p className="create_lead_section2_company_info">
            Purpose Of Outgoing Call
          </p>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callPurpose">
              Call Purpose <span className="required_sign">*</span>
            </label>
            <select
              id="callPurpose"
              className="form-control"
              value={values.callPurpose}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callPurpose"
            >
              <option value="">
                {/* {touched.callPurpose && errors.callPurpose ? (
                  <p className="text-danger">{errors.callPurpose}</p>
                ) : (
                  "None"
                )} */}
                None
              </option>
              <option value="prospecting">Prospecting</option>
              <option value="administrative">Administrative</option>
              <option value="negotitation">Negotitation</option>
              <option value="demo">Demo</option>
              <option value="project">Project</option>
              <option value="desk">Desk</option>
            </select>
            {touched.callPurpose && errors.callPurpose && (
              <small className="errorMessage">{errors.callPurpose}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callAgenda">
              Call Agenda <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="callAgenda"
              className="form-control create_lead_form_input"
              value={values.callAgenda}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callAgenda"
              placeholder="Enter call agenda "
            />
            {touched.callAgenda && errors.callAgenda && (
              <small className="errorMessage">{errors.callAgenda}</small>
            )}
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
