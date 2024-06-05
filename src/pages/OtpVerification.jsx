import React, { useEffect, useState } from "react";
// css
import "../styles/signup.page.css";
import "../styles/forgot.page.css";
import "../styles/otpVerification.page.css";
// React Icons
import { IoArrowBackCircleOutline } from "react-icons/io5";
// React Router Dom
import { Link, useNavigate, useLocation } from "react-router-dom";
// Formik
import { useFormik } from "formik";
import { otpVerificationSchema } from "../schema/FormValidation";
// Images
import otpImg from "../images/otp_img.png";
// Import Controller Methods
import { otpVerification, resendOtp } from "../controller/fetchApi";
const OtpVerification = () => {
  // Toast
  const [showToast, setShowToast] = useState({ success: false, message: "" });
  // Function to hide the toast after 3 seconds
  const hideToast = () => {
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };
  if (showToast) {
    hideToast();
  }

  const navigate = useNavigate();
  // Get Name & Email From Signup
  const location = useLocation();
  const [gmail, setGmail] = useState();
  const [newName, setName] = useState();
  const { email, name } = location.state || {};
  // Form Handle & Validations
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        digit1: "",
        digit2: "",
        digit3: "",
        digit4: "",
      },

      validationSchema: otpVerificationSchema,
      onSubmit: async (values, { resetForm }) => {
        const finalOtp =
          values.digit1 + values.digit2 + values.digit3 + values.digit4;
        console.log("-----", finalOtp);
        const finalValue = {
          otp: finalOtp,
          email: gmail,
        };
        console.log("finalOtp", finalValue);
        const verifySuccessFully = await otpVerification(
          finalValue,
          setShowToast
        );
        console.log("verifySuccessFully", verifySuccessFully?.data?.status);
        if (verifySuccessFully?.data?.status === 200) {
          setTimeout(() => {
            navigate("/dashboard");
          }, 1000);
        }
        resetForm();
      },
    });
  //  Resend Otp Function
  const resendOtpAgain = async (email, name) => {
    console.log("Email", email);
    setGmail(email);
    setName(name);
    await resendOtp(email);
  };

  useEffect(() => {
    setGmail(email);
    setName(name);
  }, [email, name]);

  return (
    <div className="container-fluid signup_body_div">
      <div className="row">
        {/* Left Main Div Start*/}
        <div className="col-xl-6 col-md-6 col-sm-12">
          <div className="container signup_left_container forgot_left_container">
            <div id="signup_left_mainDiv" className="forgot_left_mainDiv">
              <form onSubmit={handleSubmit}>
                <Link to="/forgotpassword">
                  <IoArrowBackCircleOutline className="login_back_button" />
                </Link>
                <p className=" signup_text_in_signup_left_mainDiv otp_text_in_otp_left_mainDiv">
                  OTP Verification
                </p>
                <div className="otp_verification_small_text">
                  <small>{`${name || newName} please check ${
                    email || gmail
                  } Email`}</small>
                </div>
                <div className="formGroup">
                  {/* Otp Verification */}
                  <div className="row pb-4 otp_verification_row">
                    <div className="col-3">
                      <input
                        className="otp-letter-input"
                        type="tel"
                        maxLength={1}
                        placeholder={
                          touched.digit1 && errors.digit1 ? errors.digit1 : null
                        }
                        name="digit1"
                        value={values.digit1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="col-3">
                      <input
                        className="otp-letter-input"
                        type="tel"
                        maxLength={1}
                        placeholder={
                          touched.digit2 && errors.digit2 ? errors.digit2 : null
                        }
                        name="digit2"
                        value={values.digit2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="col-3">
                      <input
                        className="otp-letter-input"
                        type="tel"
                        maxLength={1}
                        placeholder={
                          touched.digit3 && errors.digit3 ? errors.digit3 : null
                        }
                        name="digit3"
                        value={values.digit3}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="col-3">
                      <input
                        className="otp-letter-input"
                        type="tel"
                        maxLength={1}
                        placeholder={
                          touched.digit4 && errors.digit4 ? errors.digit4 : null
                        }
                        name="digit4"
                        value={values.digit4}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="signup_submit_div">
                  <button type="submit" className=" signup_submit_button">
                    Submit
                  </button>
                </div>
              </form>
              {/* Resend Otp OR Code */}
              <div>
                <Link
                  className="resend_otp_text_link"
                  onClick={() => resendOtpAgain(email, name)}
                >
                  <p id="resend_otp_text">Resend Code</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Left Main End */}
        {/* Right Main Div */}
        <div className="col-xl-6 col-md-6 col-sm-12 signup_right_bodyDiv">
          <div className="signup_right_mainDiv">
            <img src={otpImg} alt="otp_img" className="img-fluid" />
          </div>
        </div>
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
                  onClick={() => setShowToast({ success: false, message: "" })}
                />
              </div>
              <div className="toast-body">{showToast.message}</div>
            </div>
          </div>
        )}
      </div>
      {/* Right Main Div End*/}
    </div>
  );
};

export default OtpVerification;
