import React from "react";
// React Router Dom
import { Link } from "react-router-dom";

const DealsTable = ({
  tblHead,
  redirectLink,
  getAllDealsData,
  dealCostumerId,
  setDealCostumerId,
}) => {

  // Handle Single Check Box For Single Updateion And Id get and send Start ------
  const handleCheckboxChange = (dealId) => {
    const isSelected = dealCostumerId.includes(dealId);
    if (isSelected) {
      setDealCostumerId(dealCostumerId.filter((id) => id !== dealId));
    } else {
      setDealCostumerId([...dealCostumerId, dealId]);
    }
  };
 
  // Handle Master Checkbox Change Start -----
  const handleMasterCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    const allDealIds = getAllDealsData?.content?.map((data) => data.id) || [];
    if (isChecked) {
      setDealCostumerId(allDealIds);
    } else {
      setDealCostumerId([]);
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
              <th scope="col">{tblHead.sixthHead}</th>
            </tr>
          </thead>
          <tbody className="dashboard_section1_tableBody ">
            {getAllDealsData && getAllDealsData?.content?.length > 0 ? (
              getAllDealsData?.content?.map((data) => (
                <tr
                  key={data.id}
                  onClick={() => localStorage.setItem("dealId", data.id)}
                >
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckIndeterminate"
                      onChange={() => handleCheckboxChange(data.id)}
                      checked={dealCostumerId?.includes(data.id)}
                    />
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.dealOwner}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.dealName}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.amount}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.closingDate}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.contactName}
                    </Link>
                  </td>
                  <td>
                    <Link to={redirectLink} className="Link-button-leads">
                      {data.stage}
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No Deals Data At this Time</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DealsTable;
