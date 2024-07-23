import React from "react";
// Import CSS
import "../styles/landingPage.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { FaRegAddressCard } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { PiBriefcaseLight } from "react-icons/pi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { LuNewspaper } from "react-icons/lu";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaStar, FaRegStar, FaArrowLeft, FaQuoteLeft } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
// Import Images
import crmLandingImg from "../images/crmLandingLogo.png";
import crmLandingIcon1 from "../images/icon1.png";
import crmLandingIcon2 from "../images/icon2.png";
import crmLandingIcon3 from "../images/arrowIcon.png";
import crmLandingImg2 from "../images/crmLandingLogo2.png";
const LandingPage = () => {
  return (
    <div className="landingPage">
      {/* First Part */}
      <div className="landingPageFirstPart">
        <div className="landingPageFirstPartLoginBtnDiv container">
          <div className="landingPageFirstPartLoginBtnDivLogo float-start">
            <img src={crmLandingImg} alt="crm-logo-img" className="img-fluid" />
          </div>
          <div className="landingPageFirstPartLoginBtnDiv2 float-end">
            <Link to="/login">
              <button className="landingPageFirstPartLoginBtn">Login</button>
            </Link>
          </div>
        </div>
        <div className="landingPageTitleDiv">
          <div className="landingPageTitleDivIcon1 ">
            <img
              src={crmLandingIcon1}
              alt="random_icon"
              className="img-fluid"
            />
          </div>
          <p className="landingPageTitleDivPara">
            Smart <span className="landingPageTitleDivSpan1">CRM </span> for a
            Smart <span className="landingPageTitleDivSpan2">Business</span>
          </p>

          <div className="landingPageSlogan">
            <p>"Seamless Solutions for Stronger Relationships."</p>
          </div>
          <div className="landingPageTryBtnDiv">
            <button className="landingPageTryBtn">
              Try For Free <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="landingPageTitleDivIcon2 ">
          <img src={crmLandingIcon2} alt="random_icon" className="img-fluid" />
        </div>
        <div className="landingPageTitleDivIcon3 ">
          <img src={crmLandingIcon3} alt="random_icon" className="img-fluid" />
        </div>
      </div>
      {/* Second Part About Us */}
      <div className="landingPageSecondPart container">
        <h2 className="landingPageSecondPartHeading">About Us</h2>
        <p className="landingPageSecondPartPara">
          <span>C</span>
          <sub>RM</sub> stands for customer relationship management. As its name
          suggests, CRM software is a system for managing customer
          relationships. For many businesses, their most valuable and important
          asset is their customers. In the past, companies kept their contact
          information scattered across business cards, email records, and
          spreadsheets. But as businesses expand and change, having a central
          database for customer information becomes essential.Your prospects and
          customers will feel the pain when your team isn’t on the same page.
          From their perspective, they have a relationship with one company, not
          a collection of different people and departments. Everyone on your
          team needs context about every customer’s needs, wants, and current
          state so they can pick up the conversation where it left off.Having
          one central place to organize all lead and customer details makes it
          easy for your entire team to gain insight into your business and
          customer relationships.
        </p>
      </div>
      {/* Third Part Our Features */}
      <div className="landingPageThirdPart container">
        <div className="landingPageThirdPartHeadings">
          <h2>Our Features</h2>
          <p>"Seamless Solutions for Stronger Relationships."</p>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {/* firstCard */}
            <div className="col mb-4">
              <div className="card mx-2 landingPageThirdPartCard">
                <FaUserCircle className="fs-3 landingPageThirdPartCardIcon" />
                <div className="card-body">
                  <h5 className="card-title text-center">User Management</h5>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* secondCard */}
            <div className="col mb-4">
              <div className="card mx-2 landingPageThirdPartCard">
                <SiGoogleads className="fs-3 landingPageThirdPartCardIcon" />
                <div className="card-body">
                  <h5 className="card-title text-center">Lead Management</h5>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* thirdCard */}
            <div className="col mb-4">
              <div className="card mx-2 landingPageThirdPartCard">
                <FaRegAddressCard className="fs-3 landingPageThirdPartCardIcon" />
                <div className="card-body">
                  <h5 className="card-title text-center">Contact Management</h5>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* fourthCard */}
            <div className="col mb-4">
              <div className="card mx-2 landingPageThirdPartCard">
                <IoCallSharp className="fs-3 landingPageThirdPartCardIcon" />
                <div className="card-body">
                  <h5 className="card-title text-center">Call Management</h5>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* fifthCard */}
            <div className="col mb-4">
              <div className="card mx-2 landingPageThirdPartCard">
                <PiBriefcaseLight className="fs-3 landingPageThirdPartCardIcon" />
                <div className="card-body">
                  <h5 className="card-title text-center">Deal Management</h5>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* sixthCard */}
            <div className="col mb-4">
              <div className="card mx-2 landingPageThirdPartCard">
                <RiAccountPinCircleFill className="fs-3 landingPageThirdPartCardIcon" />
                <div className="card-body">
                  <h5 className="card-title text-center">Account Management</h5>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* seventhCard */}
            <div className="col mb-4">
              <div className="card mx-2 landingPageThirdPartCard">
                <LuNewspaper className="fs-3 landingPageThirdPartCardIcon" />
                <div className="card-body">
                  <h5 className="card-title text-center">Task Management</h5>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* eighthCard */}
            <div className="col mb-4">
              <div className="card mx-2 landingPageThirdPartCard">
                <HiOutlineDocumentReport className="fs-3 landingPageThirdPartCardIcon" />
                <div className="card-body">
                  <h5 className="card-title text-center">Report Management</h5>
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fourth Part Our Features */}
      <div className="landingpageFourthPart">
        <div className="landingpageFourthPartMainDiv container">
          <h2 className="text-center p-3 landingpageFourthPartMainDivHeading">
            Our Costumer
          </h2>
          <div className="custom-carousel landingpageFourthPartCarouselDiv">
            {/* Carousel wrapper */}
            <div
              id="carouselExampleControls"
              className="carousel slide text-center carousel-dark"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {/* First item */}
                <div className="carousel-item active">
                  <img
                    className="rounded-circle shadow-1-strong mb-4 img-fluid"
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D" // Placeholder image URL
                    style={{ width: "100px", height: "100px" }}
                    alt="Sample Position Img"
                  />
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                      <h5 className="mb-3 landingpageFourthPartCarouselDivHeading">
                        John Doe
                      </h5>
                      <p className="landingpageFourthPartCarouselDivHeading">
                        <i className="fas fa-quote-left pe-2" />
                        This is a sample testimonial content for testing
                        purposes. It gives an idea of how the actual content
                        will look like.
                      </p>
                    </div>
                  </div>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <FaStar className="fa-sm" />
                    </li>
                    <li>
                      <FaStar className="fa-sm" />
                    </li>
                    <li>
                      <FaStar className="fa-sm" />
                    </li>
                    <li>
                      <FaStar className="fa-sm" />
                    </li>
                    <li>
                      <FaRegStar className="fa-sm" />
                    </li>
                  </ul>
                </div>

                {/* Second item */}
                <div className="carousel-item">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{ width: "100px", height: "100px" }}
                    alt="Sample Position Img"
                  />
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                      <h5 className="mb-3 landingpageFourthPartCarouselDivHeading">
                        Jane Smith
                      </h5>
                      <p className=" landingpageFourthPartCarouselDivHeading">
                        <FaQuoteLeft />
                        Another sample testimonial to showcase the carousel
                        functionality with multiple items.
                      </p>
                    </div>
                  </div>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <FaStar className="fa-sm" />
                    </li>
                    <li>
                      <FaStar className="fa-sm" />
                    </li>
                    <li>
                      <FaStar className="fa-sm" />
                    </li>
                    <li>
                      <FaStar className="fa-sm" />
                    </li>
                    <li>
                      <FaRegStar className="fa-sm" />
                    </li>
                  </ul>
                </div>

                {/* Add more carousel-item elements as needed */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <FaArrowLeft aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <FaArrowRight
                  className="fa-solid fa-arrow-right fa-xl"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* Carousel wrapper */}
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="landingPageFooter">
        <div className="landingPageCrmLogo2 container-fluid ">
          {/* Upper Div */}
          <div className="landingPageFooterUpperDiv">
            <div className="row pt-3 justify-content-around">
              {/* First Column */}
              <div className=" col-sm-12 col-lg-3 col-md-3">
                <div className="landingLogoImg">
                  <img
                    src={crmLandingImg2}
                    alt="crm logo"
                    className="img-fluid text-center"
                  />
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
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Career</li>
                  <li>Privacy & Policy</li>
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
    </div>
  );
};

export default LandingPage;
