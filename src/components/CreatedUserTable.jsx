import React from "react";
// React Router
import { Link } from "react-router-dom";
// React Icons
import { BsPencilSquare } from "react-icons/bs";

const CreatedUserTable = ({ tblHead, data, redirectLink }) => {
  return (
    <div className="LeadRightSectionTable_body">
      <table className="table table-responsive ">
        <thead>
          <tr className="table-danger dashboard_section1_tableHead_tr">
            <th scope="col">{tblHead.firstHead}</th>
            <th scope="col">{tblHead.secondHead}</th>
            <th scope="col">{tblHead.thirdHead}</th>
            <th scope="col">{tblHead.fourthHead}</th>
            <th scope="col">{tblHead.fifthHead}</th>
            <th scope="col" className="text-center">
              {tblHead.sixthHead}
            </th>
            {/* <th scope="col">{tblHead.fifthHead}</th> */}
          </tr>
        </thead>
        <tbody className="dashboard_section1_tableBody ">
          {data && data?.length > 0 ? (
            data?.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{`${user?.firstName}  ${user?.lastName}`}</td>
                <td>{user?.email}</td>
                <td>{user?.mobile}</td>
                <td>{user?.id}</td>
                <td className="text-center">
                  <Link
                    to={redirectLink}
                    className="Link-button-leads"
                    state={{ userData: user }}
                  >
                    <BsPencilSquare
                      className="fs-4"
                      style={{ color: "rgba(145, 155, 250, 1)" }}
                    />
                  </Link>
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
  );
};

export default CreatedUserTable;
