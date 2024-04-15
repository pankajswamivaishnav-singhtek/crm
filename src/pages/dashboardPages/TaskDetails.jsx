import React from "react";

const TaskDetails = () => {
  return (
    <div className="container-fluid account_view_details_main_container">
      {/* Account Information */}
      <div className="account_view_details_Row">
        <h3 className="my-2 mx-2 dashboard_leadView_company_details_heading">
          Account Information
        </h3>
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
                        Pankaj Swami Vaishnav
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
                        70724574658
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Priority
                      </th>
                      <td className="lead_view_details_table_td">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="table-responsive account_view_details_table">
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Subject
                      </th>
                      <td className="lead_view_details_table_td">
                        HDFC Finance
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Account Type
                      </th>
                      <td className="lead_view_details_table_td">Merge</td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Reminder
                      </th>
                      <td className="lead_view_details_table_td">4:30PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="table-responsive account_view_details_table">
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Due Date
                      </th>
                      <td className="lead_view_details_table_td">15.03.2024</td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Status
                      </th>
                      <td className="lead_view_details_table_td">
                        In Progress
                      </td>
                    </tr>
                    <tr></tr>
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
              delectus tempore quisquam! Libero nisi excepturi pariatur
              explicabo consequatur nam labore earum animi corrupti impedit unde
              dolorum, amet esse, facere eos eum distinctio voluptatem officiis
              nobis beatae. Illum porro recusandae maxime earum laudantium animi
              molestiae, error quibusdam nobis, dolor atque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
