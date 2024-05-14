import React from "react";
import { Link } from "react-router-dom";
// Shared
import ReportCallPieChart from "./shared/ReportCallPieChart";
const ReportCallsSecondSection = () => {
  const data = {
    labels: ["Related TO", "Call To", "Call Purpose", "Reminder"],
    datasets: [
      {
        label: "My Call Data",
        data: [200, 90, 160, 150],
        backgroundColor: [
          "rgba(255, 112, 6, 1)",
          "rgba(97, 113, 255, 1)",
          "rgba(43, 211, 106, 1)",
          "rgba(105, 194, 229, 1)",
        ],
        hoverOffset: 4,
        borderWidth: 5,
      },
    ],
  };
  return (
    <div className="col-xl-6">
      <h3 className="my-2 mx-2 dashboard_leadView_company_details_heading float-start">
        Calls Done
      </h3>
      <div className="dropdown clearfix">
        <Link
          className="btn dropdown-toggle report_lead_genrated_first_table_btn float-end"
          href="#!"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown link
        </Link>
        <ul className="dropdown-menu report_lead_genrated_first_table_dropdown">
          <li>
            <Link
              className="dropdown-item report_lead_genrated_first_table_dropdown_item"
              href="#!"
            >
              Month
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item report_lead_genrated_first_table_dropdown_item"
              href="#!"
            >
              Year
            </Link>
          </li>
        </ul>
      </div>
      <div className="report_call_done_first_table_lineChart">
        <ReportCallPieChart data={data} />
      </div>
    </div>
  );
};

export default ReportCallsSecondSection;
