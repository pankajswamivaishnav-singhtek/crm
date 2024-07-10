import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
//Import React Icon
import { MdOutlineSubtitles } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaChalkboardUser } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { MeetingFormSchema } from "../../schema/FormValidation";
import { FaTreeCity } from "react-icons/fa6";
//Import CSS
import "../../styles/dashboardCss/createMeeting.css";
// Import api function from controller
import { getContacts, createMeeting } from "../../controller/fetchApi";
const CreateMeeting = () => {
  // Get LeadId
  const location = useLocation();
  const leadId = location.state?.leadId;
  // For Particiapnts
  const [getAllContactData, setAllContactData] = useState([]);
  // Get User details from local storage
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

  // Start Toast Code -------
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setFieldTouched,
  } = useFormik({
    initialValues: {
      host: "",
      title: "",
      address: "",
      date: "", // for date,
      leadId: leadId,
      participants: [],
    },
    validationSchema: MeetingFormSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log("meeting Data", values);
        setLoading(true);
        await createMeeting(uid, values, setShowToast, tokenId);
        if (createMeeting) {
          resetForm();
          setLoading(false);
        }
        // console.log("jwabfjasjkhakjFHJKsbakjdcbSJK KCa", response);
        // if (response.status === 200) {
        //   resetForm();
        //   setLoading(false);
        // }
      } catch (error) {
        console.log("Found Error", error);
        setLoading(false);
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
  // Function to handle input focus
  const handleFocus = (e) => {
    const { name } = e.target;
    setFieldTouched(name, true);
  };
  // Set Current Date
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, "0");
    const hh = String(today.getHours()).padStart(2, "0");
    const min = String(today.getMinutes()).padStart(2, "0");

    setCurrentDate(`${yyyy}-${mm}-${dd}T${hh}:${min}`);
  }, []);

  return (
    <div className="container-fluid dashboard_create_lead_main_container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="host">
              Host <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="host"
              maxLength={50}
              className="form-control create_lead_form_input"
              value={values.host}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="host"
              placeholder="Enter host name"
            />
            {touched.host && errors.host && (
              <small className="errorMessage">{errors.host}</small>
            )}
            <FaChalkboardUser className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="title">
              Title <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="title"
              maxLength={50}
              className="form-control create_lead_form_input"
              value={values.title}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="title"
              placeholder="Enter title name"
            />
            {touched.title && errors.title && (
              <small className="errorMessage">{errors.title}</small>
            )}
            <MdOutlineSubtitles className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="address">
              Address <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="address"
              maxLength={150}
              className="form-control create_lead_form_input"
              value={values.address}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="address"
              placeholder="Enter address"
            />
            {touched.address && errors.address && (
              <small className="errorMessage">{errors.address}</small>
            )}
            <IoLocationOutline className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="date">
              Date & Time<span className="required_sign">*</span> &nbsp;
              {/* <small className="text-danger">
                {touched.date && errors.date ? errors.date : null}
              </small> */}
            </label>
            <input
              type="datetime-local"
              id="date"
              min={currentDate}
              className="form-control create_lead_form_input"
              value={values.date}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="date"
            />
            {touched.date && errors.date && (
              <small className="errorMessage">{errors.date}</small>
            )}
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
          {/* Participants dropdown */}
          <div className="form-group createLeadInput col-xl-4 create_meeting_mainDiv">
            <label
              htmlFor="participants"
              data-bs-toggle="collapse"
              data-bs-target="#participantsCollapse"
              className="btn btn-primary text-white create_meeting_participant_btn"
            >
              <MdAdd /> Add Participants{" "}
              <span className="required_sign">*</span>
            </label>
            <div
              id="participantsCollapse"
              className="collapse create_meeting_collapseDiv"
            >
              {Array.isArray(getAllContactData) &&
                getAllContactData?.map((option) => (
                  <div key={option.id} className="form-check">
                    <input
                      type="checkbox"
                      id={option.id}
                      className="form-check-input"
                      value={option.companyEmail}
                      // checked={values.participants.includes(option.id)}
                      // onChange={() => handleCheckboxToggle(option.id)}
                      checked={values.participants.includes(
                        option.companyEmail
                      )}
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
        {loading ? (
          <div className="text-center">
            <button className="create_lead_form_submitBtn">Creating...</button>
          </div>
        ) : (
          <div className="text-center">
            <button className="create_lead_form_submitBtn" type="submit">
              Submit
            </button>
          </div>
        )}
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
