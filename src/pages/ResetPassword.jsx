import React, { useState } from "react";
import { Link } from "react-router-dom";
// css
import "../styles/signup.page.css";
import "../styles/login.page.css";
import "../styles/resetPassword.page.css";
// React Icons
import { FaEyeSlash } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";

// Formik
import { useFormik } from "formik";
import { resetPasswordFormSchema } from "../schema/FormValidation";

// Images
import resetImg from "../images/reset_img.png";

const ResetPassword = () => {
  // Form Handle & Validations
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        password: "",
        confirmPassword: "",
      },

      validationSchema: resetPasswordFormSchema,
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
                <Link to="/forgotpassword">
                  <IoArrowBackCircleOutline className="login_back_button" />
                </Link>
                <p className=" signup_text_in_signup_left_mainDiv">
                  Reset Password
                </p>
                <div className="formGroup">
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
                        className="form-control signup_email_form_control reset_password_form_control"
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
                        className="form-control signup_email_form_control reset_password_form_control"
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
                    Login
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
                      <strong className="me-auto">
                        Form Submitted Successfully
                      </strong>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setShowToast(false)}
                      />
                    </div>
                    <div className="toast-body">
                      Update Password successfully.
                    </div>
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
            <img src={resetImg} alt="resetPassword_img" className="img-fluid" />
          </div>
        </div>
      </div>
      {/* Right Main Div End*/}
    </div>
  );
};

export default ResetPassword;
