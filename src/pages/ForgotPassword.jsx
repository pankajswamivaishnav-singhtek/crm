import React, { useState } from "react";
// css
import "../styles/signup.page.css";
import "../styles/forgot.page.css";
// React Icons
import { HiOutlineMail } from "react-icons/hi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
// React Router Dom
import { Link } from "react-router-dom";

// Formik
import { useFormik } from "formik";
import { forgotPasswordFormSchema } from "../schema/FormValidation";

// Images
import forgotPasswordImg from "../images/forgot_password.png";

// Api Calls And Functions
import { forgotPassword } from "../controller/fetchApi";

const ForgotPassword = () => {
  const [loader, setLoader] = useState(false);
  // Form Handle & Validations
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },

      validationSchema: forgotPasswordFormSchema,
      onSubmit: async (values, { resetForm }) => {
        try {
          console.log("-----", values);
          setLoader(true);
          const sentEmailSuccessFully = await forgotPassword(
            values.email,
            setShowToast
          );
          if (sentEmailSuccessFully) {
            resetForm();
            setLoader(false);
          }
        } catch (error) {
          setLoader(false);
        }
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
          <div className="container signup_left_container forgot_left_container">
            <div id="signup_left_mainDiv" className="forgot_left_mainDiv">
              <form onSubmit={handleSubmit}>
                <Link to="/login">
                  <IoArrowBackCircleOutline className="login_back_button" />
                </Link>
                <p className=" signup_text_in_signup_left_mainDiv">
                  Forgot Password
                </p>
                <div className="formGroup">
                  {/* Email */}
                  {loader ? (
                    <p className="signup_div_input">
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Loading...
                    </p>
                  ) : (
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
                          className="form-control signup_email_form_control forgot_email_form_control"
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
                        <HiOutlineMail className="signup_input_icons forgot_input_icons" />
                      </div>
                    </div>
                  )}
                </div>
                {/* Submit Button */}
                <div className="signup_submit_div">
                  <button type="submit" className=" signup_submit_button">
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
                      <strong className="me-auto">
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
            <img
              src={forgotPasswordImg}
              alt="forgotPassword_img"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      {/* Right Main Div End*/}
    </div>
  );
};

export default ForgotPassword;
