import React, { useState, useEffect, useCallback } from "react";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
// React Icon
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { MdOutlineBook } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TfiAgenda } from "react-icons/tfi";
import { GiDuration } from "react-icons/gi";
import { FaTreeCity } from "react-icons/fa6";
// Schema
import { LogCallSchema } from "../../schema/FormValidation";
// Import Toast
import Toast from "../../components/Toast";

// Controller Api Methods
import {
  createLogCall,
  callRelatedDropdowns,
  callPurposeDropdowns,
  callResultsDropdowns,
} from "../../controller/fetchApi";
const LogCall = () => {
  // Get Lead Id
  const location = useLocation();
  const leadId = location.state?.leadId;
  // Toast
  const [showToast, setShowToast] = useState({ success: false, message: "" });

  // Get TokenId and Uid
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;

  // Related To
  const [relatedTo, setRelatedTo] = useState();
  const getCallRelatedDropdowns = useCallback(async () => {
    try {
      const callRelatedDropdown = await callRelatedDropdowns(tokenId);
      setRelatedTo(callRelatedDropdown);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId]);

  // Purpose
  const [callPurpose, setCallPurpose] = useState();
  const getCallPurposeDropdowns = useCallback(async () => {
    try {
      const callRelatedDropdown = await callPurposeDropdowns(tokenId);
      setCallPurpose(callRelatedDropdown);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId]);

  // Result
  const [callResult, setCallResult] = useState();
  const getCallResultDropdown = useCallback(async () => {
    try {
      const callResultDropdown = await callResultsDropdowns(tokenId);
      setCallResult(callResultDropdown);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId]);

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
        leadId: leadId,
        callPurpose: "",
        callAgenda: "",
        callResult: "",
      },
      validationSchema: LogCallSchema,
      onSubmit: async (values, { resetForm }) => {
        try {
          console.log("-----", values);
          await createLogCall(uid, values, setShowToast, tokenId);
          if (createLogCall) {
            resetForm();
          }
        } catch (error) {
          console.log("Did Not Create Account", error);
        }
      },
    });
  const [currentDateTime, setCurrentDateTime] = useState("");
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, "0");
    const hh = String(today.getHours()).padStart(2, "0");
    setCurrentDateTime(`${yyyy}-${mm}-${dd}T${hh}:00`);
    getCallRelatedDropdowns();
    getCallPurposeDropdowns();
    getCallResultDropdown();
  }, [getCallRelatedDropdowns, getCallPurposeDropdowns, getCallResultDropdown]);
  return (
    <div className="container-fluid dashboard_create_lead_main_container">
      <form onSubmit={handleSubmit}>
        {/* Create Call Log Heading */}
        <div className="create-lead-heading">
          <div>
            <p className="create_lead_section2_company_info">
              Call Information{" "}
            </p>
          </div>
          {/* <div className="create-lead-heading-right-part">
            <p className="create-lead-heading-right-para">
              Lead Name :{" "}
              <span className="create-lead-heading-span">
                Pankaj Swami Vaishnav
              </span>
            </p>
            <p className="create-lead-heading-right-para">
              Lead Id : <span className="create-lead-heading-span">2024</span>
            </p>
          </div> */}
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
                  ""
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
              {relatedTo && relatedTo?.length > 0
                ? relatedTo.map((item) => (
                    <option key={item?.id} value={item?.value}>
                      {item?.relatedTo}
                    </option>
                  ))
                : ""}
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
              placeholder="Enter call start time"
            />
            {touched.callStartTime && errors.callStartTime && (
              <small className="errorMessage">{errors.callStartTime}</small>
            )}
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callDuration">
              Call Duration <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="callDuration"
              className="form-control create_lead_form_input"
              value={values.callDuration}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callDuration"
              placeholder="Enter call duration"
            />
            {touched.callDuration && errors.callDuration && (
              <small className="errorMessage">{errors.callDuration}</small>
            )}
            <GiDuration className="create_lead_input_icon" />
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
              placeholder="Enter Subject"
            />
            {touched.subject && errors.subject && (
              <small className="errorMessage">{errors.subject}</small>
            )}
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
              value={values.leadId}
              onChange={handleChange}
              onBlur={handleBlur}
              name="leadId"
              placeholder="Enter address"
            />
            {touched.leadId && errors.leadId && (
              <small className="errorMessage">{errors.leadId}</small>
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
              <option value="">None</option>
              {callPurpose && callPurpose?.length > 0
                ? callPurpose.map((item) => (
                    <option key={item?.id} value={item?.value}>
                      {item?.callPurpose}
                    </option>
                  ))
                : ""}
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
              placeholder="Enter call agenda"
            />
            {touched.callAgenda && errors.callAgenda && (
              <small className="errorMessage">{errors.callAgenda}</small>
            )}
            <TfiAgenda className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="callResult">
              Call Result <span className="required_sign">*</span>
            </label>
            <select
              id="callResult"
              className="form-control"
              value={values.callResult}
              onChange={handleChange}
              onBlur={handleBlur}
              name="callResult"
            >
              <option value="">
                {/* {touched.callResult && errors.callResult ? (
                  <p className="text-danger">{errors.callResult}</p>
                ) : (
                  "Result Type "
                )} */}
                Result Type
              </option>
              {callResult && callResult?.length > 0
                ? callResult.map((item) => (
                    <option key={item?.id} value={item?.value}>
                      {item?.callResult}
                    </option>
                  ))
                : ""}
            </select>
            {touched.callResult && errors.callResult && (
              <small className="errorMessage">{errors.callResult}</small>
            )}
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
      <Toast showToast={showToast} setShowToast={setShowToast} />
    </div>
  );
};

export default LogCall;
