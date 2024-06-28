import React from "react";
// React Icons
import { FaRegEye } from "react-icons/fa";

const SuperAdminSection2 = ({ getAllUsers }) => {
  return (
    <div className="row super_admin_section2">
      {/* Left Div */}
      <div className="super_admin_section2_left_div col">
        <div className="super_admin_section2_table">
          <table className="table border border-secondary-subtle super_admin_section2_left_table">
            <thead className="super_admin_section2_table_thead">
              <tr className="dashboard_section1_tableHead_tr table-danger">
                <th scope="col">Sr. No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Id</th>
                <th scope="col" className="text-center">
                  Show Dashboard
                </th>
              </tr>
            </thead>
            <tbody className="dashboard_section1_tableBody ">
              {getAllUsers && getAllUsers?.length > 0 ? (
                getAllUsers?.map((user, index) => (
                  <tr
                    className="super_admin_section2_table_tbody_tr"
                    key={index}
                  >
                    <td>{index + 1}</td>
                    <td>{`${user?.firstName} `}</td>
                    <td>pankajvaishnav128@gmail.com</td>
                    <td>Admin</td>
                    <td>0142</td>
                    <td className="text-center">
                      <FaRegEye className="fs-3 super_admin_section2_table_icon" />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No dara at this time</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminSection2;
