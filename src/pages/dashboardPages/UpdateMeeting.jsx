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
import { getAllContact, updateMeeting } from "../../controller/fetchApi";
const UpdateMeeting = ({ meetCostumerId, defaultValue, onUpdateSuccess }) => {
  // For Particiapnts
  const [getAllContactData, setAllContactData] = useState([]);
  // Get Uid and Tokenid Who Saved In Cookie
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;
  const meetId = JSON.parse(localStorage.getItem("meetId"));
  //   Get Contact Data for Set participants
  useEffect(() => {
    (async () => {
      try {
        getAllContact(uid, tokenId).then((res) => {
          setAllContactData(res?.content);
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [uid, meetId, tokenId]);

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
  const formik = useFormik({
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
         await updateMeeting(
          meetId,
          values,
          setShowToast,
          tokenId
        );
        onUpdateSuccess();
     
        resetForm();
      } catch (error) {
        console.log("Found Error", error);
      }
    },
  });
  //  Updated Form Already Filled
  useEffect(() => {
    if (defaultValue) {
      formik.setValues({
        ...formik.values,
        title: defaultValue.title,
        address: defaultValue.location,
        fromTime: defaultValue.fromTime,
        host: defaultValue.host,
        participants: defaultValue.participants,
        relatedTo: defaultValue.relatedTo,
        repeatStatus: defaultValue.repeatStatus,
        description: defaultValue.description,
        date: defaultValue.date,
        // set other fields similarly
      });
    }
  }, [defaultValue]);
  // Function to handle checkbox toggle
  const handleCheckboxToggle = (email) => {
    const index = formik.formik.values.participants.indexOf(email);
    if (index === -1) {
      formik.setFieldValue("participants", [
        ...formik.formik.values.participants,
        email,
      ]);
    } else {
      const newParticipants = [...formik.formik.values.participants];
      newParticipants.splice(index, 1);
      formik.setFieldValue("participants", newParticipants);
    }
  };

  return (
    <div className="container-fluid dashboard_create_lead_main_container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="host">Host</label>
            <input
              type="text"
              id="host"
              className="form-control create_lead_form_input"
              value={formik.values.host}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="host"
              placeholder={
                formik.touched.host && formik.errors.host
                  ? formik.errors.host
                  : null
              }
            />
            <FaChalkboardUser className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control create_lead_form_input"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="title"
              placeholder={
                formik.touched.title && formik.errors.title
                  ? formik.errors.title
                  : null
              }
            />
            <MdOutlineSubtitles className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              className="form-control create_lead_form_input"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="address"
              placeholder={
                formik.touched.address && formik.errors.address
                  ? formik.errors.address
                  : null
              }
            />
            <IoLocationOutline className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="date">
              Date &nbsp;
              <small className="text-danger">
                {formik.touched.date && formik.errors.date
                  ? formik.errors.date
                  : null}
              </small>
            </label>
            <input
              type="date"
              id="date"
              className="form-control create_lead_form_input"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
                    // checked={formik.values.participants.includes(option.id)}
                    // onChange={() => handleCheckboxToggle(option.id)}
                    checked={formik?.values?.participants?.includes(
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

export default UpdateMeeting;
