import React, { useContext, useEffect, useState } from "react";
// React Router Dom
import { Link } from "react-router-dom";
import leadIdContext from "../../pages/LeadIdContext";
import { FaRegEye } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";

const LeadsRightSectionTable = ({
  tblHead,
  redirectLink,
  getAllLeadData,
  data,
}) => {
  // Get leadCostumerId From LeadSection Table for delete Data From Table
  const { leadCostumerId, setLeadCostumerId } = useContext(leadIdContext) || []; //--- here used empty array because when id is undefined when do not cause error
  const [isMasterChecked, setIsMasterChecked] = useState(false);
  // Handle Single Check Box For Single Updateion And Id get and send Start ------
  const handleCheckboxChange = (leadId) => {
    const isSelected = leadCostumerId.includes(leadId);
    if (isSelected) {
      setLeadCostumerId(leadCostumerId.filter((id) => id !== leadId));
    } else {
      setLeadCostumerId([...leadCostumerId, leadId]);
    }
  };
  // Handle Master Checkbox Change Start -----
  const handleMasterCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsMasterChecked(isChecked);
    const allLeadIds = getAllLeadData?.content?.map((data) => data.id) || [];
    if (isChecked) {
      setLeadCostumerId(allLeadIds);
    } else {
      setLeadCostumerId([]);
    }
  };
  // Lead Status Color
  const getStatusClassName = (status) => {
    switch (status.toLowerCase()) {
      case "lead":
        return "lead-table-leadStatus-lead";
      case "contacted":
        return "lead-table-leadStatus-contacted";
      case "deal":
        return "lead-table-leadStatus-deal";
      default:
        return "";
    }
  };

  // Update master checkbox state when leadCostumerId changes
  useEffect(() => {
    const allLeadIds = getAllLeadData?.content?.map((data) => data.id) || [];
    if (allLeadIds.length === 0) return;
    if (leadCostumerId.length === allLeadIds.length) {
      setIsMasterChecked(true);
    } else {
      setIsMasterChecked(false);
    }
  }, [leadCostumerId, getAllLeadData]);

  console.log("ALl Lead length", getAllLeadData?.totalElements);
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
              <th scope="col" className="text-center">
                {tblHead.sixthHead}
              </th>
              <th scope="col" className="text-center">
                {tblHead.seventhHead}
              </th>
            </tr>
          </thead>
          <tbody className="dashboard_section1_tableBody ">
            {getAllLeadData && getAllLeadData?.content ? (
              getAllLeadData?.content?.map((data, index) => (
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
                  <td>
                    <Link
                      to={redirectLink}
                      className={`Link-button-leads ${getStatusClassName(
                        data.leadStatus
                      )}`}
                    >
                      <span> {data.leadStatus}</span>
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      <FaRegEye className="showDetailEye fs-4" />
                    </Link>
                  </td>
                  <td className="text-center">
                    <Link to="/create-contact" state={{ leadId: data.id }}>
                      <HiPencilSquare className="lead-table-contact-action-icon fs-4" />
                    </Link>
                    {/* &nbsp;&nbsp;
                    <Link to="/contact-details" state={{ leadId: data.id }}>
                      <FaRegEye className="fs-5" />
                    </Link> */}
                  </td>
                  <td className="text-center">
                    <Link to={redirectLink} className="Link-button-leads">
                      <div className="leads_table_id_col rounded">
                        <span className="leads_table_id_text">
                          LI-{data.id}
                        </span>
                      </div>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No Lead Data At this Time</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsRightSectionTable;
