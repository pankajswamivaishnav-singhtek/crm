import React, { useState } from "react";
// css
import "../styles/signup.page.css";
// Formik
import { useFormik } from "formik";
import { signupFormSchema } from "../schema/FormValidation";
// React Icons
import { LuUserCircle } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
// React Router Dom
import { Link, useNavigate } from "react-router-dom";
// Imags
import orLogin from "../images/orLogin.jpg";
import signupImg from "../images/signup_img.png";
// Import Api Function
import { signupUser } from "../controller/fetchApi";

const Signup = () => {
  const navigate = useNavigate();

  // Form Handle & Validations
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
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
        console.log("-----", values);
        const signupSuccessFully = await signupUser(values, setShowToast);
        if (signupSuccessFully) {
          navigate("/dashboard");
        }
        resetForm();
      },
    });
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

  return (
    <>
      <div className="container-fluid signup_body_div">
        <div className="row">
          {/* Left Main Div Start*/}
          <div className="col-xl-6 col-md-6 col-sm-12">
            <div className="container signup_left_container">
              <div id="signup_left_mainDiv">
                <form onSubmit={handleSubmit}>
                  <p className=" signup_text_in_signup_left_mainDiv">Sign Up</p>
                  <div className="formGroup">
                    {/* Full Name */}
                    <div className="signup_fullname_div">
                      {/* first name */}
                      <div className="mb-3 position-relative">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label signup_div_name"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control signup_name_form_control"
                          id="exampleFormControlInput1"
                          placeholder={
                            touched.firstName && errors.firstName
                              ? errors.firstName
                              : "John"
                          }
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <LuUserCircle className="signup_name_icons" />
                      </div>
                      {/* last name */}
                      <div className="mb-3 position-relative">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label signup_div_name"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control signup_name_form_control"
                          id="exampleFormControlInput1"
                          placeholder={
                            touched.lastName && errors.lastName
                              ? errors.lastName
                              : "Doe"
                          }
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <LuUserCircle className="signup_name_icons" />
                      </div>
                    </div>
                    {/* UserName */}
                    <div className="signup_input_div ">
                      <div className="mb-3 position-relative">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label signup_div_input"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control signup_email_form_control userName_input_signup"
                          id="exampleFormControlInput1"
                          name="userName"
                          placeholder={
                            touched.userName && errors.userName
                              ? errors.userName
                              : "Johndoe123"
                          }
                          value={values.userName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <HiOutlineMail className="signup_input_icons" />
                      </div>
                    </div>
                    {/* Email */}
                    <div className="signup_input_div">
                      <div className="mb-3 position-relative">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label signup_div_input"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control signup_email_form_control"
                          id="exampleFormControlInput1"
                          name="email"
                          placeholder={
                            touched.email && errors.email
                              ? errors.email
                              : "email@example.com"
                          }
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <HiOutlineMail className="signup_input_icons" />
                      </div>
                    </div>
                    {/* Phone */}
                    <div className="signup_input_div">
                      <div className="mb-3 position-relative">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label signup_div_input"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control signup_email_form_control"
                          id="exampleFormControlInput1"
                          placeholder={
                            touched.phone && errors.phone
                              ? errors.phone
                              : "0145707327"
                          }
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FiPhone className="signup_input_icons" />
                      </div>
                    </div>
                    {/* Create Password */}
                    <div className="signup_input_div">
                      <div className="mb-3 position-relative">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label signup_div_input"
                        >
                          Create Password
                        </label>
                        <input
                          type="password"
                          className="form-control signup_email_form_control"
                          id="exampleFormControlInput1"
                          placeholder={
                            touched.password && errors.password
                              ? errors.password
                              : "*****"
                          }
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FaEyeSlash className="signup_input_icons" />
                      </div>
                    </div>
                    {/* Confirm Password */}
                    <div className="signup_input_div">
                      <div className="mb-3 position-relative">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label signup_div_input"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control signup_email_form_control 
                          "
                          id="exampleFormControlInput1"
                          placeholder={
                            touched.confirmPassword && errors.confirmPassword
                              ? errors.confirmPassword
                              : "*****"
                          }
                          name="confirmPassword"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FaEyeSlash className="signup_input_icons" />
                      </div>
                    </div>
                  </div>
                  {/* Submit Button */}
                  <div className="signup_submit_div">
                    <button type="submit" className=" signup_submit_button">
                      Sign Up
                    </button>
                  </div>
                  {/* OR LOGIN */}
                  <div className="orLogin_Img">
                    <img
                      src={orLogin}
                      alt="Or Login"
                      className="orLogin_img img-fluid"
                    />
                  </div>
                  {/* Google Login */}
                  <div className="signup_google_div ">
                    <FcGoogle className="signup_google_icon" />
                  </div>
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
          <div className="col-xl-6 col-md-6 col-sm-12 signup_right_bodyDiv">
            <div className="signup_right_mainDiv">
              <img src={signupImg} alt="signup-img" className="img-fluid" />
            </div>
          </div>
        </div>
        {/* Right Main Div End*/}
      </div>
    </>
  );
};

export default Signup;
