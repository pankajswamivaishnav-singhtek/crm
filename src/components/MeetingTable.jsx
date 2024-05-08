import React from "react";
// React Router Dom
import { Link } from "react-router-dom";

const MeetingTable = ({
  tblHead,
  redirectLink,
  getAllMeetingData,
  meetCostumerId,
  setMeetCostumerId,
  data,
}) => {
  // Handle Single Check Box For Single Updateion And Id get and send Start ------
  const handleCheckboxChange = (dealId) => {
    const isSelected = meetCostumerId.includes(dealId);
    if (isSelected) {
      setMeetCostumerId(meetCostumerId.filter((id) => id !== dealId));
    } else {
      setMeetCostumerId([...meetCostumerId, dealId]);
    }
  };
  // Handle Single Check Box For Single Updateion And Id get and send End    ------
  // Handle Master Checkbox Change Start -----
  const handleMasterCheckboxChange = (event) => {
    console.log("Master checkbox clicked");
    const isChecked = event.target.checked;
    const allLeadIds = getAllMeetingData?.content?.map((data) => data.id) || [];
    if (isChecked) {
      setMeetCostumerId(allLeadIds);
    } else {
      setMeetCostumerId([]);
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
            </tr>
          </thead>
          <tbody className="dashboard_section1_tableBody ">
            {getAllMeetingData && getAllMeetingData?.content?.length > 0 ? (
              getAllMeetingData?.content?.map((data) => (
                <tr
                  key={data.id}
                  onClick={() => localStorage.setItem("meetId", data.id)}
                >
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckIndeterminate"
                      onChange={() => handleCheckboxChange(data.id)}
                      checked={meetCostumerId?.includes(data.id)}
                    />
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.title}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.host}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.date}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.location}
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No Meeting Data At this Time</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MeetingTable;
