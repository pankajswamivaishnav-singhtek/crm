import React, { useCallback, useEffect, useState } from "react";
// CSS
import "../../styles/dashboardCss/createLead.css";

// Import Component
import CreateLeadForm from "../../components/CreateLeadForm";

// Controllers
import {
  leadStatusDropdowns,
  leadServicesDropdowns,
  leadSourcesDropdowns,
} from "../../controller/fetchApi";

const CreateLead = () => {
  // Token from localStorage
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;
  // Lead Status Dropdown
  const [leadStatus, setLeadStatus] = useState();
  const getLeadStatusDropdown = useCallback(async () => {
    try {
      const leadStatusDropdown = await leadStatusDropdowns(tokenId);
      setLeadStatus(leadStatusDropdown);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId]);
  // Lead Service Dropdown
  const [leadServices, setLeadServices] = useState();
  const getLeadServicesDropdown = useCallback(async () => {
    try {
      const leadServicesDropdown = await leadServicesDropdowns(tokenId);

      setLeadServices(leadServicesDropdown);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId]);

  // Lead Source Dropdown
  const [leadSource, setLeadSource] = useState();
  const getLeadSourcesDropdown = useCallback(async () => {
    try {
      const leadSourcesDropdown = await leadSourcesDropdowns(tokenId);
      setLeadSource(leadSourcesDropdown);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId]);

  useEffect(() => {
    getLeadStatusDropdown();
    getLeadServicesDropdown();
    getLeadSourcesDropdown();
  }, [getLeadStatusDropdown, getLeadServicesDropdown, getLeadSourcesDropdown]);

  return (
    <div className="container-fluid dashboard_create_lead_main_container">
      {/* <div className="create_lead_user_img_div">
        <div className="create_user_img">
          <img
            src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1543"
            alt="user-img"
            className="img-fluid rounded-pill"
          />
        </div>
        <div className="create_leads_use_img_btns">
          <div className="_create_leads_change_upload_file">
            <div className="create_change_upload_file_btn">
              <label htmlFor="userFileInput" className="custom-file-upload">
                <HiOutlineRefresh /> <span>Change</span>
              </label>
              <input
                type="file"
                id="userFileInput"
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="create_lead_remove_img_btn_div">
            <button className="create_lead_remove_img_btn">
              <RiDeleteBin6Line />
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div> */}
      {/* Create Lead Form Component */}
      <div className="create_leads_form_div">
        <CreateLeadForm
          leadStatus={leadStatus}
          leadServices={leadServices}
          leadSource={leadSource}
        />
      </div>
    </div>
  );
};

export default CreateLead;
