import React, { useEffect, useState } from "react";
// React Router Dom
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";
const AccountTable = ({
  tblHead,
  redirectLink,
  getAllAccountData,
  accountCostumerId,
  setAccountCostumerId,
}) => {
  const [isMasterChecked, setIsMasterChecked] = useState(false);
  // Handle Single Check Box For Single Updateion And Id get and send Start ------
  const handleCheckboxChange = (leadId) => {
    const isSelected = accountCostumerId.includes(leadId);
    if (isSelected) {
      setAccountCostumerId(accountCostumerId.filter((id) => id !== leadId));
    } else {
      setAccountCostumerId([...accountCostumerId, leadId]);
    }
  };
  // Handle Master Checkbox Change Start -----
  const handleMasterCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsMasterChecked(isChecked);
    const allLeadIds = getAllAccountData?.content?.map((data) => data.id) || [];
    if (isChecked) {
      setAccountCostumerId(allLeadIds);
    } else {
      setAccountCostumerId([]);
    }
  };
  useEffect(() => {
    const allLeadIds = getAllAccountData?.content?.map((data) => data.id) || [];
    if (allLeadIds.length === 0) return;
    if (accountCostumerId.length === allLeadIds.length) {
      setIsMasterChecked(true);
    } else {
      setIsMasterChecked(false);
    }
  }, [accountCostumerId, getAllAccountData]);
 
  return (
    <div className="container-fluid ">
      <div className="row dashboard_table_main_heading"></div>
      <div className="LeadRightSectionTable_body table-responsive">
        {/* Table */}
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
                      onChange={handleMasterCheckboxChange}
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
              <th scope="col">{tblHead.sixthHead}</th>
              <th scope="col" className="text-center">
                {tblHead.seventhHead}
              </th>
              <th scope="col" className="text-center">
                {tblHead.eighthHead}
              </th>
            </tr>
          </thead>
          <tbody className="dashboard_section1_tableBody ">
            {getAllAccountData && getAllAccountData?.content?.length > 0 ? (
              getAllAccountData?.content?.map((data) => (
                <tr
                  key={data.id}
                  onClick={() => localStorage.setItem("accountId", data.id)}
                >
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckIndeterminate"
                      onChange={() => handleCheckboxChange(data.id)}
                      checked={accountCostumerId?.includes(data.id)}
                    />
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.accountName}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.accountNumber}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.accountOwner}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.annualRevenue}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.accountSite}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      <FaRegEye className="showDetailEye fs-4" />
                    </Link>
                  </td>
                  <td className="text-center">
                    <Link to="/create-task" state={{ leadId: data.leadId }}>
                      <HiPencilSquare className="lead-table-contact-action-icon fs-4" />
                    </Link>
                    {/* &nbsp;&nbsp;
                    <Link to="/deal-details">
                      <FaRegEye className="fs-5" />
                    </Link> */}
                  </td>
                  <td className="text-center">
                    {data?.leadId && (
                      <Link to={redirectLink} className="Link-button-leads">
                        <div className="leads_table_id_col rounded">
                          <span className="leads_table_id_text">
                            LI-{data.leadId}
                          </span>
                        </div>
                      </Link>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">No Account Data At this Time</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountTable;
