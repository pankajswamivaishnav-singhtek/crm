import React, { useState, useEffect } from "react";
// React Router Dom
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";

const LogCallTable = ({
  tblHead,
  redirectLink,
  getAllLogCallData,
  logCallCostumerId,
  setLogCallCostumerId,
}) => {
  const [isMasterChecked, setIsMasterChecked] = useState(false);
  // Handle Single Check Box For Single Updateion And Id get and send Start ------
  const handleCheckboxChange = (callId) => {
    const isSelected = logCallCostumerId.includes(callId);
    if (isSelected) {
      setLogCallCostumerId(logCallCostumerId.filter((id) => id !== callId));
    } else {
      setLogCallCostumerId([...logCallCostumerId, callId]);
    }
  };
  // Handle Single Check Box For Single Updateion And Id get and send End    ------
  // Handle Master Checkbox Change Start -----
  const handleMasterCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsMasterChecked(isChecked);
    const allCallIds = getAllLogCallData?.content?.map((data) => data.id) || [];
    if (isChecked) {
      setLogCallCostumerId(allCallIds);
    } else {
      setLogCallCostumerId([]);
    }
  };
  // Handle Master Checkbox Change End   -----
  useEffect(() => {
    const allLeadIds = getAllLogCallData?.content?.map((data) => data.id) || [];
    if (allLeadIds.length === 0) return;
    if (logCallCostumerId.length === allLeadIds.length) {
      setIsMasterChecked(true);
    } else {
      setIsMasterChecked(false);
    }
  }, [logCallCostumerId, getAllLogCallData]);

  return (
    <div className="container-fluid table-responsive">
      <div className="row dashboard_table_main_heading"></div>
      <div className="LeadRightSectionTable_body">
        <table className="table table-responsive ">
          <thead>
            <tr className="table-danger dashboard_section1_tableHead_tr">
              <th scope="col">
                {/* <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                  onClick={handleMasterCheckboxChange}
                /> */}
                <div className="wrap-check-29">
                  <div className="cbx">
                    <input
                      id="cbx-29"
                      type="checkbox"
                      onClick={handleMasterCheckboxChange}
                      checked={isMasterChecked}
                    />
                    <label htmlFor="cbx-29" />
                    <svg width={15} height={14} viewBox="0 0 15 14" fill="none">
                      <path d="M2 8.36364L6.23077 12L13 2" />
                    </svg>
                  </div>
                  {/* Gooey*/}
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                      <filter id="goo-12">
                        <feGaussianBlur
                          in="SourceGraphic"
                          stdDeviation={4}
                          result="blur"
                        />
                        <feColorMatrix
                          in="blur"
                          mode="matrix"
                          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                          result="goo-12"
                        />
                        <feBlend in="SourceGraphic" in2="goo-12" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </th>
              <th scope="col">{tblHead.firstHead}</th>
              <th scope="col">{tblHead.secondHead}</th>
              <th scope="col">{tblHead.thirdHead}</th>
              <th scope="col">{tblHead.fourthHead}</th>
              <th scope="col">{tblHead.fifthHead}</th>
              <th scope="col">{tblHead.sixthHead}</th>
            </tr>
          </thead>
          <tbody className="dashboard_section1_tableBody ">
            {getAllLogCallData && getAllLogCallData?.content ? (
              getAllLogCallData?.content?.map((data) => (
                <tr
                  key={data.id}
                  onClick={() => localStorage.setItem("logCallId", data.id)}
                >
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckIndeterminate"
                      onChange={() => handleCheckboxChange(data.id)}
                      checked={logCallCostumerId?.includes(data.id)}
                    />
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.subject}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.callPurpose}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.callType}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.callResult}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.callStatus}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      <FaRegEye className="showDetailEye fs-4" />
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">There are no Log calls at the moment.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogCallTable;
