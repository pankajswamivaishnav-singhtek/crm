import React from "react";
// Shared Component
import DashboardSection2Table from "./shared/DashboardSection2Table";
// React Icons
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { BsPencil, BsTrash } from "react-icons/bs";
// Chart
import DonutChart from "./shared/DonutChart";
const DashboardSection2 = () => {
  return (
    <div className="row dashboard_row1">
      <div className="col-xl-8 col-md-8">
        <DashboardSection2Table />
      </div>
      <div className="col-xl-4 col-md-4 dashboard_section2_row2">
        <div>
          <div className="row dashboard_table_main_heading">
            <div className="col dashboard_section1_table">
              <h4>My Pipeline Deals By Stage</h4>
            </div>
            <div className="col dropdown" style={{ textAlign: "end" }}>
              <PiDotsThreeCircleVertical
                className="dashboard_section1_table_edit_button dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul
                className="dropdown-menu"
                aria-labelledby="editDeleteDropdown"
              >
                <li>
                  <button className="dropdown-item">
                    <BsPencil className="dashboard_section1_table_editBtn" />{" "}
                    Edit
                  </button>
                </li>
                <li>
                  <button className="dropdown-item">
                    <BsTrash className="dashboard_section1_table_deleteBtn" />{" "}
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="dashboard_section2_chart_mainDiv">
          <div className="dashboard_section2_chart_div">
            <DonutChart
              data={[30, 20, 10, 15, 25]}
              labels={["Red", "Blue", "Yellow", "Green", "Purple"]}
              height={50}
              width={50}
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DashboardSection2;
