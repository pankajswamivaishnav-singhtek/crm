import React, { useState, useEffect, useContext } from "react";
import leadIdContext from "../../pages/LeadIdContext";
import { assignLeads } from "../../controller/fetchApi";
const AssignLeadTableAdmin = ({
  tblHead,
  getAllAdminsData,
  adminId,
  setAdminId,
}) => {
  const { leadCostumerId, setLeadCostumerId } = useContext(leadIdContext) || [];
  const [isMasterChecked, setIsMasterChecked] = useState(false);
  // Handle Single Check Box For Single Updateion And Id get and send Start ------
  const handleCheckboxChange = (assignUserId) => {
    const isSelected = adminId.includes(assignUserId);
    if (isSelected) {
      setAdminId(adminId.filter((id) => id !== assignUserId));
    } else {
      console.log("else mein hai error", assignUserId);
      setAdminId([...adminId, assignUserId]);
    }
  };

  const handleMasterCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    console.log("master checkbox changed", isChecked);
    setIsMasterChecked(isChecked);
    const allAdminIds = getAllAdminsData?.map((data) => data.id) || [];
    if (isChecked) {
      setAdminId(allAdminIds);
    } else {
      setAdminId([]);
    }
  };
  useEffect(() => {
    const allAdminIds = getAllAdminsData?.map((data) => data.id) || [];
    if (allAdminIds.length === 0) return;
    if (adminId.length === allAdminIds.length) {
      setIsMasterChecked(true);
    } else {
      setIsMasterChecked(false);
    }
  }, [adminId, getAllAdminsData]);
  // TokenId
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;
  // Send Assign Leads data
  const handleAssignLeads = async () => {
    try {
      console.log(
        `tokenId : ${tokenId} , adminId : ${adminId}, leadCostumerId : ${leadCostumerId}`
      );
      const result = await assignLeads(tokenId, adminId, leadCostumerId);
      console.log("result: " + result);
    } catch (error) {}
  };
  return (
    <div className="container-fluid ">
      <div className="row dashboard_table_main_heading"></div>
      <div className="LeadRightSectionTable_body table-responsive">
        <table className="table assign_leads_table table-hover">
          <thead>
            <tr className="table-danger dashboard_section1_tableHead_tr">
              {/* Checkbox Column */}
              <th scope="col">
                <div className="wrap-check-29">
                  <div className="cbx">
                    <input
                      id="cbx-29"
                      type="checkbox"
                      defaultValue=""
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
              <th scope="col" className="text-center">
                {tblHead.firstHead}
              </th>
              <th scope="col" className="text-center">
                {tblHead.secondHead}
              </th>
              <th scope="col" className="text-center">
                {tblHead.thirdHead}
              </th>
              <th scope="col">{tblHead.fourthHead}</th>
              <th scope="col">{tblHead.fifthHead}</th>
              <th scope="col" className="text-center">
                {tblHead.sixthHead}
              </th>

              {/* <th scope="col">{tblHead.fifthHead}</th> */}
            </tr>
          </thead>
          <tbody className="dashboard_section1_tableBody table-group-divider">
            {getAllAdminsData && getAllAdminsData?.length > 0 ? (
              getAllAdminsData?.map((data) => (
                <tr
                  key={data.id}
                  onClick={() => localStorage.setItem("assignUserId", data?.id)}
                >
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckIndeterminate"
                      onChange={() => handleCheckboxChange(data?.id)}
                      checked={adminId?.includes(data?.id)}
                    />
                  </td>
                  <td className="text-center">{`${data?.id}`}</td>
                  <td className="text-center">{`${data?.firstName} ${data?.lastName}`}</td>
                  <td className="text-center">{data?.email}</td>
                  <td>{data?.username}</td>
                  <td>{data?.mobile}</td>
                  <td className="text-center">{data?.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No Admins</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Assign */}
        <div className="text-center">
          <button
            className="assign_lead_table1_btn"
            onClick={handleAssignLeads}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignLeadTableAdmin;
