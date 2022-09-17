import React from "react";
import "./service.css";

const Service = () => {
  return (
    <>
      <div className="service">
        <h1 style={{ color: "red", fontSize: "50px" }}>
          SERVICES FOR PATIENTS & VISITORS
        </h1>
        <h6 style={{ fontSize: "20px" }}>
          OUR MISSION IS TO OFFER PATIENT-CENTERED, HIGH-QUALITY SERVICES
          RESULTING IN A BETTER HEALTHCARE EXPERIENCE AND ACCURATE DIAGNOSIS FOR
          PATIENTS.
        </h6>
        <div className="list-service">
          <div className="ul-left">
            <ul>
              <a href="">
                <li>EMERGENCY & CRITICAL CARE </li>
              </a>
              <a href="">
                <li>RADIOLOGY</li>
              </a>
              <a href="">
                <li> INPATIENT FACILITIES</li>
              </a>
              <a href="">
                <li>OPD SERVICES</li>
              </a>
              <a href="">
                <li>PATHOLOGY</li>
              </a>
            </ul>
          </div>
          <div className="ul-right">
            <ul>
              <a href="">
                <li> PHARMACY</li>
              </a>
              <a href="">
                <li>ENDOSCOPY</li>
              </a>
              <a href="">
                <li>BRONCHOSCOPY & PFT TEST</li>
              </a>
              <a href="">
                <li>NICU & PICU</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
