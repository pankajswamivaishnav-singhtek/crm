export const BASE_URL = "http://192.168.0.143:8080";

// Signup User endpoints
export const SIGNUP_USER = `${BASE_URL}/user/createuser`;
export const LOGIN_USER = `${BASE_URL}/user/signin`;
export const LOGOUT_USER = `${BASE_URL}/user/logout`;
export const FORGOT_PASSWORD = `${BASE_URL}/auth/forgotPassword`;
export const RESET_PASSWORD_VALIDATE = `${BASE_URL}/auth/validate-reset-link?uid=`;
export const RESET_PASSWORD = `${BASE_URL}/auth/resetPassword?uid=`;
// Dashboard configuration Api
export const MONHTLY_MEETINGS_URL = `${BASE_URL}/meet/byMonth?userId=`;
export const MONTHLY_TASK_URL = `${BASE_URL}/tasks/byMonth?userId=`;
export const MONTHLY_CLOSING_DEALS_URL = `${BASE_URL}/deals/dealClosingThisMonth?userId=`;
export const PIPELINE_DEALS_URL = `${BASE_URL}/deals/countOfDealByStage?userId=`;
export const CREATE_LEAD_URL = `${BASE_URL}/leadInfo/saveLeadInfo?userId=`;
export const GET_ALL_LEAD_URL = `${BASE_URL}/leadInfo/getAllLeads?userId=`;
