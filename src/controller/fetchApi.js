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
  CREATE_LEAD_URL,
  GET_ALL_LEAD_URL,
} from "../constants/Constant";
import axios from "axios";

// Signup User Post Api
export const signupUser = async (userData, setShowToast) => {
  try {
    const response = await axios.post(SIGNUP_USER, {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      mobile: userData.phone,
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

// Meeting This Month
export const monthlyMeetings = async (uid) => {
  try {
    const response = await axios.get(MONHTLY_MEETINGS_URL + uid);
    const finalResponse = response.data.data;
    return finalResponse;
  } catch (error) {
    const { message } = error.response.data;

    return message;
  }
};

// Task This Month
export const monthlyTask = async (uid) => {
  try {
    const response = await axios.get(MONTHLY_TASK_URL + uid);
    const finalResponse = response.data.data;
    return finalResponse;
  } catch (error) {
    const { message } = error.response.data;
    return message;
  }
};

// Closing Deals This Month
export const monthlyClosingDeals = async (uid) => {
  try {
    const response = await axios.get(MONTHLY_CLOSING_DEALS_URL + uid);
    const finalResponse = response.data.data;
    return finalResponse;
  } catch (error) {
    const { message } = error.response.data;
    return message;
  }
};

// Pipeline Deals Api
export const pipelineDeals = async (uid) => {
  try {
    const response = await axios.get(PIPELINE_DEALS_URL + uid);
    const finalResponse = response.data.data;
    return finalResponse;
  } catch (error) {
    const { message } = error.response.data;

    return message;
  }
};

// Create Lead Api
export const createLead = async (userData, uid, setShowToast) => {
  try {
    const response = await axios.post(CREATE_LEAD_URL + uid, {
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
    });
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

// Get All Lead Api
export const getAllLead = async (uid, pageNo) => {
  try {
    const response = await axios.get(
      GET_ALL_LEAD_URL + uid + "&page=" + pageNo
    );
    const finalResponse = response.data.data;
    return finalResponse;
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
    return message;
  }
};
