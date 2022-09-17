import React from "react";
import Detail from "../../Detail/Detail";
import "./about.css";

const About = ({ showPage }) => {
  return (
    <>
      {showPage === "home" && (
        <>
          <div className="about">
            <h1 style={{ textAlign: "center", margin: "20px" }}>
              BOOK AN APPOINTMENT
            </h1>
            <h3 style={{ textAlign: "center", margin: "20px" }}>
              ITS EASY AND FAST
            </h3>
            <div className="form">
              <input className="inp" placeholder="Full Name" />
              <input
                className="inp"
                placeholder="Your Email Address"
                type="email"
              />
              <input className="inp" placeholder="Phone Number" type="number" />
              <button className="btn1">Booking Date</button>
            </div>
            <button className="btn2">Book Now</button>
          </div>
          <div className="detail">
            <div class="main-container">
              <div class="heading">
                <h1 class="heading__title">OUR SPECIALITY</h1>
                <p class="heading__credits">
                  <a
                    class="heading__link"
                    target="_blank"
                    href="https://dribbble.com/sl"
                  >
                    WE ARE RELIABLE & TRUSTED
                  </a>
                </p>
              </div>
              <div class="cards">
                <div class="card card-1">
                  <div class="card__icon">
                    <i class="fas fa-bolt"></i>
                  </div>
                  <p class="card__exit">
                    <i class="fas fa-times"></i>
                  </p>
                  <h2 class="card__title">NEUROSURGERY</h2>
                  <p class="card__apply">
                    <a class="card__link" href="#">
                      Apply Now <i class="fas fa-arrow-right"></i>
                    </a>
                  </p>
                </div>
                <div class="card card-2">
                  <div class="card__icon">
                    <i class="fas fa-bolt"></i>
                  </div>
                  <p class="card__exit">
                    <i class="fas fa-times"></i>
                  </p>
                  <h2 class="card__title">CRITICAL CARE</h2>
                  <p class="card__apply">
                    <a class="card__link" href="#">
                      Apply Now <i class="fas fa-arrow-right"></i>
                    </a>
                  </p>
                </div>
                <div class="card card-3">
                  <div class="card__icon">
                    <i class="fas fa-bolt"></i>
                  </div>
                  <p class="card__exit">
                    <i class="fas fa-times"></i>
                  </p>
                  <h2 class="card__title">GASTROENTEROLOGY</h2>
                  <p class="card__apply">
                    <a class="card__link" href="#">
                      Apply Now <i class="fas fa-arrow-right"></i>
                    </a>
                  </p>
                </div>
                <div class="card card-4">
                  <div class="card__icon">
                    <i class="fas fa-bolt"></i>
                  </div>
                  <p class="card__exit">
                    <i class="fas fa-times"></i>
                  </p>
                  <h2 class="card__title">LAPAROSCOPIC SURGERY</h2>
                  <p class="card__apply">
                    <a class="card__link" href="#">
                      Apply Now <i class="fas fa-arrow-right"></i>
                    </a>
                  </p>
                </div>
                <div class="card card-5">
                  <div class="card__icon">
                    <i class="fas fa-bolt"></i>
                  </div>
                  <p class="card__exit">
                    <i class="fas fa-times"></i>
                  </p>
                  <h2 class="card__title">OPD</h2>
                  <p class="card__apply">
                    <a class="card__link" href="#">
                      Apply Now <i class="fas fa-arrow-right"></i>
                    </a>
                  </p>
                </div>
                <div class="card card-1">
                  <div class="card__icon">
                    <i class="fas fa-bolt"></i>
                  </div>
                  <p class="card__exit">
                    <i class="fas fa-times"></i>
                  </p>
                  <h2 class="card__title">EMERGENCY CALL</h2>
                  <p class="card__apply">
                    <a class="card__link" href="#">
                      Apply Now <i class="fas fa-arrow-right"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {showPage === "Detail" && <Detail />}
    </>
  );
};
export default About;
