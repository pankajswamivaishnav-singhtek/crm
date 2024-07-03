import React, { useState, useCallback, useEffect } from "react";
// CSS
import "../styles/dashboardCss/assignLeads.css";
// Import Shared Components Tables
import { getAllUsersMadeByAdmin } from "../controller/fetchApi";
import AssignLeadTableAdmin from "./shared/AssignLeadTableAdmin";
const AssignLeads = () => {
  // TokenId
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;
  // Set Admin Id in main Conntact.jsx
  const [adminId, setAdminId] = useState([]);
  const [getAllAdminsData, setAllAdminsData] = useState([]);
  //  Admin Lists In super admin modal
  const getAllUser = useCallback(async () => {
    try {
      const result = await getAllUsersMadeByAdmin(tokenId);
      setAllAdminsData(result);
    } catch (error) {}
  }, [setAllAdminsData, tokenId]);
  useEffect(() => {
    getAllUser();
  }, [getAllUser]);
  
  return (
    <div>
      <AssignLeadTableAdmin
        tblHead={{
          firstHead: "Admin ID",
          secondHead: "Name",
          thirdHead: "Email",
          fourthHead: "Username",
          fifthHead: "Mobile Number",
          sixthHead: "Role"
        }}
        getAllAdminsData={getAllAdminsData}
        adminId={adminId}
        setAdminId={setAdminId}
      />
    </div>
  );
};

export default AssignLeads;
