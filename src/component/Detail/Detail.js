import React from "react";
import "./Detail.css";

const Detail = () => {
  return (
    <>
      <div className="main">
        <div className="main-left">
          <h1 style={{ fontSize: "20px", textAlign: "left" }}>
            SHANSKAR Hospital has been established by Futuristic Medicare Pvt.
            Ltd. Which is incorporated under the Companies Act as a Private
            Limited Company to extend the medical facilities to the communities
            at large residing in and around Agra. The directors of the company
            are all highly qualified super specialists having great expertise
            and experience. Our hospital is a 60 bedded hospital (with a
            provision of expansion up to 150 beds) including ICCU, CCU, PICU,
            NICU, Emergency, Trauma and BURN Unit. We have all highly advanced
            and modern therapeutic and diagnostic facilities and qualified &
            trained nursing staff in all wards. We are extending the exceptional
            range of technology combined with remarkable spectrum of clinical
            expertise at very competitive rates under one roof through a team of
            40 specialists & super specialists for all specialized and general
            treatment.A unique point of our hospital is our outpatient
            department. We have got full time OPD services in various
            departments like Gastroenterology, Neurosurgery, Oncosurgery, Gen
            Surgery,Orthopaedics, Urology, Gen Medicine, Psychiatry etc.
          </h1>
        </div>
        <div className="main-right">
          <div>
            <p
              style={{
                textAlign: "left",
                marginLeft: "10px",
                color: "white",
                padding: "10px",
                marginBottom: "0px",
              }}
            >
              ITS EASY AND FAST
            </p>
            <h1
              style={{
                textAlign: "left",
                marginLeft: "10px",
                color: "white",
                marginTop: "0px",
              }}
            >
              BOOK APPOINTMENT
            </h1>
          </div>
          <div className="input1">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Your Email Address" />
            <input type="number" placeholder="Phone Number" />
            <input type="number" placeholder="Booking Date" />
            <input className="inpu1" type="text" placeholder="Message" />
            <button className="BTN1">BOOK APPOINTMENT</button>
          </div>
        </div>
      </div>
      <div className="last">
        <div>
          <h1 style={{ padding: "2px 10px ", color: "white" }}>
            BOOK YOUR APPOINTMENT
          </h1>
          <p style={{ padding: "10px", color: "white" }}>
            Online through website
          </p>
        </div>
        <button>BOOK NOW</button>
        <div>
          <h2 style={{ padding: "10px", color: "white" }}>CALL US :</h2>
          <h3 style={{ padding: "2px 10px ", color: "white" }}>
            0562-400-6515
          </h3>
        </div>
      </div>
    </>
  );
};

export default Detail;
