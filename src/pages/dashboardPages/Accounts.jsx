import React, { useState, useEffect, useCallback, useContext } from "react";

// Import React Icons
import { MdAdd } from "react-icons/md";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPencil, BsTrash } from "react-icons/bs";
import { TbFileDownload } from "react-icons/tb";
// Import Components
import AccountTable from "../../components/AccountTable";
import UpdateAccount from "../dashboardPages/UpdateAccount";
// Import Toast
import Toast from "../../components/Toast";
// Import Permissions Context From app.js
import permissionContext from "../PermissionsContext";
// Import api function from controller
import {
  getAllAccount,
  downloadAccount,
  getSingleAccount,
  deleteAccount,
} from "../../controller/fetchApi";
// Import Instance from React Router Dom
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
const Accounts = () => {
  //  Get Account Permission'
  const { accountsPermission } = useContext(permissionContext);
  // Start Toast Code -------
  const [showToast, setShowToast] = useState({ success: false, message: "" });
  // Set Account Costumer Id  to send table
  const [accountCostumerId, setAccountCostumerId] = useState([]);
  // Get User details from local storage
  const [pageNo, setPageNo] = useState(0);
  const accountId = JSON.parse(localStorage.getItem("accountId"));
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;
  const [getAllAccountData, setAllAccountData] = useState([]);

  // Pagination Function Code------
  // const [pageRangeStart, setPageRangeStart] = useState(0);
  // const totalPages = getAllAccount?.totalPages || 1;
  // const pagesToShow = 6;

  //  Get All Account Data
  const getAccountData = useCallback(async () => {
    try {
      const res = await getAllAccount(tokenId, pageNo);
      setAllAccountData(res);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId, pageNo, setAllAccountData]);
  // Download Account Api
  const handleDownloadAccounts = async () => {
    try {
      await downloadAccount(uid, setShowToast, tokenId);
    } catch (error) {
      console.log("Error downloading account", error);
    }
  };
  // Update Btn Click Action Start--------
  const [defaultValue, setDefaultValue] = useState([]);
  const handleUpdateAccount = async () => {
    try {
      console.log("Enter FUnction SingleLead Update Account", accountId);
      const singleLeadResult = await getSingleAccount(accountId, tokenId);
      if (singleLeadResult) {
        setDefaultValue(singleLeadResult);
      } else {
        setDefaultValue([]);
      }
    } catch (error) {
      console.log("LeadRightSection SingleLead :", error);
      setDefaultValue([]);
    }
  };
  // Define the callback function to fetch updated data
  const handleUpdateSuccess = async () => {
    try {
      await getAccountData();
    } catch (error) {
      console.log("Error fetching updated data", error);
    }
  };
  // Handle Delete Account Api
  const handleDeleteAccount = async (accountCostumerId) => {
    try {
      await deleteAccount(accountCostumerId, setShowToast, tokenId);
      if (deleteAccount) {
        getAccountData();
        setAccountCostumerId([]);
        console.log("delete Successfully LeadRightSection", deleteAccount);
      }
    } catch (error) {
      const errorMessage = error.message;
      console.log("Error deleting Single Account", errorMessage);
    }
  };
  useEffect(() => {
    getAccountData();
  }, [getAccountData]);

  return (
    <div className="conatiner-fluid dashboard_rightLeads_main_container">
      <div className="dashboard_content_wrapper">
        {/* Btn div */}
        <div className="dashboard_leads_btn_mainDiv">
          <div className="dashboard_leads_btns_div">
            <div className="dashboard_leads_action_btn_div">
              <button
                className="dashboard_section1_table_edit_button dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Actions
                <ul
                  className="dropdown-menu"
                  aria-labelledby="editDeleteDropdown"
                >
                  {/* Update Btn */}
                  {accountsPermission?.includes("Update") ? (
                    <li
                      data-bs-toggle="modal"
                      data-bs-target="#updateAccountModal"
                    >
                      <span
                        className="dropdown-item"
                        onClick={() => {
                          handleUpdateAccount();
                        }}
                      >
                        <BsPencil className="dashboard_section1_table_editBtn" />
                        Edit
                      </span>
                    </li>
                  ) : (
                    ""
                  )}

                  {/* Delete Btn */}
                  {accountsPermission?.includes("Delete") ? (
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleDeleteAccount(accountCostumerId)}
                      >
                        <BsTrash className="dashboard_section1_table_deleteBtn" />
                        Delete
                      </span>
                    </li>
                  ) : (
                    ""
                  )}

                  {/* Download Btn */}
                  <li>
                    <span
                      className="dropdown-item"
                      onClick={() => handleDownloadAccounts()}
                    >
                      <TbFileDownload className="dashboard_section1_table_deleteBtn" />
                      Download Accounts
                    </span>
                  </li>
                </ul>
              </button>
            </div>
            {/* Create Btn */}
            {accountsPermission?.includes("Create") ? (
              <div className="dashboard_leads_create_btn_div">
                <button className="btn-shiny2">
                  <Link
                    className="dashboard_leads_create_link"
                    to="/create-account"
                  >
                    <span>
                      <MdAdd />
                    </span>
                    Create Account
                  </Link>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* Table Div */}
        <div className="dashboard_leads_table_div">
          <AccountTable
            tblHead={{
              firstHead: "Account Name",
              secondHead: "Account Number",
              thirdHead: "Account Owner",
              fourthHead: "Annual Revenue",
              fifthHead: "Account Site",
              sixthHead: "View",
              seventhHead: "Deal Action",
              eighthHead: "Lead Id",
            }}
            redirectLink="/account-details"
            getAllAccountData={getAllAccountData}
            accountCostumerId={accountCostumerId}
            setAccountCostumerId={setAccountCostumerId}
            data="Pankaj Swami Vaishnav"
          />
        </div>
        {/* Pagination */}
        <Pagination
          data={getAllAccount}
          pageNo={pageNo}
          setPageNo={setPageNo}
        />
        {/*Update Account  Modal */}
        <>
          <div
            className="modal fade modal-xl"
            id="updateAccountModal"
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
                  <UpdateAccount
                    accountCostumerId={accountCostumerId}
                    defaultValue={defaultValue}
                    onUpdateSuccess={handleUpdateSuccess}
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
        {/* Toast */}
        <Toast showToast={showToast} setShowToast={setShowToast} />
      </div>
    </div>
  );
};

export default Accounts;
