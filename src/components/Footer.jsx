import React from "react";
// Import Images
import crmLandingImg2 from "../images/crmLandingLogo2.webp";
// React-Router-Dom
import { Link } from "react-router-dom";
// Icon
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { IoCallSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <>
      {/* Footer */}
      <div className="landingPageFooter">
        <div className="landingPageCrmLogo2 container-fluid ">
          {/* Upper Div */}
          <div className="landingPageFooterUpperDiv">
            <div className="row pt-3 justify-content-around">
              {/* First Column */}
              <div className=" col-sm-12 col-lg-3 col-md-3">
                <div className="landingLogoImg">
                  <Link to="/">
                    {" "}
                    <img
                      src={crmLandingImg2}
                      alt="crm logo"
                      className="img-fluid text-center"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="landingAboutPara">
                  <p className="text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus ipsam laudantium deserunt! Cupiditate, sed ipsa,
                    qui tenetur, itaque voluptate aut ab impedit dolor voluptas
                    excepturi.
                  </p>
                </div>
                <div className="landingPageSocialLink">
                  <FaLinkedin className="fs-2 mx-1 text-white" />
                  <FaSquareXTwitter className="fs-2 mx-1 text-white" />
                  <ImFacebook2 className="fs-3 mx-1 text-white" />
                </div>
              </div>
              {/* Second Column */}
              <div className="col-sm-12 col-lg-3 col-md-3 text-white landingPageFooterList ps-xl-5 ps-lg-5 m">
                <h3 className="">Quick Links</h3>
                <ul>
                  <Link to="/about-us" className="Footer_links">
                    <li>About Us</li>
                  </Link>
                  <Link to="/contact-us" className="Footer_links">
                    <li>Contact Us</li>
                  </Link>
                  <Link to="/career" className="Footer_links">
                    <li>Career</li>
                  </Link>
                  <Link to="/privacy&policies" className="Footer_links">
                    Privacy & Policies
                  </Link>
                </ul>
              </div>
              {/* Third Column */}

              {/* Third Column */}
              <div className="col-sm-12 col-lg-3 col-md-3  text-white landingPageFooterList ">
                <h3 className="ps-4 ">Contact Us</h3>
                <ul className="text-center">
                  <li>
                    <IoCallSharp />
                    &nbsp;&nbsp;+917745748855
                  </li>
                  <li>
                    <AiOutlineMail />
                    &nbsp;{" "}
                    <a
                      href="mailto:crm@yopmail.com"
                      className="landingPageLocationLink"
                    >
                      apna@spna.com
                    </a>
                  </li>
                  <li>
                    <IoLocationOutline />
                    &nbsp;{" "}
                    <a
                      href="https://maps.app.goo.gl/mJfhXUTs8shDSp8s9"
                      className="landingPageLocationLink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Jaipur, Office
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="text-white p-0" />
          <p className="text-center text-white m-0 pb-3">
            &copy; 2022 Apna CRM. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
