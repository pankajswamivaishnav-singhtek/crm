import React, { useState, useEffect } from "react";
// CSS
import "../../styles/dashboardCss/contactCostumerDetails.css";
// Controller Method
import { getSingleContact } from "../../controller/fetchApi";
const ContactCostumerDetails = () => {
  const [getSingleContactData, setSingleContactData] = useState([]);
  // Get Schedule CallId & Toekn Id
  const contactId = JSON.parse(localStorage.getItem("contactId"));
  const userTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userTokenData?.data?.token;
  useEffect(() => {
    getSingleContact(contactId, tokenId).then((res) => {
      setSingleContactData(res);
    });
  }, [contactId, tokenId]);
  return (
    <div className="container-fluid dashboard_create_lead_main_container">
      {/* Company Details */}
      <h3 className="mt-2 mx-2 dashboard_leadView_company_details_heading">
        Company Info
      </h3>
      <p className="mx-2 dashboard_leadView_details_heading_second">
        Lead Id : LI-{getSingleContactData?.leadId}
      </p>
      <div className="row">
        <div className="col-xl-12">
          <div className="d-xl-flex d-md-flex justify-content-around justify-content-center align-items-center">
            <div className="table-responsive mannual-table-responsive">
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
                      {getSingleContactData?.companyName}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive mannual-table-responsive">
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
                      {getSingleContactData?.companyEmail}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive mannual-table-responsive">
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
                      {getSingleContactData?.companyAddress}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive mannual-table-responsive">
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
                      {getSingleContactData?.companyContact}
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
            {getSingleContactData?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCostumerDetails;
