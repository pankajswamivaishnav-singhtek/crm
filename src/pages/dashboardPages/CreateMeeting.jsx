import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
// React Icon
import { MdOutlineSubtitles } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaChalkboardUser } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { MeetingFormSchema } from "../../schema/FormValidation";
// CSS
import "../../styles/dashboardCss/createMeeting.css";
import { getContacts, createMeeting } from "../../controller/fetchApi";
const CreateMeeting = () => {
  // For Particiapnts
  const [getAllContactData, setAllContactData] = useState([]);
  // Get Uid and Tokenid Who Saved In Cookie
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;
  useEffect(() => {
    (async () => {
      try {
        await getContacts(tokenId).then((res) => {
          setAllContactData(res);
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [tokenId]);

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
      address: "",
      date: "", // for date,
      participants: [],
    },

    validationSchema: MeetingFormSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await createMeeting(
          uid,
          values,
          setShowToast,
          tokenId
        );
        if (response) {
          resetForm();
        }
        resetForm();
      } catch (error) {
        console.log("Found Error", error);
      }
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
  console.log("getAllContact Data", getAllContactData);
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
              {getAllContactData?.map((option) => (
                <div key={option.id} className="form-check">
                  <input
                    type="checkbox"
                    id={option.id}
                    className="form-check-input"
                    value={option.companyEmail}
                    // checked={values.participants.includes(option.id)}
                    // onChange={() => handleCheckboxToggle(option.id)}
                    checked={values.participants.includes(option.companyEmail)}
                    onChange={() => handleCheckboxToggle(option.companyEmail)}
                  />
                  <label htmlFor={option.value} className="form-check-label">
                    {option.companyName}
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

export default CreateMeeting;
