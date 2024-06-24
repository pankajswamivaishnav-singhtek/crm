import React from "react";
// Components
import SuperAdminSection1 from "../components/SuperAdminSection1";
import SuperAdminSection2 from "../components/SuperAdminSection2";

// Css
import "../styles/superAdmin.css";
const SuperAdmin = () => {
  return (
    <div className="super_admin_div p-3">
      <SuperAdminSection1 />
      <SuperAdminSection2 />
    </div>
  );
};

export default SuperAdmin;
