import React, { useState, useCallback, useEffect } from "react";

// CSS
import "../../styles/dashboardCss/dashboard.css";
// Import Component
import DashboardSection1 from "../../components/DashboardSection1";
import DashboardSection2 from "../../components/DashboardSection2";
import DashboardSection3 from "../../components/DashboardSection3";
// Controller Methods
import { getCurrentUser } from "../../controller/fetchApi";
const Dashboard = () => {
  const [getCurrentUserData, setCurrentUserData] = useState();
  // User Id & Token ID
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
  }, [getUser]);
  return (
    <div className="dashboard_main_container container-fluid">
      <div className="dashboard_username_div">
        <p className="dashboard_user_name">{`Welcome ${getCurrentUserData?.fullName}`}</p>
        <p className="dashboard_user_name2">{`Welcome ${getCurrentUserData?.userName}`}</p>
      </div>
      <div className="dashboard_main_div">
        <DashboardSection1 getCurrentUserData={getCurrentUserData} />
        <DashboardSection2 />
        <DashboardSection3 />
      </div>
    </div>
  );
};

export default Dashboard;
