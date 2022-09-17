import React from "react";
import "./navbar.scss";
import image from "../../src/large.png";

const Navbar = ({ setShowPage }) => {
  return (
    <>
      <div className="navs">
        <div className="left-side">
          <img src={image} alt="load" />
        </div>
        <div className="right-side">
          <nav role="navigation" class="primary-navigation">
            <ul>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setShowPage("home");
                  }}
                >
                  HOME
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => {
                    setShowPage("Detail");
                  }}
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#">DOCTORS</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
              <li>
                <a href="#">SERVICES</a>
                <ul class="dropdown">
                  <li>
                    <a href="#">{`Emergency & Critical Care`.toUpperCase()}</a>
                  </li>
                  <li>
                    <a href="#">{`Radiology`.toUpperCase()}</a>
                  </li>
                  <li>
                    <a href="#">{`Inpatient Facilities`.toUpperCase()}</a>
                  </li>
                  <li>
                    <a href="#">{`Pathology`.toUpperCase()}</a>
                  </li>
                  <li>
                    <a href="#">{`Pharmacy`.toUpperCase()}</a>
                  </li>
                  <li>
                    <a href="#">{`Endoscopy`.toUpperCase()}</a>
                  </li>
                  <li>
                    <a href="#">{`TPA Facility`.toUpperCase()}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">SPECIALITIES</a>
                <ul class="dropdown">
                  <li>
                    <a href="#"> CARDIOLOGY</a>
                  </li>
                  <li>
                    <a href="#"> UROLOGY</a>
                  </li>
                  <li>
                    <a href="#"> CRITICAL CARE</a>
                  </li>
                  <li>
                    <a href="#"> NEUROSURGERY</a>
                  </li>
                  <li>
                    <a href="#"> ONCOLOGY & ONCOSURGERY</a>
                  </li>
                  <li>
                    <a href="#"> GASTROENTEROLOGY</a>
                  </li>

                  <li>
                    <a href="#">GI SURGERY</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="call">
          <div className="call-pic">
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://i.pinimg.com/originals/bb/f6/5f/bbf65fa521c4a105d81d1422a702e0f8.png"
              alt="load"
            />
            <h3>Call Us :</h3>
          </div>
          <h2 style={{ marginTop: "0px", fontSize: "20px" }}>0562-400-6515</h2>
        </div>
      </div>
    </>
  );
};
export default Navbar;
