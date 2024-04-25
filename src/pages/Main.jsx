import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/common/DashboardSidebar";
import DashboardNavbar from "../components/common/DashboardNavbar";
//CSS
import "../styles/main.page.css";
const Main = ({ isSidebar, setIsSidebar }) => { 
  // Get Local Storage Data
  // const userData = JSON.parse(localStorage.getItem("user"));
  const [showSidebarSmallScreen, setShowSidebarSmallScreen] = useState(false);
  return (
    <>
      <DashboardNavbar
        setIsSidebar={setIsSidebar}
        setShowSidebarSmallScreen={setShowSidebarSmallScreen}
      />
      <div className="d-flex main_dashboard_sidebar_main_div">
        <div className="main_dashboard_sidebar_outlet left_dashboard_outlet">
          {isSidebar && (
            <DashboardSidebar showSidebarSmallScreen={showSidebarSmallScreen} />
          )}
          {/* <DashboardSidebar /> */}
        </div>
        <div className="main_dashboard_sidebar_outlet right_dashboard_outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Main;
