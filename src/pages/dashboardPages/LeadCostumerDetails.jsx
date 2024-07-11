import React, { useState, useEffect } from "react";
// CSS
import "../../styles/dashboardCss/leadCostumerDetails.css";
// React Icons
import { MdVerified } from "react-icons/md";
import { MdCancel } from "react-icons/md";
// Import Toast
import Toast from "../../components/Toast";
// Import api function from controller
import {
  getSingleLead,
  verifyLeads,
  rejectedLeads,
} from "../../controller/fetchApi";
const LeadCostumerDetails = () => {
  // Start Toast Code-------
  const [showToast, setShowToast] = useState({ success: false, message: "" });

  // Get User details from local storage
  const userIdTokenData = JSON.parse(localStorage.getItem("leadId"));
  const leadId = userIdTokenData;
  const userTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userTokenData?.data?.token;
  const [getSingleLeadData, setSingleLeadData] = useState([]);

  //  Verified lead
  const handleVerifyLeads = async (leadId) => {
    try {
      await verifyLeads(leadId, setShowToast, tokenId);
    } catch (error) {
      console.log("Not Verified lead in lead view Detaisl", error);
    }
  };

  // Rejected lead
  const handleRejectedLeads = async (leadId) => {
    try {
      await rejectedLeads(leadId, setShowToast, tokenId);
    } catch (error) {
      console.log("Not Verified lead in lead view Detaisl", error);
    }
  };

  useEffect(() => {
    getSingleLead(leadId, tokenId).then((res) => {
      setSingleLeadData(res);
    });
  }, [leadId, tokenId]);

  return (
    <>
      <div className="container-fluid dashboard_create_lead_main_container">
        <h2 className="mt-3 mx-2 dashboard_leadView_details_heading">
          Lead Information
        </h2>
        <p className="mx-2 dashboard_leadView_details_heading_second">
          Lead Id : LI-{getSingleLeadData?.id}
        </p>
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
                <p className="lead_view_details_costumer_name">
                  {getSingleLeadData.firstName}
                </p>
                <p className="lead_view_details_costumer_email">
                  {getSingleLeadData.email}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-8">
            <div className="d-xl-flex d-md-flex justify-content-around justify-content-center align-items-center">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        className="lead_view_details_costumer_table_th"
                      >
                        Lead Owner
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLeadData.leadOwner}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="lead_view_details_costumer_table_th"
                      >
                        Mobile Number
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLeadData.mobile}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="lead_view_details_costumer_table_th"
                      >
                        Lead Status
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLeadData.leadStatus}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="lead_view_details_costumer_table_th"
                      >
                        Lead Service
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLeadData?.leadService}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-responsive">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        className="lead_view_details_costumer_table_th"
                      >
                        Email
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLeadData.email}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="lead_view_details_costumer_table_th"
                      >
                        Phone
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLeadData.secondaryMobile}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="lead_view_details_costumer_table_th"
                      >
                        Lead Source
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLeadData.leadSource}
                      </td>
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
              <div className="table-responsive">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        className="lead_view_details_costumer_table_th"
                      >
                        Annual Revenue
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLeadData?.annualRevenue}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="lead_view_details_costumer_table_th"
                      >
                        Company Contact
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLeadData?.companyContact}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="lead_view_details_costumer_table_th"
                      >
                        District
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLeadData?.district}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-responsive">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        className="lead_view_details_costumer_table_th"
                      >
                        Company Name
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLeadData.companyName}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="lead_view_details_costumer_table_th"
                      >
                        Secondary Contact
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLeadData.secondaryContact}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="lead_view_details_costumer_table_th"
                      >
                        State
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLeadData.state}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-responsive">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        className="lead_view_details_costumer_table_th"
                      >
                        Company Email
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLeadData.companyEmail}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="lead_view_details_costumer_table_th"
                      >
                        City
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLeadData.city}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="lead_view_details_costumer_table_th"
                      >
                        Country
                      </th>
                      <td className="lead_view_details_table_td">
                        {getSingleLeadData.country}
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
              {getSingleLeadData.description}
            </p>
          </div>
        </div>
      </div>
      {/* Btns */}
      <div>
        {getSingleLeadData?.leadType === "verified" ? (
          ""
        ) : getSingleLeadData?.leadType === "unverified" ? (
          <div className=" view_leads_details_btn_div">
            <button
              className="leads_verify_btn"
              onClick={() => handleVerifyLeads(getSingleLeadData?.id)}
            >
              <MdVerified className="leads_verify_btn_icon" />
              Verify Leads
            </button>

            <button
              className="leads_reject_btn"
              onClick={() => handleRejectedLeads(getSingleLeadData?.id)}
            >
              <MdCancel className="leads_verify_btn_icon" />
              Reject Leads
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <Toast showToast={showToast} setShowToast={setShowToast} />
    </>
  );
};

export default LeadCostumerDetails;
