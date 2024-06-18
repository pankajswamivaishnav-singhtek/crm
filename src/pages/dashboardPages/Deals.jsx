import React, { useState, useCallback, useEffect } from "react";
// CSS
import "../../styles/dashboardCss/calls.css";
// React Icons
import { MdAdd } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPencil, BsTrash } from "react-icons/bs";
import { MdOutlineUploadFile } from "react-icons/md";
import { TbFileDownload } from "react-icons/tb";

// React Router Dom
import { Link } from "react-router-dom";
// Components
import DealsTable from "../../components/DealsTable";
import UpdateDeal from "./UpdateDeal";
// Controller Methods Api
import {
  getAllDeal,
  deleteDeals,
  getSingleDeal,
  downloadDeal,
  uploadDeals,
} from "../../controller/fetchApi";
const Deals = () => {
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
  const [dealCostumerId, setDealCostumerId] = useState([]);

  // User Id And Token ----
  const [pageNo, setPageNo] = useState(0);
  const [getAllDealsData, setAllDealsData] = useState([]);
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const dealId = JSON.parse(localStorage.getItem("dealId"));
  const tokenId = userIdTokenData?.data?.token;
  //  Get All Data ----
  const getAllDeals = useCallback(async () => {
    try {
      await getAllDeal(pageNo, tokenId).then((res) => {
        setAllDealsData(res);
      });
    } catch (error) {
      console.log(error);
    }
  }, [pageNo, tokenId]);
  // Update Deals Start--------
  const [defaultValue, setDefaultValue] = useState([]); // Get Single Deal Data Which Fullfill Field Value
  const handleUpdateDeal = async () => {
    try {
      const singDealResult = await getSingleDeal(dealId, tokenId);
      if (singDealResult) {
        setDefaultValue(singDealResult);
      } else {
        setDefaultValue([]);
      }
    } catch (error) {
      console.log("LeadRightSection SingleDeal :", error);
      setDefaultValue([]);
    }
  };
  const handleUpdateSuccess = async () => {
    try {
      await getAllDeals();
    } catch (error) {
      console.log("Error fetching updated data", error);
    }
  };
  // Download Deals Api
  const handleDownloadDeals = async () => {
    try {
      await downloadDeal(setShowToast, tokenId);
    } catch (error) {
      console.log("Error downloading account", error);
    }
  };
  // Delete Deals Start ----
  const handleDeleteDeals = async (dealCostumerId) => {
    try {
      await deleteDeals(dealCostumerId, setShowToast, tokenId);
      if (deleteDeals) {
        getAllDeals();
        setDealCostumerId([]);
      }
    } catch (error) {
      const errorMessage = error.message;
      console.log("Error deleting Deals", errorMessage);
    }
  };
  // Handle Upload File start ----
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    console.log("Selected ");
    setSelectedFile(event.target.files[0]);
  };
  const handleUploadDeals = async () => {
    console.log("Start handle leads");
    if (selectedFile) {
      console.log("file selected: " + selectedFile);
      try {
        await uploadDeals(selectedFile, setShowToast, tokenId);
        if (uploadDeals) {
          getAllDeals();
        }
      } catch (error) {
        console.log("LeadRightSection Failed Uploading:", error);
      }
    }
  };
  // Pagination Function ------
  const [pageRangeStart, setPageRangeStart] = useState(0);
  const totalPages = getAllDealsData?.totalPages || 1;
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
    getAllDeals();
  }, [getAllDeals]);
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
                  <li data-bs-toggle="modal" data-bs-target="#updateDealModal">
                    <button
                      className="dropdown-item"
                      onClick={() => handleUpdateDeal()}
                    >
                      <BsPencil className="dashboard_section1_table_editBtn" />
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleDeleteDeals(dealCostumerId);
                      }}
                    >
                      <BsTrash className="dashboard_section1_table_deleteBtn" />
                      Delete
                    </button>
                  </li>
                  <li data-bs-toggle="modal" data-bs-target="#fileUploadModal">
                    <button className="dropdown-item">
                      <MdOutlineUploadFile className="dashboard_section1_table_deleteBtn" />
                      Upload Deals
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDownloadDeals()}
                    >
                      <TbFileDownload className="dashboard_section1_table_deleteBtn" />
                      Download Deals
                    </button>
                  </li>
                </ul>
              </button>
            </div>
            <div className="dashboard_leads_create_btn_div">
              <button className="btn-shiny2">
                <Link className="dashboard_leads_create_link" to="/create-deal">
                  <span>
                    <MdAdd />
                  </span>
                  Create Deal
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* Table Div */}
        <div className="dashboard_leads_table_div">
          <DealsTable
            tblHead={{
              firstHead: "Deal Owner",
              secondHead: "Deal Name",
              thirdHead: "Amount",
              fourthHead: "Closing Date",
              fifthHead: "Contact Name",
              sixthHead: "Stage",
              seventhHead: "View",
              eighthHead: "Action",
              ninethHead: "LeadId",
            }}
            redirectLink="/deal-details"
            getAllDealsData={getAllDealsData}
            dealCostumerId={dealCostumerId}
            setDealCostumerId={setDealCostumerId}
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
                    onClick={handleUploadDeals}
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
            id="updateDealModal"
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
                  <UpdateDeal
                    dealCostumerId={dealCostumerId}
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

export default Deals;
