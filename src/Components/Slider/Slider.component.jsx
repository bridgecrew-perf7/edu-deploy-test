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
            src="https://res.cloudinary.com/serviced24/image/upload/v1643254043/course/banner/banner_khoa_hoc_quay_phim_yj1mbe.jpg"
            className="img-slider"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/serviced24/image/upload/v1643255198/course/banner/banner_khoa_hoc_do_hoa_quang_cao_1_nzhdzm.jpg"
            className="img-slider"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/serviced24/image/upload/v1643254043/course/banner/banner_khoa_hoc_thiet_ke_website_ivckuf.jpg"
            className="img-slider"
          />
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/serviced24/image/upload/v1643255198/course/banner/banner_khoa_hoc_video_marketing_1_vsvgda.jpg"
            className="img-slider"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/serviced24/image/upload/v1643254042/course/banner/banner_khoa_hoc_ux_ui_ppe9s3.jpg"
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
