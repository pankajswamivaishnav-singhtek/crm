// export const BASE_URL = "http://192.168.1.87:8080";
export const BASE_URL = "http://192.168.91.241:8080";
// export const BASE_URL = "http://66.85.140.154:2234";

// Signup User endpoints
// export const SIGNUP_USER = `${BASE_URL}/user/createuser`;
export const SIGNUP_USER = `${BASE_URL}/signup/createuser`;
// export const OTP_VERIFICATION_URL = `${BASE_URL}/user/verifyOtp`;
export const OTP_VERIFICATION_URL = `${BASE_URL}/signup/verifyOtp`;
export const RESEND_OTP_URL = `${BASE_URL}/user/resendOtp?email=`;
export const LOGIN_USER = `${BASE_URL}/user/signin`;
export const LOGIN_WITH_GOOGLE = `${BASE_URL}/googleLogin/loginWithGoogle`;
export const LOGOUT_USER = `${BASE_URL}/user/logout`;
export const FORGOT_PASSWORD = `${BASE_URL}/auth/forgotPassword`;
export const RESET_PASSWORD_VALIDATE = `${BASE_URL}/auth/validate-reset-link?uid=`;
export const RESET_PASSWORD = `${BASE_URL}/auth/resetPassword?uid=`;
export const UPDATE_PROFILE_URL = `${BASE_URL}/user/updateProfile`;
export const UPLOAD_USER_IMG_URL = `${BASE_URL}/user/uploadUserImage`;
export const GET_IMG_URL = `${BASE_URL}/profile/getUserImage`;
// Super Admin Configuration Url
export const GET_ALL_ROLES = `${BASE_URL}/roleAndPermission/getAllRole`;
export const GET_ALL_MODULE = `${BASE_URL}/roleAndPermission/getAllModule`;
export const GET_MODULE_PERMISSIONS = `${BASE_URL}/roleAndPermission/getAllPermission`;
export const SEND_ROLE_MODULE_PERMISSIONS = `${BASE_URL}/roleAndPermission/assignRoleModulePermission?userId=`;
export const CREATE_USERS_URL = `${BASE_URL}/super/getAllUser`;
export const GET_TOTAL_LEADS_URL = `${BASE_URL}/super/getAllLeads`;
export const GET_TOTAL_ROLES_URL = `${BASE_URL}/super/getTotalRoles`;
export const SINGLE_USER_PERMISSION_URL = `${BASE_URL}/roleAndPermission/getAllRoleModuleAndPermission?userId=`;
export const UPDATE_USER_PERMISSION_URL = `${BASE_URL}/roleAndPermission/updateRoleModulePermission?userId=`;
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
export const UNVERIFIED_LEADS_URL = `${BASE_URL}/leadInfo/rejectLead?leads=`;
export const DOWNLOAD_LEADS_URL = `${BASE_URL}/leadInfo/downloadLeads`;
export const UPLOAD_LEADS_URL = `${BASE_URL}/leadInfo/uploadLead`;
export const ASSIGN_LEADS_URL = `${BASE_URL}/assignLead/assignLeadToUser?`;
// Contact Congiguration url
export const CREATE_CONTACT_URL = `${BASE_URL}/contact/saveContact`;
export const GET_ALL_CONTACT_URL = `${BASE_URL}/contact/getAllContact?page=`;
export const DELETE_CONTACT_URL = `${BASE_URL}/contact/deleteMultipleByContactId?contactId=`;
export const GET_CONTACTS_URL = `${BASE_URL}/contact/getContacts`;
export const GET_SINGLE_CONTACT_URL = `${BASE_URL}/contact/getContactByContactId?contactId=`;
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
// Dropdowns Configurations Url
export const LEAD_STATUS_URL = `${BASE_URL}/drop/getAllLeadStatus`;
export const LEAD_SERVICES_URL = `${BASE_URL}/drop/getAllLeadService`;
export const LEAD_SOURCE_URL = `${BASE_URL}/drop/getAllLeadSource`;
export const DEAL_STAGES_URL = `${BASE_URL}/drop/getAllStages`;
export const TASK_STATUS_URL = `${BASE_URL}/drop/getAllStatus`;
export const CALL_RELATED_URL = `${BASE_URL}/drop/getCallRelatedTo`;
export const CALL_PURPOSE_URL = `${BASE_URL}/drop/getCallPurpose`;
export const CALL_RESULT_URL = `${BASE_URL}/drop/getCallResult`;
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
export const GET_DEALS_DONE_URL = `${BASE_URL}/report/getDealsReport?dealsBy=`;
export const GET_DONE_CALLS_URL = `${BASE_URL}/report/getCallReport?callsBy=`;
