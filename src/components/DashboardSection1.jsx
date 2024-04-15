import React from "react";

// React Icons
import { SiGoogleadmob } from "react-icons/si";
import { MdDoNotTouch } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaHandshakeSimple } from "react-icons/fa6";

// Import Shared Component
import DashboardSection1Table from "./shared/DashboardSection1Table";
// import DashboardSection2Table from "./shared/DashboardSection2Table";
const DashboardSection1 = () => {
  return (
    <div className="row dashboard_row1">
      {/* Cards */}
      <div className="col-xl-4 col-md-4">
        <div className="row row-cols-3 dashboard_card_mainDiv">
          {/* First Card */}
          <div className="card col dashboard_mainDiv_card mb-3 dashboard_mainDiv_firstCard">
            <div className="dashboard_mainDiv_single_card">
              <div className="dashboard_card_icon_div">
                {
                  <FaHandshakeSimple className="dashboard_card_icon dashboard_firstCard_icon" />
                }
              </div>
              <p className="dashboard_card_text">My Open Deals</p>
              <p className="dashboard_card_number">20</p>
            </div>
          </div>
          {/* Second Card */}
          <div className="card col dashboard_mainDiv_card mb-3  dashboard_mainDiv_secondCard">
            <div className="dashboard_mainDiv_single_card">
              <div className="dashboard_card_icon_div">
                {
                  <SiGoogleadmob className="dashboard_card_icon dashboard_secondCard_icon" />
                }
              </div>
              <p className="dashboard_card_text">My Leads</p>
              <p className="dashboard_card_number">20</p>
            </div>
          </div>
          {/* Third Card */}
          <div className="card col dashboard_mainDiv_card mb-3 dashboard_mainDiv_thirdCard">
            <div className="dashboard_mainDiv_single_card">
              <div className="dashboard_card_icon_div">
                {
                  <MdDoNotTouch className="dashboard_card_icon dashboard_thirdCard_icon" />
                }
              </div>
              <p className="dashboard_card_text">My Untouched Deals</p>
              <p className="dashboard_card_number">20</p>
            </div>
          </div>
          {/* Fourth Card */}
          <div className="card col dashboard_mainDiv_card mb-3  dashboard_mainDiv_fourthCard">
            <div className="dashboard_mainDiv_single_card">
              <div className="dashboard_card_icon_div">
                {
                  <BiSolidPhoneCall className="dashboard_card_icon dashboard_fourthCard_icon" />
                }
              </div>
              <p className="dashboard_card_text">My Calls Today</p>
              <p className="dashboard_card_number">20</p>
            </div>
          </div>
        </div>
      </div>
      {/* Tables */}
      <div className="col-xl-8 col-md-8">
        <DashboardSection1Table />
      </div>
    </div>
  );
};

export default DashboardSection1;
