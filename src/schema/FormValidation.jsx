import * as Yup from "yup";

// Register Schema Vallidation
export const registerSchema = Yup.object({
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
  companyName: Yup.string().required("Company Name is required"),
  companyEmail: Yup.string()
    .email("Invalid email")
    .required("Company Email is required"),
  companyContact: Yup.string().required("Company Contact is required"),
  address: Yup.string().required("Company Contact is required"),
  description: Yup.string(),
});

// Acoount Schema Validation
export const accountFormSchema = Yup.object({
  accountOwner: Yup.string().required("Account Owner is required"),
  accountName: Yup.string().required("Account Name is required"),
  accountSite: Yup.string().required("Account Site is required"),
  parentAccount: Yup.string().required("Parent Account is required"),
  accountNumber: Yup.string().required("Account Number is required"),
  aadharNumber: Yup.string().required("Aadhar Number is required"),
  panCardNumber: Yup.string().required("PAN Card Number is required"),
  accountType: Yup.string().required("Account Type is required"),
  industry: Yup.string().required("Industry is required"),
  annualRevenue: Yup.string().required("Annual Revenue is required"),
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
  dateOfIssue: "",
  dateOfBilling: "",
  dateOfShipment: "",
  description: Yup.string(),
});

// Task Schema Validation
export const TaskFormSchema = Yup.object({
  taskOwner: Yup.string().required("Task Owner is required"),
  taskSubject: Yup.string().required("Task Subject is required"),
  description: Yup.string().required("Task Description is required"),
  priority: Yup.string().required("Task Priority is required"),
  status: Yup.string().required("Status is required"),
  dueDate: Yup.string().required("Due Date is required"),
  contact: Yup.number().required("Contact is required and must be a number"),
  accountType: Yup.string().required("Account Type is required"),
});

// Meeting Form Schema Validation
export const MeetingFormSchema = Yup.object({
  host: Yup.string().required("Host is required"),
  title: Yup.string().required("Title is required"),
  address: Yup.string().required("Address is required"),
  date: Yup.date().required("Date is required"),
  // participants: Yup.array().min(1, "At least one participant is required"),
});
