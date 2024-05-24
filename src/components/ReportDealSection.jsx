import React, { useState } from "react";
import { Link } from "react-router-dom";
// Shared
import ReportLineChart2 from "./shared/ReportLineChart2";
const ReportDealSection = ({ getDealsDoneData, setDealBy }) => {
  const [selectedValue, setSelectedValue] = useState("month");
  setDealBy(selectedValue);
  const handleItemClick = (value) => {
    setDealBy(value);
    setSelectedValue(value);
  };

  // const labels = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  // ];
  const labels =
    selectedValue === "year"
      ? [2024, 2025, 2026, 2027, 2028, 2029, 2030]
      : [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
  // const data = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       label: "My First Dataset",
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //       fill: false,
  //       borderColor: "rgba(98, 114, 255, 1)",
  //       tension: 0.1,
  //     },
  //   ],
  // };
  const data = {
    labels: labels,
    datasets:
      selectedValue === "year"
        ? [
            {
              label: "Total Deals",
              data: [2024, 2025, 2026, 2027, 2028, 2029, 2030]?.map(
                (year) => getDealsDoneData?.[year] || 0
              ),
              fill: false,
              borderColor: "rgba(98, 114, 255, 1)",
              tension: 0.1,
            },
          ]
        : // If "Month" is selected, prepare dataset for months
          [
            {
              label: "Total Deals",
              data: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month) => getDealsDoneData?.[month] || 0),
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
          Deals Data
        </Link>
        <ul className="dropdown-menu report_lead_genrated_first_table_dropdown">
          <li>
            <Link
              className="dropdown-item report_lead_genrated_first_table_dropdown_item"
              href="#!"
              onClick={() => handleItemClick("month")}
            >
              Month
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item report_lead_genrated_first_table_dropdown_item"
              href="#!"
              onClick={() => handleItemClick("year")}
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
