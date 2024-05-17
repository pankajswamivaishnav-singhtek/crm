import React, { useEffect, useState } from "react";
// Controller Methods
import { monthlyClosingDeals } from "../controller/fetchApi";

const DashboardSection3 = () => {
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;
  const [monthlyClosingDealsData, setMonthlyClosingDealsData] = useState([]);
  useEffect(() => {
    monthlyClosingDeals(uid, tokenId).then((res) => {
      setMonthlyClosingDealsData(res);
    });
  }, [uid, tokenId]);
  // Function to return the class name based on Stage
  const getStatusClassName = (stage) => {
    switch (stage.toLowerCase()) {
      case "won":
        return "stage-won";
      case "proposal":
        return "stage-proposal";
      case "identify-decision-maker":
        return "stage-identify-decision-maker";
      case "value-proposition":
        return "stage-value-proposition";
      case "need-analysis":
        return "stage-need-analysis	";
      case "negotitation":
        return "stage-negotitation	";
      case "lost":
        return "stage-lost";
      default:
        return "";
    }
  };
  return (
    <div className="container-fluid dashboard_table_mainDiv table-responsive dashboard_section3_main_container">
      <div className="row dashboard_table_main_heading">
        <div className="col dashboard_section1_table">
          <h4>My Deals Closing This Month</h4>
        </div>
      </div>
      <div className="dashboard_section3_table_mainDiv">
        <table className="table">
          <thead>
            <tr className="table-danger dashboard_section1_tableHead_tr">
              <th scope="col">Deal Owner</th>
              <th scope="col">Contact Name</th>
              <th scope="col">Deal Name</th>
              <th scope="col">Account Name</th>
              <th scope="col">Stage</th>
              <th scope="col">Closing Date</th>
            </tr>
          </thead>
          <tbody className="dashboard_section1_tableBody">
            {monthlyClosingDealsData && monthlyClosingDealsData.length > 0 ? (
              monthlyClosingDealsData.map((meeting, index) => (
                <tr key={index}>
                  <td>{meeting.dealOwner}</td>
                  <td>{meeting.contactName}</td>
                  <td>{meeting.dealName}</td>
                  <td>{meeting.accountName}</td>
                  <td className={getStatusClassName(meeting.stage)}>
                    {meeting.stage}
                  </td>
                  <td>{meeting.closingDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No closing deals found This Month</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardSection3;
