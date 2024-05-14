import React, { useState, useCallback, useEffect } from "react";
// CSS
import "../../styles/dashboardCss/calls.css";
// React Icons
import { MdAdd } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPencil, BsTrash } from "react-icons/bs";
import { MdPermPhoneMsg, MdOutlinePhonePaused } from "react-icons/md";
import { MdOutlineUploadFile } from "react-icons/md";
import { TbFileDownload } from "react-icons/tb";
import LogCallTable from "../../components/LogCallTable";
// React Router Dom
import { useNavigate } from "react-router-dom";
// Controller Method
import {
  getAllLogCall,
  deleteLogCall,
  downloadLogCalls,
  uploadLogCalls,
  getSingleLogCall
} from "../../controller/fetchApi";
import UpdateLogCall from "./UpdateLogCall";
const CallLogs = () => {
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
  const navigate = useNavigate();
  // Set Contact Costumer Id in main Conntact.jsx
  const [pageNo, setPageNo] = useState(0);
  const [logCallCostumerId, setLogCallCostumerId] = useState([]);
  const [getAllLogCallData, setAllLogCallData] = useState([]);
  // Get Uid and Tokenid Who Saved In Cookie
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const logCallId = JSON.parse(localStorage.getItem("logCallId"));
  const uid = userIdTokenData?.data?.userId;
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
  // Handle Delete Account Api
  const handleDeleteLogCall = async (logCallCostumerId) => {
    try {
      await deleteLogCall(logCallCostumerId, setShowToast, tokenId);
      if (deleteLogCall) {
        getLogCallData();
        console.log("delete Successfully Log Call", getLogCallData);
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
  // Update ScheDule Call Start--------
  const [defaultValue, setDefaultValue] = useState([]); // Get Single Deal Data Which Fullfill Field Value
  const handleUpdateLogCall = async () => {
    try {
      const singLogCallResult = await getSingleLogCall(
        logCallId,
        tokenId
      );
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
      await getLogCallData();
    } catch (error) {
      console.log("Error fetching updated data", error);
    }
  };
  // Handle Next Page
  const handleNextPageClick = () => {
    setPageNo(pageNo + 1); // Increment page number
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
                  <li data-bs-toggle="modal"
                    data-bs-target="#updateLogCallModal">
                    <button className="dropdown-item"  onClick={() => handleUpdateLogCall()}>
                      <BsPencil className="dashboard_section1_table_editBtn" />
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDeleteLogCall(logCallCostumerId)}
                    >
                      <BsTrash className="dashboard_section1_table_deleteBtn" />
                      Delete
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#fileUploadModal"
                    >
                      <MdOutlineUploadFile className="dashboard_section1_table_deleteBtn" />
                      Upload Calls
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDownloadLogCalls()}
                    >
                      <TbFileDownload className="dashboard_section1_table_deleteBtn" />
                      Download Calls
                    </button>
                  </li>
                </ul>
              </button>
            </div>
            <div className="dashboard_leads_create_btn_div">
              <button
                className="dashboard_section1_table_edit_button dropdown-toggle remove_arrow_create_call_btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <MdAdd /> Create call
                <ul
                  className="dropdown-menu"
                  aria-labelledby="editDeleteDropdown"
                >
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/schedule-call");
                      }}
                    >
                      <MdPermPhoneMsg className="dashboard_section1_table_editBtn" />
                      Schedule call
                    </button>
                  </li>

                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/log-call");
                      }}
                    >
                      <MdOutlinePhonePaused className="dashboard_section1_table_deleteBtn" />
                      Log call
                    </button>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>
        <div className="dashboard_leads_table_div">
          <LogCallTable
            tblHead={{
              firstHead: "Subject",
              secondHead: "Call Purpose",
              thirdHead: "Call Type",
              fourthHead: "Call Result",
              fifthHead: "Status",
            }}
            redirectLink="/log-call-details"
            getAllLogCallData={getAllLogCallData}
            logCallCostumerId={logCallCostumerId}
            setLogCallCostumerId={setLogCallCostumerId}
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

export default CallLogs;
