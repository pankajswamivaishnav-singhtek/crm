import React from "react";
// CSS
import "../styles/aboutUs.css";
// Import Component
import LandingPageNavbar from "../components/LandingPageNavbar";
import Footer from "../components/Footer";
// Images
import aboutUsImg2 from "../images/about-us2.webp";
import firsClient from "../images/justpay.webp";
import secondClient from "../images/singhsoft.webp";
import thirdClient from "../images/singhtek.webp";
import fourthClient from "../images/infovoice.webp";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* First Part */}
      <div className="about-us-first-part container-fluid">
        <LandingPageNavbar className="about-us-navbar" />
        <h2 className="about-us-about-text text-center">About Us</h2>
      </div>
      {/* Second Part */}
      <div className="about-us-second-part ">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6 about-us-second-par-left-part">
              <h3>Free up time, become more agile grow your business.</h3>
              <p>
                <span className="fw-bold text-primary">C</span>
                <sub>RM</sub> stands for customer relationship management. As
                its name suggests, CRM software is a system for managing
                customer relationships. For many businesses, their most valuable
                and important asset is their customers. In the past, companies
                kept their contact information scattered across business cards,
                email records, and spreadsheets. But as businesses expand and
                change, having a central database for customer information
                becomes essential. Your prospects and customers will feel the
                pain when your team isn’t on the same page. From their
                perspective, they have a relationship with one company, not a
                collection of different people and departments. Everyone on your
                team needs context about every customer’s needs, wants, and
                current state so they can pick up the conversation where it left
                off.Having one central place to organize all lead and customer
                details makes it easy for your entire team to gain insight into
                your business and customer relationships.
              </p>
            </div>
            <div className="col-xl-6 col-md-6 about-us-second-part-right-div">
              <img
                src={aboutUsImg2}
                alt="about-us-right-img "
                className="img-fluid about-us-part2-right-img"
                loading="lazy"
              />
              <div className="about-us-second-part-right-div-cricle1"></div>
              <div className="about-us-second-part-right-div-cricle2"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Third Part */}
      <div className="about-us-thrid-part ">
        <h2>Some of our great clients</h2>
        <div className="container about-us-thrid-part-img-div">
          <div className="about-us-thrid-part-img">
            <img
              src={fourthClient}
              alt="firstClient"
              className="img-fluid"
              loading="lazy"
            />
          </div>
          <div className="about-us-thrid-part-img">
            <img
              src={thirdClient}
              alt="secondClient"
              className="img-fluid"
              loading="lazy"
            />
          </div>
          <div className="about-us-thrid-part-img">
            <img
              src={secondClient}
              alt="thirdClient"
              className="img-fluid"
              loading="lazy"
            />
          </div>
          <div className="about-us-thrid-part-img">
            <img
              src={firsClient}
              alt="fourthClient"
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* Fourth Part */}
      <div className="container about-us-fourth-part">
        <div className="row row-cols-2 row-cols-xl-5 row-cols-lg-3">
          {/* First Card */}
          <div className="col">
            <div className="card about-us-fourth-part-card">
              <img
                src="https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M="
                className="card-img-top"
                alt="random img"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Alex Maxwel</h5>
                <p className="card-text text-center">Founder</p>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="col">
            <div className="card about-us-fourth-part-card">
              <img
                src="https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M="
                className="card-img-top"
                alt="random img"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Alex Maxwel</h5>
                <p className="card-text text-center">Founder</p>
              </div>
            </div>
          </div>
          {/* Third Card Card */}
          <div className="col">
            <div className="card about-us-fourth-part-card">
              <img
                src="https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M="
                className="card-img-top"
                alt="random img"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Alex Maxwel</h5>
                <p className="card-text text-center">Founder</p>
              </div>
            </div>
          </div>
          {/* Fourth Card  */}
          <div className="col">
            <div className="card about-us-fourth-part-card">
              <img
                src="https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M="
                className="card-img-top"
                alt="random img"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Alex Maxwel</h5>
                <p className="card-text text-center">Founder</p>
              </div>
            </div>
          </div>
          {/* Fifth Card  */}
          <div className="col">
            <div className="card about-us-fourth-part-card">
              <img
                src="https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M="
                className="card-img-top"
                alt="random img"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Alex Maxwel</h5>
                <p className="card-text text-center">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
