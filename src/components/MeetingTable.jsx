import React, { useState, useEffect } from "react";
// React Router Dom
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";
const MeetingTable = ({
  tblHead,
  redirectLink,
  getAllMeetingData,
  meetCostumerId,
  setMeetCostumerId,
  data,
}) => {
  const [isMasterChecked, setIsMasterChecked] = useState(false);
  // Handle Single Check Box For Single Updateion And Id get and send Start ------
  const handleCheckboxChange = (meetId) => {
    const isSelected = meetCostumerId.includes(meetId);
    if (isSelected) {
      setMeetCostumerId(meetCostumerId.filter((id) => id !== meetId));
    } else {
      setMeetCostumerId([...meetCostumerId, meetId]);
    }
  };
  // Handle Single Check Box For Single Updateion And Id get and send End    ------
  // Handle Master Checkbox Change Start -----
  const handleMasterCheckboxChange = (event) => {
    console.log("Master checkbox clicked");
    const isChecked = event.target.checked;
    setIsMasterChecked(isChecked);
    const allmeetIds = getAllMeetingData?.content?.map((data) => data.id) || [];
    if (isChecked) {
      setMeetCostumerId(allmeetIds);
    } else {
      setMeetCostumerId([]);
    }
  };
  // Handle Master Checkbox Change End   -----
  useEffect(() => {
    const allLeadIds = getAllMeetingData?.content?.map((data) => data.id) || [];
    if (allLeadIds.length === 0) return;
    if (meetCostumerId.length === allLeadIds.length) {
      setIsMasterChecked(true);
    } else {
      setIsMasterChecked(false);
    }
  }, [meetCostumerId, getAllMeetingData]);
  return (
    <div className="container-fluid table-responsive">
      <div className="row dashboard_table_main_heading"></div>
      <div className="LeadRightSectionTable_body">
        <table className="table table-responsive ">
          <thead>
            <tr className="table-danger dashboard_section1_tableHead_tr">
              {/* Checkbox Column */}
              <th scope="col">
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
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      <FaRegEye className="showDetailEye fs-4" />
                    </Link>
                  </td>
                  <td className="text-center">
                    <Link to="/create-deal" state={{ leadId: data.leadId }}>
                      <HiPencilSquare className="lead-table-contact-action-icon fs-4" />
                    </Link>
                  </td>
                  <td className="text-center">
                    {data?.leadId && (
                      <Link to={redirectLink} className="Link-button-leads">
                        <div className="leads_table_id_col rounded">
                          <span className="leads_table_id_text">
                            LI-{data.leadId}
                          </span>
                        </div>
                      </Link>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No Meeting Data At this Time</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MeetingTable;
