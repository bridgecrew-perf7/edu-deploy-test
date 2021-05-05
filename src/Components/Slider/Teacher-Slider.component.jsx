import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import "./teacherSlider.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "280px",
    height: "350px",
  },
  media: {
    height: 0,
    width: "80%",
    margin: "0 auto",
    marginTop: "10px",
    paddingTop: "56.25%", // 16:9
  },
  media1: {
    height: 0,
    width: "60%",
    margin: "0 auto",
    marginTop: "10px",
    paddingTop: "56.25%", // 16:9
  },
  content: {
    marginTop: "25px",
  },
}));
const TeacherSliderComponent = () => {
  const classes = useStyles();
  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    slickNext: true,
    slickPrev: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      style={{
        marginTop: "30px",
        width: "100%",
        height: "600px",
        margin: "0 auto",
        marginBottom: "100px",
        backgroundColor: "rgb(251 251 251)",
      }}
    >
      <div style={{ width: "90%", margin: "0 auto", paddingTop: "30px" }}>
        <div style={{ marginBottom: "30px" }}>
          <div className="border_left hidden-xs"></div>
          <span
            className="ml-1 mr-1"
            style={{ fontSize: "2rem", fontWeight: "500" }}
          >
            Đội ngũ giảng viên
          </span>
          <div className="border_right"></div>
        </div>
        <Slider {...settings}>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620198754/gv-d24/HOAIANH-removebg-preview_vn5z0a.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. Nguyễn Hoài Anh
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  CEO, Founder Design24, GĐ Cty TNHH Mekongone, Giảng viên ĐHQT
                  Hồng Bàng, ĐH FPT, Cusc - Arena... Trưởng bộ phận Thiết Kế Đồ
                  Họa Đài Truyền Hình Hậu Giang (5 năm)
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media1}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620207997/gv-d24/2980fd01a763523d0b72-removebg-preview_cji62i.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. Lê Văn Tư
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Tiến Sỉ Lê Văn Tư
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620198753/gv-d24/THINH-removebg-preview_masyhw.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. Lê Quốc Thịnh
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Đại học Sân khấu Điện ảnh TP. HCM - Đài Truyền hình Hậu Giang
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620198754/gv-d24/DUY-removebg-preview_prwlnb.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. Võ Khánh Duy
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Kiến trúc sư, ĐH Kiến Trúc TP. HCM
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620198753/gv-d24/PHUONG-removebg-preview_g6loy3.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. Lê Phưởng
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Biên tập, quay phim - Đài phát thanh Truyền hình Hậu Giang
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620198753/gv-d24/THUC-removebg-preview_aotior.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. Nguyễn Tri Thức
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Trưởng bộ phận Đồ Họa Đài Truyền hình Việt Nam tại TP. HCM,
                  Giảng Viên ĐH Sân Khấu Điện Ảnh TP. HCM, ĐH Hoa Sen, Công
                  nghệ... 20 năm kinh nghiệm thiết kế đồ họa
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620198753/gv-d24/TUANANH-removebg-preview_j2puiw.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. Lê Tuấn Anh
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Là một trong những dẫn chương trình (DCT) được khán giả yêu
                  mến nhất của Đài Phát thanh Truyền hình Hậu Giang.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620198753/gv-d24/LYMINH-removebg-preview_hcwtdp.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. Lý Minh
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Đài Truyền hình Việt Nam
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620198753/gv-d24/KHOI-removebg-preview_gu2knu.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. Trần Xuân Khôi
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Thiết kế Nội Thất, ĐH QT Hồng Bàng TP.HCM
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default TeacherSliderComponent;
