import React from "react";
// React - Icons
import { IoIosNotifications } from "react-icons/io";
import { RiWechatFill } from "react-icons/ri";
import { WiTime9 } from "react-icons/wi";
import { PiKanbanFill } from "react-icons/pi";
import { TfiViewList } from "react-icons/tfi";
import { IoCalendarOutline } from "react-icons/io5";
import { FcBullish } from "react-icons/fc";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuImport } from "react-icons/lu";
import { LuFileSpreadsheet } from "react-icons/lu";

// Import external Css
import "../../styles/navbar.component.css";
const Navbar = () => {
  return (
    <div id="navbars_main_div">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#!">
            CRM
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Sales */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link active"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sales
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      My Pipeline
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      My Activities
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Teams
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Costumers
                    </a>
                  </li>
                </ul>
              </li>
              {/* Reporting */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link active"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Reporting
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      Forecast
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Pipeline
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Leads
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Activites
                    </a>
                  </li>
                </ul>
              </li>
              {/* Configuration */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link active"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Configuration
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      Setting
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Sales Teams
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Activity Type
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Activity Plane
                    </a>
                  </li>
                  {/* Pipeline */}
                  <li className="dropdown-divider"></li>
                  <li className="ps-3">
                    <span className="fw-medium">Pipeline</span>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Tags
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Lost Reasons
                      </a>
                    </li>
                  </li>
                  {/* Lead Generatiom */}
                  <li className="dropdown-divider"></li>
                  <li className="ps-3">
                    <span className="fw-medium">Lead Generation</span>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Lead Mining Request
                      </a>
                    </li>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item bg-danger rounded-2">
                <a
                  className="nav-link active text-white"
                  id="navbar_pending_activation"
                  aria-current="page"
                  href="#!"
                >
                  <IoIosNotifications /> Pending Activation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  <RiWechatFill className="fs-3" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  <WiTime9 className="fs-3" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Second Navbar */}
      <div className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" id="second_navbar">
          {/* Left Side */}
          <div className="d-flex" id="second_navbar_left_side">
            <div className="new me-2">
              <button className="btn btn-primary">New</button>
            </div>
            <div className="generate_lead me-2">
              <button className="btn btn-danger">Generate Leads</button>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <IoSettingsOutline />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="#!">
                    <LuImport /> Import Record's
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    <LuFileSpreadsheet /> Spread Sheet
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Right Side */}
          <div className="right_side_div">
            <ul className="navbar-nav">
              <li className="nav-item dropstart ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      <PiKanbanFill /> Kanban
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      <TfiViewList /> View List
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      <IoCalendarOutline /> Calendar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      <FcBullish /> Bullish
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      <FaMapMarkerAlt /> Map Marker
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      <WiTime9 /> Time
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
