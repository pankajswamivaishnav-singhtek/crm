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
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
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

  return (
    <div className="container-fluid dashboard_create_lead_main_container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <p className="create_lead_section2_company_info mt-3">
            Company Details
          </p>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              className="form-control create_lead_form_input"
              value={values.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="companyName"
              placeholder={
                touched.companyName && errors.companyName
                  ? errors.companyName
                  : null
              }
            />
            <BsBuildingsFill className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="companyEmail">Company Email</label>
            <input
              type="email"
              id="companyEmail"
              className="form-control create_lead_form_input"
              value={values.companyEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              name="companyEmail"
              placeholder={
                touched.companyEmail && errors.companyEmail
                  ? errors.companyEmail
                  : null
              }
            />
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="companyContact">Company Contact</label>
            <input
              type="tel"
              id="companyContact"
              className="form-control create_lead_form_input"
              value={values.companyContact}
              onChange={handleChange}
              onBlur={handleBlur}
              name="companyContact"
              placeholder={
                touched.companyContact && errors.companyContact
                  ? errors.companyContact
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="city">Address</label>
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

export default CreateContact;
