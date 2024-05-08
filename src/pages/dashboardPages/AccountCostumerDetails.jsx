import React, { useState, useEffect } from "react";
// CSS
import "../../styles/dashboardCss/accountCostumerDetails.css";
// Controller Api Methods
import { getSingleAccount } from "../../controller/fetchApi";
const AccountCostumerDetails = () => {
  const [getSingleAccountData, setSingleAccountData] = useState([]);
  const accountId = JSON.parse(localStorage.getItem("accountId"));
  const userTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userTokenData?.data?.token;
  useEffect(() => {
    getSingleAccount(accountId, tokenId).then((res) => {
      setSingleAccountData(res);
    });
  }, [accountId, tokenId]);
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
                        {getSingleAccountData?.accountOwner}
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
                        {getSingleAccountData?.parentAccount}
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
                        {getSingleAccountData?.panCard}
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
                        {getSingleAccountData?.annualRevenue}
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
                        {getSingleAccountData?.accountName}
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
                        {getSingleAccountData?.accountNumber}
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
                        {getSingleAccountData?.accountType}
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
                        {getSingleAccountData?.accountSite}
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
                        {getSingleAccountData?.aadharCard}
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
                        {getSingleAccountData?.industry}
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
                        Billing Address
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleAccountData?.billingAddress}
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
                        Billing City
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleAccountData?.billingCity}
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
                        Billing State
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleAccountData?.billingState}
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
                        Billing Code
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleAccountData?.billingCode}
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
                        Shipping Street
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleAccountData?.shippingStreet}
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
                        Shipping City
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleAccountData.shippingCity}
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
                        Shipping State
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleAccountData?.shippingState}
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
                        Shipping Code
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleAccountData?.shippingCode}
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
                        Date Of Issue
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleAccountData?.dateOfIssue}
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
                        Date Of Billing
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleAccountData?.dateOfBilling}
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
                        Date Of Shipment
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleAccountData?.dateOfShipment}
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
                        Deal Description
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleAccountData?.dealDescription}
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
