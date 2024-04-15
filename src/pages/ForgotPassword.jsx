import React, { useState } from "react";
// css
import "../styles/signup.page.css";
import "../styles/forgot.page.css";
// React Icons
import { HiOutlineMail } from "react-icons/hi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
// React Router Dom
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [data, setData] = useState({
    email: "",
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
                        placeholder="name@example.com"
                        name="email"
                        value={data.email}
                        onChange={inputEvent}
                      />
                      <HiOutlineMail className="signup_input_icons forgot_input_icons" />
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

export default ForgotPassword;
