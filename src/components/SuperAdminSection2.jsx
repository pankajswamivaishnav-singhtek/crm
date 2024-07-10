import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
// React Icons
import { FaRegEye } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";
//Import Controller Methods
import {
  deleteUserByAdmin,
  getAllUsersMadeByAdmin,
} from "../controller/fetchApi";
const SuperAdminSection2 = () => {
  const [showToast, setShowToast] = useState({ success: false, message: "" });
  const hideToast = () => {
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  if (showToast) {
    hideToast();
  }
  // Import TokenId
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;
  // Handle User Delete
  const handleUserDelete = async (userId) => {
    try {
      const result = await deleteUserByAdmin(tokenId, userId, setShowToast);
      if (result?.data?.status === 200) {
        getAllUser();
      }
    } catch (error) {
      console.log("user not deleted in superAdmin section 2", error);
    }
  };
  //  Get All Users Api
  const [getAllUsers, setAlluser] = useState();
  const getAllUser = useCallback(async () => {
    try {
      const result = await getAllUsersMadeByAdmin(tokenId);
      setAlluser(result);
    } catch (error) {
      console.log("Not Get All Users", error);
    }
  }, [setAlluser, tokenId]);

  useEffect(() => {
    getAllUser();
  }, [getAllUser]);
  return (
    <div className="row super_admin_section2">
      {/* Left Div */}
      <div className="super_admin_section2_left_div col">
        <div className="super_admin_section2_table table-responsive">
          <table className="table border border-secondary-subtle super_admin_section2_left_table ">
            <thead className="super_admin_section2_table_thead">
              <tr className="dashboard_section1_tableHead_tr table-danger">
                <th scope="col">Sr. No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Id</th>
                <th scope="col" className="text-center">
                  Show Dashboard
                </th>
                <th scope="col" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="dashboard_section1_tableBody ">
              {getAllUsers && getAllUsers?.length > 0 ? (
                getAllUsers?.map((user, index) => (
                  <tr
                    className="super_admin_section2_table_tbody_tr"
                    key={index}
                  >
                    <td>{index + 1}</td>
                    <td>{`${user?.firstName} ${user?.lastName}`}</td>
                    <td>{user?.email}</td>
                    <td>{user?.role || "Not Assigned"}</td>
                    <td>{user?.id}</td>
                    <td className="text-center">
                      <Link to="/dashboard" state={{ userId: user?.id }}>
                        <FaRegEye className="fs-3 super_admin_section2_table_icon" />
                      </Link>
                    </td>
                    <td className="text-center">
                      <TiUserDelete
                        className="fs-3 created_user_table_action_delete"
                        onClick={() => handleUserDelete(user?.id)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No users at this time</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Toast */}
      {showToast.message && (
        <div className="toast-container position-fixed bottom-0 end-0 p-3 ">
          <div
            className="toast show create_lead_toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header create_lead_toast_header">
              <strong className="me-auto">Form Submitted Successfully</strong>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowToast({ success: false, message: "" })}
              />
            </div>
            <div className="toast-body">{showToast.message}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminSection2;
