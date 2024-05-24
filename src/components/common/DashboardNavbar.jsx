import React, { useEffect, useState, useCallback } from "react";
// React Router Dom
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// CSS
import "../../styles/component_css/common_css/dashboardNavbar.common.css";
// React Icon
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BiLogOutCircle } from "react-icons/bi";
// Components
import UpdateProfile from "../../pages/UpdateProfile";
// Controller Api
import { logoutUser, getCurrentUser } from "../../controller/fetchApi";
const DashboardNavbar = ({ setIsSidebar, setShowSidebarSmallScreen }) => {
  // Page Name -----Start-------
  const location = useLocation();
  const [pageName, setPageName] = useState("");
  const pathname = location.pathname;

  // Page Name Function End --------
  const sidebarState = () => {
    setShowSidebarSmallScreen(true);
    setIsSidebar((prev) => !prev);
  };

  // Logout User
  const logoutUserSubmit = () => {
    logoutUser();
    localStorage.clear();
    window.location.href = "/login";
  };
  // Get Current User Details
  const [getCurrentUserData, setCurrentUserData] = useState();
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;

  //  Get Current User Data
  const getUser = useCallback(async () => {
    try {
      const res = await getCurrentUser(tokenId);
      setCurrentUserData(res);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId, setCurrentUserData]);

  useEffect(() => {
    getUser();
    switch (pathname) {
      case "/dashboard":
        document.title = "Dashboard";
        setPageName("Dashboard");
        break;
      case "/leads":
        document.title = "Leads";
        setPageName("Leads");
        break;
      case "/create-lead":
        document.title = "Create Lead";
        setPageName("Create Lead");
        break;
      case "/lead-details":
        document.title = "Lead Details";
        setPageName("Lead Details");
        break;
      case "/contact":
        document.title = "Contact";
        setPageName("Contact");
        break;
      case "/create-contact":
        document.title = "Create Contact";
        setPageName("Create Contact");
        break;
      case "/contact-details":
        document.title = "Contact Details";
        setPageName("Contact Details");
        break;
      case "/accounts":
        document.title = "Accounts";
        setPageName("Accounts");
        break;
      case "/create-account":
        document.title = "Create Account";
        setPageName("Create Account");
        break;
      case "/account-details":
        document.title = "Account Details";
        setPageName("Account Details");
        break;
      case "/deals":
        document.title = "Deals";
        setPageName("Deals");
        break;
      case "/create-deal":
        document.title = "Create Deal";
        setPageName("Create Deal");
        break;
      case "/deal-details":
        document.title = "Deal Details";
        setPageName("Deal Details");
        break;
      case "/tasks":
        document.title = "Tasks";
        setPageName("Tasks");
        break;
      case "/create-task":
        document.title = "Create Task";
        setPageName("Create Task");
        break;
      case "/task-details":
        document.title = "Task Details";
        setPageName("Task Details");
        break;
      case "/meetings":
        document.title = "Meetings";
        setPageName("Meetings");
        break;
      case "/create-meeting":
        document.title = "Create Meeting";
        setPageName("Create Meeting");
        break;
      case "/meetings-details":
        document.title = "Meeting Details";
        setPageName("Meeting Details");
        break;
      case "/calls":
        document.title = "Calls";
        setPageName("Calls");
        break;
      case "/call-logs":
        document.title = "Log Calls";
        setPageName("Log Calls");
        break;
      case "/call-schedule":
        document.title = "Schedule Calls";
        setPageName("Schedule Calls");
        break;
      case "/create-call":
        document.title = "Create Call";
        setPageName("Create Call");
        break;
      case "/call-details":
        document.title = "Call Details";
        setPageName("Call Details");
        break;
      case "/reports":
        document.title = "Reports";
        setPageName("Reports");
        break;
      case "/create-report":
        document.title = "Create Report";
        setPageName("Create Report");
        break;
      case "/report-details":
        document.title = "Report Details";
        setPageName("Report Details");
        break;
      default:
        document.title = "CRM - Singhsoft Product";
        setPageName("Singhsoft Product");
    }
  }, [getUser, pathname]);

  return (
    <nav className="navbar navbar-expand-lg  dashboard_navbar">
      <div className="container-fluid dashboard_navbar_container_fluid">
        <Link
          className="navbar-brand dashbaord_navbar_crm_text"
          to="/dashboard"
        >
          CR<span>M</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={sidebarState}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-right-menu-mannual">
            <li className="nav-item">
              <a
                className="nav-link active dashboard_navbar_dashboard_text"
                aria-current="page"
                href="#!"
              >
                {pageName}
              </a>
            </li>
          </ul>
          {/* Right Menu  */}
          <div className="ms-auto">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item nav-item-notification">
                <a className="nav-link" href="#!">
                  <IoNotificationsCircleOutline className="dashboard_navbar_notification_icon" />
                </a>
              </li>
              <li className="nav-item">
                <div className="rounded-pill dashboard_navbar_userImg">
                  <img
                    src="https://th.bing.com/th/id/OIP.Soqtvc8GbISKlazg81TPigHaFy?w=213&h=180&c=7&r=0&o=5&pid=1.7"
                    alt="admin_img"
                    className="img-fluid rounded-pill navbar_right_menu_img"
                  />
                </div>
              </li>
              <li className="nav-item">
                <div className="dashboard_navbar_user_admin_text">
                  <span className="dashboard_navbar_userName">
                    {getCurrentUserData?.fullName}
                  </span>
                  <br />
                  <span className="dashboard_navbar_panel">Admin Panel</span>
                </div>
              </li>
              <li
                className="nav-item align-content-center dropstart"
                data-bs-toggle="dropdown"
              >
                <RiArrowDropDownLine className="dashboard_navbar_drop_icon" />
                <ul className="dropdown-menu navbar_dropdown_menu">
                  <Link className="text-decoration-none">
                    <li
                      data-bs-toggle="modal"
                      data-bs-target="#updateProfileModal"
                    >
                      <a className="dropdown-item" href="/#">
                        <CgProfile className="me-1 navbar_dropdown_icon" />
                        Update Profile
                      </a>
                    </li>
                  </Link>
                  <Link className="text-decoration-none">
                    <li>
                      <a
                        className="dropdown-item"
                        href="/signin"
                        onClick={logoutUserSubmit}
                      >
                        <BiLogOutCircle className="me-2 navbar_dropdown_icon" />
                        Logout
                      </a>
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*Update Profile  Modal */}
      <>
        <div
          className="modal fade modal-xl update_profile_modal"
          id="updateProfileModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header w-100">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <UpdateProfile getCurrentUserData={getCurrentUserData} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </nav>
  );
};

export default DashboardNavbar;
