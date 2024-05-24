import React, { useState, useEffect } from "react";
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
import { updateTask } from "../../controller/fetchApi";
const UpdateTask = ({ taskCostumerId, defaultValue, onUpdateSuccess }) => {
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
  const tokenId = userIdTokenData?.data?.token;
  // Form Handle & Validations
  const formik = useFormik({
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
        console.log("Chal gya task ", values);
        await updateTask(taskCostumerId, values, setShowToast, tokenId);
        onUpdateSuccess();
      } catch (error) {}
    },
  });

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (defaultValue) {
      formik.setValues({
        ...formik.values,
        taskOwner: defaultValue.taskOwner,
        dueDate: defaultValue.dueDate,
        contact: defaultValue.contact,
        taskSubject: defaultValue.subject,
        priority: defaultValue.priority,
        status: defaultValue.status,
        reminderDateTime: defaultValue.reminder,
        accountType: defaultValue.accountType,
        description: defaultValue.description,
        // set other fields similarly
      });
    }
  }, [defaultValue]);

  return (
    <div className="container-fluid dashboard_create_lead_main_container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <p className="create_lead_section2_company_info mt-3">
            Company Details
          </p>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="taskOwner">Task Owner</label>
            <input
              type="text"
              id="taskOwner"
              className="form-control create_lead_form_input"
              value={formik.values.taskOwner}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="taskOwner"
              placeholder={
                formik.touched.taskOwner && formik.errors.taskOwner
                  ? formik.errors.taskOwner
                  : null
              }
            />
            <BsBuildingsFill className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="taskSubject">Subject</label>
            <input
              type="text"
              id="taskSubject"
              className="form-control create_lead_form_input"
              value={formik.values.taskSubject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="taskSubject"
              placeholder={
                formik.touched.taskSubject && formik.errors.taskSubject
                  ? formik.errors.taskSubject
                  : null
              }
            />
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              id="dueDate"
              className="form-control create_lead_form_input"
              value={formik.values.dueDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="dueDate"
              placeholder={
                formik.touched.dueDate && formik.errors.dueDate
                  ? formik.errors.dueDate
                  : null
              }
            />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="contact">Contact</label>
            <input
              type="tel"
              id="contact"
              className="form-control create_lead_form_input"
              value={formik.values.contact}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="contact"
              placeholder={
                formik.touched.contact && formik.errors.contact
                  ? formik.errors.contact
                  : null
              }
            />
            <FaTreeCity className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountType">Account Type</label>
            <select
              id="accountType"
              className="form-control"
              value={formik.values.accountType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="accountType"
            >
              <option value="">
                {formik.touched.accountType && formik.errors.accountType ? (
                  <p className="text-danger">{formik.errors.accountType}</p>
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
            <label htmlFor="status">Status</label>
            <select
              id="status"
              className="form-control"
              value={formik.values.status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="status"
            >
              <option value="">
                {formik.touched.status && formik.errors.status ? (
                  <p className="text-danger">{formik.errors.status}</p>
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
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              className="form-control"
              value={formik.values.priority}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="priority"
            >
              <option value="">
                {formik.touched.priority && formik.errors.priority ? (
                  <p className="text-danger">{formik.errors.priority}</p>
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
                  Reminder
                </label>
              </div>
              {isOpen && (
                <div className="ml-3">
                  <label htmlFor="reminderDateTime">Notify Email: &nbsp;</label>
                  <input
                    type="datetime-local"
                    id="reminderDateTime"
                    name="reminderDateTime"
                    value={formik.values.dateTime}
                    // onChange={(e) => setDateTime(e.target.value)}
                    onChange={formik.handleChange}
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
        <div className="text-center">
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

export default UpdateTask;
