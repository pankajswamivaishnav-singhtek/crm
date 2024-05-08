import React, { useEffect, useState } from "react";

// Controller Api's --js data
import { monthlyTask } from "../../controller/fetchApi";

const DashboardSection2Table = () => {
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;
  const [monthlyTaskData, setMonthlyTaskData] = useState([]);
  useEffect(() => {
    monthlyTask(uid, tokenId).then((res) => {
      setMonthlyTaskData(res);
    });
  }, [uid, tokenId]);
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
          <tbody className="dashboard_section1_tableBody">
            {monthlyTaskData && monthlyTaskData.length > 0 ? (
              monthlyTaskData.map((deal, index) => (
                <tr key={index}>
                  <td>{deal.contact}</td>
                  <td>{deal.subject}</td>
                  <td>{deal.priority}</td>
                  <td>{deal.dueDate}</td>
                  <td>{deal.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No Open Task This Month</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardSection2Table;
