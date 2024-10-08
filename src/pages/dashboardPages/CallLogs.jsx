import React, { useState, useCallback, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// Import CSS
import "../../styles/dashboardCss/calls.css";
//Import Instance from React Icons
import { MdAdd } from "react-icons/md";
import { BsPencil, BsTrash } from "react-icons/bs";
import { MdOutlineUploadFile } from "react-icons/md";
import { TbFileDownload } from "react-icons/tb";
import LogCallTable from "../../components/LogCallTable";
// Import Toast
import Toast from "../../components/Toast";
// Import Permissions Context
import permissionContext from "../PermissionsContext";
// Import api function from controller
import {
  getAllLogCall,
  deleteLogCall,
  downloadLogCalls,
  uploadLogCalls,
  getSingleLogCall,
} from "../../controller/fetchApi";
import UpdateLogCall from "./UpdateLogCall";
import Pagination from "../../components/Pagination";
const CallLogs = () => {
  // Log Calls Permissions From Apps
  const { callsPermission } = useContext(permissionContext);
  // Start Toast Code-------
  const [showToast, setShowToast] = useState({ success: false, message: "" });

  // Set Contact Costumer Id in main Conntact.jsx
  const [pageNo, setPageNo] = useState(0);
  const [logCallCostumerId, setLogCallCostumerId] = useState([]);
  const [getAllLogCallData, setAllLogCallData] = useState([]);
  // Get User details from local storage
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const logCallId = JSON.parse(localStorage.getItem("logCallId"));
  const tokenId = userIdTokenData?.data?.token;
  //  Get All Schedule Call Data
  const getLogCallData = useCallback(async () => {
    try {
      const res = await getAllLogCall(pageNo, tokenId);
      setAllLogCallData(res);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId, pageNo, setAllLogCallData]);
  // Handle Delete Log Call Api
  const handleDeleteLogCall = async (logCallCostumerId) => {
    try {
      await deleteLogCall(logCallCostumerId, setShowToast, tokenId);
      if (deleteLogCall) {
        getLogCallData();
        setLogCallCostumerId([]);
      }
    } catch (error) {
      const errorMessage = error.message;
      console.log("Error deleting Single Account", errorMessage);
    }
  };
  // Download Log Call Api
  const handleDownloadLogCalls = async () => {
    try {
      await downloadLogCalls(setShowToast, tokenId);
    } catch (error) {
      console.log("Error downloading Log Call", error);
    }
  };
  // Handle Upload File start ----
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    console.log("Selected ");
    setSelectedFile(event.target.files[0]);
  };
  const handleUploadLogCalls = async () => {
    console.log("Start handle Log Calls");
    if (selectedFile) {
      console.log("file selected: " + selectedFile);
      try {
        await uploadLogCalls(selectedFile, setShowToast, tokenId);
        getLogCallData();
      } catch (error) {
        console.log("Upload Log Calls Failed Uploading:", error);
      }
    }
  };
  // Update Log Call Start--------
  const [defaultValue, setDefaultValue] = useState([]); // Get Single Log Call Data Which Fullfill Field Value
  const handleUpdateLogCall = async () => {
    try {
      const singLogCallResult = await getSingleLogCall(logCallId, tokenId);
      if (singLogCallResult) {
        setDefaultValue(singLogCallResult);
      } else {
        setDefaultValue([]);
      }
    } catch (error) {
      console.log("Schedule Update Call Error :", error);
      setDefaultValue([]);
    }
  };
  const handleUpdateSuccess = async () => {
    try {
      console.log("get log call dta function");
      await getLogCallData();
      await getLogCallData();
      console.log("again call");
    } catch (error) {
      console.log("Error fetching updated data", error);
    }
  };

  useEffect(() => {
    getLogCallData();
  }, [getLogCallData]);

  return (
    <div className="conatiner-fluid dashboard_rightLeads_main_container">
      <div className="dashboard_content_wrapper">
        {/* Btn Div */}
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
                  {callsPermission?.includes("Update") ? (
                    <li
                      data-bs-toggle="modal"
                      data-bs-target="#updateLogCallModal"
                    >
                      <span
                        className="dropdown-item"
                        onClick={() => handleUpdateLogCall()}
                      >
                        <BsPencil className="dashboard_section1_table_editBtn" />
                        Edit
                      </span>
                    </li>
                  ) : (
                    ""
                  )}

                  {/* Delete Btn */}
                  {callsPermission?.includes("Delete") ? (
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleDeleteLogCall(logCallCostumerId)}
                      >
                        <BsTrash className="dashboard_section1_table_deleteBtn" />
                        Delete
                      </span>
                    </li>
                  ) : (
                    ""
                  )}

                  {/* Upload Btn */}
                  {callsPermission?.includes("Upload") ? (
                    <li>
                      <span
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#fileUploadModal"
                      >
                        <MdOutlineUploadFile className="dashboard_section1_table_deleteBtn" />
                        Upload Calls
                      </span>
                    </li>
                  ) : (
                    ""
                  )}

                  {/* Downloads Btn */}
                  {callsPermission?.includes("Download") ? (
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleDownloadLogCalls()}
                      >
                        <TbFileDownload className="dashboard_section1_table_deleteBtn" />
                        Download Calls
                      </span>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </button>
            </div>
            {/* Create Btn */}
            {callsPermission?.includes("Create") ? (
              <div className="dashboard_leads_create_btn_div">
                <button className="btn-shiny2">
                  <Link className="dashboard_leads_create_link" to="/log-call">
                    <span>
                      <MdAdd />
                    </span>
                    Create Log Call
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
          <LogCallTable
            tblHead={{
              firstHead: "Subject",
              secondHead: "Call Purpose",
              thirdHead: "Call Type",
              fourthHead: "Call Result",
              fifthHead: "Status",
              sixthHead: "View",
              seventhHead: "Action",
              eighthHead: "Lead Id",
            }}
            redirectLink="/log-call-details"
            getAllLogCallData={getAllLogCallData}
            logCallCostumerId={logCallCostumerId}
            setLogCallCostumerId={setLogCallCostumerId}
          />
        </div>
        {/* Pagination Div */}
        <Pagination
          data={getAllLogCallData}
          pageNo={pageNo}
          setPageNo={setPageNo}
        />
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
                    onClick={handleUploadLogCalls}
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/*Update Deal Modal */}
        <>
          <div
            className="modal fade modal-xl"
            id="updateLogCallModal"
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
                  <UpdateLogCall
                    logCallCostumerId={logCallCostumerId}
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
        <Toast showToast={showToast} setShowToast={setShowToast} />
      </div>
    </div>
  );
};

export default CallLogs;
