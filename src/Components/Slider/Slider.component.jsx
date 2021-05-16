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
    <div style={{ width: "100%" }} className="slider-banner">
      <Slider {...settings}>
        <div>
          <img
            src="https://res.cloudinary.com/toantqt/image/upload/v1620898337/slider-d24/02cd6912c9093c576518_kajrox.jpg"
            className="img-slider"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/toantqt/image/upload/v1620898309/slider-d24/54c51619b602435c1a13_vzajud.jpg"
            className="img-slider"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/toantqt/image/upload/v1620898308/slider-d24/164ff091508aa5d4fc9b_ydlbgs.jpg"
            className="img-slider"
          />
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/toantqt/image/upload/v1620898306/slider-d24/3ffb8525253ed060892f_pjmrws.jpg"
            className="img-slider"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/toantqt/image/upload/v1620898305/slider-d24/52ef4f30ef2b1a75433a_an3vv2.jpg"
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
