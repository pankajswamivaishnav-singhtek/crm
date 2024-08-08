import React, { useState, useEffect, useCallback } from "react";
import CreatedUserTable from "../components/CreatedUserTable";
// Controller Method
import { getAllUsersMadeByAdmin } from "../controller/fetchApi";
import Pagination from "../components/Pagination";
const CreatedUser = () => {
  // Start Toast -------
  const [showToast, setShowToast] = useState({ success: false, message: "" });
  // Function to hide the toast after 3 seconds
  const hideToast = () => {
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  if (showToast) {
    hideToast();
  }
  // TokenId
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;
  // Set Contact Costumer Id in main Conntact.jsx
  const [pageNo, setPageNo] = useState(0);

  //  Get All Users Api
  const [getAllUsers, setAlluser] = useState();
  const getAllUser = useCallback(async () => {
    try {
      const result = await getAllUsersMadeByAdmin(tokenId);
      setAlluser(result);
    } catch (error) {}
  }, [tokenId, setAlluser]);

  useEffect(() => {
    getAllUser();
  }, [getAllUser]);

  return (
    <div className="conatiner-fluid dashboard_rightLeads_main_container">
      <div className="dashboard_content_wrapper">
        {/* Table Div */}
        <div className="dashboard_leads_table_div">
          <CreatedUserTable
            tblHead={{
              firstHead: "Sr. No",
              secondHead: "Name",
              thirdHead: "Email",
              seventhHead: "Role",
              fourthHead: "Contact",
              fifthHead: "Id",
              sixthHead: "Permissions",
              eighthHead: "Action",
            }}
            data={getAllUsers}
            getAllUser={getAllUser}
            redirectLink="/role&permission"
          />
        </div>
        {/* Pagination Div */}
        <Pagination pageNo={pageNo} setPageNo={setPageNo} />
      </div>
    </div>
  );
};

export default CreatedUser;
