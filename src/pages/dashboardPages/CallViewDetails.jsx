import React, { useState, useEffect } from "react";
// controller Methods
import { getSingleScheduleCall } from "../../controller/fetchApi";
const CallViewDetails = () => {
  const [getSingleScheduleCallData, setSingleScheduleCallData] = useState([]);
  // Get Schedule CallId & Toekn Id
  const scheduleCallId = JSON.parse(localStorage.getItem("scheduleCallId"));
  const userTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userTokenData?.data?.token;
  useEffect(() => {
    getSingleScheduleCall(scheduleCallId, tokenId).then((res) => {
      setSingleScheduleCallData(res);
    });
  }, [scheduleCallId, tokenId]);
  return (
    <div className="container-fluid account_view_details_main_container">
      {/* Billing Information */}
      <div className="account_view_details_Row">
        <h3 className="mt-2 mx-2 dashboard_leadView_company_details_heading">
          Schedule Call Information
        </h3>
        <p className="mx-2 dashboard_leadView_details_heading_second">
          Lead Id : LI-{getSingleScheduleCallData?.leadId}
        </p>
        <div className="row">
          <div className="col-xl-12">
            <div className="d-xl-flex d-md-flex justify-content-between flex-wrap justify-content-center align-items-center row-cols-3">
              <div className="table-responsive account_view_details_table">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Call To
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleScheduleCallData.callTo}
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
                        Related To
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleScheduleCallData.relatedTo}
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
                        Call Type
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleScheduleCallData.callType}
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
                        Call Status
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleScheduleCallData.callStatus}
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
                        Call Start Time
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleScheduleCallData.callStartTime}
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
                        Call Owner
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleScheduleCallData.callOwner}
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
                        {getSingleScheduleCallData.subject}
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
                        reminder
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleScheduleCallData.reminder}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Extra But Do not delete kyuki ye table ka arrangement shi rk paa rha hai*/}
              <div className="table-responsive account_view_details_table"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Purpose Of Outgoing Call */}
      <div className="account_view_details_Row">
        <h3 className="my-2 mx-2 dashboard_leadView_company_details_heading">
          Purpose Of Outgoing Call
        </h3>
        <div className="row">
          <div className="col-xl-12">
            <div className="d-xl-flex d-md-flex justify-content-between flex-wrap justify-content-center align-items-center row-cols-3">
              <div className="table-responsive account_view_details_table">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Call Purpose
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleScheduleCallData.callPurpose}
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
                        Call Agenda
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleScheduleCallData.callAgenda}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* don not delete */}
              <div className="table-responsive account_view_details_table"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallViewDetails;
