import React, { useState } from "react";
// css
import "../styles/signup.page.css";
// Formik
import { useFormik } from "formik";
import { signupFormSchema } from "../schema/FormValidation";
// React Icons
import { FcBusinessman } from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";
import { FcCellPhone } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
// import { FcGoogle } from "react-icons/fc";

// React Router Dom
import { Link, useNavigate } from "react-router-dom";
// Imags
// import orLogin from "../images/orLogin.jpg";
// import signupImg from "../images/signup_img.png";
// Import Api Function
import { signupUser } from "../controller/fetchApi";

const Signup = () => {
  // TokenId
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;
  const navigate = useNavigate();
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
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },

    validationSchema: signupFormSchema,
    onSubmit: async (values, { resetForm }) => {
      if (errors.confirmPassword) {
        setShowToast({ success: true, message: "password must match" });
      }
      console.log("-----", values);
      navigate("/otpverification", {
        state: {
          email: values.email,
          name: `${values.firstName} ${values.lastName}`,
        },
      });
      await signupUser(values, setShowToast, tokenId);

      resetForm();
    },
  });
  // Function to handle input focus
  const handleFocus = (e) => {
    const { name } = e.target;
    setFieldTouched(name, true);
  };
  // Show & Hide Password
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
      <div className="container-fluid signup_body_div">
        <div className="row">
          {/* Left Main Div Start*/}
          <div className="col-xl-12 col-md-12 col-sm-12">
            <div className="container signup_left_container">
              <div id="signup_left_mainDiv">
                <form onSubmit={handleSubmit}>
                  <p className=" signup_text_in_signup_left_mainDiv">Sign Up</p>
                  <div className="formGroup">
                    {/* Full Name */}
                    <div className="signup_fullname_div">
                      {/* first name */}
                      <div className="mb-xl-4 position-relative">
                        <label
                          htmlFor="signup_firstName"
                          className="form-label signup_div_name"
                        >
                          First Name <span className="required_sign">*</span>
                        </label>
                        <input
                          type="text"
                          className={`form-control signup_name_form_control`}
                          id="signup_firstName"
                          placeholder="Enter first name"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onFocus={handleFocus}
                        />
                        {touched.firstName && errors.firstName && (
                          <small className="errorMessageSignup">
                            {errors.firstName}
                          </small>
                        )}
                        <FcBusinessman className="signup_name_icons" />
                      </div>
                      {/* last name */}
                      <div className="mb-xl-4 position-relative">
                        <label
                          htmlFor="signup_lastName"
                          className="form-label signup_div_name"
                        >
                          Last Name <span className="required_sign">*</span>
                        </label>
                        <input
                          type="text"
                          className={`form-control signup_name_form_control`}
                          id="signup_lastName"
                          placeholder="Enter last name"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onFocus={handleFocus}
                        />
                        {touched.lastName && errors.lastName && (
                          <small className="errorMessageSignup ">
                            {errors.lastName}
                          </small>
                        )}
                        <FcBusinessman className="signup_name_icons" />
                      </div>
                    </div>
                    {/* UserName */}
                    <div className="signup_input_div ">
                      <div className="mb-xl-4 position-relative">
                        <label
                          htmlFor="signup_userName"
                          className="form-label signup_div_input"
                        >
                          Username <span className="required_sign">*</span>
                        </label>
                        <input
                          type="text"
                          className={`form-control signup_email_form_control userName_input_signup`}
                          id="signup_userName"
                          name="userName"
                          placeholder="Enter User name"
                          value={values.userName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onFocus={handleFocus}
                        />
                        {touched.userName && errors.userName && (
                          <small className="errorMessageSignup">
                            {errors.userName}
                          </small>
                        )}
                        <FcManager className="signup_input_icons" />
                      </div>
                    </div>
                    {/* Email */}
                    <div className="signup_input_div">
                      <div className="mb-xl-4 position-relative">
                        <label
                          htmlFor="signup_email"
                          className="form-label signup_div_input"
                        >
                          Email address <span className="required_sign">*</span>
                        </label>
                        <input
                          type="email"
                          className={`form-control signup_email_form_control`}
                          id="signup_email"
                          name="email"
                          placeholder="Enter email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onFocus={handleFocus}
                        />
                        {touched.email && errors.email && (
                          <small className="errorMessageSignup">
                            {errors.email}
                          </small>
                        )}
                        <FcFeedback className="signup_input_icons" />
                      </div>
                    </div>
                    {/* Phone */}
                    <div className="signup_input_div">
                      <div className="mb-xl-4 position-relative">
                        <label
                          htmlFor="signup_phone"
                          className="form-label signup_div_input"
                        >
                          Phone Number <span className="required_sign">*</span>
                        </label>
                        <input
                          type="tel"
                          minLength="10"
                          maxLength="12"
                          className={`form-control signup_email_form_control`}
                          id="signup_phone"
                          placeholder="Enter number"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onFocus={handleFocus}
                        />
                        {touched.phone && errors.phone && (
                          <small className="errorMessageSignup">
                            {errors.phone}
                          </small>
                        )}
                        <FcCellPhone className="signup_input_icons" />
                      </div>
                    </div>
                    {/* Create Password */}
                    <div className="signup_input_div">
                      <div className="mb-xl-4 position-relative">
                        <label
                          htmlFor="signup_password"
                          className="form-label signup_div_input"
                        >
                          Password <span className="required_sign">*</span>
                        </label>
                        <input
                          type={showPassword ? "password" : "text"}
                          minLength={6}
                          className={`form-control signup_email_form_control  `}
                          id="signup_password"
                          placeholder="Make password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          autoComplete=""
                          onFocus={handleFocus}
                        />
                        {touched.password && errors.password && (
                          <small className="errorMessageSignup">
                            {errors.password}
                          </small>
                        )}
                        {showPassword ? (
                          <p
                            className="signup_input_icons"
                            onClick={handleClickShowPassword}
                            style={{ cursor: "pointer" }}
                          >
                            🙈
                          </p>
                        ) : (
                          <p
                            className="signup_input_icons"
                            onClick={handleClickShowPassword}
                            style={{ cursor: "pointer" }}
                          >
                            🐵
                          </p>
                        )}
                      </div>
                    </div>
                    {/* Confirm Password */}
                    <div className="signup_input_div">
                      <div className="mb-4 position-relative">
                        <label
                          htmlFor="signup_confirm_password"
                          className="form-label signup_div_input"
                        >
                          Confirm Password
                          <span className="required_sign">*</span>
                        </label>
                        <input
                          type={showConfirmPassword ? "password" : "text"}
                          minLength={6}
                          className={`form-control signup_email_form_control `}
                          id="signup_confirm_password"
                          placeholder="Check password"
                          name="confirmPassword"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          autoComplete=""
                          onBlur={handleBlur}
                        />
                        {touched.confirmPassword && errors.confirmPassword && (
                          <small className="errorMessageSignup">
                            {errors.confirmPassword}
                          </small>
                        )}

                        {showConfirmPassword ? (
                          <p
                            className="signup_input_icons"
                            onClick={handleClickShowConfirmPassword}
                            style={{ cursor: "pointer" }}
                          >
                            🙈
                          </p>
                        ) : (
                          <p
                            className="signup_input_icons"
                            onClick={handleClickShowConfirmPassword}
                            style={{ cursor: "pointer" }}
                          >
                            🐵
                          </p>
                        )}
                      </div>
                      {/* <p
                        className={
                          errors.confirmPassword ? "cpasswordErrorPara" : ""
                        }
                      >
                        {errors.confirmPassword}
                      </p> */}
                    </div>
                  </div>
                  {/* Submit Button */}
                  <div className="signup_submit_div">
                    <button type="submit" className=" signup_submit_button">
                      Sign Up
                    </button>
                  </div>
                  {/* OR LOGIN */}
                  {/* <div className="orLogin_Img">
                    <img
                      src={orLogin}
                      alt="Or Login"
                      className="orLogin_img img-fluid"
                    />
                  </div> */}
                  {/* Google Login */}
                  {/* <div className="signup_google_div ">
                    <FcGoogle className="signup_google_icon" />
                  </div> */}
                  {/* Already Have a account */}
                  <div>
                    <p className="signup_already_have_account_text">
                      Already have an account?
                      <span>
                        <Link
                          to="/login"
                          className="signup_already_have_account_login_text"
                        >
                          Login
                        </Link>
                      </span>
                    </p>
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
                        <strong className="me-auto">
                          {/* Form Submitted Successfully */}
                          {showToast.success ? "Success" : "Error"}
                        </strong>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={() =>
                            setShowToast({ success: false, message: "" })
                          }
                        />
                      </div>
                      <div className="toast-body">{showToast.message}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Left Main End */}
          {/* Right Main Div */}
          {/* <div className="col-xl-6 col-md-12 col-sm-12 signup_right_bodyDiv">
            <div className="signup_right_mainDiv">
              <img src={signupImg} alt="signup-img" className="img-fluid" />
            </div>
          </div> */}
        </div>
        {/* Right Main Div End*/}
      </div>
    </>
  );
};

export default Signup;
