import React, { useState, useEffect } from "react";
// Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// React Router Dom
import { BrowserRouter } from "react-router-dom";
// Routes
import AllRoutes from "./routes/AllRoutes";
import permissionContext from "./pages/PermissionsContext";
const App = () => {
  // Get Permissions From LocalStorage
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));

  const [permissions, setPermissions] = useState({
    leadsPermission: null,
    contactsPermission: null,
    meetingsPermission: null,
    dealsPermission: null,
    accountsPermission: null,
    callsPermission: null,
    tasksPermission: null,
  });

  useEffect(() => {
    const modules =
      userIdTokenData?.data?.roleAndPermissions?.roles[0]?.modules;

    if (modules) {
      const newPermissions = { ...permissions };

      modules.forEach((module) => {
        const moduleName = module.module.toLowerCase() + "Permission";
        if (newPermissions.hasOwnProperty(moduleName)) {
          newPermissions[moduleName] = module.permissions;
        }
      });

      setPermissions(newPermissions);
    }
  }, []);

  return (
    <>
      <permissionContext.Provider value={permissions}>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </permissionContext.Provider>
    </>
  );
};

export default App;
