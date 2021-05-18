import React, { useState, useEffect } from "react";
import Details from "../../Page/Course/course.json";
import AOS from "aos";
import SliderComponent from "../Slider/Slider.component";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import TocIcon from "@material-ui/icons/Toc";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { blue } from "@material-ui/core/colors";
import ClassIcon from "@material-ui/icons/Class";
import "./details.css";
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
const CourseDetailsComponent = (props) => {
  const [data, setData] = useState({ name: "", banner: "", content: "" });
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const [open4, setOpen4] = React.useState(true);
  const [fix, setFix] = useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const handleScroll = () => {
    if (window.pageYOffset > 800) {
      if (!fix) {
        setFix(true);
      }
    } else {
      if (fix) {
        setFix(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    setData({
      name: Details.course[props.courseID].name,
      banner: Details.course[props.courseID].banner,
      content: Details.course[props.courseID].content,
      program: Details.course[props.courseID].program,
    });
  }, [props.courseID]);

  return (
    <div>
      <SliderComponent />
      <div
        className="introduce mt-3"
        style={{ width: "90%", margin: "0 auto", textAlign: "center" }}
      >
        <h1 style={{ color: "#0082c8" }}>Khóa học {data.name}</h1>
        <span style={{ fontWeight: "400" }} data-aos="fade-up">
          {data.content}
        </span>
      </div>
      <div
        className="course-details mt-3 row"
        style={{ width: "90%", margin: "0 auto", textAlign: "center" }}
      >
        <div className="col-md-8">
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
              <ListItemText
                primary="Mục tiêu khóa học"
                className="title-head"
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <div>
                    <div>
                      <div className="head-item">Kĩ năng đạt được :</div>
                      <List>
                        {data.program?.target.skill.map((e, index) => {
                          return (
                            <ListItem>
                              <ListItemText primary={e} key={index} />
                            </ListItem>
                          );
                        })}
                      </List>
                    </div>
                    <div>
                      <div className="head-item">
                        {" "}
                        Phương pháp đào tạo theo hướng dự án:
                      </div>
                      <List>
                        {data.program?.target.method.map((e, index) => {
                          return (
                            <ListItem>
                              <ListItemText primary={e} key={index} />
                            </ListItem>
                          );
                        })}
                      </List>
                    </div>
                    <div>
                      <div className="head-item">Chất lượng giảng dạy:</div>
                      <List>
                        {data.program?.target.quality.map((e, index) => {
                          return (
                            <ListItem>
                              <ListItemText primary={e} key={index} />
                            </ListItem>
                          );
                        })}
                      </List>
                    </div>
                  </div>
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
                <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText
                primary="Đối tượng tham dự"
                className="title-head"
              />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <List>
                    {data.program?.participants.map((e, index) => {
                      console.log(e);
                      return <ListItemText primary={e} key={index} />;
                    })}
                  </List>
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
                <CardMembershipIcon />
              </ListItemIcon>
              <ListItemText primary="Bằng chứng nhận" className="title-head" />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <List>
                    <ListItemText primary={data.program?.certification} />
                  </List>
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              onClick={handleClick3}
              className={open3 ? "active" : ""}
            >
              <ListItemIcon>
                {" "}
                <TimelapseIcon className="icon-head" />
              </ListItemIcon>
              <ListItemText
                primary="Thời lượng khóa học"
                className="title-head"
              />
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <List>
                    <ListItemText primary={data.program?.certification} />
                  </List>
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              onClick={handleClick4}
              className={open4 ? "active" : ""}
            >
              <ListItemIcon className="icon-head">
                {" "}
                <TocIcon />
              </ListItemIcon>
              <ListItemText
                primary="Nội dung chương trình"
                className="title-head"
              />
              {open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <List>
                    <TableContainer component={Paper}>
                      <Table
                        className={classes.table}
                        aria-label="simple table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell style={{ width: "20%" }}>
                              Nội dung học
                            </TableCell>
                            <TableCell align="left">Sản phẩm</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data.program?.content.map((e, index) => {
                            return (
                              <TableRow key={index}>
                                <TableCell>{e.title}</TableCell>
                                <TableCell>
                                  <ul>
                                    {e.product.map((product, index) => {
                                      return <li>{product}</li>;
                                    })}
                                  </ul>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </List>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </div>
        <div
          className="col-md-4"
          style={{
            position: "relative",
            overflow: "visible",
            boxSizing: "border-box",
            minHeight: "1px",
          }}
        >
          <div className={"theiaStickySidebar mt-2 " + (fix ? "fixed" : "")}>
            <div className="sidebar">
              <div className="widget course-widget">
                <p className="price">{data.name}</p>
                <div className="product-meta-info-list">
                  <div className="meta-info-unit">
                    <div className="icon">
                      <ClassIcon />
                    </div>
                    <div className="value">Học phí: Đang cập nhật</div>
                  </div>
                  <div className="meta-info-unit">
                    <div className="icon">
                      <ClassIcon />
                    </div>
                    <div className="value">Trình độ: Cơ bản</div>
                  </div>
                  <div className="meta-info-unit">
                    <div className="icon">
                      <TimelapseIcon />
                    </div>
                    <div className="value">Số tiết học: 180</div>
                  </div>
                </div>
                <div
                  className="btn-order mt-2"
                  style={{
                    width: "90%",
                    margin: "0 auto",
                    paddingBottom: "20px",
                  }}
                >
                  <a
                    className="btn_1 gradient full-width mb_5"
                    onClick={props.handleClickConfirmOrder}
                    style={{ fontWeight: "500" }}
                  >
                    Đăng kí ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsComponent;
