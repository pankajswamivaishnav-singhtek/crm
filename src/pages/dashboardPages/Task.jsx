import React, { useState, useEffect, useCallback, useContext } from "react";
// React Icons
import { MdAdd } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPencil, BsTrash } from "react-icons/bs";
import { MdOutlineUploadFile } from "react-icons/md";
import { TbFileDownload } from "react-icons/tb";
import TaskTables from "../../components/TaskTables";
import UpdateTask from "../dashboardPages/UpdateTask";
// Import Toast
import Toast from "../../components/Toast";
// Import Permission Context
import permissionContext from "../PermissionsContext";
// React Router Dom
import { Link } from "react-router-dom";
// Controller Method Api
import {
  getAllTask,
  deleteTasks,
  downloadTasks,
  getSingleTask,
  uploadTask,
} from "../../controller/fetchApi";
const Task = () => {
  // Get Task Permission
  const { tasksPermission } = useContext(permissionContext);

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
  // Set Task Costumer Id  to send table
  const [taskCostumerId, setTaskCostumerId] = useState([]);
  // User Id And Token
  const [pageNo, setPageNo] = useState(0);
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const taskId = JSON.parse(localStorage.getItem("taskId"));
  // const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;
  const [getAllTaskData, setAllTaskData] = useState([]);
  //  Get All Account Data
  const getTaskData = useCallback(async () => {
    try {
      const res = await getAllTask(tokenId, pageNo);
      setAllTaskData(res);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId, pageNo, setAllTaskData]);
  // Handle Delete Account Api
  const handleDeleteTask = async (taskCostumerId) => {
    try {
      await deleteTasks(taskCostumerId, setShowToast, tokenId);
      if (deleteTasks) {
        getTaskData();
        setTaskCostumerId([]);
      }
    } catch (error) {
      const errorMessage = error.message;
      console.log("Error deleting Single Account", errorMessage);
    }
  };
  // Download Account Api
  const handleDownloadTasks = async () => {
    try {
      await downloadTasks(setShowToast, tokenId);
    } catch (error) {
      console.log("Error downloading task", error);
    }
  };
  // Update Btn Click Action Start--------
  const [defaultValue, setDefaultValue] = useState([]);
  const handleUpdateTask = async () => {
    try {
      console.log("Enter FUnction SingleLead Update Account", taskId);
      const singleLeadResult = await getSingleTask(taskId, tokenId);
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
      await getTaskData();
    } catch (error) {
      console.log("Error fetching updated data", error);
    }
  };
  // Update Btn Click Action End ---------
  // Handle Upload File start ----
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    console.log("Selected ");
    setSelectedFile(event.target.files[0]);
  };
  const handleUploadTask = async () => {
    if (selectedFile) {
      console.log("file selected: " + selectedFile);
      try {
        await uploadTask(selectedFile, setShowToast, tokenId);
        getTaskData();
      } catch (error) {
        console.log("Task Failed Uploading:", error);
      }
    }
  };

  // Pagination Function ------
  const [pageRangeStart, setPageRangeStart] = useState(0);
  const totalPages = getAllTask?.totalPages || 1;
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
    getTaskData();
  }, [getTaskData]);
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
                  {tasksPermission?.includes("Update") ? (
                    <li
                      data-bs-toggle="modal"
                      data-bs-target="#updateTaskModal"
                    >
                      <span
                        className="dropdown-item"
                        onClick={() => {
                          handleUpdateTask();
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
                  {tasksPermission?.includes("Delete") ? (
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleDeleteTask(taskCostumerId)}
                      >
                        <BsTrash className="dashboard_section1_table_deleteBtn" />
                        Delete
                      </span>
                    </li>
                  ) : (
                    ""
                  )}

                  {/* Upload Btn */}
                  {tasksPermission?.includes("Upload") ? (
                    <li
                      data-bs-toggle="modal"
                      data-bs-target="#fileUploadModal"
                    >
                      <span className="dropdown-item">
                        <MdOutlineUploadFile className="dashboard_section1_table_deleteBtn" />
                        Upload Task
                      </span>
                    </li>
                  ) : (
                    ""
                  )}

                  {/* Download Btn */}
                  {tasksPermission?.includes("Download") ? (
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleDownloadTasks()}
                      >
                        <TbFileDownload className="dashboard_section1_table_deleteBtn" />
                        Download Task
                      </span>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </button>
            </div>
            {/* Create Btn */}
            {tasksPermission?.includes("Create") ? (
              <div className="dashboard_leads_create_btn_div">
                <button className="btn-shiny2">
                  <Link
                    className="dashboard_leads_create_link"
                    to="/create-task"
                  >
                    <span>
                      <MdAdd />
                    </span>
                    Create Task
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
          <TaskTables
            tblHead={{
              firstHead: "Task Owner",
              secondHead: "Due Date",
              thirdHead: "Contact",
              fourthHead: "Subject",
              fifthHead: "Status",
              sixthHead: "View",
              seventhHead: "Action",
              eighthHead: "Lead Id",
            }}
            redirectLink="/task-details"
            getAllTaskData={getAllTaskData}
            taskCostumerId={taskCostumerId}
            setTaskCostumerId={setTaskCostumerId}
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
            id="updateTaskModal"
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
                  <UpdateTask
                    taskCostumerId={taskCostumerId}
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
                    onClick={handleUploadTask}
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

export default Task;
