import React from "react";
// React Router Dom
import { Link } from "react-router-dom";

const LeadsRightSectionTable = ({
  tblHead,
  redirectLink,
  getAllLeadData,
  tableName,
  data,
}) => {
  console.log("getAllData", getAllLeadData);
  return (
    <div className="container-fluid table-responsive">
      <div className="row dashboard_table_main_heading"></div>
      <div className="LeadRightSectionTable_body">
        <table className="table table-responsive ">
          <thead>
            <tr className="table-danger dashboard_section1_tableHead_tr">
              <th scope="col">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
              </th>
              <th scope="col">{tblHead.firstHead}</th>
              <th scope="col">{tblHead.secondHead}</th>
              <th scope="col">{tblHead.thirdHead}</th>
              <th scope="col">{tblHead.fourthHead}</th>
              <th scope="col">{tblHead.fifthHead}</th>
            </tr>
          </thead>
          <tbody className="dashboard_section1_tableBody ">
            {(() => {
              switch (tableName) {
                case "leadsTable":
                  return getAllLeadData?.content?.map((data) => (
                    <tr key={data.id}>
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckIndeterminate"
                        />
                      </td>
                      <td>
                        <Link to={redirectLink} className="Link-button-leads">
                          {data.leadOwner}
                        </Link>
                      </td>
                      <td>
                        <Link to={redirectLink} className="Link-button-leads">
                          {data.firstName}
                        </Link>
                      </td>
                      <td>
                        <Link to={redirectLink} className="Link-button-leads">
                          {data.leadSource}
                        </Link>
                      </td>
                      <td>{data.leadStatus}</td>
                    </tr>
                  ));
                // Add more cases for other tables if needed
                default:
                  return null;
              }
            })()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsRightSectionTable;
 