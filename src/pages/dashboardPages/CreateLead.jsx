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
  // Get User details from local storage
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
