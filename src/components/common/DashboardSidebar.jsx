import React, { useState } from "react";
import "../../styles/component_css/common_css/dashboardSidebar.common.css";

// React Router Dom
import { Link } from "react-router-dom";
// React Icons
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineAccountBalance } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { LuPin } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { FaRegNewspaper } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";

const DashboardSidebar = ({ showSidebarSmallScreen }) => {
  const [shrinkSidebar, setShrinkSidebar] = useState(false);

  const toggleSidebar = () => {
    setShrinkSidebar(!shrinkSidebar);
  };
  return (
    <>
      {/* <div className="dashboard_sidebar_main_div"> */}
      <div
        className={`dashboard_sidebar_main_div ${
          shrinkSidebar ? "shrink" : ""
        } ${
          showSidebarSmallScreen
            ? "sidebar_display_smallScreen"
            : "sidebar_hide_smallScreen"
        }`}
      >
        <nav>
          <div className=" sidebar_container_fluid">
            <div className="sidebar_container">
              <div className="dashboard_sidebar_mainDiv">
                <ul className="navbar-nav sidebar_navbar_nav">
                  <div className="sidebar_hamburger_icon_main_div">
                    <RiMenu4Line
                      className="sidebar_hamburger_icon"
                      onClick={toggleSidebar}
                    />
                  </div>
                  <li className="nav-item sidebar_navItems ">
                    <Link className="Link-button" to="/dashboard">
                      <MdOutlineDashboardCustomize className="sidebar_navItem_icon" />
                      <span className="sidebar_navItem_text">Dashboard</span>
                    </Link>
                  </li>
                  <li className="nav-item sidebar_navItems">
                    <Link className="Link-button" to="/leads">
                      <VscGraph className="sidebar_navItem_icon" />
                      <span className="sidebar_navItem_text">Leads</span>
                    </Link>
                  </li>
                  <li className="nav-item sidebar_navItems">
                    <Link className="Link-button" to="/contact">
                      <IoIosContact className="sidebar_navItem_icon" />
                      <span className="sidebar_navItem_text">Contact</span>
                    </Link>
                  </li>
                  <li className="nav-item sidebar_navItems">
                    <Link className="Link-button" to="/accounts">
                      <MdOutlineAccountBalance className="sidebar_navItem_icon" />
                      <span className="sidebar_navItem_text">Account</span>
                    </Link>
                  </li>

                  <li className="nav-item sidebar_navItems">
                    <Link className="Link-button" to="/invoice">
                      <LiaFileInvoiceSolid className="sidebar_navItem_icon" />
                      <span className="sidebar_navItem_text">Invoice</span>
                    </Link>
                  </li>
                  <li className="nav-item sidebar_navItems">
                    <Link className="Link-button" to="/tasks">
                      <LuPin className="sidebar_navItem_icon" />
                      <span className="sidebar_navItem_text">Tasks</span>
                    </Link>
                  </li>
                  <li className="nav-item sidebar_navItems">
                    <Link className="Link-button" to="/meetings">
                      <HiOutlineUserGroup className="sidebar_navItem_icon" />
                      <span className="sidebar_navItem_text">Meetings</span>
                    </Link>
                  </li>
                  <li className="nav-item sidebar_navItems">
                    <Link className="Link-button" to="/report">
                      <FaRegNewspaper className="sidebar_navItem_icon" />
                      <span className="sidebar_navItem_text">Reporting</span>
                    </Link>
                  </li>
                  <li className="nav-item sidebar_navItems">
                    <Link className="Link-button" to="/analytics">
                      <SiSimpleanalytics className="sidebar_navItem_icon" />
                      <span className="sidebar_navItem_text">Analytics</span>
                    </Link>
                  </li>
                  <li className="nav-item sidebar_navItems">
                    <Link className="Link-button" to="/setting">
                      <IoSettingsOutline className="sidebar_navItem_icon" />
                      <span className="sidebar_navItem_text">Settings</span>
                    </Link>
                  </li>
                </ul>
                {/* Sidebar Navbar Right Menu */}
                <div className="d-flex justify-content-evenly sidebar_navbar_mainDiv ">
                  <div className="sidebar_navbar_icon">
                    <IoMdNotificationsOutline className="sidebar_navbar_right_menu d-lg-none d-block" />
                  </div>
                  <div className="sidebar_navbar_right_menu ">
                    <img
                      src="https://th.bing.com/th/id/OIP.Soqtvc8GbISKlazg81TPigHaFy?w=213&h=180&c=7&r=0&o=5&pid=1.7"
                      alt="user_img"
                      className="img-fluid rounded rounded-pill d-lg-none d-block"
                    />
                  </div>
                  <div className="sidebar_navbar_right_menu ">
                    <p className="sidebar_user_name d-lg-none d-block">
                      Pankaj
                    </p>
                  </div>
                </div>
                {/* Log Out Button */}
                {!shrinkSidebar && (
                  <button className="sidebar_logout_btn btn">
                    <MdOutlineLogout className="sidebar_logout_icon" />
                    <span className="sidebar_logout_text">Log Out</span>
                  </button>
                )}
                {shrinkSidebar && (
                  <MdOutlineLogout className="sidebar_shrink_logout_btn" />
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default DashboardSidebar;
