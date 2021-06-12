import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./education.css";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 30,
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  paper: {
    height: 180,
    width: "100%",
    borderRadius: "6px",
    backgroundColor: "white",
  },
  control: {
    padding: theme.spacing(2),
  },
  wrapper: {
    backgroundImage: "url('https://design24.vn/Images/s10/bg.jpg')",
    backgroundSize: "cover",
    minHeight: 700,
  },
}));
const EducationProgramComponent = () => {
  let history = useHistory();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const lists = [
    {
      name: "Thiết kế đồ họa quảng cáo",
      image:
        "https://res.cloudinary.com/toantqt/image/upload/v1619407551/icon-edu-d24/advertisement_zrrciw.png",
    },
    {
      name: "Thiết kế video marketing",
      image: "https://www.flaticon.com/premium-icon/icons/svg/3629/3629701.svg",
    },
    {
      name: "Thiết kế 3D kiến trúc - nội thất",
      image:
        "https://res.cloudinary.com/toantqt/image/upload/v1619407551/icon-edu-d24/sketch_crpchv.png",
    },
    {
      name: "Thiết kế TVC 3D",
      image:
        "https://res.cloudinary.com/toantqt/image/upload/v1619428808/icon-edu-d24/smart-tv_suihb1.png",
    },
    {
      name: "Thiết kế hoạt hình 2D",
      image:
        "https://res.cloudinary.com/toantqt/image/upload/v1619588885/icon-edu-d24/cartoons_ndlbzt.png",
    },
    {
      name: "Thiết kế 3D event",
      image:
        "https://res.cloudinary.com/toantqt/image/upload/v1619407550/icon-edu-d24/computer_xvktt6.png",
    },

    {
      name: "Biên tập & dựng phim",
      image:
        "https://res.cloudinary.com/toantqt/image/upload/v1619407550/icon-edu-d24/video-editing_y6vjuv.png",
    },
    {
      name: "MC & dẫn chương trình thực tế",
      image:
        "https://res.cloudinary.com/toantqt/image/upload/v1619407550/icon-edu-d24/singer_pjau8r.png",
    },
    {
      name: "Quay phim ",
      image:
        "https://res.cloudinary.com/toantqt/image/upload/v1619407550/icon-edu-d24/video-camera_bony5s.png",
    },
    {
      name: " Nhiếp ảnh",
      image:
        "https://res.cloudinary.com/toantqt/image/upload/v1619588885/icon-edu-d24/camera_yade6z.png",
    },

    {
      name: "Thiết kế Website",
      image:
        "https://res.cloudinary.com/toantqt/image/upload/v1619407550/icon-edu-d24/responsive_bj4aae.png",
    },
    {
      name: "Thiết kế App Mobile",
      image:
        "https://res.cloudinary.com/toantqt/image/upload/v1619407550/icon-edu-d24/user-interface_kbvfnz.png",
    },
    {
      name: "Thiết kế & thi công Công Trình Quảng cáo",
      image:
        "https://res.cloudinary.com/toantqt/image/upload/v1619588885/icon-edu-d24/building_f1vxcp.png",
    },
    {
      name: "Tổ chức sự kiện",
      image:
        "https://res.cloudinary.com/toantqt/image/upload/v1619588885/icon-edu-d24/event_yhtgx0.png",
    },
    {
      name: "Livestream bán hàng online",
      image:
        "https://res.cloudinary.com/toantqt/image/upload/v1619588885/icon-edu-d24/live_xtetzk.png",
    },
    {
      name: "Đồ họa cho thiếu nhi",
      image:
        "https://res.cloudinary.com/toantqt/image/upload/v1619588885/icon-edu-d24/drawing_g67gqh.png",
    },
  ];

  const handleClickEdu = (value) => {
    history.push({
      pathname: "/course",
      search: `?id=${value}`,
    });
  };

  return (
    <div className={classes.wrapper}>
      <Grid
        item
        container
        lg={12}
        className={classes.root}
        spacing={1}
        justify="center"
      >
        {lists.map((value, index) => (
          <Grid
            key={index}
            item
            className="item"
            lg={2}
            xs={4}
            onClick={() => handleClickEdu(index)}
          >
            <div className={classes.paper} data-aos="fade-up">
              <img className="mt-3" src={value.image} alt="" width="40%" />
              <div className="mt-3">
                <span style={{ fontWeight: "500" }}>{value.name}</span>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default EducationProgramComponent;
