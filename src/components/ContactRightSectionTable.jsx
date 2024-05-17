// import React, { useContext } from "react";
import React from "react";
// React Router Dom
import { Link } from "react-router-dom";

const ContactRightSectionTable = ({
  tblHead,
  redirectLink,
  getAllContactData,
  contactCostumerId,
  setContactCostumerId,
}) => {
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

    const allContactIds =
      getAllContactData?.content?.map((data) => data.id) || [];
    if (isChecked) {
      setContactCostumerId(allContactIds);
    } else {
      setContactCostumerId([]);
    }
  };
  return (
    <div className="container-fluid table-responsive">
      <div className="row dashboard_table_main_heading"></div>
      <div className="LeadRightSectionTable_body">
        <table className="table table-responsive ">
          <thead>
            <tr className="table-danger dashboard_section1_tableHead_tr">
              <th scope="col">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                  onClick={handleMasterCheckboxChange}
                />
              </th>
              <th scope="col">{tblHead.firstHead}</th>
              <th scope="col">{tblHead.secondHead}</th>
              <th scope="col">{tblHead.thirdHead}</th>
              <th scope="col">{tblHead.fourthHead}</th>
              <th scope="col">{tblHead.fifthHead}</th>
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
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No Contact Data At this Time</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactRightSectionTable;
