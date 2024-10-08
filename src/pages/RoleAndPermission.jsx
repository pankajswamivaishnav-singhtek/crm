import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// CSS
import "../styles/roleAndPermission.css";
// Controllers
import {
  getRoles,
  getModules,
  getModulePermissions,
  sendRoleModulePermissions,
} from "../controller/fetchApi";
// Toast
import Toast from "../components/Toast";
const RoleAndPermission = () => {
  // Toast
  const [showToast, setShowToast] = useState(false);

  // Get User Data From user page for permissions
  const location = useLocation();
  const userData = location?.state?.userData;

  // const userData = location.state?.userData;
  const [roles, setRoles] = useState();
  const [module, setModules] = useState([]);
  const [modulePermissions, setModulePermissions] = useState([]);
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;

  useEffect(() => {
    (async () => {
      try {
        const response = await getRoles(tokenId);
        const moduleResponse = await getModules(tokenId);
        const modulePermissionsResponse = await getModulePermissions(tokenId);
        setRoles(response);
        setModules(moduleResponse);
        setModulePermissions(modulePermissionsResponse);
      } catch (error) {}
    })();
  }, [tokenId]);

  // handleRoleChecks
  const [selectedRolesId, setSelectedRoleId] = useState();
  const handleRoleChecks = (id) => {
    setSelectedRoleId(id);
  };

  // handlePermissionChecks
  const [selectedModulePermissions, setSelectedModulePermissions] = useState(
    {}
  );
  const handlePermissionChecks = (event, moduleId) => {
    let isSelected = event.target.checked;
    let value = parseInt(event.target.value);

    setSelectedModulePermissions((prevState) => {
      const newState = { ...prevState };
      if (isSelected) {
        if (!newState[moduleId]) {
          newState[moduleId] = [];
        }
        newState[moduleId].push(value);
      } else {
        if (newState[moduleId]) {
          newState[moduleId] = newState[moduleId].filter((id) => id !== value);
          if (newState[moduleId].length === 0) {
            delete newState[moduleId];
          }
        }
      }
      return newState;
    });
  };
  // Submit Form
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // Get Modules Id
      let modulesIdArray = [];
      for (const key in selectedModulePermissions) {
        modulesIdArray.push(Number(key));
      }
      // Make Module Permissions
      const modulePermissions = modulesIdArray.map((moduleId) => {
        return {
          moduleId: moduleId,
          permissionIds: selectedModulePermissions[moduleId],
        };
      });
      // Construct the desired output object
      const desiredFormat = {
        roleId: selectedRolesId,
        moduleIds: modulesIdArray,
        modulePermissions: modulePermissions,
      };
      // Log the desired format as a string
      await sendRoleModulePermissions(
        desiredFormat,
        tokenId,
        userData?.id,
        setShowToast
      );
    } catch (error) {
      console.log("Error sending Role & Permissions", error);
    }
  };

  // handleCheckAllPermissions
  const handleCheckAllPermissions = (event, moduleId) => {
    let isSelected = event.target.checked;
    setSelectedModulePermissions((prevState) => {
      const newState = { ...prevState };
      if (isSelected) {
        const allPermissions = modulePermissions.map((perm) => perm.id);
        newState[moduleId] = allPermissions;
      } else {
        delete newState[moduleId];
      }
      console.log(JSON.stringify(newState));
      return newState;
    });
  };
  return (
    <div className="role_and_permission p-3">
      {/* Heading */}
      <div className="role_and_permission_heading dashboard_username_div">
        <p className="dashboard_user_name">{`Username : ${userData?.firstName} ${userData?.lastName}`}</p>
        <p className="dashboard_user_name2">{`User Id : ${userData?.id}`}</p>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Roles */}
        <div className="role_and_permission_roles_module">
          <p className="role_and_permission_role_module_text">Role</p>
          <div className="role_and_permission_role_options ">
            {Array.isArray(roles) &&
              roles?.map((data, index) => (
                <div
                  className="form-check role_and_permission_role_module_checks"
                  key={index}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id={data?.id}
                    name={data?.role + data?.id}
                    // checked={selectedRolesId?.includes(data?.id)}
                    value={data?.id}
                    onChange={() => {
                      handleRoleChecks(data?.id);
                    }}
                  />
                  <label className="form-check-label" htmlFor={data?.id}>
                    {data.role}
                  </label>
                </div>
              ))}
          </div>
        </div>
        {/* Horizontall line */}
        <div>
          <hr />
        </div>
        <div className="role_and_permission_module">
          <p className="role_and_permission_role_module_text">Module</p>
        </div>
        {/* Module Checkbox */}
        <div className="role_and_permission_modules row">
          {module?.map((data, index) => (
            <div
              className="col-xl-5 role_and_permission_details_main"
              key={index}
            >
              <details className="role_and_permission_faq_details">
                <summary className="role_and_permission_faq_summary">
                  {data?.module}
                </summary>
                <hr />
                {/* Master Checkbox */}
                <div className="form-check role_and_permission_role_module_checks">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id={`masterPermissionCheck-${data.id}`}
                    onChange={(e) => handleCheckAllPermissions(e, data.id)}
                    checked={
                      modulePermissions.every((perm) =>
                        selectedModulePermissions[data.id]?.includes(perm.id)
                      ) || false
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`masterPermissionCheck-${data.id}`}
                  >
                    Select All
                  </label>
                </div>
                {/* Permissions */}
                <div className="role_and_permission_role_options mt-2">
                  {modulePermissions?.map((permissionData, index) => (
                    <div
                      className="form-check role_and_permission_role_module_checks"
                      key={index}
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={permissionData?.permission + permissionData?.id}
                        checked={
                          selectedModulePermissions[data.id]?.includes(
                            permissionData?.id
                          ) || false
                        }
                        value={permissionData?.id}
                        onChange={(e) => handlePermissionChecks(e, data.id)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={
                          permissionData?.permission + permissionData?.id
                        }
                      >
                        {permissionData?.permission}
                      </label>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          ))}
        </div>
        {/* Submit Button */}
        <div className="text-center">
          <button className="create_lead_form_submitBtn" type="submit">
            Save
          </button>
        </div>
      </form>
      {/* Toast */}
      <Toast showToast={showToast} setShowToast={setShowToast} />
    </div>
  );
};

export default RoleAndPermission;
