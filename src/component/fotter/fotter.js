import React from "react";
import "./fotter.css";

const Fotter = () => {
  return (
    <>
      <div className="fotter">
        <div className="one">
          <h1
            style={{
              fontSize: "30px",
              textAlign: "left",
            }}
          >
            OUICK LINKS
          </h1>
          <div className="naam">
            <div className="one-left">
              <ul>
                <a href="">
                  <li>ABOUT </li>
                </a>

                <a href="">
                  {" "}
                  <li>DOCTORS</li>
                </a>

                <a href="">
                  <li>OUR SPECIALITIES</li>
                </a>
                <a href="">
                  {" "}
                  <li> APPOINTMENT</li>
                </a>
              </ul>
            </div>
            <div className="one-right">
              <ul>
                <a href="">
                  <li>TPA AVAILABLE </li>
                </a>

                <a href="">
                  {" "}
                  <li>PRIVACY POLICY</li>
                </a>

                <a href="">
                  <li>DESCLAIMER</li>
                </a>
                <a href="">
                  {" "}
                  <li>SITEMAP</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="two">
          <h1
            style={{
              fontSize: "30px",
              textAlign: "left",
            }}
          >
            SERVICES FOR PATIENTS
          </h1>

          <div className="naam">
            <div className="one-left">
              <ul>
                <a href="">
                  <li>RADIOLOGY </li>
                </a>

                <a href="">
                  {" "}
                  <li>INPATIENT FACILITIES</li>
                </a>

                <a href="">
                  <li>OPD SERVICES</li>
                </a>
                <a href="">
                  {" "}
                  <li> PATHOLOGY</li>
                </a>
              </ul>
            </div>
            <div className="one-right">
              <ul>
                <a href="">
                  <li>PHARMACY </li>
                </a>

                <a href="">
                  {" "}
                  <li>ENDOSCOPY</li>
                </a>

                <a href="">
                  <li>NICU & PICU MEDICAL</li>
                </a>
                <a href="">
                  {" "}
                  <li>IMAGING </li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="three">
          <h1
            style={{
              fontSize: "30px",
              textAlign: "left",

              padding: "10px",
            }}
          >
            CONTACT US
          </h1>

          <h2
            style={{
              fontSize: "20px",
              marginTop: "20px",
              textAlign: "left",
              color: "white",
            }}
          >
            SHANSKAR HOSPITAL , RAYA ROAD , NEAR RADHA MARVEL , SADABAD HATHRAS,
            UTTAR PRADESH , 281306
          </h2>
          <h2
            style={{
              fontSize: "20px",
              marginTop: "20px",
              textAlign: "left",
              color: "white",
            }}
          >
            Phone : 0562-400-6515 info@hshanskarhospital.com
          </h2>
        </div>
      </div>
    </>
  );
};
export default Fotter;
