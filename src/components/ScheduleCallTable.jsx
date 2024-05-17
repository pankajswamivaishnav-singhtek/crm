import React from "react";
// React Router Dom
import { Link } from "react-router-dom";
const ScheduleCallTable = ({
  tblHead,
  redirectLink,
  getAllScheduleCallData,
  scheduleCallCostumerId,
  setScheduleCallCostumerId,
}) => {
  // Handle Single Check Box For Single Updateion And Id get and send Start ------
  const handleCheckboxChange = (callId) => {
    const isSelected = scheduleCallCostumerId.includes(callId);
    if (isSelected) {
      setScheduleCallCostumerId(
        scheduleCallCostumerId.filter((id) => id !== callId)
      );
    } else {
      setScheduleCallCostumerId([...scheduleCallCostumerId, callId]);
    }
  };
  // Handle Single Check Box For Single Updateion And Id get and send End    ------
  // Handle Master Checkbox Change Start -----
  const handleMasterCheckboxChange = (event) => {
    console.log("Master checkbox clicked");
    const isChecked = event.target.checked;
    const allCallIds =
      getAllScheduleCallData?.content?.map((data) => data.id) || [];
    if (isChecked) {
      setScheduleCallCostumerId(allCallIds);
    } else {
      setScheduleCallCostumerId([]);
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
            {getAllScheduleCallData && getAllScheduleCallData?.content ? (
              getAllScheduleCallData?.content?.map((data) => (
                <tr
                  key={data.id}
                  onClick={() => localStorage.setItem("scheduleCallId", data.id)}
                >
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckIndeterminate"
                      onChange={() => handleCheckboxChange(data.id)}
                      checked={scheduleCallCostumerId?.includes(data.id)}
                    />
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.callOwner}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.callType}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.callStartTime}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.callStatus}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.callPurpose}
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">There are no scheduled calls at the moment.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleCallTable;
