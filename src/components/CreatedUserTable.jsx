import React, { useState } from "react";
import UpdateRoleAndPermission from "../pages/UpdateRoleAndPermission";
// React Router
import { Link } from "react-router-dom";
// React Icons
import { BsPencilSquare } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";

// Controller
import { getSingleUserPermission } from "../controller/fetchApi";
const CreatedUserTable = ({ tblHead, data, redirectLink }) => {
  // Token And Users Data
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;
  // Update Role And Permissions
  const [defaultValue, setDefaultValue] = useState();

  const [currentUser, setCurrentUser] = useState();
  const handleUpdateRoleAndPermission = async (user) => {
    try {
      const roleAndPermissions = await getSingleUserPermission(
        user?.id,
        tokenId
      );
      setCurrentUser(user);
      setDefaultValue(roleAndPermissions);
    } catch (error) {
      console.log("Created User Update getModulePermissions :", error);
    }
  };
  return (
    <div className="LeadRightSectionTable_body table-responsive">
      <table className="table  ">
        <thead>
          <tr className="table-danger dashboard_section1_tableHead_tr">
            <th scope="col">{tblHead.firstHead}</th>
            <th scope="col" className="text-center">
              {tblHead.secondHead}
            </th>
            <th scope="col" className="text-center">
              {tblHead.thirdHead}
            </th>
            <th scope="col" className="text-center">
              {tblHead.seventhHead}
            </th>
            <th scope="col" className="text-center">
              {tblHead.fourthHead}
            </th>
            <th scope="col">{tblHead.fifthHead}</th>
            <th scope="col" className="text-center">
              {tblHead.sixthHead}
            </th>
            {/* <th scope="col">{tblHead.fifthHead}</th> */}
          </tr>
        </thead>
        <tbody className="dashboard_section1_tableBody ">
          {data && data?.length > 0 ? (
            data?.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="text-center">{`${user?.firstName}  ${user?.lastName}`}</td>
                <td className="text-center">{user?.email}</td>
                <td className="text-center">{user?.role || "Not Assigned"}</td>
                <td className="text-center">{user?.mobile}</td>
                <td>{user?.id}</td>
                <td className="text-center">
                  <Link
                    to={redirectLink}
                    className="Link-button-leads"
                    state={{ userData: user }}
                  >
                    <TfiWrite
                      className="fs-4"
                      style={{ color: "rgba(145, 155, 250, 1)" }}
                    />
                  </Link>
                  &nbsp; &nbsp;
                  <Link
                    className="Link-button-leads"
                    data-bs-toggle="modal"
                    data-bs-target="#updateRoleAndPermissionModal"
                  >
                    <BsPencilSquare
                      className="fs-4"
                      style={{ color: "rgba(145, 155, 250, 1)" }}
                      onClick={() => {
                        handleUpdateRoleAndPermission(user);
                      }}
                    />
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No users at this time</td>
            </tr>
          )}
        </tbody>
      </table>
      {/* Update Role And Permission Modal */}
      <>
        <div
          className="modal fade modal-xl"
          id="updateRoleAndPermissionModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header w-100">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <UpdateRoleAndPermission
                  currentUser={currentUser}
                  defaultValue={defaultValue}
                  // getLeadsData={getLeadsData}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default CreatedUserTable;
