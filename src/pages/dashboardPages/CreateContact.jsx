import React, { useState } from "react";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
// Import React Icon
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { FaTreeCity } from "react-icons/fa6";
import { ContactFormSchema } from "../../schema/FormValidation";
// Import api function from controller
import { createContact } from "../../controller/fetchApi";
// Import Toast
import Toast from "../../components/Toast";
const CreateContact = () => {
  // Get LeadId
  const location = useLocation();
  const leadId = location.state?.leadId;
  // Start Toast Code -------
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

  // Get User details from local storage
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
      leadId: leadId,
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
        <div>
          <p className="create_lead_section2_company_info mt-3">
            Company Details
          </p>
        </div>
        {/* Company Information */}
        <div className="row">
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
      <Toast showToast={showToast} setShowToast={setShowToast} />
    </div>
  );
};

export default CreateContact;
