// import React, { useContext } from "react";
import React, { useEffect, useState } from "react";
// React Router Dom
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";
const ContactRightSectionTable = ({
  tblHead,
  redirectLink,
  getAllContactData,
  contactCostumerId,
  setContactCostumerId,
}) => {
  const [isMasterChecked, setIsMasterChecked] = useState(false);
  // Handle Single Check Box For Single Updateion And Id get and send Start ------
  const handleCheckboxChange = (contactId) => {
    const isSelected = contactCostumerId.includes(contactId);

    if (isSelected) {
      setContactCostumerId(contactCostumerId.filter((id) => id !== contactId));
    } else {
      setContactCostumerId([...contactCostumerId, contactId]);
    }
  };
  // Handle Master Checkbox Change Start -----
  const handleMasterCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsMasterChecked(isChecked);
    const allContactIds =
      getAllContactData?.content?.map((data) => data.id) || [];
    if (isChecked) {
      setContactCostumerId(allContactIds);
    } else {
      setContactCostumerId([]);
    }
  };
  useEffect(() => {
    const allLeadIds = getAllContactData?.content?.map((data) => data.id) || [];
    if (allLeadIds.length === 0) return;
    if (contactCostumerId.length === allLeadIds.length) {
      setIsMasterChecked(true);
    } else {
      setIsMasterChecked(false);
    }
  }, [contactCostumerId, getAllContactData]);
  return (
    <div className="container-fluid table-responsive">
      <div className="row dashboard_table_main_heading"></div>
      <div className="LeadRightSectionTable_body">
        <table className="table table-responsive ">
          <thead>
            <tr className="table-danger dashboard_section1_tableHead_tr">
              {/* Checkbox Column */}
              <th scope="col">
                <div className="wrap-check-29">
                  <div className="cbx">
                    <input
                      id="cbx-29"
                      type="checkbox"
                      onClick={handleMasterCheckboxChange}
                      checked={isMasterChecked}
                    />
                    <label htmlFor="cbx-29" />
                    <svg width={15} height={14} viewBox="0 0 15 14" fill="none">
                      <path d="M2 8.36364L6.23077 12L13 2" />
                    </svg>
                  </div>
                  {/* Gooey*/}
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                      <filter id="goo-12">
                        <feGaussianBlur
                          in="SourceGraphic"
                          stdDeviation={4}
                          result="blur"
                        />
                        <feColorMatrix
                          in="blur"
                          mode="matrix"
                          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                          result="goo-12"
                        />
                        <feBlend in="SourceGraphic" in2="goo-12" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </th>
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
            {getAllContactData && getAllContactData?.content ? (
              getAllContactData?.content?.map((data) => (
                <tr
                  key={data.id}
                  onClick={() => localStorage.setItem("contactId", data.id)}
                >
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckIndeterminate"
                      onChange={() => handleCheckboxChange(data.id)}
                      checked={contactCostumerId?.includes(data.id)}
                    />
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.companyName}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.companyEmail}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.companyContact}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.companyAddress}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      <FaRegEye className="showDetailEye fs-4" />
                    </Link>
                  </td>
                  <td className="text-center">
                    <Link to="/create-account">
                      <HiPencilSquare className="lead-table-contact-action-icon fs-5" />
                    </Link>
                    &nbsp;&nbsp;
                    <Link to="/account-details">
                      <FaRegEye className="fs-5" />
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No Contact Data At this Time</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactRightSectionTable;
