import { Navigate } from "react-router-dom";

const ValidateRoute = ({ children }) => {
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const token = userIdTokenData?.data?.token; // Using optional chaining
  console.log("validateRoute Token", token);
  if (!token) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default ValidateRoute;
