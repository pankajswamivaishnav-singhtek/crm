import React, { useState, useEffect } from "react";
// Controller Method & Api
import { getSingleTask } from "../../controller/fetchApi";
const TaskDetails = () => {
  // TOkein Id & User Id
  const [getSingleTaskData, setSingleTaskData] = useState([]);
  const taskId = JSON.parse(localStorage.getItem("taskId"));
  const userTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userTokenData?.data?.token;
  useEffect(() => {
    getSingleTask(taskId, tokenId).then((res) => {
      setSingleTaskData(res);
    });
  }, [taskId, tokenId]);
  // Date Time Understndable Formate In reminder
  const date = new Date(getSingleTaskData?.reminder);
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.toLocaleString("default", { day: "2-digit" });
  const year = date.toLocaleString("default", { year: "numeric" });
  const time = date.toLocaleString("default", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const reminder = `${day} ${month} ${year} || ${time}`;

  return (
    <div className="container-fluid account_view_details_main_container">
      {/* Task Information */}
      <div className="account_view_details_Row">
        <h3 className="mt-2 mx-2 dashboard_leadView_company_details_heading">
          Task Information
        </h3>
        <p className="mx-2 dashboard_leadView_details_heading_second">
          Lead Id : LI-{getSingleTaskData?.leadId}
        </p>
        <div className="row">
          <div className="col-xl-12">
            <div className="d-xl-flex d-md-flex justify-content-between flex-wrap justify-content-center align-items-center row-cols-3 ">
              <div className="table-responsive account_view_details_table">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Task Owner
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleTaskData?.taskOwner}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Contact
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleTaskData?.contact}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Priority
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleTaskData?.priority}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-responsive account_view_details_table">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Subject
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleTaskData?.subject}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Account Type
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleTaskData?.accountType}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Reminder
                      </th>
                      <td className="lead_view_details_table_td">{reminder}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-responsive account_view_details_table">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Due Date
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleTaskData?.dueDate}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Status
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleTaskData?.status}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Description */}
        <h4 className="my-2 mx-2 dashboard_leadView_company_details_heading">
          Description
        </h4>
        <div className="row">
          <div className="col-xl-12 my-1 mx-2">
            <p className="lead_view_details_description">
              {getSingleTaskData?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
