import React, { useState, useEffect } from "react";

// React Router Dom
import { Routes, Route } from "react-router-dom";
import ResetPassword from "../pages/ResetPassword";

// Pages
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import OtpVerification from "../pages/OtpVerification";
import Dummy from "../pages/Dummy";
import Main from "../pages/Main";
import Dashboard from "../pages/dashboardPages/Dashboard";
import Leads from "../pages/dashboardPages/Leads";
import CreateLead from "../pages/dashboardPages/CreateLead";
import LeadCostumerDetails from "../pages/dashboardPages/LeadCostumerDetails";
import Contact from "../pages/dashboardPages/Contact";
import CreateContact from "../pages/dashboardPages/CreateContact";
import ContactCostumerDetails from "../pages/dashboardPages/ContactCostumerDetails";
import Accounts from "../pages/dashboardPages/Accounts";
import CreateAccount from "../pages/dashboardPages/CreateAccount";
import AccountCostumerDetails from "../pages/dashboardPages/AccountCostumerDetails";
import Task from "../pages/dashboardPages/Task";
import CreateTask from "../pages/dashboardPages/CreateTask";
import TaskDetails from "../pages/dashboardPages/TaskDetails";
import Meetings from "../pages/dashboardPages/Meetings";
import CreateMeeting from "../pages/dashboardPages/CreateMeeting";
import MeetingsViewDetails from "../pages/dashboardPages/MeetingsViewDetails";
import Calls from "../pages/dashboardPages/Calls";
import ScheduleCall from "../pages/dashboardPages/ScheduleCall";
import LogCall from "../pages/dashboardPages/LogCall";
import CallLogs from "../pages/dashboardPages/CallLogs";
import CallViewDetails from "../pages/dashboardPages/CallViewDetails";
import LogCallViewDetails from "../pages/dashboardPages/LogCallViewDetails";
import Deals from "../pages/dashboardPages/Deals";
import CreateDeal from "../pages/dashboardPages/CreateDeal";
import Reports from "../pages/dashboardPages/Reports";
import UpdateLead from "../pages/dashboardPages/UpdateLead";

// Validation Route
import ValidateRoute from "./ValidateRoute";
import DealsCostumerDetails from "../pages/dashboardPages/DealsCostumerDetails";
import UpdateProfile from "../pages/UpdateProfile";

const AllRoutes = () => {
  const [isSidebar, setIsSidebar] = useState(window.innerWidth > 425);
  useEffect(() => {
    const handleResize = () => {
      setIsSidebar(window.innerWidth > 425);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Routes>
      {/* Dashboard Routes */}
      <Route
        element={<Main isSidebar={isSidebar} setIsSidebar={setIsSidebar} />}
      >
        <Route path="/dummy" element={<Dummy setIsSidebar={setIsSidebar} />} />
        <Route
          path="/dashboard"
          element={
            <ValidateRoute>
              <Dashboard />
            </ValidateRoute>
          }
        />
        <Route
          path="/leads"
          element={
            <ValidateRoute>
              <Leads />
            </ValidateRoute>
          }
        />
        <Route
          path="/create-lead"
          element={
            <ValidateRoute>
              <CreateLead />
            </ValidateRoute>
          }
        />
        <Route
          path="/update-lead"
          element={
            <ValidateRoute>
              <UpdateLead />
            </ValidateRoute>
          }
        />
        <Route
          path="/lead-details"
          element={
            <ValidateRoute>
              <LeadCostumerDetails />
            </ValidateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ValidateRoute>
              <Contact />
            </ValidateRoute>
          }
        />
        <Route
          path="/create-contact"
          element={
            <ValidateRoute>
              <CreateContact />
            </ValidateRoute>
          }
        />
        <Route
          path="/contact-details"
          element={
            <ValidateRoute>
              <ContactCostumerDetails />
            </ValidateRoute>
          }
        />
        <Route
          path="/accounts"
          element={
            <ValidateRoute>
              <Accounts />
            </ValidateRoute>
          }
        />
        <Route
          path="/create-account"
          element={
            <ValidateRoute>
              <CreateAccount />
            </ValidateRoute>
          }
        />
        <Route
          path="/account-details"
          element={
            <ValidateRoute>
              <AccountCostumerDetails />
            </ValidateRoute>
          }
        />
        <Route
          path="/tasks"
          element={
            <ValidateRoute>
              <Task />
            </ValidateRoute>
          }
        />
        <Route
          path="/create-task"
          element={
            <ValidateRoute>
              <CreateTask />
            </ValidateRoute>
          }
        />
        <Route
          path="/task-details"
          element={
            <ValidateRoute>
              <TaskDetails />
            </ValidateRoute>
          }
        />
        <Route
          path="/meetings"
          element={
            <ValidateRoute>
              <Meetings />
            </ValidateRoute>
          }
        />
        <Route
          path="/create-meeting"
          element={
            <ValidateRoute>
              <CreateMeeting />
            </ValidateRoute>
          }
        />
        <Route
          path="/meetings-details"
          element={
            <ValidateRoute>
              <MeetingsViewDetails />
            </ValidateRoute>
          }
        />
        <Route
          path="/call-schedule"
          element={
            <ValidateRoute>
              <Calls />
            </ValidateRoute>
          }
        />
        <Route
          path="/schedule-call"
          element={
            <ValidateRoute>
              <ScheduleCall />
            </ValidateRoute>
          }
        />
        <Route
          path="/log-call"
          element={
            <ValidateRoute>
              <LogCall />
            </ValidateRoute>
          }
        />
        <Route
          path="/call-logs"
          element={
            <ValidateRoute>
              <CallLogs />
            </ValidateRoute>
          }
        />
        <Route
          path="/schedule-call-details"
          element={
            <ValidateRoute>
              <CallViewDetails />
            </ValidateRoute>
          }
        />
        <Route
          path="/log-call-details"
          element={
            <ValidateRoute>
              <LogCallViewDetails />
            </ValidateRoute>
          }
        />
        <Route
          path="/deals"
          element={
            <ValidateRoute>
              <Deals />
            </ValidateRoute>
          }
        />
        <Route
          path="/create-deal"
          element={
            <ValidateRoute>
              <CreateDeal />
            </ValidateRoute>
          }
        />
        <Route
          path="/deal-details"
          element={
            <ValidateRoute>
              <DealsCostumerDetails />
            </ValidateRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ValidateRoute>
              <Reports />
            </ValidateRoute>
          }
        />
      </Route>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/otpverification" element={<OtpVerification />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/update-profile" element={<UpdateProfile />} />
    </Routes>
  );
};

export default AllRoutes;
