import React from "react";
import Slider from "react-slick";
import "./slider.css";

export default function SliderComponent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>
        <div>
          <img
            src="https://res.cloudinary.com/toantqt/image/upload/v1620228852/slider-d24/2d-banner_1_hu2qvu.png"
            className="img-slider"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/toantqt/image/upload/v1620228850/slider-d24/Appmobile-resize-banner_jaxpox.png"
            className="img-slider"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/toantqt/image/upload/v1620228850/slider-d24/WEB-DESIGN_ny6rpc.png"
            className="img-slider"
          />
        </div>

        <div>
          <img
            src="https://csc.edu.vn/data/images/slider/do-hoa/Motion%20Graphic.gif"
            className="img-slider"
          />
        </div>
        <div>
          <img
            src="https://csc.edu.vn/data/images/slider/do-hoa/web-design.png"
            className="img-slider"
          />
        </div>
      </Slider>
      <div className="banner-background">
        <div className="mask"></div>
      </div>
    </div>
  );
}
