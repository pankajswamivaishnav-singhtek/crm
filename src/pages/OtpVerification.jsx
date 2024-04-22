import React from "react";
// css
import "../styles/signup.page.css";
import "../styles/forgot.page.css";
import "../styles/otpVerification.page.css";
// React Icons
import { IoArrowBackCircleOutline } from "react-icons/io5";
// React Router Dom
import { Link } from "react-router-dom";

// Formik
import { useFormik } from "formik";
import { otpVerificationSchema } from "../schema/FormValidation";

// Images
import otpImg from "../images/otp_img.png";
const OtpVerification = () => {
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
      onSubmit: (values, { resetForm }) => {
        const finalOtp =
          values.digit1 + values.digit2 + values.digit3 + values.digit4;
        console.log("-----", finalOtp);
        resetForm();
      },
    });

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
                <div className="formGroup">
                  {/* Otp Verification */}
                  <div className="row pb-4">
                    <div className="col-3">
                      <input
                        className="otp-letter-input"
                        type="tel"
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
                <div>
                  <Link className="resend_otp_text_link">
                    <p id="resend_otp_text">Resend Code</p>
                  </Link>
                </div>
              </form>
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
      </div>
      {/* Right Main Div End*/}
    </div>
  );
};

export default OtpVerification;
