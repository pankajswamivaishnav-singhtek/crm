import React, { useState, useEffect, useCallback } from "react";
// Components
import SuperAdminSection1 from "../components/SuperAdminSection1";
import SuperAdminSection2 from "../components/SuperAdminSection2";

// Css
import "../styles/superAdmin.css";

// Controller Methods
import { getAllUsersMadeByAdmin } from "../controller/fetchApi";
// TokenId
const userIdTokenData = JSON.parse(localStorage.getItem("user"));
const tokenId = userIdTokenData?.data?.token;

const SuperAdmin = () => {
  //  Get All Users Api
  const [getAllUsers, setAlluser] = useState();
  const getAllUser = useCallback(async () => {
    try {
      const result = await getAllUsersMadeByAdmin(tokenId);
      setAlluser(result);
    } catch (error) {}
  }, [setAlluser]);

  useEffect(() => {
    getAllUser();
  }, [getAllUser]);
  return (
    <div className="super_admin_div p-3">
      <SuperAdminSection1 />
      <SuperAdminSection2 getAllUsers={getAllUsers} />
    </div>
  );
};

export default SuperAdmin;
