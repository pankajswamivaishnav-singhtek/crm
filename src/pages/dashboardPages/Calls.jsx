import React from "react";
// CSS
import "../../styles/dashboardCss/calls.css";
// React Icons
import { MdAdd } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPencil, BsTrash } from "react-icons/bs";
import { MdPermPhoneMsg, MdOutlinePhonePaused } from "react-icons/md";
import { MdOutlineUploadFile } from "react-icons/md";
import { TbFileDownload } from "react-icons/tb";
import LeadsRightSectionTable from "../../components/shared/LeadsRightSectionTable";
// React Router Dom
import { useNavigate } from "react-router-dom";

const Calls = () => {
  const navigate = useNavigate();
  return (
    <div className="conatiner-fluid dashboard_rightLeads_main_container">
      <div className="dashboard_content_wrapper">
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
                    <button className="dropdown-item">
                      <BsTrash className="dashboard_section1_table_deleteBtn" />
                      Delete
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      <MdOutlineUploadFile className="dashboard_section1_table_deleteBtn" />
                      Upload Calls
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
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
          <LeadsRightSectionTable
            tblHead={{
              firstHead: "Call Owner",
              secondHead: "Call Type",
              thirdHead: "Call Start Time",
              fourthHead: "Call Duration",
              fifthHead: "Number",
            }}
            redirectLink="/call-details"
            data="7072345784"
          />
        </div>
        <div className="dashboard_leads_pagination_div">
          <nav aria-label="...">
            <ul className="pagination">
              <li className="page-item disabled dashboard_leads_pagination_pageItem">
                <a className="page-link" href="#!">
                  <IoIosArrowBack />
                </a>
              </li>
              <li className="page-item dashboard_leads_pagination_pageItem">
                <a className="page-link" href="#!">
                  01
                </a>
              </li>
              <li
                className="page-item active dashboard_leads_pagination_pageItem"
                aria-current="page"
              >
                <a className="page-link" href="#!">
                  02
                </a>
              </li>
              <li className="page-item dashboard_leads_pagination_pageItem">
                <a className="page-link" href="#!">
                  03
                </a>
              </li>
              <li className="page-item dashboard_leads_pagination_pageItem">
                <a className="page-link" href="#!">
                  04
                </a>
              </li>
              <li className="page-item dashboard_leads_pagination_pageItem">
                <a className="page-link" href="#!">
                  05
                </a>
              </li>
              <li className="page-item dashboard_leads_pagination_pageItem">
                <a className="page-link" href="#!">
                  <IoIosArrowForward />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Calls;
