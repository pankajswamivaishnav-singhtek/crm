import React, { useState } from "react";
import LandingPageNavbar from "../components/LandingPageNavbar";
import "../styles/contactUs.css";
import Footer from "../components/Footer";
// Icons
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
// Toast
import Toast from "../components/Toast";
const ContactUs = () => {
  // Toast
  const [showToast, setShowToast] = useState(false);
  //Handle Form
  const [data, setData] = useState({
    fullName: "",
    email: "",
    number: "",
    subject: "",
    message: "",
    rules: false,
  });
  const handleInputChange = (event) => {
    const { name, value, checked, type } = event.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data and values", data);
  };

  return (
    <div className="contact-us-page">
      {/* First Part */}
      <div className="contact-us-first-part container-fluid">
        <LandingPageNavbar className="about-us-navbar" />
        <h2 className="about-us-about-text text-center">Contact Us</h2>
      </div>
      {/* Second Part */}
      <div className="container-fluid ">
        <form onSubmit={handleSubmit} className="contact-us-page-second-part">
          <div className="container ">
            <div className="row row-cols-xl-2 row-cols-md-2 row-cols-sm-1">
              {/* Name */}
              <div className="col d-flex flex-column contact-us-input-main-div">
                <label htmlFor="fullName"> Full Name</label>
                <input
                  type="text"
                  className="contact-us-input"
                  placeholder="John Doe"
                  id="fullName"
                  name="fullName"
                  value={data.fullName}
                  onChange={handleInputChange}
                />
                <FaRegUser className="contact-us-input-fullName" />
              </div>
              {/* Email */}
              <div className="col d-flex flex-column contact-us-input-main-div">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="contact-us-input"
                  placeholder="example@gmail.com"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleInputChange}
                />
                <MdOutlineEmail className="contact-us-input-email" />
              </div>
              {/* Phone Number */}
              <div className="col d-flex flex-column contact-us-input-main-div">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  className="contact-us-input"
                  placeholder="910145XXXX"
                  id="phone"
                  name="number"
                  value={data.number}
                  onChange={handleInputChange}
                />
                <IoIosPhonePortrait className="contact-us-input-email" />
              </div>
              {/* Subect */}
              <div className="col d-flex flex-column contact-us-input-main-div">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="contact-us-input"
                  placeholder="purchase"
                  id="subject"
                  name="subject"
                  value={data.subject}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row p-1">
              {/* text area */}
              <div className="col-12 d-flex flex-column">
                <label htmlFor="crm-textarea" className="mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="crm-textarea"
                  rows={5}
                  placeholder="Type here..."
                  value={data.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              {/* Check box term &condition */}
              <div className="col-12 d-flex">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="rules"
                  value={data.rules}
                  onChange={handleInputChange}
                />
                <p className="d-inline-block m-2 m-sm-3  contact-us-term-condition">
                  I agree to the <span>Terms</span> and{" "}
                  <span>Privacy Policy</span>
                </p>
              </div>
              {/* BTN */}
              <div className="col-12 mt-3">
                <button type="submit" className="contact-us-form-btn">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* Footer */}
      <Footer />
      <Toast showToast={showToast} setShowToast={setShowToast} />
    </div>
  );
};

export default ContactUs;
