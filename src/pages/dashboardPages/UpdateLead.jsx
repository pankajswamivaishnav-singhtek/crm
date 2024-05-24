import React from "react";
// Component
import CreateUpdateForm from "../../components/CreateUpdateForm";
const UpdateLead = ({ leadCostumerId, defaultValue, getLeadsData }) => {
  return (
    <div className="container-fluid dashboard_create_lead_main_container">
      {/* Lead Update Form Components */}
      <div className="create_leads_form_div">
        <CreateUpdateForm
          leadCostumerId={leadCostumerId}
          defaultValue={defaultValue}
          getLeadsData = {getLeadsData}
        />
      </div>
    </div>
  );
};

export default UpdateLead;
