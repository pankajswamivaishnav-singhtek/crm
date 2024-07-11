import React from "react";
import { Link } from "react-router-dom";
import ReportLineChart from "./shared/ReportLineChart";
const ReportLeadGenFirstSection = ({
  getGenratedLeadsData,
  leadBy,
  setLeadBy,
}) => {
  // const [selectedValue, setSelectedValue] = useState("month");
  // setLeadBy(selectedValue);
  const handleItemClick = (value) => {
    setLeadBy(value);
    // setSelectedValue(value);
  };

  const labels =
    // selectedValue === "year"
    leadBy === "year"
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
  const data = {
    labels: labels,
    datasets:
      // selectedValue === "year"
      leadBy === "year"
        ? [
            {
              label: "Total Leads",
              data: [2024, 2025, 2026, 2027, 2028, 2029, 2030]?.map(
                (year) => getGenratedLeadsData?.[year] || 0
              ),
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ]
        : // If "Month" is selected, prepare dataset for months
          [
            {
              label: "Total Leads",
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
              ].map((month) => getGenratedLeadsData?.[month] || 0),
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
  };

  return (
    <div>
      <h3 className="my-2 mx-2 dashboard_leadView_company_details_heading float-start">
        Lead Genrated
      </h3>
      <div className="dropdown clearfix">
        <Link
          className="btn dropdown-toggle report_lead_genrated_first_table_btn float-end"
          href="#!"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Lead Data
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
      <div id="report_lead_genreated_first_table_lineChart">
        <ReportLineChart data={data} />
      </div>
    </div>
  );
};

export default ReportLeadGenFirstSection;
