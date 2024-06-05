import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/common/DashboardSidebar";
import DashboardNavbar from "../components/common/DashboardNavbar";
import Loader from "./Loader";
import { FcConferenceCall } from "react-icons/fc";

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
  // Show Toast When Meeting is start before 2 min
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    const meetingTime = new Date("2024-06-05T12:54:00");
    const currentTime = new Date();
    const twoMinutesBefore = 2 * 60 * 1000;
    const timeDifference = meetingTime - currentTime - twoMinutesBefore;

    const timeoutToShow = setTimeout(() => {
      setShowToast(true);
    }, timeDifference);

    const timeoutToHide = setTimeout(() => {
      setShowToast(false);
    }, timeDifference + 300000);

    return () => {
      clearTimeout(timeoutToShow);
      clearTimeout(timeoutToHide);
    };
  }, []);

  return (
    <>
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
      {/* Toast */}
      {showToast && (
        <div className="toast-container position-fixed bottom-0 end-0 p-3 ">
          <div
            className="toast show create_lead_toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header create_lead_toast_header">
              <FcConferenceCall className="fs-3" />
              &nbsp;
              <strong className="me-auto">Meeting Reminder</strong>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowToast(false)}
              />
            </div>
            {/* <div className="toast-body">Sign In successfully.</div> */}
            <div className="toast-body">
              Your meeting is scheduled in 2 minutes with
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
