import React from "react";
// CSS
import "../../styles/dashboardCss/createLead.css";
// React Icons
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineRefresh } from "react-icons/hi";
// Import Component
import CreateLeadForm from "../../components/CreateLeadForm";

const CreateLead = () => {
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
        <CreateLeadForm />
      </div>
    </div>
  );
};

export default CreateLead;
