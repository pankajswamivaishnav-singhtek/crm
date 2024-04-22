import React from "react";
// CSS
import "../../styles/dashboardCss/meetingDetails.css";
const MeetingsViewDetails = () => {
  return (
    <div className="account_view_details_Row">
      <h3 className="my-2 mx-2 dashboard_leadView_company_details_heading">
        Meetings Information
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
                      Host
                    </th>
                    <td className="lead_view_details_table_td">
                      Pankaj Swami Vaishnav
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
                      Title
                    </th>
                    <td className="lead_view_details_table_td">Seller</td>
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
                      Address
                    </th>
                    <td className="lead_view_details_table_td">
                      Ajmer Road Jaipur
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
                      Date
                    </th>
                    <td className="lead_view_details_table_td">12.11.2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="account_view_details_table d-d-xl-flex d-md-flex meetings_participants_div">
              <div className="ms-1 me-xl-4">
                <p className="contact_view_details_costumer_table_th meetings_participants_heading">
                  Participants
                </p>
              </div>
              <div className="participants_name lead_view_details_table_td">
                <span className="me-2">Pankaj,</span>
                <span className="me-2">Pankaj,</span>
                <span className="me-2">Pankaj,</span>
                <span className="me-2">Pankaj,</span>
                <span className="me-2">Pankaj,</span>
                <span className="me-2">Pankaj,</span>
              </div>
            </div>

            {/* Empty Table */}
            <div className="table-responsive account_view_details_table d-inline">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      className="contact_view_details_costumer_table_th"
                    ></th>
                    <td className="lead_view_details_table_td"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingsViewDetails;
