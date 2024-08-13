import React from "react";
import "../styles/career.css";
import careerImg2 from "../images/careerImg2.webp";
import { Link } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { SiLibreofficewriter } from "react-icons/si";
import { PiUsersThreeBold } from "react-icons/pi";

// Component
import LandingPageNavbar from "../components/LandingPageNavbar";
import Footer from "../components/Footer";
const Career = () => {
  return (
    <div className="career-page">
      {/* First Part */}
      <div className="career-first-part container-fluid">
        <LandingPageNavbar className="about-us-navbar" />
        <h2 className="about-us-about-text text-center">Career</h2>
      </div>
      {/* Second Part */}
      <div className="career-second-part container">
        <h2 className="career-second-part-heading mb-5">
          Your Life At EleHirely
        </h2>
        <div className="row  ">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <img
              src={careerImg2}
              alt="radnom-img"
              className="img-fluid career-second-part-img"
            />
          </div>
          <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
            <p className="career-second-part-para">
              At EleHirely we believe in working together and working hard. With
              over 800,000 happy clients, we are looking for dynamic and
              creative individuals who are willing to dedicate themselves to
              providing innovative products and services for our clients.
              <br />
              <br />
              Besides getting the opportunity to unlock your true potential, at
              EleHirely you can also network with some of the most talented
              people in the industry, go on annual picnics outside the country
              and enjoy many other benefits by working with us.
            </p>
          </div>
        </div>
      </div>
      {/* Third Part */}
      <div className="career-third-part container">
        <h3>Open Job Positions</h3>
        <div className="container career-page-third-part-card-div">
          <div className="row g-4">
            {/* First Card */}
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card career-page-third-part-card">
                <div className="career-page-third-part-position">
                  <p>React Native Developer</p>
                  <Link>
                    <button className="career-page-third-part-btn">
                      Apply now
                    </button>
                  </Link>
                </div>
                <div className="career-page-third-part-openings career-page-third-part-list">
                  12 Open Vacancies
                </div>
                <div className="career-page-third-part-company career-page-third-part-list">
                  <FaRegBuilding />
                  &nbsp; Singhtek
                </div>
                <div className="career-page-third-part-location career-page-third-part-list">
                  <IoLocationOutline />
                  &nbsp; Jaipur
                </div>
              </div>
            </div>
            {/* First Card */}
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card career-page-third-part-card">
                <div className="career-page-third-part-position">
                  <p>React Native Developer</p>
                  <Link>
                    <button className="career-page-third-part-btn">
                      Apply now
                    </button>
                  </Link>
                </div>
                <div className="career-page-third-part-openings career-page-third-part-list">
                  12 Open Vacancies
                </div>
                <div className="career-page-third-part-company career-page-third-part-list">
                  <FaRegBuilding />
                  &nbsp; Singhtek
                </div>
                <div className="career-page-third-part-location career-page-third-part-list">
                  <IoLocationOutline />
                  &nbsp; Jaipur
                </div>
              </div>
            </div>
            {/* First Card */}
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card career-page-third-part-card">
                <div className="career-page-third-part-position">
                  <p>React Native Developer</p>
                  <Link>
                    <button className="career-page-third-part-btn">
                      Apply now
                    </button>
                  </Link>
                </div>
                <div className="career-page-third-part-openings career-page-third-part-list">
                  12 Open Vacancies
                </div>
                <div className="career-page-third-part-company career-page-third-part-list">
                  <FaRegBuilding />
                  &nbsp; Singhtek
                </div>
                <div className="career-page-third-part-location career-page-third-part-list">
                  <IoLocationOutline />
                  &nbsp; Jaipur
                </div>
              </div>
            </div>
            {/* First Card */}
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card career-page-third-part-card">
                <div className="career-page-third-part-position">
                  <p>React Native Developer</p>
                  <Link>
                    <button className="career-page-third-part-btn">
                      Apply now
                    </button>
                  </Link>
                </div>
                <div className="career-page-third-part-openings career-page-third-part-list">
                  12 Open Vacancies
                </div>
                <div className="career-page-third-part-company career-page-third-part-list">
                  <FaRegBuilding />
                  &nbsp; Singhtek
                </div>
                <div className="career-page-third-part-location career-page-third-part-list">
                  <IoLocationOutline />
                  &nbsp; Jaipur
                </div>
              </div>
            </div>
            {/* First Card */}
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card career-page-third-part-card">
                <div className="career-page-third-part-position">
                  <p>React Native Developer</p>
                  <Link>
                    <button className="career-page-third-part-btn">
                      Apply now
                    </button>
                  </Link>
                </div>
                <div className="career-page-third-part-openings career-page-third-part-list">
                  12 Open Vacancies
                </div>
                <div className="career-page-third-part-company career-page-third-part-list">
                  <FaRegBuilding />
                  &nbsp; Singhtek
                </div>
                <div className="career-page-third-part-location career-page-third-part-list">
                  <IoLocationOutline />
                  &nbsp; Jaipur
                </div>
              </div>
            </div>
            {/* First Card */}
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card career-page-third-part-card">
                <div className="career-page-third-part-position">
                  <p>React Native Developer</p>
                  <Link>
                    <button className="career-page-third-part-btn">
                      Apply now
                    </button>
                  </Link>
                </div>
                <div className="career-page-third-part-openings career-page-third-part-list">
                  12 Open Vacancies
                </div>
                <div className="career-page-third-part-company career-page-third-part-list">
                  <FaRegBuilding />
                  &nbsp; Singhtek
                </div>
                <div className="career-page-third-part-location career-page-third-part-list">
                  <IoLocationOutline />
                  &nbsp; Jaipur
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fourth Part */}
      <div className="career-fourth-part container">
        <h3 className="career-fourth-part-heading">
          Learn Our Recruitment Process
        </h3>
        <p className="career-fourth-part-para">
          The recruitment process begins with submission of CVs, followed by
          phone screening, assessment and a final interview. <br /> At Elejobly
          we believe in working together and working hard.
        </p>
        <div className="container about-us-fourth-part career-fourth-part-recruitment">
          <div className="row row-cols-xl-4 row-cols-md-2 ">
            {/* First Card */}
            <div className="col ">
              <div className="card career-fourth-part-card">
                <div className="text-center">
                  <FaRegAddressCard className="fs-2 m-3 career-page-fourth-part-icons" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">CV Submission</h5>
                  <p className="card-text text-center my-3 career-fourth-part-card-para">
                    Submit your CV or resume through our online portal if you
                    meet our requirements.
                  </p>
                </div>
              </div>
            </div>
            {/* Second Card */}
            <div className="col ">
              <div className="card career-fourth-part-card">
                <div className="text-center">
                  <FaPhoneAlt className="fs-2 m-3 career-page-fourth-part-icons" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Phone Screening</h5>
                  <p className="card-text text-center my-3 career-fourth-part-card-para">
                    After looking at your CV you will be invited for a telephone
                    interview at a time of your choosing.
                  </p>
                </div>
              </div>
            </div>
            {/* Third Card */}
            <div className="col ">
              <div className="card career-fourth-part-card ">
                <div className="text-center">
                  <SiLibreofficewriter className="fs-2 m-3 career-page-fourth-part-icons" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Skill Assessment</h5>
                  <p className="card-text text-center my-3 career-fourth-part-card-para">
                    You will be invited at our head office to take a skills and
                    knowledge assessment.
                  </p>
                </div>
              </div>
            </div>
            {/* First Card */}
            <div className="col ">
              <div className="card career-fourth-part-card">
                <div className="text-center">
                  <PiUsersThreeBold className="fs-2 m-3 career-page-fourth-part-icons" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Final Interview</h5>
                  <p className="card-text text-center my-3 career-fourth-part-card-para">
                    If you can pass all stages we will invite you for a final
                    interview with our CEO and HR executive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Career;
