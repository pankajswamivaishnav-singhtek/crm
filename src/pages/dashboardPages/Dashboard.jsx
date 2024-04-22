import React from "react";

// CSS
import "../../styles/dashboardCss/dashboard.css";
// Import Component
import DashboardSection1 from "../../components/DashboardSection1";
import DashboardSection2 from "../../components/DashboardSection2";
import DashboardSection3 from "../../components/DashboardSection3";
const Dashboard = () => {

  return (
    <div className="dashboard_main_container container-fluid">
      <div className="dashboard_username_div">
        <p className="dashboard_user_name">Welcome Amax Jackson</p>
        <p className="dashboard_user_name2">Welcome Amax Jackson</p>
      </div>
      <div className="dashboard_main_div">
        <DashboardSection1 />
        <DashboardSection2 />
        <DashboardSection3 />
      </div>
    </div>
  );
};

export default Dashboard;
