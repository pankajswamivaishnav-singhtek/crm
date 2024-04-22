import React, { useState } from "react";
import { Link } from "react-router-dom";
// css
import "../styles/signup.page.css";
import "../styles/login.page.css";

// React Icons
import { HiOutlineMail } from "react-icons/hi";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoArrowBackCircleOutline } from "react-icons/io5";

// Formik
import { useFormik } from "formik";
import { loginFormSchema } from "../schema/FormValidation";

// Imags
import orLogin from "../images/orLogin.jpg";
import loginImg from "../images/login_img.png";
const Login = () => {
  // Form Handle & Validations
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },

      validationSchema: loginFormSchema,
      onSubmit: (values, { resetForm }) => {
        console.log("-----", values);
        resetForm();
        setShowToast(true);
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
    <div className="container-fluid signup_body_div">
      <div className="row">
        {/* Left Main Div Start*/}
        <div className="col-xl-6 col-md-6 col-sm-12">
          <div className="container signup_left_container login_left_container">
            <div id="signup_left_mainDiv" className="login_left_mainDiv">
              <form onSubmit={handleSubmit}>
                <Link to="/signup">
                  <IoArrowBackCircleOutline className="login_back_button" />
                </Link>
                <p className=" signup_text_in_signup_left_mainDiv">Log in</p>
                <div className="formGroup">
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
                  {/*Password */}
                  <div className="signup_input_div">
                    <div className="mb-3 position-relative">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label signup_div_input"
                      >
                        Password
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
                    <div>
                      <Link
                        className="login_forgot_password_link"
                        to="/forgotpassword"
                      >
                        <p className="login_forgot_password">
                          Forgot Password?
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="signup_submit_div">
                  <button type="submit" className=" signup_submit_button">
                    Login
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
                {/* Don't Have a account */}
                <div>
                  <p className="signup_already_have_account_text">
                    Don't have an account?
                    <span>
                      <Link
                        to="/signup"
                        className="signup_already_have_account_login_text"
                      >
                        Signup
                      </Link>
                    </span>
                  </p>
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
                      <strong className="me-auto">
                        Form Submitted Successfully
                      </strong>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setShowToast(false)}
                      />
                    </div>
                    <div className="toast-body">Sign In successfully.</div>
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
            <img src={loginImg} alt="signin_random_img" className="img-fluid" />
          </div>
        </div>
      </div>
      {/* Right Main Div End*/}
    </div>
  );
};

export default Login;
