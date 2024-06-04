import React, { useState, useEffect } from "react";
// React Router Dom
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
const TaskTables = ({
  tblHead,
  redirectLink,
  getAllTaskData,
  taskCostumerId,
  setTaskCostumerId,
}) => {
  const [isMasterChecked, setIsMasterChecked] = useState(false);
  // Handle Single Check Box For Single Updateion And Id get and send Start ------
  const handleCheckboxChange = (taskId) => {
    const isSelected = taskCostumerId.includes(taskId);
    if (isSelected) {
      setTaskCostumerId(taskCostumerId.filter((id) => id !== taskId));
    } else {
      setTaskCostumerId([...taskCostumerId, taskId]);
    }
  };
  // Handle Single Check Box For Single Updateion And Id get and send End    ------
  // Handle Master Checkbox Change Start -----
  const handleMasterCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsMasterChecked(isChecked);
    const allLeadIds = getAllTaskData?.content?.map((data) => data.id) || [];
    if (isChecked) {
      setTaskCostumerId(allLeadIds);
    } else {
      setTaskCostumerId([]);
    }
  };
  // Handle Master Checkbox Change End   -----
  useEffect(() => {
    const allLeadIds = getAllTaskData?.content?.map((data) => data.id) || [];
    if (allLeadIds.length === 0) return;
    if (taskCostumerId.length === allLeadIds.length) {
      setIsMasterChecked(true);
    } else {
      setIsMasterChecked(false);
    }
  }, [taskCostumerId, getAllTaskData]);
  return (
    <div className="container-fluid table-responsive">
      <div className="row dashboard_table_main_heading"></div>
      <div className="LeadRightSectionTable_body">
        <table className="table table-responsive ">
          <thead>
            <tr className="table-danger dashboard_section1_tableHead_tr">
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
              <th scope="col">{tblHead.sixthHead}</th>
            </tr>
          </thead>
          <tbody className="dashboard_section1_tableBody ">
            {getAllTaskData && getAllTaskData?.content?.length > 0 ? (
              getAllTaskData?.content?.map((data) => (
                <tr
                  key={data.id}
                  onClick={() => localStorage.setItem("taskId", data.id)}
                >
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckIndeterminate"
                      onChange={() => handleCheckboxChange(data.id)}
                      checked={taskCostumerId?.includes(data.id)}
                    />
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.taskOwner}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.dueDate}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.contact}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.subject}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.status}
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
                <td colSpan="7">No Task At this Time</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTables;
