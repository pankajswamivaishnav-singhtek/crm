import React, { useState, useEffect, useCallback, useContext } from "react";
//Import React Icons
import { MdAdd } from "react-icons/md";
import { BsPencil, BsTrash } from "react-icons/bs";
import { MdOutlineUploadFile } from "react-icons/md";
import { TbFileDownload } from "react-icons/tb";
import MeetingTable from "../../components/MeetingTable";
import UpdateMeeting from "./UpdateMeeting";
// Import Toast
import Toast from "../../components/Toast";
// Import Context From app.js
import permissionContext from "../PermissionsContext";
// Import api function from controller
import {
  getAllMeetings,
  getSingleMeeting,
  deleteMeetings,
  downloadMeetings,
  uploadMeetings,
} from "../../controller/fetchApi";
// React Router Dom
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
const Meetings = () => {
  //  Get Meetings Permissions
  const { meetingsPermission } = useContext(permissionContext);
  // Start Toast Code-------
  const [showToast, setShowToast] = useState({ success: false, message: "" });

  const [meetCostumerId, setMeetCostumerId] = useState([]);
  // Get User details from local storage
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
        setMeetCostumerId([]);
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
                  {/* Edit Btn */}
                  {meetingsPermission?.includes("Update") ? (
                    <li
                      data-bs-toggle="modal"
                      data-bs-target="#updateMeetModal"
                    >
                      <span
                        className="dropdown-item"
                        onClick={() => handleUpdateMeet()}
                      >
                        <BsPencil className="dashboard_section1_table_editBtn" />
                        Edit
                      </span>
                    </li>
                  ) : (
                    ""
                  )}

                  {/* Delete Btn */}
                  {meetingsPermission?.includes("Delete") ? (
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleDeleteMeetings(meetCostumerId)}
                      >
                        <BsTrash className="dashboard_section1_table_deleteBtn" />
                        Delete
                      </span>
                    </li>
                  ) : (
                    ""
                  )}

                  {/* Upload Btn */}
                  {meetingsPermission?.includes("Upload") ? (
                    <li>
                      <span
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#fileUploadModal"
                      >
                        <MdOutlineUploadFile className="dashboard_section1_table_deleteBtn" />
                        Upload Meetings
                      </span>
                    </li>
                  ) : (
                    ""
                  )}

                  {/* Download Btn */}
                  {meetingsPermission?.includes("Download") ? (
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleDownloadMeetings()}
                      >
                        <TbFileDownload className="dashboard_section1_table_deleteBtn" />
                        Download Meetings
                      </span>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </button>
            </div>
            {/* Create Btn */}
            {meetingsPermission?.includes("Create") ? (
              <div className="dashboard_leads_create_btn_div">
                <button className="btn-shiny2">
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
            ) : (
              ""
            )}
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
              fifthHead: "View",
              sixthHead: "Deals Action",
              seventhHead: "Lead Id",
            }}
            redirectLink="/meetings-details"
            getAllMeetingData={getAllMeetingData}
            meetCostumerId={meetCostumerId}
            setMeetCostumerId={setMeetCostumerId}
            data="Pankaj Swami Vaishnav"
          />
        </div>
        {/* Pagination Div */}
        <Pagination
          data={getAllMeetingData}
          pageNo={pageNo}
          setPageNo={setPageNo}
        />
        {/*Update Meeting  Modal */}
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
        <Toast showToast={showToast} setShowToast={setShowToast} />
      </div>
    </div>
  );
};

export default Meetings;
