import React from "react";
// CSS
import "../../styles/dashboardCss/accountCostumerDetails.css";
const AccountCostumerDetails = () => {
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
                        Account Owner
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
                        Parent Account
                      </th>
                      <td className="lead_view_details_table_td">
                        Au Small Finance Bank
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Pan Card
                      </th>
                      <td className="lead_view_details_table_td">
                        CQHPV516745
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Annual Revenue
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
                        Account Name
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
                        Account Number
                      </th>
                      <td className="lead_view_details_table_td">
                        734012584652
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
                        Account Information
                      </th>
                      <td className="lead_view_details_table_td">
                        singhtek@gmail.com
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
                        Account Site
                      </th>
                      <td className="lead_view_details_table_td">
                        www.website.com
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Aadhar Card
                      </th>
                      <td className="lead_view_details_table_td">
                        976341602585
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="contact_view_details_costumer_table_th"
                      >
                        Industry
                      </th>
                      <td className="lead_view_details_table_td">
                        ASP (Application Service Provider)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Billing Information */}
      <div className="account_view_details_Row">
        <h3 className="my-2 mx-2 dashboard_leadView_company_details_heading">
          Billing Information
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
                        Company Name
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
                        Company Email
                      </th>
                      <td className="lead_view_details_table_td">
                        singhtek@gmail.com
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
      </div>
      {/* Shipping Information */}
      <div className="account_view_details_Row">
        <h3 className="my-2 mx-2 dashboard_leadView_company_details_heading">
          Shipping Information
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
                        Company Name
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
                        Company Email
                      </th>
                      <td className="lead_view_details_table_td">
                        singhtek@gmail.com
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
      </div>
      {/* Deal Information */}
      <div className="account_view_details_Row">
        <h3 className="my-2 mx-2 dashboard_leadView_company_details_heading">
          Deal Information
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
                        Company Name
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
                        Company Email
                      </th>
                      <td className="lead_view_details_table_td">
                        singhtek@gmail.com
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
      </div>
    </div>
  );
};

export default AccountCostumerDetails;
