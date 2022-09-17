import React from "react";
import "./doctor.css";

const Doctor = () => {
  return (
    <>
      <div className="doctor">
        <div className="upper">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzRN-MktYXqGZtPc5k_F8xXbopQZ5n1ZNfqg&usqp=CAU"
            alt="load"
          />
          <h1>DEDICATED TEAM OF DOCTORS</h1>
        </div>
        <div className="doctor-pic">
          <div className="doctor-1">
            <div className="vl"> </div>
            <div>
              <h1
                style={{
                  color: "white",
                  fontSize: "20px",
                  textAlign: "left",
                  backgroundColor: "blue",
                  width: "fit-content",
                  padding: "5px",
                  marginBottom: "0px",
                }}
              >
                DR. VIVEK SHARMA
              </h1>
              <img
                style={{ width: "400px", height: "250px", marginTop: "0px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfyhwfd1HhPoA_EQm4_b5oY-_PR96Uwkkx1A&usqp=CAU"
                alt="load"
              />
              <p style={{ textAlign: "left", marginTop: "10px" }}>
                HEAD OF THE CRITICAL CARE DEPARTMENT
              </p>
            </div>
          </div>
          <div className="doctor-2">
            <div className="vl"> </div>
            <div>
              <h1
                style={{
                  color: "white",
                  fontSize: "20px",
                  textAlign: "left",
                  backgroundColor: "blue",
                  width: "fit-content",
                  padding: "5px",
                  marginBottom: "0px",
                }}
              >
                DR. SHALINI BAGHEL
              </h1>
              <img
                style={{ width: "400px", height: "250px", marginTop: "0px" }}
                src="https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q="
                alt="load"
              />
              <p style={{ textAlign: "left", marginTop: "10px" }}>
                HEAD OF THE LAPAROSCOPIC SURGERY DEPARTMENT
              </p>
            </div>
          </div>
          <div className="doctor-3">
            <div className="vl"> </div>
            <div>
              <h1
                style={{
                  color: "white",
                  fontSize: "20px",
                  textAlign: "left",
                  backgroundColor: "blue",
                  width: "fit-content",
                  padding: "5px",
                  marginBottom: "0px",
                }}
              >
                DR. LAKHAN SHARMA
              </h1>
              <img
                style={{ width: "400px", height: "250px", marginTop: "0px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_mAmhko2SQjtVPaBenZLg6hUdkBR4iUYmg&usqp=CAU"
                alt="load"
              />
              <p style={{ textAlign: "left", marginTop: "10px" }}>
                HEAD OF THE NEUROSURGERY DEPARTMENT
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Doctor;
