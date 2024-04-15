import React, { useState } from "react";
// css
import "../styles/signup.page.css";
// React Icons
import { LuUserCircle } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

// React Router Dom
import { Link } from "react-router-dom";
// Imags
import orLogin from "../images/orLogin.jpg";
import DashboardNavbar from "../components/common/DashboardNavbar";
const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
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
    <>
      <DashboardNavbar />
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
                          placeholder="John Smith"
                          name="firstName"
                          value={data.firstName}
                          onChange={inputEvent}
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
                          placeholder="Vaishnav"
                          name="lastName"
                          value={data.lastName}
                          onChange={inputEvent}
                        />
                        <LuUserCircle className="signup_name_icons" />
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
                          placeholder="name@example.com"
                          name="email"
                          value={data.email}
                          onChange={inputEvent}
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
                          placeholder="70732010800"
                          name="phone"
                          value={data.phone}
                          onChange={inputEvent}
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
                          className="form-control signup_email_form_control"
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
    </>
  );
};

export default Signup;
