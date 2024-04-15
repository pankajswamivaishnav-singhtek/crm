import React from "react";
// Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// React Router Dom
import { BrowserRouter } from "react-router-dom";
// Routes 
import AllRoutes from "./routes/AllRoutes";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
    </>
  );
};

export default App;
