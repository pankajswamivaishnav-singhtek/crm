import React, { useState } from "react";
// css
import "../styles/signup.page.css";
import "../styles/forgot.page.css";
import "../styles/otpVerification.page.css";
// React Icons
import { IoArrowBackCircleOutline } from "react-icons/io5";
// React Router Dom
import { Link } from "react-router-dom";

const OtpVerification = () => {
  const [data, setData] = useState({
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const finalOtp = data.digit1 + data.digit2 + data.digit3 + data.digit4;
    console.log(finalOtp);
  };

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
                        name="digit1"
                        value={data.digit1}
                        onChange={inputEvent}
                      />
                    </div>
                    <div className="col-3">
                      <input
                        className="otp-letter-input"
                        type="tel"
                        name="digit2"
                        value={data.digit2}
                        onChange={inputEvent}
                      />
                    </div>
                    <div className="col-3">
                      <input
                        className="otp-letter-input"
                        type="tel"
                        name="digit3"
                        value={data.digit3}
                        onChange={inputEvent}
                      />
                    </div>
                    <div className="col-3">
                      <input
                        className="otp-letter-input"
                        type="tel"
                        name="digit4"
                        value={data.digit4}
                        onChange={inputEvent}
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
          dd
        </div>
      </div>
      {/* Right Main Div End*/}
    </div>
  );
};

export default OtpVerification;
