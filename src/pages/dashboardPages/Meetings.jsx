import React, { useState, useEffect, useCallback } from "react";
// React Icons
import { MdAdd } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPencil, BsTrash } from "react-icons/bs";
import { MdOutlineUploadFile } from "react-icons/md";
import { TbFileDownload } from "react-icons/tb";
import MeetingTable from "../../components/MeetingTable";
import UpdateMeeting from "./UpdateMeeting";
// Controller Methods
import { getAllMeetings, getSingleMeeting } from "../../controller/fetchApi";
// React Router Dom
import { Link } from "react-router-dom";
// Controller Methods
import {
  deleteMeetings,
  downloadMeetings,
  uploadMeetings,
} from "../../controller/fetchApi";
const Meetings = () => {
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
  const [meetCostumerId, setMeetCostumerId] = useState([]);
  // User Id And Token ----
  const [pageNo, setPageNo] = useState(0);
  const [getAllMeetingData, setAllMeetingData] = useState([]);
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const meetId = JSON.parse(localStorage.getItem("meetId"));
  const tokenId = userIdTokenData?.data?.token;
  //  Get All Data ----
  const getAllMeetingsData = useCallback(async () => {
    try {
      const res = await getAllMeetings(pageNo, tokenId);
      setAllMeetingData(res);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId, pageNo, setAllMeetingData]);
  // Handle Delete Meeting Api
  const handleDeleteMeetings = async (meetCostumerId) => {
    try {
      await deleteMeetings(meetCostumerId, setShowToast, tokenId);
      if (deleteMeetings) {
        getAllMeetingsData();
      }
    } catch (error) {
      const errorMessage = error.message;
      console.log("Error deleting Single Account", errorMessage);
    }
  };
  // Update Meeting Start--------
  const [defaultValue, setDefaultValue] = useState([]); // Get Single Deal Data Which Fullfill Field Value
  const handleUpdateMeet = async () => {
    try {
      const singDealResult = await getSingleMeeting(meetId, tokenId);
      if (singDealResult) {
        setDefaultValue(singDealResult);
      } else {
        setDefaultValue([]);
      }
    } catch (error) {
      console.log("Update Meet SingleDeal :", error);
      setDefaultValue([]);
    }
  };
  const handleUpdateSuccess = async () => {
    try {
      await getAllMeetingsData();
    } catch (error) {
      console.log("Error fetching updated data", error);
    }
  };
  // Handle Upload File start ----
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    console.log("Selected ");
    setSelectedFile(event.target.files[0]);
  };
  const handleUploadMeetings = async () => {
    if (selectedFile) {
      console.log("file selected: " + selectedFile);
      try {
        await uploadMeetings(selectedFile, setShowToast, tokenId);
        getAllMeetingsData();
      } catch (error) {
        console.log("Meetings Failed Uploading:", error);
      }
    }
  };
  // Download Meeting Api
  const handleDownloadMeetings = async () => {
    try {
      await downloadMeetings(setShowToast, tokenId);
    } catch (error) {
      console.log("Error downloading task", error);
    }
  };
  useEffect(() => {
    getAllMeetingsData();
  }, [getAllMeetingsData]);
  // Handle Next Page ---
  const handleNextPageClick = () => {
    setPageNo(pageNo + 1); // Increment page number
  };
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
                  <li data-bs-toggle="modal" data-bs-target="#updateMeetModal">
                    <button
                      className="dropdown-item"
                      onClick={() => handleUpdateMeet()}
                    >
                      <BsPencil className="dashboard_section1_table_editBtn" />
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDeleteMeetings(meetCostumerId)}
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
                      Upload Meetings
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDownloadMeetings()}
                    >
                      <TbFileDownload className="dashboard_section1_table_deleteBtn" />
                      Download Meetings
                    </button>
                  </li>
                </ul>
              </button>
            </div>

            <div className="dashboard_leads_create_btn_div">
              <button>
                <Link
                  className="dashboard_leads_create_link"
                  to="/create-meeting"
                >
                  <span>
                    <MdAdd />
                  </span>
                  Create Meeting
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* Table Div */}
        <div className="dashboard_leads_table_div">
          <MeetingTable
            tblHead={{
              firstHead: "Title",
              secondHead: "Host",
              thirdHead: "Date",
              fourthHead: "Location",
            }}
            redirectLink="/meetings-details"
            getAllMeetingData={getAllMeetingData}
            meetCostumerId={meetCostumerId}
            setMeetCostumerId={setMeetCostumerId}
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
        {/*Update Account  Modal */}
        <>
          <div
            className="modal fade modal-xl"
            id="updateMeetModal"
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
                  <UpdateMeeting
                    meetCostumerId={meetCostumerId}
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
                    onClick={handleUploadMeetings}
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

export default Meetings;
