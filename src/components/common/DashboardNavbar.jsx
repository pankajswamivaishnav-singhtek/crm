import React from "react";
// CSS
import "../../styles/component_css/common_css/dashboardNavbar.common.css";
// React Icon
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const DashboardNavbar = ({ setIsSidebar, setShowSidebarSmallScreen }) => {
  // const [showSidebarSmallScreen, setShowSidebarSmallScreen] = useState(false);
  // className={` ${showSidebarSmallScreen ? "sidebar_display_smallScreen" : "sidebar_hide_smallScreen"}`}
  const sidebarState = () => {
    setShowSidebarSmallScreen(true);
    setIsSidebar((prev) => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg  dashboard_navbar">
      <div className="container-fluid dashboard_navbar_container_fluid">
        <a className="navbar-brand dashbaord_navbar_crm_text" href="#!">
          CR<span>M</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          // data-bs-toggle="collapse"
          // data-bs-target="#navbarSupportedContent"
          // aria-controls="navbarSupportedContent"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
          onClick={sidebarState}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active dashboard_navbar_dashboard_text"
                aria-current="page"
                href="#!"
              >
                Dashboard
              </a>
            </li>
          </ul>
          {/* Right Menu  */}
          <div className="ms-auto">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
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
                  <span className="dashboard_navbar_userName">John Doe</span>
                  <br />
                  <span className="dashboard_navbar_panel">Admin Panel</span>
                </div>
              </li>
              <li className="nav-item align-content-center">
                <RiArrowDropDownLine className="dashboard_navbar_drop_icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
