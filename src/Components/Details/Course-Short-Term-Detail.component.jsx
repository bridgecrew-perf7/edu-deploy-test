import React, { useState, useEffect } from "react";
import Details from "../../Page/Course/course.json";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  table: {
    minWidth: 650,
  },
}));
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700],
    },
  },
}))(Button);
const PageCourseShortTermViewComponent = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const [open4, setOpen4] = React.useState(true);
  const [data, setData] = useState({
    name: "",
    banner: "",
    describe: "",
    infor: "",
    quality: "",
  });

  useEffect(() => {
    setData({
      name: Details.courseShort[props.courseID].name,
      banner: Details.courseShort[props.courseID].image,
      describe: Details.courseShort[props.courseID].describe,
      infor: Details.courseShort[props.courseID].infor,
      quality: Details.courseShort[props.courseID].quality,
    });
  }, [props.courseID]);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <div
      className="row"
      style={{ width: "95%", margin: "0 auto", marginTop: "20px" }}
    >
      <div className="col-md-7">
        <div
          className="header-title"
          style={{ textAlign: "center", color: "black !important" }}
        >
          <h1>{data.name}</h1>
        </div>
        {/* 
        <div className="banner-header ">
          <img src={data.banner} alt="" width="100%" />
        </div> */}
        <div className="content">
          <List>
            <ListItem
              button
              onClick={handleClick}
              className={open ? "active" : ""}
            >
              <ListItemIcon className="icon-head">
                {" "}
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Mô tả khóa học :" className="title-head" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText primary={data.describe} />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              onClick={handleClick1}
              className={open1 ? "active" : ""}
            >
              <ListItemIcon className="icon-head">
                {" "}
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primary="Thông tin chi tiết :"
                className="title-head"
              />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText primary={data.infor} />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              onClick={handleClick2}
              className={open2 ? "active" : ""}
            >
              <ListItemIcon className="icon-head">
                {" "}
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Giảng viên :" className="title-head" />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText primary={data.quality} />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </div>
      </div>
      <div className="col-md-5">
        <div className="banner-header" style={{ marginTop: "65px" }}>
          <img src={data.banner} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};
export default PageCourseShortTermViewComponent;
