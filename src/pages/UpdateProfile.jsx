import React, { useState, useEffect } from "react";
import "../styles/updateProfile.css";
// Formik
import { useFormik } from "formik";
import { updateProfileFormSchema } from "../schema/FormValidation";
import { updateProfile, uploadUserImg } from "../controller/fetchApi";
import Toast from "../components/Toast";
const UpdateProfile = ({ getCurrentUserData }) => {
  // Form Handle & Validations
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },

    validationSchema: updateProfileFormSchema,
    onSubmit: async (values) => {
      try {
        await updateProfile(tokenId, setShowToast, values);
      } catch (error) {
        console.log("Did Not Update Profile", error);
      }
    },
  });

  // Function to handle input focus
  const handleFocus = (e) => {
    const { name } = e.target;
    formik.setFieldTouched(name, true);
  };

  // Toast Handling
  const [showToast, setShowToast] = useState(false);
  const hideToast = () => {
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  if (showToast) {
    hideToast();
  }

  // Get Current User Details
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const tokenId = userIdTokenData?.data?.token;
  // Handle Upload Image start ----
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUploadImg = async () => {
    if (selectedFile) {
      console.log("file selected: " + selectedFile);
      try {
        await uploadUserImg(selectedFile, setShowToast, tokenId);
        if (uploadUserImg) {
          // getUser();
        }
      } catch (error) {
        console.log("Image Failed Uploading:", error);
      }
    }
  };

  useEffect(() => {
    // Update Profile
    if (getCurrentUserData) {
      formik.setValues({
        ...formik.values,
        firstName: getCurrentUserData.firstName,
        lastName: getCurrentUserData.lastName,
        userName: getCurrentUserData.userName,
        email: getCurrentUserData.email,
        phone: getCurrentUserData.mobile,
      });
    }
  }, [getCurrentUserData]);
  return (
    <div className="container-xl px-4 mt-4">
      <nav className="nav nav-borders">
        <a className="nav-link active ms-0" href="#!">
          Profile
        </a>
      </nav>
      <hr className="mt-0 mb-4" />

      <div className="row">
        <div className="col-xl-4">
          {/* Profile picture card*/}
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              {/* Profile picture image*/}
              <img
                className="img-account-profile rounded-circle mb-2"
                // src="http://bootdey.com/img/Content/avatar/avatar1.png"
                src={
                  getCurrentUserData?.image
                    ? `http://192.168.1.5:8080${getCurrentUserData?.image}`
                    : "http://bootdey.com/img/Content/avatar/avatar1.png"
                }
                alt="random img"
                loading="lazy"
              />
              <div className="mb-3">
                {/* File input */}
                <input
                  type="file"
                  className="form-control"
                  id="profilePicture"
                  accept=".jpg, .png"
                  onChange={handleFileChange}
                />
              </div>
              {/* Profile picture upload button*/}
              <button
                className="btn btn-primary"
                type="submit"
                onClick={handleUploadImg}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          {/* Account details card*/}
          <div className="card mb-4">
            <div className="card-header">Account Details</div>
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                {/* Form Group (username)*/}
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputUsername">
                    Username (how your name will appear to other users on the
                    site)
                  </label>
                  <input
                    className="form-control"
                    id="inputUsername"
                    type="text"
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="userName"
                    placeholder="Enter Username"
                    onFocus={handleFocus}
                  />
                  {formik.touched.userName && formik.errors.userName && (
                    <small className="text-danger">
                      {formik.errors.userName}
                    </small>
                  )}
                </div>
                {/* Form Row*/}
                <div className="row gx-3 mb-3">
                  {/* Form Group (first name)*/}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputFirstName">
                      First name
                    </label>
                    <input
                      className="form-control"
                      id="inputFirstName"
                      type="text"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="firstName"
                      placeholder="Enter Firstname"
                      onFocus={handleFocus}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <small className="text-danger">
                        {formik.errors.firstName}
                      </small>
                    )}
                  </div>
                  {/* Form Group (last name)*/}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLastName">
                      Last name
                    </label>
                    <input
                      className="form-control"
                      id="inputLastName"
                      type="text"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="lastName"
                      placeholder="Enter Lastname"
                      onFocus={handleFocus}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <small className="text-danger">
                        {formik.errors.lastName}
                      </small>
                    )}
                  </div>
                </div>
                {/* Form Row        */}
                <div className="row gx-3 mb-3">
                  {/* Form Group (organization name)*/}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputOrgName">
                      Email
                    </label>
                    <input
                      className="form-control"
                      id="inputOrgName"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="email"
                      placeholder="Enter Email"
                      onFocus={handleFocus}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <small className="text-danger">
                        {formik.errors.email}
                      </small>
                    )}
                  </div>
                  {/* Form Group (location)*/}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLocation">
                      Phone
                    </label>
                    <input
                      className="form-control"
                      id="inputLocation"
                      type="tel"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="phone"
                      placeholder="Enter Number"
                      onFocus={handleFocus}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <small className="text-danger">
                        {formik.errors.phone}
                      </small>
                    )}
                  </div>
                </div>

                {/* Form Row*/}
                <div className="row gx-3 mb-3">
                  {/* Form Group (Password)*/}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputPassword">
                      Password
                    </label>
                    <input
                      className="form-control"
                      id="inputPassword"
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="password"
                      autoComplete=""
                      placeholder={
                        formik.touched.password && formik.errors.password
                          ? formik.errors.password
                          : null
                      }
                    />
                  </div>
                  {/* Form Group (Confirm Password)*/}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputPhone">
                      Confirm Password
                    </label>
                    <input
                      className="form-control"
                      id="inputPhone"
                      type="password"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="confirmPassword"
                      autoComplete=""
                      placeholder={
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                          ? formik.errors.confirmPassword
                          : null
                      }
                    />
                  </div>
                </div>

                {/* Save changes button*/}
                <button className="btn btn-primary" type="submit">
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Toast */}
      <Toast showToast={showToast} setShowToast={setShowToast} />
    </div>
  );
};

export default UpdateProfile;
