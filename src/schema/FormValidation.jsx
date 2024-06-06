import * as Yup from "yup";

// Signup Form Schema
export const signupFormSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password is required"),
});

// Update Profile Form Schema
export const updateProfileFormSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  // email: Yup.string().email("Invalid email").required("Email is required"),
  userName: Yup.string().required("Username is required"),
});

// Login Form Schema
export const loginFormSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

// Forgot Password Form Schema
export const forgotPasswordFormSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

// Reset Password Form Schema
export const resetPasswordFormSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password is required"),
});

// OTP Verification
export const otpVerificationSchema = Yup.object().shape({
  digit1: Yup.string()
    .required("*")
    .matches(/^[0-9]{1}$/, "Digit 1 must be a single digit"),
  digit2: Yup.string()
    .required("*")
    .matches(/^[0-9]{1}$/, "Digit 2 must be a single digit"),
  digit3: Yup.string()
    .required("*")
    .matches(/^[0-9]{1}$/, "Digit 3 must be a single digit"),
  digit4: Yup.string()
    .required("*")
    .matches(/^[0-9]{1}$/, "Digit 4 must be a single digit"),
});

// Create Lead Schema Vallidation
export const registerSchema = Yup.object({
  leadOwner: Yup.string()
    .required("Lead Owner is required")
    .max(50, "Name must be 50 characters or less"),
  firstName: Yup.string()
    .required("First Name is required")
    .max(50, "Firstname must be 50 characters or less"),
  lastName: Yup.string()
    .required("Last Name is required")
    .max(50, "Lastname must be 50 characters or less"),
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/, "Invalid email format.")
    .email("Invalid email")
    .required("Email is required"),
  mobileNumber: Yup.number()
    .required("Mobile Number is required")
    .min(10, "Number must be at least 10 digits")
    .typeError("Mobile must be a number"),
  secondaryMobileNumber: Yup.number()
    .typeError("Phone must be a number")
    .min(10, "Number must be at least 10 digits"),
  leadSource: Yup.string().required("Lead Source is required"),
  leadStatus: Yup.string().required("Lead Status is required"),
  leadService: Yup.string().required("Lead Service is required"),
  annualRevenue: Yup.number()
    .typeError("Revenue must be a number")
    .test(
      "is-decimal",
      "Revenue must have at most 2 decimal places",
      (value) => {
        if (value === null || value === undefined || value === "") {
          return true; // Skip validation if the value is empty
        }
        return /^\d+(\.\d{1,2})?$/.test(value);
      }
    ),
  companyName: Yup.string().max(100, "Name must be 100 characters or less"),
  companyEmail: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/, "Invalid email format.")
    .email("Invalid email"),
  companyContact: Yup.number()
    .typeError("Contact must be a number")
    .min(10, "Number must be at least 10 digits"),
  secondaryContact: Yup.number()
    .typeError("Contact must be a number")
    .min(10, "Number must be at least 10 digits"),
  city: Yup.string().max(50, "City must be 50 characters or less"),
  district: Yup.string().max(50, "District must be 50 characters or less"),
  state: Yup.string().max(50, "State must be 50 characters or less"),
  country: Yup.string().max(50, "State must be 50 characters or less"),
  description: Yup.string().max(1000, "State must be 50 characters or less"),
});

