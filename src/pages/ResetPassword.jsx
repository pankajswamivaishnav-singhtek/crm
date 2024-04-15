import React, { useState } from "react";
import { Link } from "react-router-dom";
// css
import "../styles/signup.page.css";
import "../styles/login.page.css";
import "../styles/resetPassword.page.css";
// React Icons
import { FaEyeSlash } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const ResetPassword = () => {
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

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
                        placeholder="******"
                        name="password"
                        value={data.password}
                        onChange={inputEvent}
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
                        placeholder="******"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={inputEvent}
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

export default ResetPassword;
