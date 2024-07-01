import { Navigate } from "react-router-dom";
const ValidateRoute = ({ children }) => {
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const token = userIdTokenData?.data?.token; // Using optional chaining
  if (!token) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};
export default ValidateRoute;

// import { Navigate } from "react-router-dom";
// const ValidateRoute = ({ children, requiredRoles, requiredPermissions }) => {
//   const userIdTokenData = JSON.parse(localStorage.getItem("user"));
//   const user = userIdTokenData?.data;
//   const token = user?.token;

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (requiredRoles && !requiredRoles.includes(user.role)) {
//     return <Navigate to="/login" />;
//   }

//   if (
//     requiredPermissions &&
//     !requiredPermissions.every((permission) =>
//       user.permissions.includes(permission)
//     )
//   ) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default ValidateRoute;
