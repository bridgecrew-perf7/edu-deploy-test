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
            src="https://res.cloudinary.com/serviced24/image/upload/v1658888663/course/banner/95dd577f0e49cc179558_wzn6jv.jpg"
            className="img-slider"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/serviced24/image/upload/v1658888663/course/banner/c66804545f629d3cc473_mnathr.jpg"
            className="img-slider"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/serviced24/image/upload/v1658888663/course/banner/48d803775a41981fc150_kvirev.jpg"
            className="img-slider"
          />
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/serviced24/image/upload/v1658888663/course/banner/d0fea687fcb13eef67a0_elisqb.jpg"
            className="img-slider"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/serviced24/image/upload/v1658888749/course/banner/af1b8e62d454160a4f45_ctxf7d.jpg"
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
