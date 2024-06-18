import React, { useState, useEffect } from "react";
import { getSingleDeal } from "../../controller/fetchApi";
const DealsCostumerDetails = () => {
  const [getSingleDealData, setSingleDealData] = useState([]);
  // Get Token & Deal Id
  const dealId = JSON.parse(localStorage.getItem("dealId"));
  const userTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userTokenData?.data?.token;
  useEffect(() => {
    getSingleDeal(dealId, tokenId).then((res) => {
      setSingleDealData(res);
    });
  }, [dealId, tokenId]);
  return (
    <div className="account_view_details_Row">
      {/* Deals Information */}
      <h3 className="mt-2 mx-2 dashboard_leadView_company_details_heading">
        Deal Information
      </h3>
      <p className="mx-2 dashboard_leadView_details_heading_second">
        Lead Id : LI-{getSingleDealData?.leadId}
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
                      Deal Owner
                    </th>
                    <td className="lead_view_details_table_td">
                      {getSingleDealData?.dealOwner}
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
                      Deal Name
                    </th>
                    <td className="lead_view_details_table_td">
                      {getSingleDealData?.dealName}
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
                      Ammount
                    </th>
                    <td className="lead_view_details_table_td">
                      {getSingleDealData?.amount}
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
                      Closing Date
                    </th>
                    <td className="lead_view_details_table_td">
                      {getSingleDealData?.closingDate}
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
                      {getSingleDealData?.accountName}
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
                      Type
                    </th>
                    <td className="lead_view_details_table_td">
                      {getSingleDealData?.type}
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
                      Next Step
                    </th>
                    <td className="lead_view_details_table_td">
                      {getSingleDealData?.nextStep}
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
                      Expected Revenue
                    </th>
                    <td className="lead_view_details_table_td">
                      {getSingleDealData?.expectedRevenue}
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
                      Lead Source
                    </th>
                    <td className="lead_view_details_table_td">
                      {getSingleDealData?.leadSource}
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
                      Campaign Source
                    </th>
                    <td className="lead_view_details_table_td">
                      {getSingleDealData?.campaignSource}
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
                      Contact Name
                    </th>
                    <td className="lead_view_details_table_td">
                      {getSingleDealData?.contactName}
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
                      Stage
                    </th>
                    <td className="lead_view_details_table_td">
                      {getSingleDealData?.stage}
                    </td>
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

export default DealsCostumerDetails;
