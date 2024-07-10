import React, { useEffect, useState } from "react";

// Controller Api's --js data
import { monthlyTask } from "../../controller/fetchApi";
import Loader2 from "../../pages/Loader2";
const DashboardSection2Table = () => {
  const [loading, setLoading] = useState();
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;
  const [monthlyTaskData, setMonthlyTaskData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await monthlyTask(uid, tokenId);
        if (result === null || result === undefined) {
          setMonthlyTaskData();
          setLoading(false);
        } else {
          setMonthlyTaskData(result);
          setLoading(false);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
    // monthlyMeetings(uid, tokenId).then((res) => {
    //   setMonthlyMeetingsData(res);
    // });
  }, [uid, tokenId]);
  // useEffect(() => {
  //   monthlyTask(uid, tokenId).then((res) => {
  //     setMonthlyTaskData(res);
  //   });
  // }, [uid, tokenId]);
  // Function to return the class name based on status
  const getStatusClassName = (status) => {
    switch (status.toLowerCase()) {
      case "not-started":
        return "status-not-started";
      case "success":
        return "status-success";
      case "in-progress":
        return "status-in-progress";
      case "deffered":
        return "status-deffered";
      case "waiting-for-input":
        return "status-waiting-for-input";
      case "completed":
        return "status-completed";
      default:
        return "";
    }
  };
  return (
    <div className="container dashboard_table_mainDiv table-responsive">
      <div className="row dashboard_table_main_heading">
        <div className="col dashboard_section1_table">
          <h4>My Open Task This Month</h4>
        </div>
      </div>
      <div className="dashboard_section2_table_mainDiv">
        <table className="table">
          <thead>
            <tr className="table-danger dashboard_section1_tableHead_tr">
              <th scope="col">Contact Name</th>
              <th scope="col">Subject</th>
              <th scope="col">Priority</th>
              <th scope="col">Due Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          {loading ? (
            <Loader2 />
          ) : (
            <tbody className="dashboard_section1_tableBody">
              {Array.isArray(monthlyTaskData) && monthlyTaskData?.length > 0 ? (
                monthlyTaskData?.map((deal, index) => (
                  <tr key={index}>
                    <td>{deal?.contact}</td>
                    <td>{deal?.subject}</td>
                    <td>{deal?.priority}</td>
                    <td>{deal?.dueDate}</td>
                    <td className={getStatusClassName(deal?.status)}>
                      {deal?.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No Open Task This Month</td>
                </tr>
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default DashboardSection2Table;
