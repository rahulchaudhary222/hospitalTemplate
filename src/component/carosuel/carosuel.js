import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carosuel.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="main">
      <div className="left">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              style={{ height: "70vh" }}
              className="d-block w-100"
              src="https://gumlet.assettype.com/fortuneindia/2022-04/e84e75e6-468d-411e-af42-2f6341a3481b/GettyImages_1296010649.jpeg?w=1200&h=799"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "70vh" }}
              className="d-block w-100"
              src="https://mcmscache.epapr.in/post_images/website_350/post_28872061/full.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "70vh" }}
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Royal_Brompton_Hospital-geograph-2105200.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="right">
        <h2 style={{ textAlign: "left" }}>NEWS</h2>
        <h4
          style={{
            textAlign: "left",
            // padding: "0px 0px 0px 10px",
            fontSize: "20px",
          }}
        >
          IN FOCUS
        </h4>
        <h5 style={{ fontSize: "17px", textAlign: "left" }}>
          TWO MORE KIDNEY TRANSPLANT WERE PERFORMED AT SHANSKAR HOPSPITAL
        </h5>
        <hr />
        <h5 style={{ fontSize: "17px", textAlign: "left" }}>
          Awareness Camp At Shanskar Hospital To Aware People About Disadvantage
          Of Tobacco Consumption At World Anti Tobacco Day
        </h5>
        <hr />
        <h5 style={{ fontSize: "17px", textAlign: "left" }}>
          A Joint Meeting Of 22nd Annual Conference Of Indian Society Of
          Critical Care Medicine International
        </h5>
        <hr />
        <h5 style={{ fontSize: "17px", textAlign: "left" }}>
          Free Health Checkup Camp Organized By Shanskar Hospital On The
          Occassion Of Indpendence Day At Sadabad
        </h5>
        <hr />
      </div>
    </div>
  );
}

export default ControlledCarousel;
