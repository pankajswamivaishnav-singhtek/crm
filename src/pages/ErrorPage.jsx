import React from "react";
import "../styles/ErrorPage.css";
import { Link, useNavigate } from "react-router-dom";
import errorImg from "../images/error_img.webp";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error_404_page">
      <div className="error_div">
        <img src={errorImg} alt="Error Img" className="img-fluid " loading="lazy"/>
        <p className="error_page_heading">Page Not Found</p>
        <p className="error_page_text">
          <span>Oops !</span> May be search wrong url
        </p>
        <button className="error_page_btn">
          <Link
            // to="/dashboard"
            className="error_page_btn_link"
            onClick={() => navigate(-2)}
          >
            Back Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
