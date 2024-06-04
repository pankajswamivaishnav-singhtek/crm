import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { Auth0Provider } from "@auth0/auth0-react";
import { GoogleOAuthProvider } from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Auth0Provider
  //   domain="pankajswamivaishnav.eu.auth0.com"
  //   clientId="vluiTJM401ycG1p5AuIAT9rHzYls59li"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin,
  //   }}
  // >

  <GoogleOAuthProvider clientId="1045099715447-j0l057rqesp9v9629bu0vd2nagakmop5.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>

  // </Auth0Provider>
);
