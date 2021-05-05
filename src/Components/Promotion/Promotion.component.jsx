import React, { useState, useEffect } from "react";
import "./promotion.css";
import AOS from "aos";
import "aos/dist/aos.css";
const PromotionComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="mt-3" id="promotion">
      <h1 className="pt-3">
        THÔNG TIN KHUYẾN MÃI KHÓA HỌC
        <br />
        <h2>ĐẾN HẾT NGÀY 30/6</h2>
      </h1>
      <div
        className="row"
        style={{ width: "75%", margin: "0 auto", marginBottom: "100px" }}
      >
        <div className="col-md-4 item" data-aos="fade-right">
          <div className="box">
            <img src="https://design24.vn/Images/s7/ico1.png" />
            <p className="mt-3" style={{ color: "white" }}>
              Áo thun <strong>Design24</strong>
            </p>
          </div>
        </div>
        <div className="col-md-4 item" data-aos="fade-up">
          <div className="box">
            <img src="https://design24.vn/Images/s7/ico2.png" />
            <p className="mt-3" style={{ color: "white" }}>
              Giảm 35% học phí khi đăng kí từ ngày 1/5-31/5
            </p>
          </div>
        </div>

        <div className="col-md-4 item" data-aos="fade-left">
          <div className="box">
            <img src=" https://design24.vn/Images/s7/ico3.png" />
            <p className="mt-3" style={{ color: "white" }}>
              Hỗ trợ cài đặt trọn bộ phần mềm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionComponent;
