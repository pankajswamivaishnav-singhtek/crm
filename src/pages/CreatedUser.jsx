import React, { useState } from "react";
import ContactRightSectionTable from "../components/ContactRightSectionTable";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CreatedUserTable from "../components/CreatedUserTable";
// React Router Dom
import { Link } from "react-router-dom";
const CreatedUser = () => {
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
  const [pageNo, setPageNo] = useState(0);

  // Pagination Function ------
  const [pageRangeStart, setPageRangeStart] = useState(0);
  const totalPages = 1;
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

  return (
    <div className="conatiner-fluid dashboard_rightLeads_main_container">
      <div className="dashboard_content_wrapper">
        {/* Table Div */}
        <div className="dashboard_leads_table_div">
          <CreatedUserTable
            tblHead={{
              firstHead: "Sr. No",
              secondHead: "Name",
              thirdHead: "Email",
              fourthHead: "Contact",
              fifthHead: "Id",
              sixthHead: "Give Permission",
            }}
            redirectLink="/role&permission"
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
      </div>
    </div>
  );
};

export default CreatedUser;
