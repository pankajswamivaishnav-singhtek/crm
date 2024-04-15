import React, { useState } from "react";
import { useFormik } from "formik";
// React Icon
import { MdOutlineSubtitles } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaChalkboardUser } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { MeetingFormSchema } from "../../schema/FormValidation";

// CSS
import "../../styles/dashboardCss/createMeeting.css";
const CreateMeeting = () => {
  // Participants options
  const participantsOptions = [
    { value: "email1@example.com", label: "Email 1" },
    { value: "email2@example.com", label: "Email 2" },
    { value: "email3@example.com", label: "Email 3" },
    { value: "email4@example.com", label: "Email 4" },
    { value: "email5@example.com", label: "Email 5" },
    { value: "email6@example.com", label: "Email 6" },
  ];

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
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      host: "",
      title: "",
      location: "",
      address: "",
      date: "", // for date,
      participants: [],
    },

    validationSchema: MeetingFormSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("-----", values);
      resetForm();
      setShowToast(true);
    },
  });

  // Function to handle checkbox toggle
  const handleCheckboxToggle = (email) => {
    const index = values.participants.indexOf(email);
    if (index === -1) {
      setFieldValue("participants", [...values.participants, email]);
    } else {
      const newParticipants = [...values.participants];
      newParticipants.splice(index, 1);
      setFieldValue("participants", newParticipants);
    }
  };
  return (
    <div className="container-fluid dashboard_create_lead_main_container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="host">Host</label>
            <input
              type="text"
              id="host"
              className="form-control create_lead_form_input"
              value={values.host}
              onChange={handleChange}
              onBlur={handleBlur}
              name="host"
              placeholder={touched.host && errors.host ? errors.host : null}
            />
            <FaChalkboardUser className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control create_lead_form_input"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              name="title"
              placeholder={touched.title && errors.title ? errors.title : null}
            />
            <MdOutlineSubtitles className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              className="form-control create_lead_form_input"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              name="address"
              placeholder={
                touched.address && errors.address ? errors.address : null
              }
            />
            <IoLocationOutline className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="date">
              Date &nbsp;
              <small className="text-danger">
                {touched.date && errors.date ? errors.date : null}
              </small>
            </label>
            <input
              type="date"
              id="date"
              className="form-control create_lead_form_input"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
              name="date"
            />
          </div>
          {/* Participants dropdown */}
          <div className="form-group createLeadInput col-xl-4 create_meeting_mainDiv">
            <label
              htmlFor="participants"
              data-bs-toggle="collapse"
              data-bs-target="#participantsCollapse"
              className="btn btn-primary text-white create_meeting_participant_btn"
            >
              <MdAdd /> Add Participants
            </label>
            <div
              id="participantsCollapse"
              className="collapse create_meeting_collapseDiv"
            >
              {participantsOptions.map((option) => (
                <div key={option.value} className="form-check">
                  <input
                    type="checkbox"
                    id={option.value}
                    className="form-check-input"
                    value={option.value}
                    checked={values.participants.includes(option.value)}
                    onChange={() => handleCheckboxToggle(option.value)}
                  />
                  <label htmlFor={option.value} className="form-check-label">
                    {option.label}
                  </label>
                </div>
              ))}
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
                onClick={() => setShowToast(false)}
              />
            </div>
            <div className="toast-body">
              Your Meeting has been Scheduled successfully.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateMeeting;
