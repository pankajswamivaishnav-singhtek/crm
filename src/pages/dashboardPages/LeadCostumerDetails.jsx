import React from "react";
// CSS
import "../../styles/dashboardCss/leadCostumerDetails.css";
const LeadCostumerDetails = () => {
  return (
    <div className="container-fluid dashboard_create_lead_main_container">
      <h2 className="my-3 mx-2 dashboard_leadView_details_heading">
        Lead Information
      </h2>
      {/* Cosutmer Details */}
      <div className="row my-3 mx-2 lead_view_details_costumer_details">
        <div className="col-xl-3 col-md-3">
          <div className="lead_costumer_details_firstRow_left_div">
            <div className="lead_costumer_details_firstRow_left_imgDiv">
              <img
                src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1543"
                alt="costumer-img"
                className="img-fluid lead_costumer_details_firstRow_left_img"
              />
            </div>
            <div className="lead_view_details_costumer_name_email">
              <p className="lead_view_details_costumer_name">Name</p>
              <p className="lead_view_details_costumer_email">example@.com</p>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-md-8">
          <div className="d-xl-flex d-md-flex justify-content-around justify-content-center align-items-center">
            <div class="table-responsive">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      className="lead_view_details_costumer_table_th"
                    >
                      Lead Owner
                    </th>
                    <td className="lead_view_details_table_td">Rajkumar</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="lead_view_details_costumer_table_th"
                    >
                      Mobile Number
                    </th>
                    <td className="lead_view_details_table_td">7073272134</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="lead_view_details_costumer_table_th"
                    >
                      Lead Status
                    </th>
                    <td className="lead_view_details_table_td">Contacted</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-responsive">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      className="lead_view_details_costumer_table_th"
                    >
                      Email
                    </th>
                    <td className="lead_view_details_table_td">Example@.com</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="lead_view_details_costumer_table_th"
                    >
                      Phone Number
                    </th>
                    <td className="lead_view_details_table_td">7073272134</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="lead_view_details_costumer_table_th"
                    >
                      Lead Source
                    </th>
                    <td className="lead_view_details_table_td">Contacted</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Company Details */}
      <h3 className="my-2 mx-2 dashboard_leadView_company_details_heading">
        Company Details
      </h3>
      <div className="row">
        <div className="col-xl-12">
          <div className="d-xl-flex d-md-flex justify-content-between flex-wrap justify-content-center align-items-center">
            <div class="table-responsive">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row"  className="lead_view_details_costumer_table_th">Lead Owner</th>
                    <td className="lead_view_details_table_td">Rajkumar</td>
                  </tr>
                  <tr>
                    <th scope="row"  className="lead_view_details_costumer_table_th">Mobile Number</th>
                    <td className="lead_view_details_table_td">7073272134</td>
                  </tr>
                  <tr>
                    <th scope="row"  className="lead_view_details_costumer_table_th">Lead Status</th>
                    <td className="lead_view_details_table_td">Contacted</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-responsive">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row"  className="lead_view_details_costumer_table_th">Email</th>
                    <td className="lead_view_details_table_td">Example@.com</td>
                  </tr>
                  <tr>
                    <th scope="row"  className="lead_view_details_costumer_table_th">Phone Number</th>
                    <td className="lead_view_details_table_td">7073272134</td>
                  </tr>
                  <tr>
                    <th scope="row"  className="lead_view_details_costumer_table_th">Lead Source</th>
                    <td className="lead_view_details_table_td">Contacted</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-responsive">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row"  className="lead_view_details_costumer_table_th">Email</th>
                    <td className="lead_view_details_table_td">Example@.com</td>
                  </tr>
                  <tr>
                    <th scope="row"  className="lead_view_details_costumer_table_th">Phone Number</th>
                    <td className="lead_view_details_table_td">7073272134</td>
                  </tr>
                  <tr>
                    <th scope="row"  className="lead_view_details_costumer_table_th">Lead Source</th>
                    <td className="lead_view_details_table_td">Contacted</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-responsive">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row"  className="lead_view_details_costumer_table_th">Email</th>
                    <td className="lead_view_details_table_td">Example@.com</td>
                  </tr>
                  <tr>
                    <th scope="row"  className="lead_view_details_costumer_table_th">Phone Number</th>
                    <td className="lead_view_details_table_td">7073272134</td>
                  </tr>
                  <tr>
                    <th scope="row"  className="lead_view_details_costumer_table_th">Lead Source</th>
                    <td className="lead_view_details_table_td">Contacted</td>
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad autem
            delectus tempore quisquam! Libero nisi excepturi pariatur explicabo
            consequatur nam labore earum animi corrupti impedit unde dolorum,
            amet esse, facere eos eum distinctio voluptatem officiis nobis
            beatae. Illum porro recusandae maxime earum laudantium animi
            molestiae, error quibusdam nobis, dolor atque!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadCostumerDetails;
