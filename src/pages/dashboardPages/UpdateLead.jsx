import React from "react";
// Component
import CreateUpdateForm from "../../components/CreateUpdateForm";
const UpdateLead = ({ leadCostumerId, defaultValue }) => {
  return (
    <div className="container-fluid dashboard_create_lead_main_container">
      {/* Form */}
      <div className="create_leads_form_div">
        <CreateUpdateForm
          leadCostumerId={leadCostumerId}
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
};

export default UpdateLead;
