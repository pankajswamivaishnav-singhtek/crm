import React, { useEffect, useState } from "react";

// Controller Api's --js data
import { monthlyMeetings } from "../../controller/fetchApi";
import Loader2 from "../../pages/Loader2";
// Token
const DashboardSection1Table = () => {
  const [loading, setLoading] = useState();
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;
  const [monthlyMeetingsData, setMonthlyMeetingsData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await monthlyMeetings(uid, tokenId);
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
  }, [uid, tokenId]);
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
