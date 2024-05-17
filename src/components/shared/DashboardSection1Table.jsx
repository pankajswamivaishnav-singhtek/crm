import React, { useEffect, useState } from "react";
// React Icons
// import { PiDotsThreeCircleVertical } from "react-icons/pi";
// import { BsPencil, BsTrash } from "react-icons/bs";

// Controller Api's --js data
import { monthlyMeetings } from "../../controller/fetchApi";
// Token
const DashboardSection1Table = () => {
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;
  const [monthlyMeetingsData, setMonthlyMeetingsData] = useState([]);
  useEffect(() => {
    monthlyMeetings(uid, tokenId).then((res) => {
      setMonthlyMeetingsData(res);
    });
  }, [uid, tokenId]);

  return (
    <div className="container dashboard_table_mainDiv table-responsive">
      <div className="row dashboard_table_main_heading">
        <div className="col dashboard_section1_table">
          <h4>My Meeting this month</h4>
        </div>
        {/* <div className="col dropdown" style={{ textAlign: "end" }}>
          <PiDotsThreeCircleVertical
            className="dashboard_section1_table_edit_button dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />
          <ul className="dropdown-menu" aria-labelledby="editDeleteDropdown">
            <li>
              <button className="dropdown-item">
                <BsPencil className="dashboard_section1_table_editBtn"/> Edit
              </button>
            </li>
            <li>
              <button className="dropdown-item">
                <BsTrash  className="dashboard_section1_table_deleteBtn"/> Delete
              </button>
            </li>
          </ul>
        </div> */}
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
                <td colSpan="5">No Meetings found This Month</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardSection1Table;
