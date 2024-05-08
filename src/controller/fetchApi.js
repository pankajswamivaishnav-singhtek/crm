import {
  SIGNUP_USER,
  LOGIN_USER,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD_VALIDATE,
  RESET_PASSWORD,
  MONHTLY_MEETINGS_URL,
  MONTHLY_TASK_URL,
  MONTHLY_CLOSING_DEALS_URL,
  PIPELINE_DEALS_URL,
  // Leads Url
  CREATE_LEAD_URL,
  GET_SINGLE_LEAD_URL,
  DELETE_LEADS_URL,
  SINGLE_LEAD_UPDATE_URL,
  GET_ALL_LEAD_URL_BY_FILTER,
  VERIFY_LEADS_URL,
  DOWNLOAD_LEADS_URL,
  UPLOAD_LEADS_URL,
  // Contact Url
  CREATE_CONTACT_URL,
  GET_ALL_CONTACT_URL,
  DELETE_CONTACT_URL,
  DOWNLOAD_CONTACT_URL,
  // Accounts Url
  CREATE_ACCOUNTS_URL,
  GET_ALL_ACCOUNT_URL,
  DOWNLOAD_ACCOUNT_URL,
  GET_SINGLE_ACCOUNT_URL,
  DELETE_ACCOUNT_URL,
  UPDATE_SINGLE_ACCOUNT_URL,
  // Deal Url
  CREATE_DEAL_URL,
  GET_ALL_DEALS_URL,
  DELETE_DEALS_URL,
  UPDATE_SINGLE_DEAL_URL,
  GET_sINGLE_DEAL_URL,
  DOWNLOAD_DEAL_URL,
  UPLOAD_DEAL_URL,
  // Task Url
  CREATE_TASK_URL,
  GET_ALL_TASK_URL,
  DELETE_TASK_URL,
  GET_SINGLE_TASK_URL,
  DOWNLOAD_TASK_URL,
  UPDATE_TASK_URL,
  UPLOAD_TASK_URL,
  // Meeting Url
  CREATE_MEETING_URL,
  GET_ALL_MEETINGS_URL,
  DELETE_MEETINGS_URL,
  SINGLE_MEETINGS_URL,
  UPDATE_MEETINGS_URL,
  DOWNLOAD_MEETING_URL,
  UPLOAD_MEETING_URL,
} from "../constants/Constant";
import axios from "axios";

// Signup User Post Api
export const signupUser = async (userData, setShowToast) => {
  try {
    console.log("userData", userData);
    const response = await axios.post(SIGNUP_USER, {
      firstName: userData.firstName,
      lastName: userData.lastName,
      userName: userData.userName,
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      mobile: userData.phone,
    });
    // Show success message in toast
    setShowToast({ success: true, message: "Sign up successful." });
    // Set Data In Local Storage
    if (response) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response;
  } catch (error) {
    const { message } = error.response.data;
    // Show error message in toast
    setShowToast({ success: false, message });
  }
};

// Login User Post Api
export const loginUser = async (userData, setShowToast) => {
  try {
    const response = await axios.post(LOGIN_USER, {
      email: userData.email,
      password: userData.password,
    });
    // Show success message in toast
    setShowToast({ success: true, message: "Sign In successfully." });
    // Set Data In Local Storage
    if (response) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response;
  } catch (error) {
    const { message } = await error.response.data;
    // Show error message in toast
    setShowToast({ success: false, message });
  }
};

// Logout User Api
export const logoutUser = async () => {
  try {
    const response = await axios.get(LOGOUT_USER);
    return response;
  } catch (error) {
    const { message } = error.response.data;
    return message;
  }
};

// Forgot Password Api
export const forgotPassword = async (email, setShowToast) => {
  try {
    const response = await axios.post(FORGOT_PASSWORD, {
      email: email,
    });
    // Show success message in toast
    setShowToast({ success: true, message: "Email Send Successfully" });
    return response;
  } catch (error) {
    const { message } = error.response.data;
    // Show error message in toast
    setShowToast({ success: false, message });
  }
};

