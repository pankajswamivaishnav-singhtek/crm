import React, { useState } from "react";
import { useFormik } from "formik";
// React Icon
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";
import { BsBuildingsFill } from "react-icons/bs";
import { accountFormSchema } from "../../schema/FormValidation";
// Controller Api Methods
import { createAccount } from "../../controller/fetchApi";
const CreateAccount = () => {
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
  // Get TokenId and Uid
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;

  // Form Handle & Validations
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        accountOwner: "",
        accountName: "",
        accountSite: "",
        parentAccount: "",
        accountNumber: "",
        aadharNumber: "",
        panCardNumber: "",
        accountType: "",
        industry: "",
        annualRevenue: "",
        address: "",
        billingAddress: "",
        billingCity: "",
        billingState: "",
        billingCode: "",
        shippingStreet: "",
        shippingCity: "",
        shippingState: "",
        shippingCode: "",
        shippingAddress: "",
        dateOfIssue: new Date(Date.now()), // for date
        dateOfBilling: new Date(Date.now()),
        dateOfShipment: new Date(Date.now()),
        description: "",
      },
      validationSchema: accountFormSchema,
      onSubmit: async (values, { resetForm }) => {
        try {
          console.log("Enter Account Function");
          const createSuccessfully = await createAccount(
            values,
            uid,
            setShowToast,
            tokenId
          );
          if (createSuccessfully) {
            resetForm();
          }
        } catch (error) {
          console.log("Did Not Create Account", error);
        }
      },
    });
  return (
    <div className="create_lead_form_main_div">
      <form onSubmit={handleSubmit}>
        {/* User Account Information */}
        <div className="row">
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountOwner">Account Owner <span className="required_sign">*</span></label>
            <input
              type="text"
              id="accountOwner"
              className="form-control create_lead_form_input"
              value={values.accountOwner}
              onChange={handleChange}
              onBlur={handleBlur}
              name="accountOwner"
              placeholder={
                touched.accountOwner && errors.accountOwner
                  ? errors.accountOwner
                  : null
              }
            />
            <MdAdminPanelSettings className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountName">Account Name <span className="required_sign">*</span></label>
            <input
              type="text"
              id="accountName"
              className="form-control create_lead_form_input"
              value={values.accountName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="accountName"
              placeholder={
                touched.accountName && errors.accountName
                  ? errors.accountName
                  : null
              }
            />
            <FaUserTie className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountSite">Account Site <span className="required_sign">*</span></label>
            <input
              type="text"
              id="accountSite"
              className="form-control create_lead_form_input"
              value={values.accountSite}
              onChange={handleChange}
              onBlur={handleBlur}
              name="accountSite"
              placeholder={
                touched.accountSite && errors.accountSite
                  ? errors.accountSite
                  : null
              }
            />
            <FaUserTie className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="parentAccount">Parent Account <span className="required_sign">*</span></label>
            <input
              type="text"
              id="parentAccount"
              className="form-control create_lead_form_input"
              value={values.parentAccount}
              onChange={handleChange}
              onBlur={handleBlur}
              name="parentAccount"
              placeholder={
                touched.parentAccount && errors.parentAccount
                  ? errors.parentAccount
                  : null
              }
            />
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountNumber">Account Number <span className="required_sign">*</span></label>
            <input
              type="tel"
              id="accountNumber"
              className="form-control create_lead_form_input"
              value={values.accountNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              name="accountNumber"
              placeholder={
                touched.accountNumber && errors.accountNumber
                  ? errors.accountNumber
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="aadharNumber">Aadhar Number <span className="required_sign">*</span></label>
            <input
              type="tel"
              id="aadharNumber"
              className="form-control create_lead_form_input"
              value={values.aadharNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              name="aadharNumber"
              placeholder={
                touched.aadharNumber && errors.aadharNumber
                  ? errors.aadharNumber
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="panCardNumber">Pan Card Number <span className="required_sign">*</span></label>
            <input
              type="text"
              id="panCardNumber"
              className="form-control create_lead_form_input"
              value={values.panCardNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              name="panCardNumber"
              placeholder={
                touched.panCardNumber && errors.panCardNumber
                  ? errors.panCardNumber
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountType">Account Type <span className="required_sign">*</span></label>
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
            <label htmlFor="industry">Industry <span className="required_sign">*</span></label>
            <select
              id="industry"
              className="form-control"
              value={values.industry}
              onChange={handleChange}
              onBlur={handleBlur}
              name="industry"
            >
              <option value="">
                {touched.industry && errors.industry ? (
                  <p className="text-danger">{errors.industry}</p>
                ) : (
                  "Select Industry"
                )}
              </option>

              {/* <option value="lead">Select Lead Status</option> */}
              <option value="lead">Goverment</option>
              <option value="contacted">Private Sector</option>
              <option value="deal">ERP(Enterprises)</option>
            </select>
            <MdKeyboardArrowDown className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="annualRevenue">Annual Revenue <span className="required_sign">*</span></label>
            <input
              type="tel"
              id="annualRevenue"
              className="form-control create_lead_form_input"
              value={values.annualRevenue}
              onChange={handleChange}
              onBlur={handleBlur}
              name="annualRevenue"
              placeholder={
                touched.annualRevenue && errors.annualRevenue
                  ? errors.annualRevenue
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="address">Address <span className="required_sign">*</span></label>
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
            <MdAdminPanelSettings className="create_lead_input_icon" />
          </div>
        </div>
        {/* Billing Information */}
        <div className="row">
          <p className="create_lead_section2_company_info">
            Billing Information
          </p>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="billingAddress">Billing Address <span className="required_sign">*</span></label>
            <input
              type="text"
              id="billingAddress"
              className="form-control create_lead_form_input"
              value={values.billingAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              name="billingAddress"
              placeholder={
                touched.billingAddress && errors.billingAddress
                  ? errors.billingAddress
                  : null
              }
            />
            <BsCurrencyRupee className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="billingCity">Billing City <span className="required_sign">*</span></label>
            <input
              type="text"
              id="billingCity"
              className="form-control create_lead_form_input"
              value={values.billingCity}
              onChange={handleChange}
              onBlur={handleBlur}
              name="billingCity"
              placeholder={
                touched.billingCity && errors.billingCity
                  ? errors.billingCity
                  : null
              }
            />
            <BsBuildingsFill className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="billingState">Billing State <span className="required_sign">*</span></label>
            <input
              type="text"
              id="billingState"
              className="form-control create_lead_form_input"
              value={values.billingState}
              onChange={handleChange}
              onBlur={handleBlur}
              name="billingState"
              placeholder={
                touched.billingState && errors.billingState
                  ? errors.billingState
                  : null
              }
            />
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="billingCode">Billing Code <span className="required_sign">*</span></label>
            <input
              type="tel"
              id="billingCode"
              className="form-control create_lead_form_input"
              value={values.billingCode}
              onChange={handleChange}
              onBlur={handleBlur}
              name="billingCode"
              placeholder={
                touched.billingCode && errors.billingCode
                  ? errors.billingCode
                  : null
              }
            />
            <MdEmail className="create_lead_input_icon" />
          </div>
        </div>
        {/* Shipping Information */}
        <div className="row">
          <p className="create_lead_section2_company_info">
            Shipping Information 
          </p>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="shippingStreet">Shipping Street <span className="required_sign">*</span></label>
            <input
              type="text"
              id="shippingStreet"
              className="form-control create_lead_form_input"
              value={values.shippingStreet}
              onChange={handleChange}
              onBlur={handleBlur}
              name="shippingStreet"
              placeholder={
                touched.shippingStreet && errors.shippingStreet
                  ? errors.shippingStreet
                  : null
              }
            />
            <BsCurrencyRupee className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="shippingCity">Shipping City <span className="required_sign">*</span></label>
            <input
              type="text"
              id="shippingCity"
              className="form-control create_lead_form_input"
              value={values.shippingCity}
              onChange={handleChange}
              onBlur={handleBlur}
              name="shippingCity"
              placeholder={
                touched.shippingCity && errors.shippingCity
                  ? errors.shippingCity
                  : null
              }
            />
            <BsBuildingsFill className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="shippingState">Shipping State <span className="required_sign">*</span></label>
            <input
              type="text"
              id="shippingState"
              className="form-control create_lead_form_input"
              value={values.shippingState}
              onChange={handleChange}
              onBlur={handleBlur}
              name="shippingState"
              placeholder={
                touched.shippingState && errors.shippingState
                  ? errors.shippingState
                  : null
              }
            />
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="shippingCode">Shipping Code <span className="required_sign">*</span></label>
            <input
              type="tel"
              id="shippingCode"
              className="form-control create_lead_form_input"
              value={values.shippingCode}
              onChange={handleChange}
              onBlur={handleBlur}
              name="shippingCode"
              placeholder={
                touched.shippingCode && errors.shippingCode
                  ? errors.shippingCode
                  : null
              }
            />
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="shippingAddress">Shpping Address <span className="required_sign">*</span></label>
            <input
              type="text"
              id="shippingAddress"
              className="form-control create_lead_form_input"
              value={values.shippingAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              name="shippingAddress"
              placeholder={
                touched.shippingAddress && errors.shippingAddress
                  ? errors.shippingAddress
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
        </div>
        {/* Deal Information */}
        <div className="row">
          <p className="create_lead_section2_company_info">Deal Information</p>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="dateOfIssue">Date Of Issue <span className="required_sign">*</span></label>
            <input
              type="date"
              id="dateOfIssue"
              className="form-control create_lead_form_input"
              value={values.dateOfIssue}
              onChange={handleChange}
              onBlur={handleBlur}
              name="dateOfIssue"
              placeholder={
                touched.dateOfIssue && errors.dateOfIssue
                  ? errors.dateOfIssue
                  : null
              }
            />
            {/* <BsCurrencyRupee className="create_lead_input_icon" /> */}
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="dateOfBilling">Date Of Billing <span className="required_sign">*</span></label>
            <input
              type="date"
              id="dateOfBilling"
              className="form-control create_lead_form_input"
              value={values.dateOfBilling}
              onChange={handleChange}
              onBlur={handleBlur}
              name="dateOfBilling"
              placeholder={
                touched.dateOfBilling && errors.dateOfBilling
                  ? errors.dateOfBilling
                  : null
              }
            />
            {/* <BsCurrencyRupee className="create_lead_input_icon" /> */}
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="dateOfShipment">Date Of Shipment <span className="required_sign">*</span></label>
            <input
              type="date"
              id="dateOfShipment"
              className="form-control create_lead_form_input"
              value={values.dateOfShipment}
              onChange={handleChange}
              onBlur={handleBlur}
              name="dateOfShipment"
              placeholder={
                touched.dateOfShipment && errors.dateOfShipment
                  ? errors.dateOfShipment
                  : null
              }
            />
            {/* <BsCurrencyRupee className="create_lead_input_icon" /> */}
          </div>
        </div>
        {/* Description */}
        <div className="row">
          <p className="create_lead_section2_description">Description</p>
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
        <div className="text-center mb-2">
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

export default CreateAccount;
