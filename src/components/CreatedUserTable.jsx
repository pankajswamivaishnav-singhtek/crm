import React from "react";
// React Router
import { Link } from "react-router-dom";
// React Icons
import { BsPencilSquare } from "react-icons/bs";

const CreatedUserTable = ({ tblHead, redirectLink }) => {
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
          <tr>
            <td>
              <Link to={redirectLink} className="Link-button-leads">
                101
              </Link>
            </td>
            <td>
              <Link to={redirectLink} className="Link-button-leads">
                Pankaj Swami Vaishnav
              </Link>
            </td>
            <td>
              <Link to={redirectLink} className="Link-button-leads">
                pankajvaishnav128@gmail.com
              </Link>
            </td>
            <td>
              <Link to={redirectLink} className="Link-button-leads">
                7073272134
              </Link>
            </td>
            <td>
              <Link to={redirectLink} className="Link-button-leads">
                2415
              </Link>
            </td>
            <td className="text-center">
              <Link to={redirectLink} className="Link-button-leads">
                <BsPencilSquare />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CreatedUserTable;
