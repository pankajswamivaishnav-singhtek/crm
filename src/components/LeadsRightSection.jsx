import React, { useEffect, useState } from "react";
// React Icons
import { MdAdd } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPencil, BsTrash } from "react-icons/bs";
import LeadsRightSectionTable from "./shared/LeadsRightSectionTable";
import { MdVerified } from "react-icons/md";
import { MdOutlineUploadFile } from "react-icons/md";
import { TbFileDownload } from "react-icons/tb";

// React Router Dom
import { Link } from "react-router-dom";
// Controllers Api Methods
import {
  getAllLeadByFilter,
  deleteLeads,
  getSingleLead,
  verifyLeads,
  downloadLeads,
  uploadLeads,
} from "../controller/fetchApi";
// Components
import UpdateLead from "../pages/dashboardPages/UpdateLead";
const LeadsRightSection = ({ leadCostumerId, filterData }) => {
  // Start Toast -------
  const [showToast, setShowToast] = useState({ success: false, message: "" });
  // Function to hide the toast after 3 seconds
  const hideToast = () => {
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  if (showToast) {
    hideToast();
  }
  // Start End   -------

  // Set PageNo to getAllLead Api
  const [pageNo, setPageNo] = useState(0);
  const userLeadIdData = JSON.parse(localStorage.getItem("leadId"));
  const leadId = userLeadIdData;
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;
  const [getAllLeadData, setAllLeadsData] = useState([]);

  // Delete Api Start---------------
  const handleDeleteLead = async (leadCostumerId) => {
    try {
      await deleteLeads(leadCostumerId, setShowToast, tokenId);
      if (deleteLeads) {
        console.log("delete Successfully LeadRightSection", deleteLeads);
      }
    } catch (error) {
      const errorMessage = error.message;
      console.log("Error deleting LeadRightSection", errorMessage);
    }
  };
  // Delete Api End---------------

  // Update Btn Click Action Start--------
  const [defaultValue, setDefaultValue] = useState([]);
  const handleUpdateLead = async () => {
    try {
      const singleLeadResult = await getSingleLead(leadId, tokenId);
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
  // Update Btn Click Action End ---------

  //  Verifyleads Function Start -----
  const handleVerifyLeads = async (leadId) => {
    try {
      await verifyLeads(leadId, setShowToast, tokenId);
    } catch (error) {
      console.log("LeadRightSection SingleLead :", error);
    }
  };
  //  Verifyleads Function End   -----

  // Handle Download Api ------
  const handleDownloadLeads = async () => {
    try {
      await downloadLeads(setShowToast, tokenId);
    } catch (error) {
      console.log("LeadRightSection Failed Downloaded:", error);
    }
  };
  // Handle Download Api End -----

  // Handle Upload File start ----
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    console.log("Selected ");
    setSelectedFile(event.target.files[0]);
  };
  const handleUploadLeads = async () => {
    console.log("Start handle leads");
    if (selectedFile) {
      console.log("file selected: " + selectedFile);
      try {
        await uploadLeads(selectedFile, setShowToast, tokenId);
      } catch (error) {
        console.log("LeadRightSection Failed Uploading:", error);
      }
    }
  };
  // Handle Upload File End -----
  useEffect(() => {
    (async () => {
      const filter = {
        // user: uid,
        page: pageNo,
        city: filterData?.cityName,
        company: filterData?.companyName,
        createdAt: filterData?.date,
        leadOwner: filterData?.leadOwnerName,
        leadType: filterData?.verified
          ? "verified"
          : filterData?.unverified
          ? "unverified"
          : "unverified",
      };
      try {
        getAllLeadByFilter(filter, tokenId).then((res) => {
          setAllLeadsData(res);
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [
    uid,
    pageNo,
    tokenId,
    filterData?.cityName,
    filterData?.companyName,
    filterData?.leadOwnerName,
    filterData?.date,
    filterData?.verified,
    filterData?.unverified,
  ]);

  // Handle Next Page
  const handleNextPageClick = () => {
    setPageNo(pageNo + 1); // Increment page number
  };

  return (
    <div className="conatiner-fluid dashboard_rightLeads_main_container">
      <div className="dashboard_content_wrapper">
        {/* Btn Div */}
        <div className="dashboard_leads_btn_mainDiv">
          <div className="dashboard_leads_btns_div">
            <div className="dashboard_leads_verify_btn_div">
              <button
                className="leads_verify_btn"
                onClick={() => handleVerifyLeads(leadCostumerId)}
              >
                <MdVerified className="leads_verify_btn_icon" />
                Verify Leads
              </button>
            </div>
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
                  <li data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleUpdateLead();
                      }}
                    >
                      <BsPencil className="dashboard_section1_table_editBtn" />
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDeleteLead(leadCostumerId)}
                    >
                      <BsTrash className="dashboard_section1_table_deleteBtn" />
                      Delete
                    </button>
                  </li>
                  <li data-bs-toggle="modal" data-bs-target="#fileUploadModal">
                    <button className="dropdown-item">
                      <MdOutlineUploadFile className="dashboard_section1_table_deleteBtn" />
                      Upload Leads
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDownloadLeads()}
                    >
                      <TbFileDownload className="dashboard_section1_table_deleteBtn" />
                      Download Leads
                    </button>
                  </li>
                </ul>
              </button>
            </div>
            <div className="dashboard_leads_create_btn_div">
              <button>
                <Link className="dashboard_leads_create_link" to="/create-lead">
                  <span>
                    <MdAdd />
                  </span>
                  Create Leads
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* Table Div */}
        <div className="dashboard_leads_table_div">
          <LeadsRightSectionTable
            tblHead={{
              firstHead: "Lead Owner",
              secondHead: "First Name",
              thirdHead: "Lead Source",
              fourthHead: "Lead Status",
            }}
            redirectLink="/lead-details"
            getAllLeadData={getAllLeadData}
            tableName="leadsTable"
            // leadCostumerId={leadCostumerId}
            // setLeadCostumerId={setLeadCostumerId}
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
                  onClick={() => setPageNo(pageNo - 1)}
                >
                  <IoIosArrowBack />
                </a>
              </li>

              {/* Render page numbers */}
              {Array.from({ length: 5 }, (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    index + 1 === pageNo ? "active" : ""
                  } dashboard_leads_pagination_pageItem`}
                >
                  <a
                    className="page-link"
                    href="#!"
                    onClick={() => setPageNo(index + 1)}
                  >
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </a>
                </li>
              ))}
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
        {/*Update Lead  Modal */}
        <>
          <div
            className="modal fade modal-xl"
            id="staticBackdrop"
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
                  <UpdateLead
                    leadCostumerId={leadCostumerId}
                    defaultValue={defaultValue}
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
                  <button type="button" className="btn btn-primary">
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* File Upload Modal */}
        <>
          <div
            className="modal fade"
            id="fileUploadModal"
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
                  <form>
                    <label
                      htmlFor="exampleFormControlFile1"
                      className="form-label"
                    >
                      Choose file
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="exampleFormControlFile1"
                      onChange={handleFileChange}
                    />
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleUploadLeads}
                  >
                    Upload
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

export default LeadsRightSection;
