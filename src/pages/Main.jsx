import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/common/DashboardSidebar";
import DashboardNavbar from "../components/common/DashboardNavbar";
import Loader from "./Loader";

//CSS
import "../styles/main.page.css";
// Controller Api
// import { logoutUser } from "../controller/fetchApi";
const Main = ({ isSidebar, setIsSidebar, loading, setLoading }) => {
  const [showSidebarSmallScreen, setShowSidebarSmallScreen] = useState(false);
  // Show Loader
  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, [1000]);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <>
      <DashboardNavbar
        setIsSidebar={setIsSidebar}
        setShowSidebarSmallScreen={setShowSidebarSmallScreen}
      />
      <div className="d-flex main_dashboard_sidebar_main_div">
        <div className="main_dashboard_sidebar_outlet left_dashboard_outlet">
          {isSidebar && (
            <DashboardSidebar
              showSidebarSmallScreen={showSidebarSmallScreen}
              setIsSidebar={setIsSidebar}
            />
          )}
          {/* <DashboardSidebar /> */}
        </div>
        <div className="main_dashboard_sidebar_outlet right_dashboard_outlet">
          {loading ? <Loader /> : <Outlet />}
        </div>
      </div>
    </>
  );
};

export default Main;
