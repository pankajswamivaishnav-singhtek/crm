import React, { useState, useCallback, useEffect, useContext } from "react";
// CSS
import "../../styles/dashboardCss/calls.css";
//Import React Icons
import { MdAdd } from "react-icons/md";
import { BsPencil, BsTrash } from "react-icons/bs";
import { MdOutlineUploadFile } from "react-icons/md";
import { TbFileDownload } from "react-icons/tb";

// React Router Dom
import { Link } from "react-router-dom";
// Import Permission Context From app.js
import permissionContext from "../PermissionsContext";

// Components
import DealsTable from "../../components/DealsTable";
import UpdateDeal from "./UpdateDeal";
// Import Toast
import Toast from "../../components/Toast";
// Import api function from controller
import {
  getAllDeal,
  deleteDeals,
  getSingleDeal,
  downloadDeal,
  uploadDeals,
} from "../../controller/fetchApi";
import Pagination from "../../components/Pagination";
const Deals = () => {
  // Get Deals Permission
  const { dealsPermission } = useContext(permissionContext);

  // Start Toast Code-------
  const [showToast, setShowToast] = useState({ success: false, message: "" });

  const [dealCostumerId, setDealCostumerId] = useState([]);
  // Get User details from local storage
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
    setSelectedFile(event.target.files[0]);
  };
  const handleUploadDeals = async () => {
    if (selectedFile) {
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
                  {/* Update Btn */}
                  {dealsPermission?.includes("Update") ? (
                    <li
                      data-bs-toggle="modal"
                      data-bs-target="#updateDealModal"
                    >
                      <span
                        className="dropdown-item"
                        onClick={() => handleUpdateDeal()}
                      >
                        <BsPencil className="dashboard_section1_table_editBtn" />
                        Edit
                      </span>
                    </li>
                  ) : (
                    ""
                  )}

                  {/* Delete Btn */}
                  {dealsPermission?.includes("Delete") ? (
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => {
                          handleDeleteDeals(dealCostumerId);
                        }}
                      >
                        <BsTrash className="dashboard_section1_table_deleteBtn" />
                        Delete
                      </span>
                    </li>
                  ) : (
                    ""
                  )}

                  {/* Upload Btn */}
                  {dealsPermission?.includes("Upload") ? (
                    <li
                      data-bs-toggle="modal"
                      data-bs-target="#fileUploadModal"
                    >
                      <span className="dropdown-item">
                        <MdOutlineUploadFile className="dashboard_section1_table_deleteBtn" />
                        Upload Deals
                      </span>
                    </li>
                  ) : (
                    ""
                  )}

                  {/* Download Btn */}
                  {dealsPermission?.includes("Download") ? (
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleDownloadDeals()}
                      >
                        <TbFileDownload className="dashboard_section1_table_deleteBtn" />
                        Download Deals
                      </span>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </button>
            </div>
            {/* Create Btn */}
            {dealsPermission?.includes("Create") ? (
              <div className="dashboard_leads_create_btn_div">
                <button className="btn-shiny2">
                  <Link
                    className="dashboard_leads_create_link"
                    to="/create-deal"
                  >
                    <span>
                      <MdAdd />
                    </span>
                    Create Deal
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
          <DealsTable
            tblHead={{
              firstHead: "Deal Owner",
              secondHead: "Deal Name",
              thirdHead: "Amount",
              fourthHead: "Closing Date",
              fifthHead: "Contact Name",
              sixthHead: "Stage",
              seventhHead: "View",
              eighthHead: "Create Account",
              ninethHead: "LeadId",
            }}
            redirectLink="/deal-details"
            getAllDealsData={getAllDealsData}
            dealCostumerId={dealCostumerId}
            setDealCostumerId={setDealCostumerId}
          />
        </div>
        {/* Pagination Div */}
        <Pagination
          data={getAllDealsData}
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
        <Toast showToast={showToast} setShowToast={setShowToast} />
      </div>
    </div>
  );
};

export default Deals;
