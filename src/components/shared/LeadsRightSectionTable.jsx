import React, { useContext } from "react";
// React Router Dom
import { Link } from "react-router-dom";
import leadIdContext from "../../pages/LeadIdContext";

const LeadsRightSectionTable = ({
  tblHead,
  redirectLink,
  getAllLeadData,
  data,
}) => {
  // Get leadCostumerId From LeadSection Table for delete Data From Table
  const { leadCostumerId, setLeadCostumerId } = useContext(leadIdContext) || []; //--- here used empty array because when id is undefined when do not cause error

  // Handle Single Check Box For Single Updateion And Id get and send Start ------
  const handleCheckboxChange = (leadId) => {
    const isSelected = leadCostumerId.includes(leadId);
    if (isSelected) {
      setLeadCostumerId(leadCostumerId.filter((id) => id !== leadId));
    } else {
      setLeadCostumerId([...leadCostumerId, leadId]);
    }
  };
  // Handle Single Check Box For Single Updateion And Id get and send End    ------
  // Handle Master Checkbox Change Start -----
  const handleMasterCheckboxChange = (event) => {
    console.log("Master checkbox clicked");
    const isChecked = event.target.checked;
    const allLeadIds = getAllLeadData?.content?.map((data) => data.id) || [];
    if (isChecked) {
      setLeadCostumerId(allLeadIds);
    } else {
      setLeadCostumerId([]);
    }
  };
  // Handle Master Checkbox Change End   -----
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
                  onClick={handleMasterCheckboxChange}
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
            {getAllLeadData && getAllLeadData.content ? (
              getAllLeadData?.content?.map((data) => (
                <tr
                  key={data.id}
                  onClick={() => localStorage.setItem("leadId", data.id)}
                >
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckIndeterminate"
                      onChange={() => handleCheckboxChange(data.id)}
                      checked={leadCostumerId?.includes(data.id)}
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
              ))
            ) : (
              <tr>
                <td colSpan="6">No Lead Data At this Time</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsRightSectionTable;
