import React, { useState, useEffect } from "react";
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
import { TbPhonePlus } from "react-icons/tb";
import { SiSimpleanalytics } from "react-icons/si";
import { MdOutlineLogout } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
// Controller Api
import { logoutUser } from "../../controller/fetchApi";
// import { useAuth0 } from "@auth0/auth0-react";
import { googleLogout } from "@react-oauth/google";
const DashboardSidebar = ({ showSidebarSmallScreen, setIsSidebar }) => {
  // Logout User
  const logoutUserSubmit = async () => {
    try {
      // await logout({ logoutParams: { returnTo: window.location.origin } });
      googleLogout();
      await logoutUser();
      localStorage.clear();
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  };
  // Shrink Sidebar
  const [shrinkSidebar, setShrinkSidebar] = useState(false);
  const toggleSidebar = () => {
    setShrinkSidebar(!shrinkSidebar);
  };

  // Close Sidebar After Choose Nav Items
  const sideBarClose = () => {
    if (window.innerWidth <= 425) {
      setIsSidebar(false);
    }
  };

  // Get Expiry Time
  useEffect(() => {
    const userIdTokenData = JSON.parse(localStorage.getItem("user"));
    const expireTime = userIdTokenData?.data?.tokenDetails?.exp * 1000;
    if (expireTime) {
      const currentTime = new Date().getTime();
      const timeLeft = expireTime - currentTime;

      if (timeLeft > 0) {
        const timer = setTimeout(() => {
          // Logout user and clear local storage
          logoutUser();
          // Redirect to login page
          window.location.href = "/login";
        }, timeLeft);

        return () => clearTimeout(timer);
      } else {
        // Token has already expired, so logout immediately
        logoutUser();
        // Redirect to login page
        window.location.href = "/login";
      }
    }
  }, []);

  return (
    <>
      {
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
                      <Link
                        className="Link-button"
                        to="/dashboard"
                        onClick={sideBarClose}
                      >
                        <MdOutlineDashboardCustomize className="sidebar_navItem_icon" />
                        <span className="sidebar_navItem_text">Dashboard</span>
                      </Link>
                    </li>
                    <li className="nav-item sidebar_navItems">
                      <Link
                        className="Link-button"
                        to="/leads"
                        onClick={sideBarClose}
                      >
                        <VscGraph className="sidebar_navItem_icon" />
                        <span className="sidebar_navItem_text">Leads</span>
                      </Link>
                    </li>
                    <li className="nav-item sidebar_navItems">
                      <Link
                        className="Link-button"
                        to="/contact"
                        onClick={sideBarClose}
                      >
                        <IoIosContact className="sidebar_navItem_icon" />
                        <span className="sidebar_navItem_text">Contact</span>
                      </Link>
                    </li>
                    <li className="nav-item sidebar_navItems">
                      <Link
                        className="Link-button"
                        to="/accounts"
                        onClick={sideBarClose}
                      >
                        <MdOutlineAccountBalance className="sidebar_navItem_icon" />
                        <span className="sidebar_navItem_text">Account</span>
                      </Link>
                    </li>
                    <li className="nav-item sidebar_navItems">
                      <Link
                        className="Link-button"
                        to="/deals"
                        onClick={sideBarClose}
                      >
                        <LiaFileInvoiceSolid className="sidebar_navItem_icon" />
                        <span className="sidebar_navItem_text">Deals</span>
                      </Link>
                    </li>
                    <li className="nav-item sidebar_navItems">
                      <Link
                        className="Link-button"
                        to="/tasks"
                        onClick={sideBarClose}
                      >
                        <LuPin className="sidebar_navItem_icon" />
                        <span className="sidebar_navItem_text">Tasks</span>
                      </Link>
                    </li>
                    <li className="nav-item sidebar_navItems">
                      <Link
                        className="Link-button"
                        to="/meetings"
                        onClick={sideBarClose}
                      >
                        <HiOutlineUserGroup className="sidebar_navItem_icon" />
                        <span className="sidebar_navItem_text">Meetings</span>
                      </Link>
                    </li>
                    <li className="nav-item sidebar_navItems dropdown">
                      <Link
                        className="Link-button"
                        to="/calls"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <TbPhonePlus className="sidebar_navItem_icon" />
                        <span className="sidebar_navItem_text">Calls</span>
                      </Link>
                      <ul className="dropdown-menu dashboard_sidebar_navItem_dropDown">
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/call-schedule"
                            onClick={sideBarClose}
                          >
                            Schedule Call
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/call-logs"
                            onClick={sideBarClose}
                          >
                            Log Call
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item sidebar_navItems">
                      <Link
                        className="Link-button"
                        to="/reports"
                        onClick={sideBarClose}
                      >
                        <SiSimpleanalytics className="sidebar_navItem_icon" />
                        <span className="sidebar_navItem_text">Reports</span>
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
                    <button
                      className="sidebar_logout_btn btn"
                      onClick={logoutUserSubmit}
                    >
                      <MdOutlineLogout className="sidebar_logout_icon" />
                      <span className="sidebar_logout_text">Log Out</span>
                    </button>
                  )}
                  {shrinkSidebar && (
                    <MdOutlineLogout
                      className="sidebar_shrink_logout_btn"
                      onClick={logoutUserSubmit}
                    />
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      }
    </>
  );
};

export default DashboardSidebar;
