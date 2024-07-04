import React, { useState, useCallback, useEffect } from "react";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
// React Icon
import { MdEmail } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { FaTreeCity } from "react-icons/fa6";
import { TaskFormSchema } from "../../schema/FormValidation";
import { MdKeyboardArrowDown } from "react-icons/md";
// CSS
import "../../styles/dashboardCss/createTask.css";
// Controller Methods
import { createTask, taskStatusDropdowns } from "../../controller/fetchApi";
const CreateTask = () => {
  // Get Lead Id
  const location = useLocation();
  const leadId = location.state?.leadId;
  // Toast
  const [showToast, setShowToast] = useState(false);
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
      taskOwner: "",
      taskSubject: "",
      dueDate: "",
      contact: "",
      status: "",
      priority: "",
      leadId: leadId,
      description: "",
      accountType: "",
      reminderDateTime: "",
    },

    validationSchema: TaskFormSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("Task Create Data", values);
      try {
        await createTask(uid, values, setShowToast, tokenId);
        resetForm();
      } catch (error) {
        console.log("Found Error", error);
      }
    },
  });

  // Controll Reminder Open Close
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  // Function to handle input focus
  const handleFocus = (e) => {
    const { name } = e.target;
    setFieldTouched(name, true);
  };

  // Task Status Dropdown
  const [taskStatus, setTaskStatus] = useState();
  const getTaskStatusDropdown = useCallback(async () => {
    try {
      const taskStatusDropdown = await taskStatusDropdowns(tokenId);
      setTaskStatus(taskStatusDropdown);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId]);

  useEffect(() => {
    getTaskStatusDropdown();
  }, [getTaskStatusDropdown]);

  return (
    <div className="container-fluid dashboard_create_lead_main_container">
      <form onSubmit={handleSubmit}>
        {/* Company Information */}
        <div className="row">
          <p className="create_lead_section2_company_info mt-3">
            Company Details
          </p>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="taskOwner">
              Task Owner <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="taskOwner"
              maxLength={50}
              className="form-control create_lead_form_input"
              value={values.companyName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="taskOwner"
              placeholder="Enter owner name"
            />
            {touched.taskOwner && errors.taskOwner && (
              <small className="errorMessage">{errors.taskOwner}</small>
            )}
            <BsBuildingsFill className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="taskSubject">
              Subject <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="taskSubject"
              maxLength={50}
              className="form-control create_lead_form_input"
              value={values.companyEmail}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="taskSubject"
              placeholder="Enter subject"
            />
            {touched.taskSubject && errors.taskSubject && (
              <small className="errorMessage">{errors.taskSubject}</small>
            )}
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="dueDate">
              Due Date <span className="required_sign">*</span>
            </label>
            <input
              type="date"
              id="dueDate"
              className="form-control create_lead_form_input"
              value={values.dueDate}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="dueDate"
            />
            {touched.dueDate && errors.dueDate && (
              <small className="errorMessage">{errors.dueDate}</small>
            )}
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="contact">
              Contact <span className="required_sign">*</span>
            </label>
            <input
              type="tel"
              id="contact"
              minLength={8}
              maxLength={15}
              className="form-control create_lead_form_input"
              value={values.contact}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="contact"
              placeholder="Enter contact number"
            />
            {touched.contact && errors.contact && (
              <small className="errorMessage">{errors.contact}</small>
            )}
            <FaTreeCity className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountType">
              Account Type <span className="required_sign">*</span>
            </label>
            <select
              id="accountType"
              className="form-control"
              value={values.accountType}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="accountType"
            >
              <option value="">
                {/* {touched.accountType && errors.accountType ? (
                  <p className="text-danger">{errors.accountType}</p>
                ) : (
                  "Select Account Type"
                )} */}
                Select Account Type
              </option>
              <option value="web-download">Client</option>
              <option value="web-search">Reseller</option>
              <option value="advertisement">Competator</option>
              <option value="employee-referral">Analyst</option>
            </select>
            {touched.accountType && errors.accountType && (
              <small className="errorMessage">{errors.accountType}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="status">
              Status <span className="required_sign">*</span>
            </label>
            <select
              id="status"
              className="form-control"
              value={values.status}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="status"
            >
              <option value="">
                {/* {touched.status && errors.status ? (
                  <p className="text-danger">{errors.status}</p>
                ) : (
                  "Select Status"
                )} */}
                Select Status
              </option>
              {taskStatus && taskStatus?.length > 0
                ? taskStatus.map((status) => (
                    <option key={status.id} value={status.value}>
                      {status.status}
                    </option>
                  ))
                : ""}
            </select>
            {touched.status && errors.status && (
              <small className="errorMessage">{errors.status}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4 ">
            <label htmlFor="priority">
              Priority <span className="required_sign">*</span>
            </label>
            <select
              id="priority"
              className="form-control"
              value={values.priority}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="priority"
            >
              <option value="">
                {/* {touched.priority && errors.priority ? (
                  <p className="text-danger">{errors.priority}</p>
                ) : (
                  "Priority"
                )} */}
                Priority
              </option>
              <option value="not-started">Normall</option>
              <option value="deffered">Low</option>
              <option value="in-progress">High</option>
            </select>
            {touched.priority && errors.priority && (
              <small className="errorMessage">{errors.priority}</small>
            )}
            <MdKeyboardArrowDown className="create_lead_input_icon" />
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
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="leadId"
              placeholder="Enter address"
            />
            {touched.leadId && errors.leadId && (
              <small className="errorMessage">{errors.leadId}</small>
            )}
            <FaTreeCity className="create_lead_input_icon" />
          </div>
          {/* Reminder Input */}
          <div className="form-group createLeadInput col-xl-4 create_task_reminder">
            <div className="d-xl-flex justify-content-between align-items-center">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  checked={isOpen}
                  onChange={handleToggle}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Reminder <span className="required_sign">*</span>
                </label>
              </div>
              {isOpen && (
                <div className="ml-3">
                  <label htmlFor="reminderDateTime">Notify Email: &nbsp;</label>
                  <input
                    type="datetime-local"
                    id="reminderDateTime"
                    name="reminderDateTime"
                    value={values.dateTime}
                    // onChange={(e) => setDateTime(e.target.value)}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    // value={reminderTime}
                    // onBlur={handleDateTimeChange}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="row">
          <div className="form-group ">
            <label
              htmlFor="description"
              className="create_lead_section2_description_label"
            >
              Description <span className="required_sign">*</span>
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
        <div className="text-center">
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

export default CreateTask;
