import React, { useState, useEffect, useCallback, useContext } from "react";
// React Icons
import { MdAdd } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { TbFileDownload } from "react-icons/tb";
import ContactRightSectionTable from "../../components/ContactRightSectionTable";
// Import Toast
import Toast from "../../components/Toast";
// Context
import permissionContext from "../PermissionsContext";
// Controller
import {
  getAllContact,
  deleteContact,
  downloadContacts,
} from "../../controller/fetchApi";
// React Router Dom
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
const Contact = () => {
  //  Get Permission from app.js
  const { contactsPermission } = useContext(permissionContext);
  // Start Toast -------
  const [showToast, setShowToast] = useState({ success: false, message: "" });

  // Set Contact Costumer Id in main Conntact.jsx
  const [pageNo, setPageNo] = useState(0);
  const [contactCostumerId, setContactCostumerId] = useState([]);
  const [getAllContactData, setAllContactData] = useState([]);

  // Get User details from local storage
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;

  //  Get All Contact Data
  const getContactsData = useCallback(async () => {
    try {
      await getAllContact(pageNo, tokenId).then((res) => {
        setAllContactData(res);
      });
    } catch (error) {
      console.log(error);
    }
  }, [pageNo, tokenId]);

  // Delete Contact Api Start---------------
  const handleDeleteContact = async (contactCostumerId) => {
    try {
      await deleteContact(contactCostumerId, setShowToast, tokenId);
      if (deleteContact) {
        getContactsData();
      }
    } catch (error) {
      console.log("Did Not Delete Found Error", error);
    }
  };

  // Handle Download Contact
  const handleDowloadContacts = async () => {
    try {
      await downloadContacts(uid, setShowToast, tokenId);
    } catch (error) {
      console.log("Contact Downloaded:", error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, [getContactsData]);

  return (
    <div className="conatiner-fluid dashboard_rightLeads_main_container">
      <div className="dashboard_content_wrapper">
        {/* Btn div */}
        <div className="dashboard_leads_btn_mainDiv">
          <div className="dashboard_leads_btns_div">
            {contactsPermission?.includes("Delete") ||
            contactsPermission?.includes("Download") ? (
              <div className="dashboard_leads_action_btn_div">
                <button
                  className="dashboard_section1_table_edit_button dropdown-toggle "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Actions
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="editDeleteDropdown"
                  >
                    {/* Delete Btn */}
                    {contactsPermission?.includes("Delete") ? (
                      <li>
                        <span
                          className="dropdown-item"
                          onClick={() => handleDeleteContact(contactCostumerId)}
                        >
                          <BsTrash className="dashboard_section1_table_deleteBtn" />
                          Delete
                        </span>
                      </li>
                    ) : (
                      ""
                    )}

                    {/* Downloads Btn*/}
                    {contactsPermission?.includes("Download") ? (
                      <li>
                        <span
                          className="dropdown-item"
                          onClick={() => handleDowloadContacts()}
                        >
                          <TbFileDownload className="dashboard_section1_table_deleteBtn" />
                          Download Contacts
                        </span>
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                </button>
              </div>
            ) : (
              ""
            )}

            {/* Create Contact Btn */}
            {contactsPermission?.includes("Create") ? (
              <div className="dashboard_leads_create_btn_div">
                <button className="btn-shiny2">
                  <Link
                    className="dashboard_leads_create_link"
                    to="/create-contact"
                  >
                    <span>
                      <MdAdd />
                    </span>
                    Create Contact
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
          <ContactRightSectionTable
            tblHead={{
              firstHead: "Company Name",
              secondHead: "Email",
              thirdHead: "Contact",
              fourthHead: "Address",
              fifthHead: "View",
              sixthHead: "Create Account",
              seventhHead: "Lead Id",
            }}
            redirectLink="/contact-details"
            getAllContactData={getAllContactData}
            tableName="contactTable"
            contactCostumerId={contactCostumerId}
            setContactCostumerId={setContactCostumerId}
          />
        </div>
        {/* Pagination Div */}
        <Pagination
          data={getAllContactData}
          pageNo={pageNo}
          setPageNo={setPageNo}
        />
        <Toast showToast={showToast} setShowToast={setShowToast} />
      </div>
    </div>
  );
};

export default Contact;
