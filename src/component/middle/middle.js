import React from "react";
import "./middle.css";
import video1 from "../../video/pexels-ron-lach-7584629.mp4";

const Middle = () => {
  return (
    <>
      <div className="middle">
        <div className="first">
          <h2 style={{ fontSize: "20px", textAlign: "left" }}>
            BEST IN SADABAD CITY
          </h2>
          <h1 style={{ textAlign: "left", fontSize: "30px" }}>
            GASTROENTEROLOGY
          </h1>
          <p style={{ textAlign: "left" }}>
            Gastroenterology is a medical specialty dealing with the study of
            the digestive system and its disorders.Gastro-intestinal services
            incorporate a joint medical and surgical approach for the
            prevention, diagnosis and treatment of gastrointestinal, liver and
            pancreatic disorders including cancer
          </p>
          <hr />
        </div>

        <div className="second">
          <h3 style={{ textAlign: "left" }}>
            TREATMENT OPTIONS AT SYNERGY HOSPITAL
          </h3>
          <ul>
            <li> Upper Digestive Tract</li>
            <li>
              Early detection and prevention of gastro-intestinal diseases
            </li>
            <li> Laparoscopic and Endoscopic treatments</li>
            <li> Stomach, liver, colon, intestine and pancreas</li>
            <li> Evaluation for liver transplantation</li>
            <li> Normal delivery</li>
          </ul>
          <hr />
        </div>
        <div className="third">
          <video src={video1} controls="true" />
        </div>
      </div>
    </>
  );
};
export default Middle;
