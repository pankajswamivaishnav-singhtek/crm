export const BASE_URL = "http://192.168.1.5:8080";

// Signup User endpoints
export const SIGNUP_USER = `${BASE_URL}/user/createuser`;
export const LOGIN_USER = `${BASE_URL}/user/signin`;
export const LOGOUT_USER = `${BASE_URL}/user/logout`;
export const FORGOT_PASSWORD = `${BASE_URL}/auth/forgotPassword`;
export const RESET_PASSWORD_VALIDATE = `${BASE_URL}/auth/validate-reset-link?uid=`;
export const RESET_PASSWORD = `${BASE_URL}/auth/resetPassword?uid=`;
export const UPDATE_PROFILE_URL = `${BASE_URL}/user/updateProfile`;
export const UPLOAD_USER_IMG_URL = `${BASE_URL}/user/uploadUserImage`;
export const GET_IMG_URL = `${BASE_URL}/profile/getUserImage`;
// Dashboard configuration Api
export const MONHTLY_MEETINGS_URL = `${BASE_URL}/meet/byMonth?userId=`;
export const MONTHLY_TASK_URL = `${BASE_URL}/tasks/byMonth?userId=`;
export const MONTHLY_CLOSING_DEALS_URL = `${BASE_URL}/deals/dealClosingThisMonth?userId=`;
export const PIPELINE_DEALS_URL = `${BASE_URL}/deals/countOfDealByStage?userId=`;
export const GET_CURRENT_USER_URL = `${BASE_URL}/dashboard/getCurrentUser`;
// Leads Configuration Url
export const CREATE_LEAD_URL = `${BASE_URL}/leadInfo/saveLeadInfo`;
export const GET_ALL_LEAD_URL = `${BASE_URL}/leadInfo/getAllLeads?userId=`;
export const GET_SINGLE_LEAD_URL = `${BASE_URL}/leadInfo/getLeadById?leadId=`;
export const DELETE_LEADS_URL = `${BASE_URL}/leadInfo/deleteMultipleByLeadId?leadId=`;
export const SINGLE_LEAD_UPDATE_URL = `${BASE_URL}/leadInfo/updateLeadById?leadId=`;
export const GET_ALL_LEAD_URL_BY_FILTER = `${BASE_URL}/leadInfo/leads/filter?`;
export const VERIFY_LEADS_URL = `${BASE_URL}/leadInfo/verifyLead?leads=`;
export const DOWNLOAD_LEADS_URL = `${BASE_URL}/leadInfo/downloadLeads`;
export const UPLOAD_LEADS_URL = `${BASE_URL}/leadInfo/uploadLead`;
// Contact Congiguration url
export const CREATE_CONTACT_URL = `${BASE_URL}/contact/saveContact`;
export const GET_ALL_CONTACT_URL = `${BASE_URL}/contact/getAllContact?page=`;
export const DELETE_CONTACT_URL = `${BASE_URL}/contact/deleteMultipleByContactId?contactId=`;
export const GET_CONTACTS_URL = `${BASE_URL}/contact/getContacts`;
export const DOWNLOAD_CONTACT_URL = `${BASE_URL}/contact/downloadContacts?userId=`;
// Account Configuration Url
export const CREATE_ACCOUNTS_URL = `${BASE_URL}/account/createAccount`;
export const GET_ALL_ACCOUNT_URL = `${BASE_URL}/account/getAllAccounts?page=`;
export const DOWNLOAD_ACCOUNT_URL = `${BASE_URL}/account/downloadAccount?userId=`;
export const GET_SINGLE_ACCOUNT_URL = `${BASE_URL}/account/getAccountById?accountId=`;
export const DELETE_ACCOUNT_URL = `${BASE_URL}/account/deleteMultipleByAccountId?accountId=`;
export const UPDATE_SINGLE_ACCOUNT_URL = `${BASE_URL}/account/updateAccountByAccountId?accountId=`;
// Deal Configuration Url
export const CREATE_DEAL_URL = `${BASE_URL}/deals/addDeal`;
export const GET_ALL_DEALS_URL = `${BASE_URL}/deals/getAllDeal?`;
export const GET_sINGLE_DEAL_URL = `${BASE_URL}/deals/getDealById?dealId=`;
export const DELETE_DEALS_URL = `${BASE_URL}/deals/deleteMultipleByDealId?dealsId=`;
export const UPDATE_SINGLE_DEAL_URL = `${BASE_URL}/deals/updateDealById?dealId=`;
export const DOWNLOAD_DEAL_URL = `${BASE_URL}/deals/downloadDeals`;
export const UPLOAD_DEAL_URL = `${BASE_URL}/deals/uploadDeal`;
// Task Configuration Url
export const CREATE_TASK_URL = `${BASE_URL}/tasks/addTask`;
export const GET_ALL_TASK_URL = `${BASE_URL}/tasks/getAllTasks?`;
export const DELETE_TASK_URL = `${BASE_URL}/tasks/deleteMultipleByTaskId?taskId=`;
export const GET_SINGLE_TASK_URL = `${BASE_URL}/tasks/getTasksById?taskId=`;
export const DOWNLOAD_TASK_URL = `${BASE_URL}/tasks/downloadTasks`;
export const UPDATE_TASK_URL = `${BASE_URL}/tasks/updateTaskById?taskId=`;
export const UPLOAD_TASK_URL = `${BASE_URL}/tasks/uploadTasks`;
// Meeting Configuration Url
export const CREATE_MEETING_URL = `${BASE_URL}/meet/scheduleMeet`;
export const GET_ALL_MEETINGS_URL = `${BASE_URL}/meet/getAllMeetings?`;
export const DELETE_MEETINGS_URL = `${BASE_URL}/meet/deleteMultipleMeetings?meetingsId=`;
export const UPDATE_MEETINGS_URL = `${BASE_URL}/meet/updateMeeting?meetingId=`;
export const SINGLE_MEETINGS_URL = `${BASE_URL}/meet/getMeetingById?meetingId=`;
export const DOWNLOAD_MEETING_URL = `${BASE_URL}/meet/downloadMeetings`;
export const UPLOAD_MEETING_URL = `${BASE_URL}/meet/uploadMeeting`;
// Call Configuration Url
export const CREATE_SCHEDULE_CALL_URL = `${BASE_URL}/call/addCall`;
export const CREATE_LOG_CALL_URL = `${BASE_URL}/callLog/createCallLog`;
export const GET_ALL_SCHEDULE_CALL_URL = `${BASE_URL}/call/getAllScheduleCall?`;
export const GET_ALL_LOG_CALL_URL = `${BASE_URL}/callLog/getAllCallLog?`;
export const GET_SINGLE_SCHEDULE_CALL_URL = `${BASE_URL}/call/getCallById?callId=`;
export const GET_SINGLE_LOG_CALL_URL = `${BASE_URL}/callLog/getCallLogById?callLogId=`;
export const DELETE_SCHEDULE_URL = `${BASE_URL}/call/deleteMultipleCall?callsId=`;
export const LOG_CALL_DELETE_URL = `${BASE_URL}/callLog/deleteMultipleCallLog?callLogsId=`;
export const UPLOAD_SCHEDULE_CALL_URL = `${BASE_URL}/call/uploadCalls`;
export const UPLOAD_LOG_CALL_URL = `${BASE_URL}/callLog/uploadCallLogs`;
export const DOWNLOAD_SCHEDULE_CALL_URL = `${BASE_URL}/call/downloadCallsInfo`;
export const DOWNLOAD_LOG_CALL_URL = `${BASE_URL}/callLog/downloadCallLog`;
export const UPDATE_SCHEDULE_CALL_URL = `${BASE_URL}/call/updateCall?callId=`;
export const UPDATE_LOG_CALL_URL = `${BASE_URL}/callLog/updateCallLog?callLogId=`;
// Report Configuration Url
export const GET_GENRATED_LEADS_URL = `${BASE_URL}/report/getLeadReport?leadBy=`;
