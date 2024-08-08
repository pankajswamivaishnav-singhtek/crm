import React from "react";
// Import Images
import crmLandingImg from "../images/crmLandingLogo.webp";
import { Link } from "react-router-dom";
const LandingPageNavbar = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="landingPageFirstPartLoginBtnDiv container">
        <div className="landingPageFirstPartLoginBtnDivLogo float-start">
          <Link to="/">
            <img
              src={crmLandingImg}
              alt="crm-logo-img"
              className="img-fluid"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="landingPageFirstPartLoginBtnDiv2 float-end">
          <Link to="/login">
            <button className="landingPageFirstPartLoginBtn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPageNavbar;
