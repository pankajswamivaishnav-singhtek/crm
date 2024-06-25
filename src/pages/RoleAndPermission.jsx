import React, { useState, useEffect } from "react";
// CSS
import "../styles/roleAndPermission.css";
// Controllers
import {
  getRoles,
  getModules,
  getModulePermissions,
} from "../controller/fetchApi";

const RoleAndPermission = () => {
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
        console.log("modules Permissions", modulePermissionsResponse);
        setRoles(response);
        setModules(moduleResponse);
        setModulePermissions(modulePermissionsResponse);
      } catch (error) {}
    })();
  }, [tokenId]);

  return (
    <div className="role_and_permission p-3">
      {/* Heading */}
      <div className="role_and_permission_heading dashboard_username_div">
        <p className="dashboard_user_name">{`Welcome : Pankaj Swami Vaishnav`}</p>
        <p className="dashboard_user_name2">{`username : pankajvaishnav128`}</p>
      </div>
      <form>
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
                <div className="role_and_permission_role_options mt-2">
                  {modulePermissions?.map((permissionData, index) => (
                    <div
                      className="form-check role_and_permission_role_module_checks"
                      key={index}
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id={permissionData?.id}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={permissionData?.id}
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
    </div>
  );
};

export default RoleAndPermission;
