import React, { useState } from "react";

// React Router Dom
import { Routes, Route } from "react-router-dom";
import ResetPassword from "../pages/ResetPassword";

// Pages
import Home from "../pages/Home";
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
import CallViewDetails from "../pages/dashboardPages/CallViewDetails";
import Deals from "../pages/dashboardPages/Deals";
import CreateDeal from "../pages/dashboardPages/CreateDeal";
import Reports from "../pages/dashboardPages/Reports";

const AllRoutes = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <Routes>
      {/* Dashboard Routes */}
      <Route
        element={<Main isSidebar={isSidebar} setIsSidebar={setIsSidebar} />}
      >
        <Route path="/dummy" element={<Dummy setIsSidebar={setIsSidebar} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/create-lead" element={<CreateLead />} />
        <Route path="/lead-details" element={<LeadCostumerDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create-contact" element={<CreateContact />} />
        <Route path="/contact-details" element={<ContactCostumerDetails />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/account-details" element={<AccountCostumerDetails />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/task-details" element={<TaskDetails />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/create-meeting" element={<CreateMeeting />} />
        <Route path="/meetings-details" element={<MeetingsViewDetails />} />
        <Route path="/calls" element={<Calls />} />
        <Route path="/schedule-call" element={<ScheduleCall />} />
        <Route path="/log-call" element={<LogCall />} />
        <Route path="/call-details" element={<CallViewDetails />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/create-deal" element={<CreateDeal />} />
        <Route path="/reports" element={<Reports />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/otpverification" element={<OtpVerification />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
    </Routes>
  );
};

export default AllRoutes;
