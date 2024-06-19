import React, { useState, useEffect } from "react";
// controller methods
import { getSingleLogCall } from "../../controller/fetchApi";
const LogCallViewDetails = () => {
  const [getSingleLogCallData, setSingleLogCallData] = useState([]);
  const logCallId = JSON.parse(localStorage.getItem("logCallId"));
  const userTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userTokenData?.data?.token;
  useEffect(() => {
    getSingleLogCall(logCallId, tokenId).then((res) => {
      setSingleLogCallData(res);
    });
  }, [logCallId, tokenId]);
  return (
    <div className="container-fluid account_view_details_main_container">
      {/* Log Call Information */}
      <div className="account_view_details_Row">
        <h3 className="mt-2 mx-2 dashboard_leadView_company_details_heading">
          Log Call Information
        </h3>
        {getSingleLogCallData?.leadId && (
          <p className="mx-2 dashboard_leadView_details_heading_second">
            Lead Id : LI-{getSingleLogCallData.leadId}
          </p>
        )}
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
                        {getSingleLogCallData?.callTo}
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
                        {getSingleLogCallData?.relatedTo}
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
                        {getSingleLogCallData?.callType}
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
                        {getSingleLogCallData?.callStatus}
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
                        {getSingleLogCallData?.callStartTime}
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
                        Call Duration
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLogCallData?.callDuration}
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
                        {getSingleLogCallData?.subject}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                        Singhtek IT Jaipur
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
                        +917073272146
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
                        Call Result
                      </th>
                      <td className="lead_view_details_table_td">
                        +917073272146
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
              {getSingleLogCallData?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogCallViewDetails;
