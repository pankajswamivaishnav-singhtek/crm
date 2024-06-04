import React, { useState } from "react";
import { useFormik } from "formik";
// React Icon
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { FaTreeCity } from "react-icons/fa6";
import { ContactFormSchema } from "../../schema/FormValidation";
// Controllers Methods
import { createContact } from "../../controller/fetchApi";
const CreateContact = () => {
  // Toast
  const [showToast, setShowToast] = useState({ success: false, message: "" });
  // Function to hide the toast after 3 seconds
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
      companyName: "",
      companyEmail: "",
      companyContact: "",
      address: "",
      description: "",
    },

    validationSchema: ContactFormSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await createContact(values, uid, setShowToast, tokenId);
        if (createContact) {
          resetForm();
        }
      } catch (error) {
        console.log("Did Not Create Contact", error);
      }
    },
  });
  // Function to handle input focus
  const handleFocus = (e) => {
    const { name } = e.target;
    setFieldTouched(name, true);
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
            <label htmlFor="companyName">
              Company Name <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              className="form-control create_lead_form_input"
              value={values.companyName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="companyName"
              placeholder="Enter company name"
            />
            {touched.companyName && errors.companyName && (
              <small className="errorMessage">{errors.companyName}</small>
            )}
            <BsBuildingsFill className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="companyEmail">
              Company Email <span className="required_sign">*</span>
            </label>
            <input
              type="email"
              id="companyEmail"
              className="form-control create_lead_form_input"
              value={values.companyEmail}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="companyEmail"
              placeholder="Enter Company Email"
            />
            {touched.companyEmail && errors.companyEmail && (
              <small className="errorMessage">{errors.companyEmail}</small>
            )}
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="companyContact">
              Company Contact <span className="required_sign">*</span>
            </label>
            <input
              type="tel"
              id="companyContact"
              maxlength="15"
              minlength="10"
              className="form-control create_lead_form_input"
              value={values.companyContact}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="companyContact"
              placeholder="Enter company contact"
            />
            {touched.companyContact && errors.companyContact && (
              <small className="errorMessage">{errors.companyContact}</small>
            )}
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="city">
              Address <span className="required_sign">*</span>
            </label>
            <input
              type="text"
              id="address"
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
            <FaTreeCity className="create_lead_input_icon" />
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
              placeholder="Please enter description"
            ></textarea>
            {touched.description && errors.description && (
              <small className="errorMessage">{errors.description}</small>
            )}
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

export default CreateContact;