// Update Schema validation
export const updateRegisterSchema = Yup.object({
  leadOwner: Yup.string().required("Lead Owner is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobileNumber: Yup.string().required("Mobile Number is required"),
  secondaryMobileNumber: Yup.string(),
  leadSource: Yup.string().required("Lead Source is required"),
  leadStatus: Yup.string().required("Lead Status is required"),
  annualRevenue: Yup.number().required("Annual Revenue is required"),
  companyName: Yup.string().required("Company Name is required"),
  companyEmail: Yup.string()
    .email("Invalid email")
    .required("Company Email is required"),
  companyContact: Yup.string(),
  secondaryContact: Yup.string(),
  city: Yup.string().required("City is required"),
  district: Yup.string().required("District is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  description: Yup.string(),
});

// Contact Schema Validation
export const ContactFormSchema = Yup.object({
  companyName: Yup.string()
    .required("Company Name is required")
    .max(100, "Name must be 100 characters or less"),
  companyEmail: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/, "Invalid email format.")
    .email("Invalid email")
    .required("Company Email is required"),
  companyContact: Yup.number()
    .typeError("Contact must be a number")
    .required("Company Contact is required"),
  address: Yup.string()
    .required("Company Contact is required")
    .max(100, "Address must be 100 characters or less"),
  description: Yup.string().max(1000, "State must be 50 characters or less"),
});

// Account Schema Validation
export const accountFormSchema = Yup.object({
  accountOwner: Yup.string()
    .required("Account Owner is required")
    .max(50, "Name must be 50 characters or less"),
  accountName: Yup.string()
    .required("Account Name is required")
    .max(50, "Name must be 50 characters or less"),
  accountSite: Yup.string()
    .required("Account Site is required")
    .max(50, "site be 50 longer"),
  parentAccount: Yup.string().required("Parent Account is required"),
  accountNumber: Yup.number()
    .typeError("Account must be a number")
    .required("Account Number is required"),
  aadharNumber: Yup.number()
    .typeError("Aadhar must be a number")
    .required("Aadhar Number is required")
    .min(12, "Enter valid aadhar number"),
  panCardNumber: Yup.string()
    .required("PAN Card Number is required")
    .min(10, "Enter valid pan number"),
  accountType: Yup.string().required("Account Type is required"),
  industry: Yup.string().required("Industry is required"),
  annualRevenue: Yup.number()
    .typeError("Revenue must be a number")
    .required("Annual Revenue is required")
    .test(
      "is-decimal",
      "Revenue must have at most 2 decimal places",
      (value) => {
        if (value === null || value === undefined || value === "") {
          return true; // Skip validation if the value is empty
        }
        return /^\d+(\.\d{1,2})?$/.test(value);
      }
    ),
  address: Yup.string().required("Address is required"),
  billingAddress: Yup.string().required("Billing Address is required"),
  billingCity: Yup.string().required("Billing City is required"),
  billingState: Yup.string().required("Billing State is required"),
  billingCode: Yup.string().required("Billing Code is required"),
  shippingStreet: Yup.string().required("Shipping Street is required"),
  shippingCity: Yup.string().required("Shipping City is required"),
  shippingState: Yup.string().required("Shipping State is required"),
  shippingCode: Yup.string().required("Shipping Code is required"),
  shippingAddress: Yup.string().required("Shipping Address is required"),
  dateOfIssue: Yup.date().required("Date of Issue is required"),
  dateOfBilling: Yup.date().required("Date of dateOfBilling is required"),
  dateOfShipment: Yup.date().required("Date of dateOfShipment is required"),
  description: Yup.string(),
});

// Task Schema Validation
export const TaskFormSchema = Yup.object({
  taskOwner: Yup.string()
    .required("Task Owner is required")
    .max(50, "Owner must be 50 characters or less"),
  taskSubject: Yup.string()
    .required("Task Subject is required")
    .max(50, "Subject must be 50 characters or less"),
  description: Yup.string().required("Task Description is required"),
  priority: Yup.string().required("Task Priority is required"),
  status: Yup.string().required("Status is required"),
  dueDate: Yup.date()
    .required("Due Date is required")
    .min(10, "Number must be at least 10 digits"),
  contact: Yup.number().required("Contact is required and must be a number"),
  accountType: Yup.string().required("Account Type is required"),
});

// Meeting Form Schema Validation
export const MeetingFormSchema = Yup.object({
  host: Yup.string()
    .required("Host is required")
    .max(50, "Host must be 50 characters or less"),
  title: Yup.string()
    .required("Title is required")
    .max(50, "Owner must be 50 characters or less"),
  address: Yup.string()
    .required("Address is required")
    .max(150, "Owner must be 50 characters or less"),
  date: Yup.date().required("Date is required"),
  // participants: Yup.array().min(1, "At least one participant is required"),
});

// Schedule Call Schema Validation
export const ScheduleCallSchema = Yup.object({
  callTo: Yup.string()
    .required("Call To is required")
    .max(50, "Callto must be 50 characters or less"),
  relatedTo: Yup.string().required("Related To is required"),
  callType: Yup.string().required("Call Type is required"),
  callStatus: Yup.string().required("Outgoing Call Status is required"),
  callOwner: Yup.string()
    .required("Call Owner is required")
    .max(50, "Call Owner must be 50 characters or less"),
  subject: Yup.string()
    .required("Subject is required")
    .max(50, "Subject must be 50 characters or less"),
  reminder: Yup.string().required("Reminder is required"),
  callPurpose: Yup.string().required("Call Purpose is required"),
  callAgenda: Yup.string().required("Call Agenda is required"),
  callStartTime: Yup.date().required("Call Start Time is required"),
});

// Log Call Schema Validation
export const LogCallSchema = Yup.object({
  callTo: Yup.string()
    .required("Call To is required")
    .max(50, "Callto must be 50 characters or less"),
  relatedTo: Yup.string().required("Related To is required"),
  callType: Yup.string().required("Call Type is required"),
  callStatus: Yup.string().required("Outgoing Call Status is required"),
  callDuration: Yup.string()
    .required("Call Owner is required")
    .max(50, "Duration time 50 characters or less"),
  subject: Yup.string()
    .required("Subject is required")
    .max(50, "Subject must be 50 characters or less"),
  callResult: Yup.string().required("Reminder is required"),
  callPurpose: Yup.string().required("Call Purpose is required"),
  callAgenda: Yup.string().required("Call Agenda is required"),
  callStartTime: Yup.date().required("Call Start Time is required"),
});

// DealFormSchema
export const DealFormSchema = Yup.object({
  dealOwner: Yup.string()
    .required("Deal Owner is required")
    .max(50, "Name must be 50 characters or less"),
  dealName: Yup.string()
    .required("Deal Name is required")
    .max(50, "Deal name must be 50 characters or less"),
  amount: Yup.string().required("Amount is required"),
  closingDate: Yup.date().required("Closing date is required"),
  accountName: Yup.string()
    .required("Account Name is required")
    .max(50, "Account name must be 50 characters or less"),
  stage: Yup.string().required("Stage is required"),
  type: Yup.string().required("Type is required"),
  nextStep: Yup.string()
    .required("Next Step is required")
    .max(50, "Step character must be 50 characters or less"),
  expectedRevenue: Yup.string()
    .required("Expected Revenue is required")
    .test(
      "is-decimal",
      "Revenue must have at most 2 decimal places",
      (value) => {
        if (value === null || value === undefined || value === "") {
          return true; // Skip validation if the value is empty
        }
        return /^\d+(\.\d{1,2})?$/.test(value);
      }
    ),
  leadSource: Yup.string().required("Lead Source is required"),
  campaignSource: Yup.string().required("Campaign Source is required"),
  contactName: Yup.string()
    .required("Contact Name is required")
    .max(50, "Contact name must be 50 characters or less"),
});
