import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import education from "../Education Soon/education.json";
import "./educationSoon.css";

const EducationSoonComponent = () => {
  const history = useHistory();
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  const hanldeClick = (slug) => {
    history.push(`/khoa-hoc/${slug}`);
  };
  const arr = [0, 2, 3, 5, 6, 8, 9, 11, 12, 14];
  const arrLeft = [0, 3, 6, 9, 12];

  const lists = education?.course?.map((e, index) => {
    return (
      <Grid
        key={index}
        item
        lg={4}
        md={4}
        xs={12}
        className="mt-3"
        data-aos={
          arr.lastIndexOf(index) != -1
            ? arrLeft.lastIndexOf(index) != -1
              ? "fade-right"
              : "fade-left"
            : "fade-up"
        }
      >
        <div className="wrap-course">
          <div className="head-img">
            <img src={e.image} width="100%" />
            <div className="btn-view">
              <a
                onClick={() => {
                  hanldeClick(e.slug);
                }}
              >
                Xem chi tiết
              </a>
            </div>
          </div>
          <div className="middle-content">
            <div className="name">
              <span>{e.name}</span>
            </div>{" "}
            <div className="mt-2">
              <div>
                <span className="title-content">Trình độ: </span>{" "}
                <span className="content">{e.level}</span>
              </div>
              <div>
                <span className="title-content">Lịch học: </span>{" "}
                <span className="content">{e.schedule}</span>
              </div>
              <div>
                <span className="title-content">Giờ học: </span>{" "}
                <span className="content">{e.time}</span>
              </div>
            </div>
          </div>
          <div className="bottom-content">
            <span>Giảm 15% học phí khi đăng ký trước 30/1/2022</span>
          </div>
        </div>
      </Grid>
    );
  });
  return (
    <Grid>
      <div className="mb-4">
        <span style={{ fontSize: "36px", color: "#333333", fontWeight: 600 }}>
          Khóa học sắp khai giảng
        </span>
      </div>
      <Grid container spacing={2}>
        {lists}
      </Grid>
    </Grid>
  );
};
export default EducationSoonComponent;
