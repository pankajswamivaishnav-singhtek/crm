import React, { useEffect, useState } from "react";
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
import { FaTreeCity } from "react-icons/fa6";
// Controller Api Methods
import { updateSingleAccount } from "../../controller/fetchApi";
// Import Toast
import Toast from "../../components/Toast"; 
const UpdateAccount = ({
  accountCostumerId,
  defaultValue,
  onUpdateSuccess,
}) => {
  // Toast Code
  const [showToast, setShowToast] = useState(false);
  // Get TokenId and Uid
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const accountId = JSON.parse(localStorage.getItem("accountId"));
  const tokenId = userIdTokenData?.data?.token;
  // Form Handle & Validations
  const formik = useFormik({
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
      leadId: "",
      shippingCode: "",
      shippingAddress: "",
      dateOfIssue: new Date(Date.now()), // for date
      dateOfBilling: new Date(Date.now()),
      dateOfShipment: new Date(Date.now()),
      description: "",
    },
    validationSchema: accountFormSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("Value", values);
      try {
        await updateSingleAccount(values, accountId, setShowToast, tokenId);
        onUpdateSuccess();
      } catch (error) {
        console.log("Did Not Create Account", error);
      }
    },
  });
  // Update Form Automatic Filled
  useEffect(() => {
    if (defaultValue) {
      formik.setValues({
        ...formik.values,
        accountOwner: defaultValue.accountOwner,
        accountName: defaultValue.accountName,
        accountSite: defaultValue.accountSite,
        parentAccount: defaultValue.parentAccount,
        accountNumber: defaultValue.accountNumber,
        aadharNumber: defaultValue.aadharCard,
        panCardNumber: defaultValue.panCard,
        accountType: defaultValue.accountType,
        industry: defaultValue.industry,
        annualRevenue: defaultValue.annualRevenue,
        address: defaultValue.addressInformation,
        leadId: defaultValue.leadId,
        billingAddress: defaultValue.billingAddress,
        billingCity: defaultValue.billingCity,
        billingState: defaultValue.billingState,
        billingCode: defaultValue.billingCode,
        shippingStreet: defaultValue.shippingStreet,
        shippingCity: defaultValue.shippingCity,
        shippingState: defaultValue.shippingState,
        shippingCode: defaultValue.shippingCode,
        shippingAddress: defaultValue.shippingAddress,
        dateOfIssue: defaultValue.dateOfIssue,
        dateOfBilling: defaultValue.dateOfBilling,
        dateOfShipment: defaultValue.dateOfShipment,
        description: defaultValue.dealDescription,
        // set other fields similarly
      });
    }
  }, [defaultValue]);
  return (
    <div className="create_lead_form_main_div">
      <form onSubmit={formik.handleSubmit}>
        {/* User Account Information */}
        <div className="row">
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountOwner">Account Owner</label>
            <input
              type="text"
              id="accountOwner"
              className="form-control create_lead_form_input"
              value={formik.values.accountOwner || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="accountOwner"
              placeholder={
                formik.touched.accountOwner && formik.errors.accountOwner
                  ? formik.errors.accountOwner
                  : null
              }
            />
            <MdAdminPanelSettings className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountName">Account Name</label>
            <input
              type="text"
              id="accountName"
              className="form-control create_lead_form_input"
              value={formik.values.accountName || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="accountName"
              placeholder={
                formik.touched.accountName && formik.errors.accountName
                  ? formik.errors.accountName
                  : null
              }
            />
            <FaUserTie className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountSite">Account Site</label>
            <input
              type="text"
              id="accountSite"
              className="form-control create_lead_form_input"
              value={formik.values.accountSite || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="accountSite"
              placeholder={
                formik.touched.accountSite && formik.errors.accountSite
                  ? formik.errors.accountSite
                  : null
              }
            />
            <FaUserTie className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="parentAccount">Parent Account</label>
            <input
              type="text"
              id="parentAccount"
              className="form-control create_lead_form_input"
              value={formik.values.parentAccount || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="parentAccount"
              placeholder={
                formik.touched.parentAccount && formik.errors.parentAccount
                  ? formik.errors.parentAccount
                  : null
              }
            />
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountNumber">Account Number</label>
            <input
              type="tel"
              id="accountNumber"
              className="form-control create_lead_form_input"
              value={formik.values.accountNumber || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="accountNumber"
              placeholder={
                formik.touched.accountNumber && formik.errors.accountNumber
                  ? formik.errors.accountNumber
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="aadharNumber">Aadhar Number</label>
            <input
              type="tel"
              id="aadharNumber"
              className="form-control create_lead_form_input"
              value={formik.values.aadharNumber || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="aadharNumber"
              placeholder={
                formik.touched.aadharNumber && formik.errors.aadharNumber
                  ? formik.errors.aadharNumber
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="panCardNumber">Pan Card Number</label>
            <input
              type="text"
              id="panCardNumber"
              className="form-control create_lead_form_input"
              value={formik.values.panCardNumber || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="panCardNumber"
              placeholder={
                formik.touched.panCardNumber && formik.errors.panCardNumber
                  ? formik.errors.panCardNumber
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="accountType">Account Type</label>
            <select
              id="accountType"
              className="form-control"
              value={formik.values.accountType || ""}
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
            <label htmlFor="industry">Industry</label>
            <select
              id="industry"
              className="form-control"
              value={formik.values.industry || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="industry"
            >
              <option value="">
                {formik.touched.industry && formik.errors.industry ? (
                  <p className="text-danger">{formik.errors.industry}</p>
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
            <label htmlFor="annualRevenue">Annual Revenue</label>
            <input
              type="tel"
              id="annualRevenue"
              className="form-control create_lead_form_input"
              value={formik.values.annualRevenue || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="annualRevenue"
              placeholder={
                formik.touched.annualRevenue && formik.errors.annualRevenue
                  ? formik.errors.annualRevenue
                  : null
              }
            />
            <FaPhone className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              className="form-control create_lead_form_input"
              value={formik.values.address || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="address"
              placeholder={
                formik.touched.address && formik.errors.address
                  ? formik.errors.address
                  : null
              }
            />
            <MdAdminPanelSettings className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="leadId">
              Lead Id <span className="required_sign">*</span>
            </label>
            <input
              type="tel"
              id="leadId"
              className="form-control create_lead_form_input"
              value={formik.values.leadId || ""}
              onChange={formik.handleChange}
              onFocus={formik.handleFocus}
              onBlur={formik.handleBlur}
              name="leadId"
              placeholder="Enter address"
            />
            {formik.touched.leadId && formik.errors.leadId && (
              <small className="errorMessage">{formik.errors.leadId}</small>
            )}
            <FaTreeCity className="create_lead_input_icon" />
          </div>
        </div>
        {/* Billing Information */}
        <div className="row">
          <p className="create_lead_section2_company_info">
            Billing Information
          </p>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="billingAddress">Billing Address</label>
            <input
              type="text"
              id="billingAddress"
              className="form-control create_lead_form_input"
              value={formik.values.billingAddress || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="billingAddress"
              placeholder={
                formik.touched.billingAddress && formik.errors.billingAddress
                  ? formik.errors.billingAddress
                  : null
              }
            />
            <BsCurrencyRupee className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="billingCity">Billing City</label>
            <input
              type="text"
              id="billingCity"
              className="form-control create_lead_form_input"
              value={formik.values.billingCity || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="billingCity"
              placeholder={
                formik.touched.billingCity && formik.errors.billingCity
                  ? formik.errors.billingCity
                  : null
              }
            />
            <BsBuildingsFill className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="billingState">Billing State</label>
            <input
              type="text"
              id="billingState"
              className="form-control create_lead_form_input"
              value={formik.values.billingState || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="billingState"
              placeholder={
                formik.touched.billingState && formik.errors.billingState
                  ? formik.errors.billingState
                  : null
              }
            />
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="billingCode">Billing Code</label>
            <input
              type="tel"
              id="billingCode"
              className="form-control create_lead_form_input"
              value={formik.values.billingCode || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="billingCode"
              placeholder={
                formik.touched.billingCode && formik.errors.billingCode
                  ? formik.errors.billingCode
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
            <label htmlFor="shippingStreet">Shipping Street</label>
            <input
              type="text"
              id="shippingStreet"
              className="form-control create_lead_form_input"
              value={formik.values.shippingStreet || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="shippingStreet"
              placeholder={
                formik.touched.shippingStreet && formik.errors.shippingStreet
                  ? formik.errors.shippingStreet
                  : null
              }
            />
            <BsCurrencyRupee className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="shippingCity">Shipping City</label>
            <input
              type="text"
              id="shippingCity"
              className="form-control create_lead_form_input"
              value={formik.values.shippingCity || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="shippingCity"
              placeholder={
                formik.touched.shippingCity && formik.errors.shippingCity
                  ? formik.errors.shippingCity
                  : null
              }
            />
            <BsBuildingsFill className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="shippingState">Shipping State</label>
            <input
              type="text"
              id="shippingState"
              className="form-control create_lead_form_input"
              value={formik.values.shippingState || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="shippingState"
              placeholder={
                formik.touched.shippingState && formik.errors.shippingState
                  ? formik.errors.shippingState
                  : null
              }
            />
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="shippingCode">Shipping Code</label>
            <input
              type="tel"
              id="shippingCode"
              className="form-control create_lead_form_input"
              value={formik.values.shippingCode || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="shippingCode"
              placeholder={
                formik.touched.shippingCode && formik.errors.shippingCode
                  ? formik.errors.shippingCode
                  : null
              }
            />
            <MdEmail className="create_lead_input_icon" />
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="shippingAddress">Shpping Address</label>
            <input
              type="text"
              id="shippingAddress"
              className="form-control create_lead_form_input"
              value={formik.values.shippingAddress || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="shippingAddress"
              placeholder={
                formik.touched.shippingAddress && formik.errors.shippingAddress
                  ? formik.errors.shippingAddress
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
            <label htmlFor="dateOfIssue">Date Of Issue</label>
            <input
              type="date"
              id="dateOfIssue"
              className="form-control create_lead_form_input"
              value={formik.values.dateOfIssue || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="dateOfIssue"
              placeholder={
                formik.touched.dateOfIssue && formik.errors.dateOfIssue
                  ? formik.errors.dateOfIssue
                  : null
              }
            />
            {/* <BsCurrencyRupee className="create_lead_input_icon" /> */}
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="dateOfBilling">Date Of Billing</label>
            <input
              type="date"
              id="dateOfBilling"
              className="form-control create_lead_form_input"
              value={formik.values.dateOfBilling || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="dateOfBilling"
              placeholder={
                formik.touched.dateOfBilling && formik.errors.dateOfBilling
                  ? formik.errors.dateOfBilling
                  : null
              }
            />
            {/* <BsCurrencyRupee className="create_lead_input_icon" /> */}
          </div>
          <div className="form-group createLeadInput col-xl-4">
            <label htmlFor="dateOfShipment">Date Of Shipment</label>
            <input
              type="date"
              id="dateOfShipment"
              className="form-control create_lead_form_input"
              value={formik.values.dateOfShipment || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="dateOfShipment"
              placeholder={
                formik.touched.dateOfShipment && formik.errors.dateOfShipment
                  ? formik.errors.dateOfShipment
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
              value={formik.values.description || ""}
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
        <div className="text-center mb-2">
          <button className="create_lead_form_submitBtn" type="submit">
            Update
          </button>
        </div>
      </form>
      <Toast showToast={showToast} setShowToast={setShowToast} />
    </div>
  );
};

export default UpdateAccount;
