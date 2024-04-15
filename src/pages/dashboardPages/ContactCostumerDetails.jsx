import React from "react";
// CSS
import "../../styles/dashboardCss/contactCostumerDetails.css";
const ContactCostumerDetails = () => {
  return (
    <div className="container-fluid dashboard_create_lead_main_container">
      {/* Company Details */}
      <h3 className="my-2 mx-2 dashboard_leadView_company_details_heading">
        Company Info
      </h3>
      <div className="row">
        <div className="col-xl-12">
          <div className="d-xl-flex d-md-flex justify-content-between flex-wrap justify-content-center align-items-center row-cols-3">
            <div class="table-responsive">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      className="contact_view_details_costumer_table_th"
                    >
                      Company Name
                    </th>
                    <td className="lead_view_details_table_td">
                      Singhtek IT Jaipur
                    </td>
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
                      className="contact_view_details_costumer_table_th"
                    >
                      Company Email
                    </th>
                    <td className="lead_view_details_table_td">
                      singhtek@gmail.com
                    </td>
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
            <div class="table-responsive">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      className="contact_view_details_costumer_table_th"
                    >
                      Company Contact
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

export default ContactCostumerDetails;
