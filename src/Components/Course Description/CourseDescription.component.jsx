import React, { useState, useEffect } from "react";
import "./description.css";
export default function CourseDescriptionComponent(props) {
  return (
    <>
      <div className="description mb-5">
        <div className="header-title">
          <span>Mô tả khóa học</span>
        </div>
        <div className="mt-3" style={{ textAlign: "center" }}>
          <div>
            <span className="title-content">Ngày khai giảng: </span>{" "}
            <span className="content">{props?.program?.startDate}</span>
          </div>
          <div className="mt-2">
            <span className="title-content">Trình độ: </span>{" "}
            <span className="content">{props?.program?.level}</span>
          </div>
          <div className="mt-2">
            <span className="title-content">Lịch học: </span>{" "}
            <span className="content">{props?.program?.schedule}</span>
          </div>
          <div className="mt-2">
            <span className="title-content">Giờ học: </span>{" "}
            <span className="content">{props?.program?.time}</span>
          </div>

          <div className="mt-2">
            <span className="title-content">Học phí: </span>{" "}
            <span className="content" style={{ color: "red" }}>
              {props?.program?.price} đ
            </span>
          </div>
        </div>
        <div className="mt-4 button-book">
          <button>Đặt chỗ ngay</button>
        </div>
        <div className="mt-4" style={{ textAlign: "center", color: "#666" }}>
          <span>Giảm 15% học phí khi đăng ký trước 30/1/2022</span>
        </div>
      </div>
    </>
  );
}
