import React, { useState, useEffect, useCallback } from "react";
// Components
import SuperAdminSection1 from "../components/SuperAdminSection1";
import SuperAdminSection2 from "../components/SuperAdminSection2";

// Css
import "../styles/superAdmin.css";

// Controller Methods
import {
  getTotalLeadsInSuperAdmin,
  getTotalRoles,
} from "../controller/fetchApi";
// TokenId
const userIdTokenData = JSON.parse(localStorage.getItem("user"));
const tokenId = userIdTokenData?.data?.token;
const SuperAdmin = () => {
  // Get Total Leads
  const [totalLeads, setTotalLeads] = useState();
  const getTotalLeads = async () => {
    try {
      const response = await getTotalLeadsInSuperAdmin(tokenId);
      setTotalLeads(response);
    } catch (error) {
      console.log("Not Get Total Leads super Admin", error);
    }
  };

  // Get All Roles
  const [allRoles, setAllRoles] = useState([]);
  const getAllRoles = async () => {
    try {
      const result = await getTotalRoles(tokenId);
      setAllRoles(result);
    } catch (error) {
      console.log("Not Get All Roles", error);
    }
  };

  useEffect(() => {
    getTotalLeads();
    getAllRoles();
  }, []);

  return (
    <div className="super_admin_div p-3">
      <SuperAdminSection1 totalLeads={totalLeads} allRoles={allRoles} />
      <SuperAdminSection2 />
    </div>
  );
};

export default SuperAdmin;
