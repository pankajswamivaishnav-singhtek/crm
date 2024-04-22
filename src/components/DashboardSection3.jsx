import React from "react";
// React Icons
const DashboardSection3 = () => {
  return (
    <div className="container-fluid dashboard_table_mainDiv table-responsive dashboard_section3_main_container">
      <div className="row dashboard_table_main_heading">
        <div className="col dashboard_section1_table">
          <h4>My Meeting this month</h4>
        </div>
        {/* <div className="col dropdown" style={{ textAlign: "end" }}>
          <PiDotsThreeCircleVertical
            className="dashboard_section1_table_edit_button dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />
          <ul className="dropdown-menu" aria-labelledby="editDeleteDropdown">
            <li>
              <button className="dropdown-item">
                <BsPencil className="dashboard_section1_table_editBtn" /> Edit
              </button>
            </li>
            <li>
              <button className="dropdown-item">
                <BsTrash className="dashboard_section1_table_deleteBtn" />{" "}
                Delete
              </button>
            </li>
          </ul>
        </div> */}
      </div>
      <table className="table">
        <thead>
          <tr className="table-danger dashboard_section1_tableHead_tr">
            <th scope="col">Title</th>
            <th scope="col">Contact Name</th>
            <th scope="col">Related</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody className="dashboard_section1_tableBody">
          <tr>
            <td>My Meeting this month</td>
            <td>Mark Otto</td>
            <td>@mdo</td>
            <td>April 1, 2024</td>
            <td>10:00 AM</td>
          </tr>
          <tr>
            <td>My Meeting this month</td>
            <td>Jacob Thornton</td>
            <td>@fat</td>
            <td>April 5, 2024</td>
            <td>2:00 PM</td>
          </tr>
          <tr>
            <td>My Meeting this month</td>
            <td>Jacob Thornton</td>
            <td>@fat</td>
            <td>April 5, 2024</td>
            <td>2:00 PM</td>
          </tr>
          <tr>
            <td>My Meeting this month</td>
            <td>Jacob Thornton</td>
            <td>@fat</td>
            <td>April 5, 2024</td>
            <td>2:00 PM</td>
          </tr>
          <tr>
            <td>My Meeting this month</td>
            <td>Jacob Thornton</td>
            <td>@fat</td>
            <td>April 5, 2024</td>
            <td>2:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardSection3;
