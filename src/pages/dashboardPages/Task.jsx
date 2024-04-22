import React from "react";
// React Icons
import { MdAdd } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPencil, BsTrash } from "react-icons/bs";
import LeadsRightSectionTable from "../../components/shared/LeadsRightSectionTable";
// React Router Dom
import { Link } from "react-router-dom";

const Task = () => {
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
                  <button className="dropdown-item">
                    <BsTrash className="dashboard_section1_table_deleteBtn" />
                    Delete
                  </button>
                </li>
              </ul>
            </button>
          </div>
          <div className="dashboard_leads_export_btn_div">
            <button>Exports</button>
          </div>
          <div className="dashboard_leads_create_btn_div">
            <button>
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
        </div>
      </div>
      {/* Table Div */}
      <div className="dashboard_leads_table_div">
        <LeadsRightSectionTable
          tblHead={{
            firstHead: "Task Owner",
            secondHead: "Due Date",
            thirdHead: "Contact",
            fourthHead: "Subject",
            fifthHead: "Status",
          }}
          redirectLink="/task-details"
          data="Pankaj Swami Vaishnav"
        />
      </div>
      {/* Pagination Div */}
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
  )
}

export default Task
