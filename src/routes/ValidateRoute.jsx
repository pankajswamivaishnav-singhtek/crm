import { Navigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
const ValidateRoute = ({ children }) => {
  // const { isAuthenticated, isLoading } = useAuth0();
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const token = userIdTokenData?.data?.token; // Using optional chaining
  // if (isLoading) {
  //   // Show a loading indicator while the authentication state is being checked
  //   return <div>Loading...</div>;
  // }

  if (!token) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
  // if (!isAuthenticated && !token) {
  //   return <Navigate to="/login" />;
  // } else {
  //   return children;
  // }
};

export default ValidateRoute;
