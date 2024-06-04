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
      dateOfIssue: "", // for date
      dateOfBilling: "", //new Date(Date.now()),
      dateOfShipment: "",
      description: "",
    },
    validationSchema: accountFormSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log("Enter Account Function");
        await createAccount(values, uid, setShowToast, tokenId);

        resetForm();
      } catch (error) {
        console.log("Did Not Create Account", error);
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
      <div className="create_lead_form_main_div ">
        <form onSubmit={handleSubmit}>
          {/* User Account Information */}
          <div className="row">
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="accountOwner">
                Account Owner <span className="required_sign">*</span>
              </label>
              <input
                type="text"
                id="accountOwner"
                className="form-control create_lead_form_input"
                value={values.accountOwner}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="accountOwner"
                placeholder="Enter owner name"
              />
              {touched.accountOwner && errors.accountOwner && (
                <small className="errorMessage">{errors.accountOwner}</small>
              )}
              <MdAdminPanelSettings className="create_lead_input_icon" />
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="accountName">
                Account Name <span className="required_sign">*</span>
              </label>
              <input
                type="text"
                id="accountName"
                className="form-control create_lead_form_input"
                value={values.accountName}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="accountName"
                placeholder="Enter account name"
              />
              {touched.accountName && errors.accountName && (
                <small className="errorMessage">{errors.accountName}</small>
              )}
              <FaUserTie className="create_lead_input_icon" />
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="accountSite">
                Account Site <span className="required_sign">*</span>
              </label>
              <input
                type="text"
                id="accountSite"
                className="form-control create_lead_form_input"
                value={values.accountSite}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="accountSite"
                placeholder="Enter account site"
              />
              {touched.accountSite && errors.accountSite && (
                <small className="errorMessage">{errors.accountSite}</small>
              )}
              <FaUserTie className="create_lead_input_icon" />
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="parentAccount">
                Parent Account <span className="required_sign">*</span>
              </label>
              <input
                type="text"
                id="parentAccount"
                className="form-control create_lead_form_input"
                value={values.parentAccount}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="parentAccount"
                placeholder="Enter a parent account"
              />
              {touched.parentAccount && errors.parentAccount && (
                <small className="errorMessage">{errors.parentAccount}</small>
              )}
              <MdEmail className="create_lead_input_icon" />
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="accountNumber">
                Account Number <span className="required_sign">*</span>
              </label>
              <input
                type="tel"
                id="accountNumber"
                className="form-control create_lead_form_input"
                value={values.accountNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                name="accountNumber"
                onFocus={handleFocus}
                placeholder="Enter account number"
              />
              {touched.accountNumber && errors.accountNumber && (
                <small className="errorMessage">{errors.accountNumber}</small>
              )}
              <FaPhone className="create_lead_input_icon" />
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="aadharNumber">
                Aadhar Number <span className="required_sign">*</span>
              </label>
              <input
                type="tel"
                id="aadharNumber"
                maxlength="12"
                minlength="12"
                className="form-control create_lead_form_input"
                value={values.aadharNumber}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="aadharNumber"
                placeholder="Enter adhar number"
              />
              {touched.aadharNumber && errors.aadharNumber && (
                <small className="errorMessage">{errors.aadharNumber}</small>
              )}
              <FaPhone className="create_lead_input_icon" />
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="panCardNumber">
                Pan Card Number <span className="required_sign">*</span>
              </label>
              <input
                type="text"
                id="panCardNumber"
                maxlength="10"
                minlength="10"
                className="form-control create_lead_form_input"
                value={values.panCardNumber}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="panCardNumber"
                placeholder="Enter pan card number"
              />
              {touched.panCardNumber && errors.panCardNumber && (
                <small className="errorMessage">{errors.panCardNumber}</small>
              )}
              <FaPhone className="create_lead_input_icon" />
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
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="accountType"
              >
                <option value="">
                  {/* {touched.accountType && errors.accountType ? (
                    <p className="text-danger">{errors.accountType}</p>
                  ) : (
                    "Select Account Type"
                  )} */}
                  Select Account Type
                </option>
                <option value="web-download">Client</option>
                <option value="web-search">Reseller</option>
                <option value="advertisement">Competator</option>
                <option value="employee-referral">Analyst</option>
              </select>
              {touched.accountType && errors.accountType && (
                <small className="errorMessage">{errors.accountType}</small>
              )}
              <MdKeyboardArrowDown className="create_lead_input_icon" />
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="industry">
                Industry <span className="required_sign">*</span>
              </label>
              <select
                id="industry"
                className="form-control"
                value={values.industry}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="industry"
              >
                <option value="">
                  {/* {touched.industry && errors.industry ? (
                    <p className="text-danger">{errors.industry}</p>
                  ) : (
                    "Select Industry"
                  )} */}
                  Select Industry
                </option>

                {/* <option value="lead">Select Lead Status</option> */}
                <option value="lead">Goverment</option>
                <option value="contacted">Private Sector</option>
                <option value="deal">ERP(Enterprises)</option>
              </select>
              {touched.industry && errors.industry && (
                <small className="errorMessage">{errors.industry}</small>
              )}
              <MdKeyboardArrowDown className="create_lead_input_icon" />
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="annualRevenue">
                Annual Revenue <span className="required_sign">*</span>
              </label>
              <input
                type="tel"
                id="annualRevenue"
                className="form-control create_lead_form_input"
                value={values.annualRevenue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="annualRevenue"
                placeholder="Enter annual revenue"
              />
              {touched.annualRevenue && errors.annualRevenue && (
                <small className="errorMessage">{errors.annualRevenue}</small>
              )}
              <FaPhone className="create_lead_input_icon" />
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="address">
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

              <MdAdminPanelSettings className="create_lead_input_icon" />
            </div>
          </div>
          {/* Billing Information */}
          <div className="row">
            <p className="create_lead_section2_company_info">
              Billing Information
            </p>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="billingAddress">
                Billing Address <span className="required_sign">*</span>
              </label>
              <input
                type="text"
                id="billingAddress"
                className="form-control create_lead_form_input"
                value={values.billingAddress}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="billingAddress"
                placeholder="Enter billing address"
              />
              {touched.billingAddress && errors.billingAddress && (
                <small className="errorMessage">{errors.billingAddress}</small>
              )}
              <BsCurrencyRupee className="create_lead_input_icon" />
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="billingCity">
                Billing City <span className="required_sign">*</span>
              </label>
              <input
                type="text"
                id="billingCity"
                className="form-control create_lead_form_input"
                value={values.billingCity}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="billingCity"
                placeholder="Enter billing City"
              />
              {touched.billingCity && errors.billingCity && (
                <small className="errorMessage">{errors.billingCity}</small>
              )}
              <BsBuildingsFill className="create_lead_input_icon" />
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="billingState">
                Billing State <span className="required_sign">*</span>
              </label>
              <input
                type="text"
                id="billingState"
                className="form-control create_lead_form_input"
                value={values.billingState}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="billingState"
                placeholder="Enter billing state"
              />
              {touched.billingState && errors.billingState && (
                <small className="errorMessage">{errors.billingState}</small>
              )}
              <MdEmail className="create_lead_input_icon" />
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="billingCode">
                Billing Code <span className="required_sign">*</span>
              </label>
              <input
                type="text"
                id="billingCode"
                maxlength="10"
                minlength="10"
                className="form-control create_lead_form_input"
                value={values.billingCode}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="billingCode"
                placeholder="Enter billing code"
              />
              {touched.billingCode && errors.billingCode && (
                <small className="errorMessage">{errors.billingCode}</small>
              )}
              <MdEmail className="create_lead_input_icon" />
            </div>
          </div>
          {/* Shipping Information */}
          <div className="row">
            <p className="create_lead_section2_company_info">
              Shipping Information
            </p>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="shippingStreet">
                Shipping Street <span className="required_sign">*</span>
              </label>
              <input
                type="text"
                id="shippingStreet"
                className="form-control create_lead_form_input"
                value={values.shippingStreet}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="shippingStreet"
                placeholder="Enter shipping street"
              />
              {touched.shippingStreet && errors.shippingStreet && (
                <small className="errorMessage">{errors.shippingStreet}</small>
              )}
              <BsCurrencyRupee className="create_lead_input_icon" />
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="shippingCity">
                Shipping City <span className="required_sign">*</span>
              </label>
              <input
                type="text"
                id="shippingCity"
                className="form-control create_lead_form_input"
                value={values.shippingCity}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="shippingCity"
                placeholder="Enter shipping city"
              />
              {touched.shippingCity && errors.shippingCity && (
                <small className="errorMessage">{errors.shippingCity}</small>
              )}
              <BsBuildingsFill className="create_lead_input_icon" />
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="shippingState">
                Shipping State <span className="required_sign">*</span>
              </label>
              <input
                type="text"
                id="shippingState"
                className="form-control create_lead_form_input"
                value={values.shippingState}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="shippingState"
                placeholder="Enter shipping state"
              />
              {touched.shippingState && errors.shippingState && (
                <small className="errorMessage">{errors.shippingState}</small>
              )}
              <MdEmail className="create_lead_input_icon" />
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="shippingCode">
                Shipping Code <span className="required_sign">*</span>
              </label>
              <input
                type="tel"
                id="shippingCode"
                maxlength="10"
                minlength="10"
                className="form-control create_lead_form_input"
                value={values.shippingCode}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="shippingCode"
                placeholder="Enter shipping code"
              />
              {touched.shippingCode && errors.shippingCode && (
                <small className="errorMessage">{errors.shippingCode}</small>
              )}
              <MdEmail className="create_lead_input_icon" />
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="shippingAddress">
                Shpping Address <span className="required_sign">*</span>
              </label>
              <input
                type="text"
                id="shippingAddress"
                className="form-control create_lead_form_input"
                value={values.shippingAddress}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="shippingAddress"
                placeholder="Enter shipping address"
              />
              {touched.shippingAddress && errors.shippingAddress && (
                <small className="errorMessage">{errors.shippingAddress}</small>
              )}
              <FaPhone className="create_lead_input_icon" />
            </div>
          </div>
          {/* Deal Information */}
          <div className="row">
            <p className="create_lead_section2_company_info">
              Deal Information
            </p>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="dateOfIssue">
                Date Of Issue <span className="required_sign">*</span>
              </label>
              <input
                type="date"
                id="dateOfIssue"
                className="form-control create_lead_form_input"
                value={values.dateOfIssue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="dateOfIssue"
              />
              {touched.dateOfIssue && errors.dateOfIssue && (
                <small className="errorMessage">{errors.dateOfIssue}</small>
              )}
              {/* <BsCurrencyRupee className="create_lead_input_icon" /> */}
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="dateOfBilling">
                Date Of Billing <span className="required_sign">*</span>
              </label>
              <input
                type="date"
                id="dateOfBilling"
                className="form-control create_lead_form_input"
                value={values.dateOfBilling}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="dateOfBilling"
                placeholder="Enter date of billing"
              />
              {touched.dateOfBilling && errors.dateOfBilling && (
                <small className="errorMessage">{errors.dateOfBilling}</small>
              )}
              {/* <BsCurrencyRupee className="create_lead_input_icon" /> */}
            </div>
            <div className="form-group createLeadInput col-xl-4">
              <label htmlFor="dateOfShipment">
                Date Of Shipment <span className="required_sign">*</span>
              </label>
              <input
                type="date"
                id="dateOfShipment"
                className="form-control create_lead_form_input"
                value={values.dateOfShipment}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="dateOfShipment"
                placeholder={
                  touched.dateOfShipment && errors.dateOfShipment
                    ? errors.dateOfShipment
                    : null
                }
              />
              {touched.dateOfShipment && errors.dateOfShipment && (
                <small className="errorMessage">{errors.dateOfShipment}</small>
              )}
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
              {touched.description && errors.description && (
                <small className="errorMessage">{errors.description}</small>
              )}
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
    </div>
  );
};

export default CreateAccount;
