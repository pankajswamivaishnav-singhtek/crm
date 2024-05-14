import React from "react";
import { Link } from "react-router-dom";
// Shared
import ReportLineChart2 from "./shared/ReportLineChart2";
const ReportDealSection = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgba(98, 114, 255, 1)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div className="col-xl-6">
      <h3 className="my-2 mx-2 dashboard_leadView_company_details_heading float-start">
        Deals Done
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
        <ReportLineChart2 data={data} />
      </div>
    </div>
  );
};

export default ReportDealSection;
