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
// redux toolkit dispatch
import { useDispatch } from "react-redux";
import {
  setLeadStatusDropDown,
  setLeadServicesDropDown,
  setLeadSourcesDropDown,
} from "../../app/slices";
const CreateLead = () => {
  //  Redux toolkit dispatch
  const dispatch = useDispatch();
  // Get User details from local storage
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;
  // Lead Status Dropdown
  const [leadStatus, setLeadStatus] = useState();
  const getLeadStatusDropdown = useCallback(async () => {
    try {
      const leadStatusDropdown = await leadStatusDropdowns(tokenId);
      dispatch(setLeadStatusDropDown(leadStatusDropdown));
      setLeadStatus(leadStatusDropdown);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId, dispatch]);
  // Lead Service Dropdown
  const [leadServices, setLeadServices] = useState();
  const getLeadServicesDropdown = useCallback(async () => {
    try {
      const leadServicesDropdown = await leadServicesDropdowns(tokenId);
      // Set Data In Redux Slice
      dispatch(setLeadServicesDropDown(leadServicesDropdown));
      setLeadServices(leadServicesDropdown);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId, dispatch]);
  // Lead Source Dropdown
  const [leadSource, setLeadSource] = useState();
  const getLeadSourcesDropdown = useCallback(async () => {
    try {
      const leadSourcesDropdown = await leadSourcesDropdowns(tokenId);
      // Set Data In Redux Slice
      dispatch(setLeadSourcesDropDown(leadSourcesDropdown));
      setLeadSource(leadSourcesDropdown);
    } catch (error) {
      console.log(error);
    }
  }, [tokenId, dispatch]);

  useEffect(() => {
    getLeadStatusDropdown();
    getLeadServicesDropdown();
    getLeadSourcesDropdown();
  }, [
    getLeadStatusDropdown,
    getLeadServicesDropdown,
    getLeadSourcesDropdown,
    dispatch,
  ]);

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
