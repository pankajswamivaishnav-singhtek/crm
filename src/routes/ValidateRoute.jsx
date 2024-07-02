// import { Navigate } from "react-router-dom";
// const ValidateRoute = ({ children }) => {
//   const userIdTokenData = JSON.parse(localStorage.getItem("user"));
//   const token = userIdTokenData?.data?.token; // Using optional chaining
//   if (!token) {
//     return <Navigate to="/login" />;
//   } else {
//     return children;
//   }
// };
// export default ValidateRoute;

import { Navigate } from "react-router-dom";
const ValidateRoute = ({ children, requiredRoles, requiredModule }) => {
  //   const tokenId = userIdTokenData?.data?.token;
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const user = userIdTokenData?.data;
  const token = user?.token;
  const moduels = userIdTokenData?.data?.roleAndPermissions?.modules;
  const roles = userIdTokenData?.data?.roleAndPermissions?.roles[0];
  if (!token) {
    return <Navigate to="/login" />;
  }

  if (requiredRoles && requiredRoles !== roles?.role) {
    return <Navigate to="/error-page" />;
  }

  if (requiredModule && !moduels.includes(requiredModule)) {
    return <Navigate to="/error-page" />;
  }

  return children;
};

export default ValidateRoute;
