import React from "react";
// Import CSS
import "../styles/landingPage.css";
import { FaUserCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { SiGoogleads } from "react-icons/si";
import { FaRegAddressCard } from "react-icons/fa6";

import { PiBriefcaseLight } from "react-icons/pi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { LuNewspaper } from "react-icons/lu";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaStar, FaRegStar, FaArrowLeft } from "react-icons/fa";

// Import Images
import crmLandingIcon1 from "../images/icon1.webp";
import crmLandingIcon2 from "../images/icon2.webp";
import crmLandingIcon3 from "../images/arrowIcon.webp";
import { IoCallSharp } from "react-icons/io5";
// Import Components
import LandingPageNavbar from "../components/LandingPageNavbar";
import Footer from "../components/Footer";
const LandingPage = () => {
  return (
    <div className="landingPage">
      {/* First Part */}
      <div className="landingPageFirstPart">
        <LandingPageNavbar />
        <div className="landingPageTitleDiv">
          <div className="landingPageTitleDivIcon1 ">
            <img
              src={crmLandingIcon1}
              alt="random_icon"
              className="img-fluid"
              loading="lazy"
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
          <img
            src={crmLandingIcon2}
            alt="random_icon"
            className="img-fluid"
            loading="lazy"
          />
        </div>
        <div className="landingPageTitleDivIcon3 ">
          <img
            src={crmLandingIcon3}
            alt="random_icon"
            className="img-fluid"
            loading="lazy"
          />
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
              <div className="card mx-2 landingPageThirdPartCard card-height costume-card">
                <FaUserCircle className="fs-3 landingPageThirdPartCardIcon" />
                <div className="card-body costume-body">
                  <h5 className="card-title text-center">User Management</h5>
                  <p className="card-text text-center">
                    Easily add, remove, and manage user roles and permissions.
                    Ensure secure and appropriate access to different parts of
                    the CRM based on user roles.
                  </p>
                </div>
                <div className="blob"></div>
                <div className="fakeblob"></div>
              </div>
            </div>
            {/* secondCard */}
            <div className="col mb-4">
              <div
                className="card mx-2 landingPageThirdPartCard card-height costume-card"
                costume-card
              >
                <SiGoogleads className="fs-3 landingPageThirdPartCardIcon" />
                <div className="card-body">
                  <h5 className="card-title text-center">Lead Management</h5>
                  <p className="card-text text-center">
                    Efficiently track, manage, and nurture potential customers.
                    Automatically capture leads from various sources and assign
                    them to sales reps for timely follow-ups.
                  </p>
                </div>
              </div>
            </div>
            {/* thirdCard */}
            <div className="col mb-4">
              <div className="card mx-2 landingPageThirdPartCard card-height costume-card">
                <FaRegAddressCard className="fs-3 landingPageThirdPartCardIcon " />
                <div className="card-body">
                  <h5 className="card-title text-center">Contact Management</h5>
                  <p className="card-text text-center">
                    Store and organize all contact information in one place.
                    Access comprehensive contact histories, interactions, and
                    notes to maintain strong customer relationships.
                  </p>
                </div>
              </div>
            </div>
            {/* fourthCard */}
            <div className="col mb-4">
              <div className="card mx-2 landingPageThirdPartCard card-height costume-card">
                <IoCallSharp className="fs-3 landingPageThirdPartCardIcon " />
                <div className="card-body">
                  <h5 className="card-title text-center">Call Management</h5>
                  <p className="card-text text-center">
                    Log, track, and manage all customer calls. Integrate with
                    telephony systems to automate call logging and streamline
                    communication.
                  </p>
                </div>
              </div>
            </div>
            {/* fifthCard */}
            <div className="col mb-4">
              <div className="card mx-2 landingPageThirdPartCard card-height costume-card">
                <PiBriefcaseLight className="fs-3 landingPageThirdPartCardIcon " />
                <div className="card-body">
                  <h5 className="card-title text-center">Deal Management</h5>
                  <p className="card-text text-center">
                    Track, manage, and optimize your sales deals. Monitor deal
                    progress, set milestones, and forecast revenues to close
                    more deals efficiently.
                  </p>
                </div>
              </div>
            </div>
            {/* sixthCard */}
            <div className="col mb-4">
              <div className="card mx-2 landingPageThirdPartCard card-height costume-card">
                <RiAccountPinCircleFill className="fs-3 landingPageThirdPartCardIcon " />
                <div className="card-body">
                  <h5 className="card-title text-center">Account Management</h5>
                  <p className="card-text text-center">
                    Maintain detailed records of customer accounts. View account
                    activities, track account health, and manage customer
                    relationships at an organizational level.
                  </p>
                </div>
              </div>
            </div>
            {/* seventhCard */}
            <div className="col mb-4">
              <div className="card mx-2 landingPageThirdPartCard card-height costume-card">
                <LuNewspaper className="fs-3 landingPageThirdPartCardIcon " />
                <div className="card-body">
                  <h5 className="card-title text-center">Task Management</h5>
                  <p className="card-text text-center">
                    Create, assign, and track tasks and to-dos. Ensure nothing
                    falls through the cracks with reminders and task
                    prioritization.
                  </p>
                </div>
              </div>
            </div>
            {/* eighthCard */}
            <div className="col mb-4">
              <div className="card mx-2 landingPageThirdPartCard card-height costume-card">
                <HiOutlineDocumentReport className="fs-3 landingPageThirdPartCardIcon " />
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
          <div className="overlay-wrapper">
            <h2 className="text-center p-3 landingpageFourthPartMainDivHeading">
              Our Costumer
            </h2>
          </div>
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
                    style={{ width: "70px", height: "70px" }}
                    alt="Sample Position Img"
                    loading="lazy"
                  />
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                      <h5 className="mb-3 landingpageFourthPartCarouselDivHeading">
                        Rajesh Kumar
                      </h5>
                      <p className="landingpageFourthPartCarouselDivHeading">
                        <i className="fas fa-quote-left pe-2" />
                        This CRM has completely transformed how we manage our
                        sales process. The lead management feature is especially
                        useful, helping us track potential customers and
                        increase our conversion rate by 25%
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
                    style={{ width: "70px", height: "70px" }}
                    alt="Sample Position Img"
                    loading="lazy"
                  />
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                      <h5 className="mb-3 landingpageFourthPartCarouselDivHeading">
                        Anita Verma
                      </h5>
                      <p className=" landingpageFourthPartCarouselDivHeading">
                        {/* <FaQuoteLeft /> */}
                        The integration capabilities of this CRM software have
                        been a game-changer for us. We've seamlessly connected
                        our email marketing and call management systems, which
                        has greatly improved our customer engagement.
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
      <Footer />
    </div>
  );
};

export default LandingPage;
