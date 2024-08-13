import React, { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
//Import CSS
import "../../styles/dashboardCss/dashboard.css";
// Import Component
import DashboardSection1 from "../../components/DashboardSection1";
import DashboardSection2 from "../../components/DashboardSection2";
import DashboardSection3 from "../../components/DashboardSection3";
// Import api function from controller
import { getCurrentUser } from "../../controller/fetchApi";

const Dashboard = () => {
  // Get Specific User Id who see the dashboard
  const location = useLocation();
  const userId = location.state?.userId;

  const [getCurrentUserData, setCurrentUserData] = useState();
  // Get User details from local storage
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;

  //  Get Current User Data OR Api
  const getUser = useCallback(async () => {
    try {
      const res = await getCurrentUser(userId, tokenId);
      if (res) {
        setCurrentUserData(res);
      }
    } catch (error) {
      console.log(error);
    }
  }, [tokenId]);
  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className="dashboard_main_container container-fluid">
      <div className="dashboard_username_div">
        <p className="dashboard_user_name">{`Welcome ${getCurrentUserData?.fullName}`}</p>
        <p className="dashboard_user_name2">{`username ${getCurrentUserData?.userName}`}</p>
      </div>
      <div className="dashboard_main_div">
        {/* First Section In Cards & My Meetings This Month */}
        <DashboardSection1 getCurrentUserData={getCurrentUserData} />
        {/* My Open Task This Month & Piplibe Stage Chart */}
        <DashboardSection2 />
        {/* My Deals Closing This Month */}
        <DashboardSection3 />
      </div>
    </div>
  );
};

export default Dashboard;
