import React, { useState, useCallback, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// Import CSS
import "../../styles/dashboardCss/calls.css";
//Import React Icons
import { MdAdd } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPencil, BsTrash } from "react-icons/bs";
import { MdOutlineUploadFile } from "react-icons/md";
import { TbFileDownload } from "react-icons/tb";
import ScheduleCallTable from "../../components/ScheduleCallTable";
// Import Toast
import Toast from "../../components/Toast";
// Import Permission Context from app.js
import permissionContext from "../PermissionsContext";
// Controller Methods
import {
  getAllScheduleCall,
  deleteScheduleCall,
  downloadScheduleCalls,
  uploadScheduleCalls,
  getSingleScheduleCall,
} from "../../controller/fetchApi";
import UpdateScheduleCall from "./UpdateScheduleCall";
const Calls = () => {
  // Calls Permissions
  const { callsPermission } = useContext(permissionContext);

  // Start Toast Code -------
  const [showToast, setShowToast] = useState({ success: false, message: "" });

  // Set Contact Costumer Id in main Conntact.jsx
  const [pageNo, setPageNo] = useState(0);
  const [scheduleCallCostumerId, setScheduleCallCostumerId] = useState([]);
  const [getAllScheduleCallData, setAllScheduleCallData] = useState([]);
  // Get User details from local storage
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const scheduleCallId = JSON.parse(localStorage.getItem("scheduleCallId"));
  const tokenId = userIdTokenData?.data?.token;

  //  Get All Schedule Call Data
  const getScheduleCallData = useCallback(async () => {
    try {
      const res = await getAllScheduleCall(pageNo, tokenId);
      setAllScheduleCallData(res);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId, pageNo, setAllScheduleCallData]);
  // Handle Delete Schedule Call Api
  const handleDeleteScheduleCall = async (scheduleCallCostumerId) => {
    try {
      await deleteScheduleCall(scheduleCallCostumerId, setShowToast, tokenId);
      if (deleteScheduleCall) {
        getScheduleCallData();
        setScheduleCallCostumerId([]);
      }
    } catch (error) {
      const errorMessage = error.message;
      console.log("Error deleting Single Account", errorMessage);
    }
  };
  // Download Schedule Call Api
  const handleDownloadScheduleCalls = async () => {
    try {
      await downloadScheduleCalls(setShowToast, tokenId);
    } catch (error) {
      console.log("Error downloading Schedule Call", error);
    }
  };
  // Handle Upload File start ----
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUploadScheduleCalls = async () => {
    if (selectedFile) {
      try {
        await uploadScheduleCalls(selectedFile, setShowToast, tokenId);
        getScheduleCallData();
      } catch (error) {
        console.log("Upload Schedule Calls Failed Uploading:", error);
      }
    }
  };
  // Update ScheDule Call Start--------
  const [defaultValue, setDefaultValue] = useState([]); // Get Single Schedule Call Data Which Fullfill Field Value
  const handleUpdateScheduleCall = async () => {
    try {
      const singScheduleCallResult = await getSingleScheduleCall(
        scheduleCallId,
        tokenId
      );
      if (singScheduleCallResult) {
        setDefaultValue(singScheduleCallResult);
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
      await getScheduleCallData();
    } catch (error) {
      console.log("Error fetching updated data", error);
    }
  };
  // Pagination Function ------
  const [pageRangeStart, setPageRangeStart] = useState(0);
  const totalPages = getAllScheduleCallData?.totalPages || 1;
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

  useEffect(() => {
    getScheduleCallData();
  }, [getScheduleCallData]);

  return (
    <div className="conatiner-fluid dashboard_rightLeads_main_container">
      <div className="dashboard_content_wrapper">
        {/* Btn */}
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
                  // Update Btn
                >
                  {" "}
                  {callsPermission?.includes("Update") ? (
                    <li
                      data-bs-toggle="modal"
                      data-bs-target="#updateScheduleCallModal"
                    >
                      <button
                        className="dropdown-item"
                        onClick={() => handleUpdateScheduleCall()}
                      >
                        <BsPencil className="dashboard_section1_table_editBtn" />
                        Edit
                      </button>
                    </li>
                  ) : (
                    ""
                  )}
                  {/* Delete Btn */}
                  {callsPermission?.includes("Delete") ? (
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() =>
                          handleDeleteScheduleCall(scheduleCallCostumerId)
                        }
                      >
                        <BsTrash className="dashboard_section1_table_deleteBtn" />
                        Delete
                      </button>
                    </li>
                  ) : (
                    ""
                  )}
                  {/* Upload Btn */}
                  {callsPermission?.includes("Upload") ? (
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
                  ) : (
                    ""
                  )}
                  {/* Download Btn */}
                  {callsPermission?.includes("Download") ? (
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleDownloadScheduleCalls()}
                      >
                        <TbFileDownload className="dashboard_section1_table_deleteBtn" />
                        Download Calls
                      </button>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </button>
            </div>
            {callsPermission?.includes("Create") ? (
              <div className="dashboard_leads_create_btn_div">
                <button className="btn-shiny2">
                  <Link
                    className="dashboard_leads_create_link"
                    to="/schedule-call"
                  >
                    <span>
                      <MdAdd />
                    </span>
                    Create Schedule Call
                  </Link>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* Table */}
        <div className="dashboard_leads_table_div">
          <ScheduleCallTable
            tblHead={{
              firstHead: "Call Owner",
              secondHead: "Call Type",
              thirdHead: "Call Start Time",
              fourthHead: "Call Status",
              fifthHead: "Call Purpose",
              sixthHead: "View",
              seventhHead: "Log Call Action",
              eighthHead: "Lead Id",
            }}
            redirectLink="/schedule-call-details"
            getAllScheduleCallData={getAllScheduleCallData}
            scheduleCallCostumerId={scheduleCallCostumerId}
            setScheduleCallCostumerId={setScheduleCallCostumerId}
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
                    onClick={handleUploadScheduleCalls}
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/*Update Schedule Call Modal */}
        <>
          <div
            className="modal fade modal-xl"
            id="updateScheduleCallModal"
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
                  <UpdateScheduleCall
                    scheduleCallCostumerId={scheduleCallCostumerId}
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

export default Calls;
