import React, { useState } from "react";
import { useFormik } from "formik";
// React Icon
import { MdEmail } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { FaTreeCity } from "react-icons/fa6";
import { TaskFormSchema } from "../../schema/FormValidation";
import { MdKeyboardArrowDown } from "react-icons/md";
// CSS
import "../../styles/dashboardCss/createTask.css";
// Controller Methods
import { createTask } from "../../controller/fetchApi";
const CreateTask = () => {
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
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        taskOwner: "",
        taskSubject: "",
        dueDate: "",
        contact: "",
        status: "",
        priority: "",
        description: "",
        accountType: "",
        reminderDateTime: "",
      },

      validationSchema: TaskFormSchema,
      onSubmit: async (values, { resetForm }) => {
        try {
          console.log("-----", values);
          await createTask(uid, values, setShowToast, tokenId);
          if (createTask) {
            resetForm();
          }
        } catch (error) {}
      },
    });

  // Controll Reminder Open Close
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
              className="form-control create_lead_form_input"
              value={values.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="taskOwner"
              placeholder={
                touched.taskOwner && errors.taskOwner ? errors.taskOwner : null
              }
            />
            <BsBuildingsFill className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="taskSubject">
              Subject <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="taskSubject"
              className="form-control create_lead_form_input"
              value={values.companyEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              name="taskSubject"
              placeholder={
                touched.taskSubject && errors.taskSubject
                  ? errors.taskSubject
                  : null
              }
            />
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
              onBlur={handleBlur}
              name="dueDate"
              placeholder={
                touched.dueDate && errors.dueDate ? errors.dueDate : null
              }
            />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="contact">
              Contact <span className="required_sign">*</span>
            </label>
            <input
              type="tel"
              id="contact"
              className="form-control create_lead_form_input"
              value={values.contact}
              onChange={handleChange}
              onBlur={handleBlur}
              name="contact"
              placeholder={
                touched.contact && errors.contact ? errors.contact : null
              }
            />
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
              onBlur={handleBlur}
              name="accountType"
            >
              <option value="">
                {touched.accountType && errors.accountType ? (
                  <p className="text-danger">{errors.accountType}</p>
                ) : (
                  "Select Account Type"
                )}
              </option>
              <option value="web-download">Client</option>
              <option value="web-search">Reseller</option>
              <option value="advertisement">Competator</option>
              <option value="employee-referral">Analyst</option>
            </select>
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
              onBlur={handleBlur}
              name="status"
            >
              <option value="">
                {touched.status && errors.status ? (
                  <p className="text-danger">{errors.status}</p>
                ) : (
                  "Select Status"
                )}
              </option>
              <option value="not-started">Not Started</option>
              <option value="deffered">Deffered</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="waiting-for-input">Waiting For Input</option>
            </select>
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="priority">
              Priority <span className="required_sign">*</span>
            </label>
            <select
              id="priority"
              className="form-control"
              value={values.priority}
              onChange={handleChange}
              onBlur={handleBlur}
              name="priority"
            >
              <option value="">
                {touched.priority && errors.priority ? (
                  <p className="text-danger">{errors.priority}</p>
                ) : (
                  "Priority"
                )}
              </option>
              <option value="not-started">Normall</option>
              <option value="deffered">Low</option>
              <option value="in-progress">High</option>
            </select>
            <MdKeyboardArrowDown className="create_lead_input_icon" />
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
