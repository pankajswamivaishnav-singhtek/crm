import React, { useEffect, useState, useCallback, useContext } from "react";
// React Icons
import { MdAdd } from "react-icons/md";
import { BsPencil, BsTrash } from "react-icons/bs";
import LeadsRightSectionTable from "./shared/LeadsRightSectionTable";
import { MdVerified } from "react-icons/md";
import { MdOutlineUploadFile } from "react-icons/md";
import { TbFileDownload } from "react-icons/tb";

// React Router Dom
import { Link } from "react-router-dom";
import permissionContext from "../pages/PermissionsContext";
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
import AssignLeads from "./AssignLeads";
// Import Toast
import Toast from "./Toast";
import Pagination from "./Pagination";
const LeadsRightSection = ({ leadCostumerId, filterData }) => {
  // Get lead permission From app.js
  const { leadsPermission } = useContext(permissionContext);
  // Start Toast Code-------
  const [showToast, setShowToast] = useState({ success: false, message: "" });

  // Set PageNo to getAllLead Api
  const [pageNo, setPageNo] = useState(0);
  const userLeadIdData = JSON.parse(localStorage.getItem("leadId"));
  const leadId = userLeadIdData;
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;
  const [getAllLeadData, setAllLeadsData] = useState([]);

  const getLeadsData = useCallback(async () => {
    const filter = {
      page: pageNo,
      city: filterData?.cityName,
      company: filterData?.companyName,
      createdAt: filterData?.date,
      leadOwner: filterData?.leadOwnerName,
      leadType: filterData?.verified
        ? "verified"
        : filterData?.unverified
        ? "unverified"
        : filterData?.rejected
        ? "rejected"
        : "unverified",
    };
    try {
      const res = await getAllLeadByFilter(filter, tokenId);

      setAllLeadsData(res);
    } catch (error) {
      console.log(error);
    }
  }, [
    filterData?.cityName,
    filterData?.companyName,
    filterData?.date,
    filterData?.leadOwnerName,
    filterData?.verified,
    filterData?.unverified,
    filterData?.rejected,
    tokenId,
    pageNo,
    setAllLeadsData,
  ]);

  // Delete Api Start---------------
  const handleDeleteLead = async (leadCostumerId) => {
    try {
      await deleteLeads(leadCostumerId, setShowToast, tokenId);
      if (deleteLeads) {
        getLeadsData();
      }
    } catch (error) {
      const errorMessage = error.message;
      console.log("Error deleting LeadRightSection", errorMessage);
    }
  };

  // Update Btn Click Action Start--------
  const [defaultValue, setDefaultValue] = useState([]);
  const handleUpdateLead = async () => {
    try {
      const singleLeadResult = await getSingleLead(leadId, tokenId);
      if (singleLeadResult) {
        getLeadsData();
        setDefaultValue(singleLeadResult);
      } else {
        setDefaultValue([]);
      }
    } catch (error) {
      console.log("LeadRightSection SingleLead :", error);
      setDefaultValue([]);
    }
  };

  //  Verifyleads Function Start -----
  const handleVerifyLeads = async (leadId) => {
    try {
      await verifyLeads(leadId, setShowToast, tokenId);
      if (verifyLeads) {
        getLeadsData();
      }
    } catch (error) {
      console.log("LeadRightSection SingleLead :", error);
    }
  };

  // Handle Download Api ------
  const handleDownloadLeads = async () => {
    try {
      await downloadLeads(setShowToast, tokenId);
    } catch (error) {
      console.log("LeadRightSection Failed Downloaded:", error);
    }
  };

  // Handle Upload File start ----
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUploadLeads = async () => {
    if (selectedFile) {
      try {
        await uploadLeads(selectedFile, setShowToast, tokenId);
        if (uploadLeads) {
          getLeadsData();
        }
      } catch (error) {
        console.log("LeadRightSection Failed Uploading:", error);
      }
    }
  };

  useEffect(() => {
    getLeadsData();
  }, [getLeadsData]);

  return (
    <div className="conatiner-fluid dashboard_rightLeads_main_containers">
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
            <div
              className="dashboard_leads_action_btn_div dashboard_leads_assign_div"
              data-bs-toggle="modal"
              data-bs-target="#assignLeadsModal"
            >
              <button className="dashboard_section1_table_edit_button dashboard_leads_assign_btn">
                Assign
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
                  {leadsPermission?.includes("Update") ? (
                    <li
                      data-bs-toggle="modal"
                      data-bs-target="#updateLeadModal"
                    >
                      <span
                        className="dropdown-item"
                        onClick={() => {
                          handleUpdateLead();
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
                  {leadsPermission?.includes("Delete") ? (
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleDeleteLead(leadCostumerId)}
                      >
                        <BsTrash className="dashboard_section1_table_deleteBtn" />
                        Delete
                      </span>
                    </li>
                  ) : (
                    ""
                  )}
                  {/* Upload Btn */}
                  {leadsPermission?.includes("Upload") ? (
                    <li
                      data-bs-toggle="modal"
                      data-bs-target="#fileUploadModal"
                    >
                      <span className="dropdown-item">
                        <MdOutlineUploadFile className="dashboard_section1_table_deleteBtn" />
                        Upload Leads
                      </span>
                    </li>
                  ) : (
                    ""
                  )}
                  {/* Download Btn */}
                  {leadsPermission?.includes("Download") ? (
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleDownloadLeads()}
                      >
                        <TbFileDownload className="dashboard_section1_table_deleteBtn" />
                        Download Leads
                      </span>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </button>
            </div>
            {leadsPermission?.includes("Create") && (
              <div className="dashboard_leads_create_btn_div">
                <button className="btn-shiny2">
                  <Link
                    className="dashboard_leads_create_link"
                    to="/create-lead"
                  >
                    <span>
                      <MdAdd />
                    </span>
                    Create Leads
                  </Link>
                </button>
              </div>
            )}
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
              fifthHead: "View",
              sixthHead: "Create Contact",
              seventhHead: "Lead Id",
            }}
            redirectLink="/lead-details"
            getAllLeadData={getAllLeadData}
            tableName="leadsTable"
          />
        </div>
        {/* Pagination Div */}
        <Pagination
          data={getAllLeadData}
          pageNo={pageNo}
          setPageNo={setPageNo}
        />
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
                    getLeadsData={getLeadsData}
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
        {/*Assign Leads Modal */}
        <>
          <div
            className="modal fade modal-xl "
            id="assignLeadsModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header w-100">
                  <span className="fw-bold">Users</span>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <AssignLeads getLeadsData={getLeadsData} />
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
        <Toast showToast={showToast} setShowToast={setShowToast} />
      </div>
    </div>
  );
};

export default LeadsRightSection;