// Reset Password Validation Api
export const resetPasswordValidate = async (uid) => {
  try {
    const response = await axios.post(RESET_PASSWORD_VALIDATE + uid, {
      uid: uid,
    });
    return response;
  } catch (error) {
    const { message } = error.response.data;
    return message;
  }
};

// Reset Password
export const resetPassword = async (userData, uid, setShowToast) => {
  try {
    const response = await axios.post(RESET_PASSWORD + uid, {
      email: userData.email,
      password: userData.password,
      confirmedPassword: userData.confirmPassword,
    });
    // Show success message in toast
    setShowToast({ success: true, message: "Sign up successful." });
    return response;
  } catch (error) {
    const { message } = error.response.data;
    // Show error message in toast
    setShowToast({ success: false, message });
  }
};

// --------------Dashboard Configuration Api -------------

// Meeting This Month Get Api
export const monthlyMeetings = async (uid, tokenId) => {
  try {
    let config = {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    };
    const response = await axios.get(MONHTLY_MEETINGS_URL + uid, config);
    const finalResponse = response?.data?.data;
    if (finalResponse) {
      return finalResponse;
    } else {
      return null;
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log("Error: " + message);
    return message;
  }
};

// Task This Month  Get Api
export const monthlyTask = async (uid, tokenId) => {
  try {
    let config = {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    };
    const response = await axios.get(MONTHLY_TASK_URL + uid, config);
    const finalResponse = response?.data?.data;
    if (finalResponse) {
      return finalResponse;
    } else {
      return null;
    }
  } catch (error) {
    const message = error?.response?.data;
    return message;
  }
};

// Closing Deals This Month Get Api
export const monthlyClosingDeals = async (uid, tokenId) => {
  try {
    let config = {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    };
    const response = await axios.get(MONTHLY_CLOSING_DEALS_URL + uid, config);
    const finalResponse = response?.data?.data;
    if (finalResponse) {
      return finalResponse;
    } else {
      return null;
    }
  } catch (error) {
    const message = error?.response?.data;
    return message;
  }
};

// Pipeline Deals Get Api
export const pipelineDeals = async (uid, tokenId) => {
  try {
    const response = await axios.get(PIPELINE_DEALS_URL + uid, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    const finalResponse = response?.data?.data;
    if (finalResponse) {
      return finalResponse;
    } else {
      return [];
    }
  } catch (error) {
    const message = error?.response?.data;

    return message;
  }
};

// Create Lead Api
export const createLead = async (userData, uid, setShowToast, tokenId) => {
  try {
    let config = {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    };
    const response = await axios.post(
      CREATE_LEAD_URL,
      {
        leadOwner: userData.leadOwner,
        firstName: userData.firstName,
        lastName: userData.lastName,
        mobile: userData.mobileNumber,
        secondaryMobile: userData.secondaryMobileNumber,
        email: userData.email,
        leadSource: userData.leadSource,
        leadStatus: userData.leadStatus,
        annualRevenue: userData.annualRevenue,
        companyName: userData.companyName,
        companyEmail: userData.companyEmail,
        companyContact: userData.companyContact,
        secondaryContact: userData.secondaryContact,
        city: userData.city,
        district: userData.district,
        state: userData.state,
        country: userData.country,
        description: userData.description,
        user: {
          id: uid,
        },
      },
      config
    );

    // Show success message in toast
    setShowToast({ success: true, message: "Create Lead Successfully." });
    return response;
  } catch (error) {
    const { message } = error.response.data;
    // Show error message in toast
    setShowToast({ success: false, message });
    return message;
  }
};

// Get All Lead By Filter Api
export const getAllLeadByFilter = async (filters, tokenId) => {
  const queryString = Object.keys(filters)
    .filter((key) => filters[key]) // Only include filters that have a value
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(filters[key])
    )
    .join("&");
  try {
    let config = {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    };
    const response = await axios.get(
      GET_ALL_LEAD_URL_BY_FILTER + queryString,
      config
    );
    const finalResponse = response?.data?.data;
    return finalResponse;
  } catch (error) {}
};

// Get Single Lead by Id
export const getSingleLead = async (leadId, tokenId) => {
  try {
    const response = await axios.get(GET_SINGLE_LEAD_URL + leadId, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    const finalResponse = response?.data?.data;
    if (finalResponse) {
      return finalResponse;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    const message = error.response.data;
    return message;
  }
};

// Verifying Leads Post Api
export const verifyLeads = async (leadId, setShowToast, tokenId) => {
  try {
    let config = {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    };
    const response = await axios.post(VERIFY_LEADS_URL + leadId, {}, config);
    if (response) {
      // Show success message in toast
      setShowToast({ success: true, message: "Verify Successfully " });
    }
    return response;
  } catch (error) {
    const message = error?.response?.data;
    return message;
  }
};

// Delete Leads
export const deleteLeads = async (leadId, setShowToast, tokenId) => {
  try {
    console.log("Entering deleteLeads");
    let config = {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    };
    const response = await axios.delete(DELETE_LEADS_URL + [leadId], config);
    if (response) {
      // Show success message in toast
      setShowToast({ success: true, message: "Delete Successfully." });
    }
    return response;
  } catch (error) {
    console.log(error);
    const message = error.response.data;
    return message;
  }
};

// Update Single Lead Put Api
export const updateSingleLead = async (
  userData,
  leadId,
  setShowToast,
  tokenId
) => {
  try {
    const response = await axios.put(
      SINGLE_LEAD_UPDATE_URL + leadId,
      {
        leadOwner: userData.leadOwner,
        firstName: userData.firstName,
        lastName: userData.lastName,
        mobile: userData.mobileNumber,
        secondaryMobile: userData.secondaryMobileNumber,
        email: userData.email,
        leadSource: userData.leadSource,
        leadStatus: userData.leadStatus,
        annualRevenue: userData.annualRevenue,
        companyName: userData.companyName,
        companyEmail: userData.companyEmail,
        companyContact: userData.companyContact,
        secondaryContact: userData.secondaryContact,
        city: userData.city,
        district: userData.district,
        state: userData.state,
        country: userData.country,
        description: userData.description,
      },
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    if (response) {
      // Show success message in toast
      setShowToast({ success: true, message: "Update Successfully." });
      return response;
    } else {
      return null;
    }
  } catch (error) {
    if (error.response.status === 403) {
      // Show success message in toast
      setShowToast({ success: true, message: "Please Select Lead" });
    }
    console.log("Did not lead", error);
  }
};

// Download Leads Api get Api
export const downloadLeads = async (setShowToast, tokenId) => {
  try {
    const response = await axios.get(DOWNLOAD_LEADS_URL, {
      responseType: "arraybuffer",
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    if (response) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "leads.xlsx");
      document.body.appendChild(link);
      link.click();
      // Show success message in toast
      setShowToast({ success: true, message: "Download Successfully." });
    }

    // return response;
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Upload Leads Post Api
export const uploadLeads = async (file, setShowToast, tokenId) => {
  try {
    console.log("Enter upload leads");
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(UPLOAD_LEADS_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${tokenId}`,
      },
    });
    console.log("upload success", response);
    if (response) {
      setShowToast({ success: true, message: "Upload Successfully." });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Create Contact Post Api
export const createContact = async (
  contactData,
  uid,
  setShowToast,
  tokenId
) => {
  try {
    console.log("-->Entering Contact", contactData);
    const response = await axios.post(
      CREATE_CONTACT_URL,
      {
        companyName: contactData.companyName,
        companyEmail: contactData.companyEmail,
        companyContact: contactData.companyContact,
        companyAddress: contactData.address,
        description: contactData.description,
        user: {
          id: uid,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    if (response) {
      // Show success message in toast
      setShowToast({ success: true, message: "Create Lead Successfully." });
    }
  } catch (error) {}
};

//Get All Contact get Api
export const getAllContact = async (uid, tokenId) => {
  try {
    let config = {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    };
    const response = await axios.get(GET_ALL_CONTACT_URL + uid, config);
    const finalResponse = response?.data?.data;
    if (finalResponse) {
      return finalResponse;
    } else {
      return [];
    }
  } catch (error) {
    const message = error?.response?.data;
    return message;
  }
};

// Delete Contact delete Api
export const deleteContact = async (contactId, setShowToast, tokenId) => {
  try {
    const response = await axios.delete(DELETE_CONTACT_URL + contactId, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    if (response) {
      // Show success message in toast
      setShowToast({ success: true, message: "Delete Successfully." });
    }
  } catch (error) {
    const message = error?.response?.data;
    return message;
  }
};

// Download Contact get Api
export const downloadContacts = async (uid, setShowToast, tokenId) => {
  try {
    const response = await axios.get(DOWNLOAD_CONTACT_URL + uid, {
      responseType: "arraybuffer",
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    if (response) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "leads.xlsx");
      document.body.appendChild(link);
      link.click();
      // Show success message in toast
      setShowToast({ success: true, message: "Download Successfully." });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// **************** Accounts Api **************** //
// Create Account Post Api
export const createAccount = async (
  accountData,
  uid,
  setShowToast,
  tokenId
) => {
  try {
    const response = await axios.post(
      CREATE_ACCOUNTS_URL,
      {
        accountOwner: accountData.accountOwner,
        accountName: accountData.accountName,
        accountSite: accountData.accountSite,
        parentAccount: accountData.parentAccount,
        accountNumber: accountData.accountNumber,
        aadharCard: accountData.aadharNumber,
        panCard: accountData.panCardNumber,
        accountType: accountData.accountType,
        industry: accountData.industry,
        annualRevenue: accountData.annualRevenue,
        addressInformation: accountData.address,
        billingAddress: accountData.billingAddress,
        billingCity: accountData.billingCity,
        billingState: accountData.billingState,
        billingCode: accountData.billingCode,
        shippingStreet: accountData.shippingStreet,
        shippingCity: accountData.shippingCity,
        shippingState: accountData.shippingState,
        shippingCode: accountData.shippingCode,
        shippingAddress: accountData.shippingAddress,
        dateOfIssue: accountData.dateOfIssue,
        dateOfBilling: accountData.dateOfBilling,
        dateOfShipment: accountData.dateOfShipment,
        dealDescription: accountData.description,
        user: {
          id: uid,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    if (response) {
      // Set Success Message
      setShowToast({
        success: true,
        message: "Create Account Successfully.",
      });
    }
    return response;
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Get All Account get Api
export const getAllAccount = async (tokenId, pageNo) => {
  try {
    const response = await axios.get(GET_ALL_ACCOUNT_URL + pageNo, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    const fimalResponse = response?.data?.data;
    if (fimalResponse) {
      return fimalResponse;
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// GET Single Account
export const getSingleAccount = async (accountId, tokenId) => {
  try {
    console.log("Entering getSingleAccount", accountId);
    const response = await axios.get(GET_SINGLE_ACCOUNT_URL + accountId, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    console.log("singleAccountResponse", response.data.data);
    const finalResponse = response?.data?.data;
    return finalResponse;
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Download Account get Api
export const downloadAccount = async (uid, setShowToast, tokenId) => {
  try {
    const response = await axios.get(DOWNLOAD_ACCOUNT_URL + uid, {
      responseType: "arraybuffer",
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    if (response) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "leads.xlsx");
      document.body.appendChild(link);
      link.click();
      // Set Success Message
      setShowToast({
        success: true,
        message: "Create Account Successfully.",
      });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Delete Account delete Api
export const deleteAccount = async (accountId, setShowToast, tokenId) => {
  try {
    const response = await axios.delete(DELETE_ACCOUNT_URL + [accountId], {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    if (response) {
      // Show success message in toast
      setShowToast({ success: true, message: "Delete Successfully." });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Update Account put Api
export const updateSingleAccount = async (
  accountData,
  accountId,
  setShowToast,
  tokenId
) => {
  try {
    const response = await axios.put(
      UPDATE_SINGLE_ACCOUNT_URL + accountId,
      accountData,
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    if (response) {
      // Show success message in toast
      setShowToast({ success: true, message: "Update Successfully." });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// ********** Deal Api ************* //
export const createDeal = async (uid, dealData, setShowToast, tokenId) => {
  try {
    const response = await axios.post(
      CREATE_DEAL_URL,
      {
        dealOwner: dealData.dealOwner,
        dealName: dealData.dealName,
        accountName: dealData.accountName,
        type: dealData.type,
        leadSource: dealData.leadSource,
        contactName: dealData.contactName,
        amount: dealData.ammount,
        nextStep: dealData.nextStep,
        stage: dealData.stage,
        expectedRevenue: dealData.expectedRevenue,
        campaignSource: dealData.campaignSource,
        description: dealData.description,
        closingDate: dealData.closingDate,
        user: {
          id: uid,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    if (response) {
      // Show success message in toast
      setShowToast({ success: true, message: "Create Deal Successfully." });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

export const getAllDeal = async (pageNO, tokenId) => {
  try {
    const response = await axios.get(GET_ALL_DEALS_URL + `page=` + pageNO, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    const finalResponse = response?.data?.data;
    if (finalResponse) {
      return finalResponse;
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Get Single Deal
export const getSingleDeal = async (dealId, tokenId) => {
  try {
    console.log("Enter In single deal");
    const response = await axios.get(GET_sINGLE_DEAL_URL + dealId, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    console.log("SINGLE LEAD DAta", response);
    const finalResponse = response?.data?.data;
    if (finalResponse) {
      return finalResponse;
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Delete Deals Delete Api
export const deleteDeals = async (dealId, setShowToast, tokenId) => {
  try {
    console.log("Enter Delete Deals");
    const response = await axios.delete(DELETE_DEALS_URL + [dealId], {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    if (response) {
      // Show success message in toast
      setShowToast({ success: true, message: "Delete Successfully." });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Update Deals Put Api
export const updateDeal = async (dealId, dealData, setShowToast, tokenId) => {
  try {
    const response = await axios.put(
      UPDATE_SINGLE_DEAL_URL + dealId,
      dealData,
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    if (response) {
      // Show success message in toast
      setShowToast({ success: true, message: "Update Successfully." });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Download Deal get Api
export const downloadDeal = async (setShowToast, tokenId) => {
  try {
    const response = await axios.get(DOWNLOAD_DEAL_URL, {
      responseType: "arraybuffer",
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    if (response) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "deals.xlsx");
      document.body.appendChild(link);
      link.click();
      // Set Success Message
      setShowToast({
        success: true,
        message: "Downloaded Deals",
      });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Upload Deal post Api
export const uploadDeals = async (file, setShowToast, tokenId) => {
  try {
    console.log("Enter upload leads");
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(UPLOAD_DEAL_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${tokenId}`,
      },
    });
    console.log("upload success", response);
    if (response) {
      setShowToast({ success: true, message: "Upload Successfully." });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// ********** TASK Api ************* //

// Create Task Api
export const createTask = async (uid, taskData, setShowToast, tokenId) => {
  try {
    const response = await axios.post(
      CREATE_TASK_URL,
      {
        taskOwner: taskData.taskOwner,
        dueDate: taskData.dueDate,
        contact: taskData.contact,
        subject: taskData.taskSubject,
        priority: taskData.priority,
        status: taskData.status,
        reminder: taskData.reminderDateTime,
        accountType: taskData.accountType,
        description: taskData.description,
        user: {
          id: uid,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    if (response) {
      // Show success message in toast
      setShowToast({ success: true, message: "Create Task Successfully." });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Get All Task
export const getAllTask = async (tokenId, pageNo) => {
  try {
    const response = await axios.get(GET_ALL_TASK_URL + `page=` + pageNo, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    const finalResponse = response?.data?.data;
    if (finalResponse) {
      return finalResponse;
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Delete Task
export const deleteTasks = async (taskId, setShowToast, tokenId) => {
  try {
    const response = await axios.delete(DELETE_TASK_URL + [taskId], {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    if (response) {
      // Show success message in toast
      setShowToast({ success: true, message: "Delete Successfully." });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Get Single Task get Api
export const getSingleTask = async (taskId, tokenId) => {
  try {
    const response = await axios.get(GET_SINGLE_TASK_URL + taskId, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    const finalResponse = response?.data?.data;
    if (finalResponse) {
      return finalResponse;
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Upload Task
export const uploadTask = async (file, setShowToast, tokenId) => {
  try {
    console.log("Enter upload leads");
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(UPLOAD_TASK_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${tokenId}`,
      },
    });
    console.log("upload success", response);
    if (response) {
      setShowToast({ success: true, message: "Upload Successfully." });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Download Task get Api
export const downloadTasks = async (setShowToast, tokenId) => {
  try {
    const response = await axios.get(DOWNLOAD_TASK_URL, {
      responseType: "arraybuffer",
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    if (response) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "task.xlsx");
      document.body.appendChild(link);
      link.click();
      // Set Success Message
      setShowToast({
        success: true,
        message: "Downloaded Deals",
      });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Update Task Put Api
export const updateTask = async (taskId, taskData, setShowToast, tokenId) => {
  try {
    console.log("Enter Update Task", taskData);
    const response = await axios.put(UPDATE_TASK_URL + taskId, taskData, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    if (response) {
      // Show success message in toast
      setShowToast({ success: true, message: "Update Successfully." });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// ********* Meetings Api********** //

// Create Meetings
export const createMeeting = async (
  uid,
  meetingData,
  setShowToast,
  tokenId
) => {
  try {
    const response = await axios.post(
      CREATE_MEETING_URL,
      {
        title: meetingData.title,
        location: meetingData.address,
        fromTime: meetingData.fromTime,
        host: meetingData.host,
        participants: meetingData.participants,
        relatedTo: meetingData.relatedTo,
        description: meetingData.description,
        date: meetingData.date,
        user: {
          id: uid,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    if (response) {
      // Show success message in toast
      setShowToast({ success: true, message: "Create Meeting Successfully." });
    }
  } catch (error) {}
};

// Get All Meetings
export const getAllMeetings = async (pageNo, tokenId) => {
  try {
    const response = await axios.get(GET_ALL_MEETINGS_URL + `page=` + pageNo, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    const finalResponse = response?.data?.data;
    if (finalResponse) {
      return finalResponse;
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Delete Meeting
export const deleteMeetings = async (meetId, setShowToast, tokenId) => {
  try {
    const response = await axios.delete(DELETE_MEETINGS_URL + [meetId], {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    if (response) {
      // Show success message in toast
      setShowToast({ success: true, message: "Delete Successfully." });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Get Single Meeting
export const getSingleMeeting = async (meetId, tokenId) => {
  try {
    const response = await axios.get(SINGLE_MEETINGS_URL + meetId, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    const finalResponse = response?.data?.data;
    if (finalResponse) {
      return finalResponse;
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Update Meetings
export const updateMeeting = async (
  meetId,
  meetData,
  setShowToast,
  tokenId
) => {
  try {
    console.log("Enter Update Task", meetData);
    const response = await axios.put(UPDATE_MEETINGS_URL + meetId, meetData, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    if (response) {
      // Show success message in toast
      setShowToast({ success: true, message: "Update Successfully." });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Download Meetings
export const downloadMeetings = async (setShowToast, tokenId) => {
  try {
    const response = await axios.get(DOWNLOAD_MEETING_URL, {
      responseType: "arraybuffer",
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    if (response) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Meetings.xlsx");
      document.body.appendChild(link);
      link.click();
      // Set Success Message
      setShowToast({
        success: true,
        message: "Downloaded Deals",
      });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};

// Upload Meetings
export const uploadMeetings = async (file, setShowToast, tokenId) => {
  try {
    console.log("Enter upload leads", file);
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(UPLOAD_MEETING_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${tokenId}`,
      },
    });
    console.log("upload success", response);
    if (response) {
      setShowToast({ success: true, message: "Upload Successfully." });
    }
  } catch (error) {
    const message = error?.response?.data;
    console.log(message);
  }
};
