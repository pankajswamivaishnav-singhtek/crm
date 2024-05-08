import React, { useState, useEffect } from "react";
// React Icons
import { MdAdd } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPencil, BsTrash } from "react-icons/bs";
import { TbFileDownload } from "react-icons/tb";
import ContactRightSectionTable from "../../components/ContactRightSectionTable";
// Controller
import {
  getAllContact,
  deleteContact,
  downloadContacts,
} from "../../controller/fetchApi";
// React Router Dom
import { Link } from "react-router-dom";
const Contact = () => {
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

  // Set Contact Costumer Id in main Conntact.jsx
  const [contactCostumerId, setContactCostumerId] = useState([]);
  const [getAllContactData, setAllContactData] = useState([]);
  // Get Uid and Tokenid Who Saved In Cookie
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;
  useEffect(() => {
    (async () => {
      try {
        getAllContact(uid, tokenId).then((res) => {
          setAllContactData(res);
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [uid, tokenId]);
  // Delete Contact Api Start---------------
  const handleDeleteContact = async (contactCostumerId) => {
    try {
      await deleteContact(contactCostumerId, setShowToast, tokenId);
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
  // Handle Next Page
  const [pageNo, setPageNo] = useState(0);
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
                  <li>
                    <button className="dropdown-item">
                      <BsPencil className="dashboard_section1_table_editBtn" />
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDeleteContact(contactCostumerId)}
                    >
                      <BsTrash className="dashboard_section1_table_deleteBtn" />
                      Delete
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item"  onClick={() => handleDowloadContacts()}>
                      <TbFileDownload
                        className="dashboard_section1_table_deleteBtn"
                      />
                      Download Contacts
                    </button>
                  </li>
                </ul>
              </button>
            </div>

            <div className="dashboard_leads_create_btn_div">
              <button>
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
            }}
            redirectLink="/contact-details"
            getAllContactData={getAllContactData}
            tableName="contactTable"
            contactCostumerId={contactCostumerId}
            setContactCostumerId={setContactCostumerId}
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

export default Contact;
