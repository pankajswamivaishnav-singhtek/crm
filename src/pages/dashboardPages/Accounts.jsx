import React, { useState, useEffect, useCallback } from "react";

// React Icons
import { MdAdd } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPencil, BsTrash } from "react-icons/bs";
import { TbFileDownload } from "react-icons/tb";
// Components
import AccountTable from "../../components/AccountTable";
import UpdateAccount from "../dashboardPages/UpdateAccount";
// Controllers Api Methods
import {
  getAllAccount,
  downloadAccount,
  getSingleAccount,
  deleteAccount,
} from "../../controller/fetchApi";
// React Router Dom
import { Link } from "react-router-dom";
const Accounts = () => {
  // Start Toast -------
  const [showToast, setShowToast] = useState({ success: false, message: "" });
  const hideToast = () => {
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  if (showToast) {
    hideToast();
  }
  // Set Account Costumer Id  to send table
  const [accountCostumerId, setAccountCostumerId] = useState([]);
  // User Id And Token
  const [pageNo, setPageNo] = useState(0);
  const accountId = JSON.parse(localStorage.getItem("accountId"));
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;
  const [getAllAccountData, setAllAccountData] = useState([]);

  // Pagination Function ------
  const [pageRangeStart, setPageRangeStart] = useState(0);
  const totalPages = getAllAccount?.totalPages || 1;
  const pagesToShow = 6;
  const handleNextPageClick = () => {
    const newPageNo = pageNo + 1;
    if (newPageNo < totalPages) {
      setPageNo(newPageNo);
      if (newPageNo >= pageRangeStart + pagesToShow) {
        setPageRangeStart(pageRangeStart + pagesToShow);
      }
    }
  };
  const handlePreviousPageClick = () => {
    const newPageNo = pageNo - 1;
    if (newPageNo >= 0) {
      setPageNo(newPageNo);
      if (newPageNo < pageRangeStart) {
        setPageRangeStart(pageRangeStart - pagesToShow);
      }
    }
  };
  const handlePageClick = (index) => {
    setPageNo(index);
    if (index >= pageRangeStart + pagesToShow) {
      setPageRangeStart(pageRangeStart + pagesToShow);
    } else if (index < pageRangeStart) {
      setPageRangeStart(pageRangeStart - pagesToShow);
    }
  };

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
                  <li
                    data-bs-toggle="modal"
                    data-bs-target="#updateAccountModal"
                  >
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleUpdateAccount();
                      }}
                    >
                      <BsPencil className="dashboard_section1_table_editBtn" />
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDeleteAccount(accountCostumerId)}
                    >
                      <BsTrash className="dashboard_section1_table_deleteBtn" />
                      Delete
                    </button>
                  </li>
                  {/* <li>
                    <button className="dropdown-item">
                      <MdOutlineUploadFile className="dashboard_section1_table_deleteBtn" />
                      Upload Accounts
                    </button>
                  </li> */}
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDownloadAccounts()}
                    >
                      <TbFileDownload className="dashboard_section1_table_deleteBtn" />
                      Download Accounts
                    </button>
                  </li>
                </ul>
              </button>
            </div>
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
              seventhHead:"Deal Action"
            }}
            redirectLink="/account-details"
            getAllAccountData={getAllAccountData}
            accountCostumerId={accountCostumerId}
            setAccountCostumerId={setAccountCostumerId}
            data="Pankaj Swami Vaishnav"
          />
        </div>
        {/* Pagination Div */}
        <div className="dashboard_leads_pagination_div">
          <nav aria-label="...">
            <ul className="pagination">
              {/* Previous page button */}
              <li className="page-item dashboard_leads_pagination_pageItem">
                <a
                  className="page-link"
                  href="#!"
                  onClick={handlePreviousPageClick}
                >
                  <IoIosArrowBack />
                </a>
              </li>

              {/* Render page numbers */}
              {Array.from({ length: pagesToShow }, (_, index) => {
                const pageIndex = pageRangeStart + index;
                return (
                  pageIndex < totalPages && (
                    <li
                      key={pageIndex}
                      className={`page-item ${
                        pageIndex === pageNo ? "active" : ""
                      } dashboard_leads_pagination_pageItem`}
                    >
                      <a
                        className="page-link"
                        href="#!"
                        onClick={() => handlePageClick(pageIndex)}
                      >
                        {pageIndex + 1 < 10
                          ? `0${pageIndex + 1}`
                          : pageIndex + 1}
                      </a>
                    </li>
                  )
                );
              })}

              {/* Next page button */}
              <li className="page-item dashboard_leads_pagination_pageItem">
                <a
                  className="page-link"
                  href="#!"
                  onClick={handleNextPageClick}
                >
                  <IoIosArrowForward className="btn_IoIosArrowForward" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
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
    </div>
  );
};

export default Accounts;
