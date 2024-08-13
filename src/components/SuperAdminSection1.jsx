import React, { useState, useCallback, useEffect } from "react";
import Signup from "../pages/Signup";
// import SignupForm from "../pages/SignupForm";
// React Router
import { Link } from "react-router-dom";
// React Icons
import { MdAdd } from "react-icons/md";
import { SiGoogleads } from "react-icons/si";
import { MdAdminPanelSettings } from "react-icons/md";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { MdAssignmentAdd } from "react-icons/md";
// Import api function from controller
import { getCurrentUser } from "../controller/fetchApi";
const SuperAdminSection1 = ({ totalLeads, allRoles }) => {
  const [getCurrentUserData, setCurrentUserData] = useState();
  // Get User details from local storage
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;
  const uid = null;
  //  Get Current User Data OR Api
  const getUser = useCallback(async () => {
    try {
      const res = await getCurrentUser(uid, tokenId);
      if (res) {
        setCurrentUserData(res);
      }
    } catch (error) {
      console.log(error);
    }
  }, [tokenId]);
  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className="super_admin_first_div ">
      <div className="dashboard_username_div ">
        {/* Left Div */}
        <div className="super_admin_first_section_left_div">
          <p className="super_admin_first_section_user_name">{`Welcome ${getCurrentUserData?.fullName}`}</p>
          <p className="super_admin_first_section_user_name2">{`username ${getCurrentUserData?.userName}`}</p>
        </div>
        {/* Right Div */}
        <div className="dashboard_leads_create_btn_div super_admin_first_section_right_div">
          <button
            className="btn-shiny2"
            data-bs-toggle="modal"
            data-bs-target="#updateLeadModal"
          >
            <Link className="dashboard_leads_create_link" to="#">
              <span>
                <MdAdd />
              </span>
              Create
            </Link>
          </button>
        </div>
      </div>
      {/* Cards Div */}
      <div className="super_admin_first_section_cards_div row row-cols-xl-3 ">
        {/* first Card */}
        <div className="super_admin_first_section_single_card col  super_admin_first_section_first_card">
          <div className="super_admin_first_section_card_icon_div">
            {
              <SiGoogleads className="dashboard_card_icon super_admin_first_section_firstCard_icon" />
            }
          </div>
          <div className="super_admin_first_section_text_div">
            <p className="super_admin_first_section_card_text">
              <Link className="super_admin_first_section_card_link">
                Total Leads
              </Link>
            </p>
            <p className="super_admin_first_section_card_number">
              {totalLeads != null || undefined ? totalLeads : "0"}
            </p>
          </div>
        </div>
        {/* Second Card */}
        <div className="super_admin_first_section_single_card col  super_admin_first_section_second_card">
          <div className="super_admin_first_section_card_icon_div">
            {
              <MdAdminPanelSettings className="dashboard_card_icon super_admin_first_section_secondCard_icon" />
            }
          </div>
          <div className="super_admin_first_section_text_div">
            <p className="super_admin_first_section_card_text">
              <Link className="super_admin_first_section_card_link" to="/deals">
                Total Admins
              </Link>
            </p>
            <p className="super_admin_first_section_card_number">
              {allRoles?.ADMIN || "0"}
            </p>
          </div>
        </div>
        {/* Third Card */}
        <div className="super_admin_first_section_single_card col  super_admin_first_section_third_card">
          <div className="super_admin_first_section_card_icon_div">
            {
              <MdAssignmentTurnedIn className="dashboard_card_icon super_admin_first_section_thirdCard_icon" />
            }
          </div>
          <div className="super_admin_first_section_text_div">
            <p className="super_admin_first_section_card_text">
              <Link className="super_admin_first_section_card_link" to="/deals">
                Total Project Manager
              </Link>
            </p>
            <p className="super_admin_first_section_card_number">
              {allRoles?.PROJECTMANAGER || "0"}
            </p>
          </div>
        </div>
        {/* Fourth Card */}
        <div className="super_admin_first_section_single_card col  super_admin_first_section_fourth_card">
          <div className="super_admin_first_section_card_icon_div">
            {
              <MdAssignmentAdd className="dashboard_card_icon super_admin_first_section_fourthCard_icon" />
            }
          </div>
          <div className="super_admin_first_section_text_div">
            <p className="super_admin_first_section_card_text">
              <Link className="super_admin_first_section_card_link" to="/deals">
                Total Sales Executives
              </Link>
            </p>
            <p className="super_admin_first_section_card_number">
              {allRoles?.SALESEXECUTIVE || "0"}
            </p>
          </div>
        </div>
      </div>
      {/*Update Lead  Modal */}
      <>
        <div
          className="modal fade modal-xl"
          id="updateLeadModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header w-100">
                <span className="fw-bold">Create Employees</span>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body super_admin_create_user_modal">
                <Signup />
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

export default SuperAdminSection1;
