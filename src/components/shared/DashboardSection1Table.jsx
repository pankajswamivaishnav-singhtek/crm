import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// Controller Api's --js data
import { monthlyMeetings } from "../../controller/fetchApi";
import Loader2 from "../../pages/Loader2";
// Token
const DashboardSection1Table = () => {
  // Get Specific User Id who see the dashboard
  const location = useLocation();
  const userId = location.state?.userId;
  console.log("userId: " + userId);

  const [loading, setLoading] = useState();
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;
  console.log("token1", tokenId);
  const [monthlyMeetingsData, setMonthlyMeetingsData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        console.log("token2", tokenId);
        const result = await monthlyMeetings(userId, tokenId);
        if (result === null || result === undefined) {
          setMonthlyMeetingsData();
          setLoading(false);
        } else {
          setMonthlyMeetingsData(result);
          setLoading(false);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [tokenId]);
  return (
    <div className="container dashboard_table_mainDiv table-responsive">
      <div className="row dashboard_table_main_heading">
        <div className="col dashboard_section1_table">
          <h4>My Meeting this month</h4>
        </div>
      </div>
      <div className="dashboard_section1_mainDiv">
        <table className="table ">
          <thead>
            <tr className="dashboard_section1_tableHead_tr table-danger">
              <th scope="col">Title</th>
              <th scope="col">Host</th>
              <th scope="col">Date</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          {loading ? (
            <Loader2 />
          ) : (
            <tbody className="dashboard_section1_tableBody">
              {monthlyMeetingsData && monthlyMeetingsData.length > 0 ? (
                monthlyMeetingsData?.map((meeting, index) => (
                  <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.host}</td>
                    <td>{meeting.date}</td>
                    <td>{meeting.location}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No Meetings found This Month</td>
                </tr>
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default DashboardSection1Table;
