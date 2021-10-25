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
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TocIcon from "@material-ui/icons/Toc";
import Paper from "@material-ui/core/Paper";

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
  const [open5, setOpen5] = React.useState(true);
  const [open6, setOpen6] = React.useState(true);

  const [data, setData] = useState();

  useEffect(() => {
    if (props.courseID) {
      setData({
        name: Details.courseShort[props.courseID].name,
        banner: Details.courseShort[props.courseID].image,
        introduce: Details.courseShort[props.courseID].introduce,
        describe: Details.courseShort[props.courseID].describe,
        infor: Details.courseShort[props.courseID].infor,
        why: Details.courseShort[props.courseID].why,
        quality: Details.courseShort[props.courseID].quality,
        program: Details.courseShort[props.courseID].program,
      });
    }
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

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const handleClick4 = () => {
    setOpen4(!open4);
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
          <h1>{data?.name}</h1>
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
                  <ListItemText primary={data?.introduce} />
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
                primary="Những lợi ích của khóa học :"
                className="title-head"
              />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List>
                {data?.describe?.map((e, index) => {
                  return (
                    <ListItem>
                      <ListItemText primary={e} key={index} />
                    </ListItem>
                  );
                })}
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
              <ListItemText
                primary="Đối tượng học viên :"
                className="title-head"
              />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List>
                {data?.infor?.map((e, index) => {
                  return (
                    <ListItem>
                      <ListItemText primary={e} key={index} />
                    </ListItem>
                  );
                })}
              </List>
            </Collapse>
            <ListItem
              button
              onClick={handleClick3}
              className={open3 ? "active" : ""}
            >
              <ListItemIcon className="icon-head">
                {" "}
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primary="Tại sao bạn nên tham gia khóa học Adobe Photoshop tại Design24? :"
                className="title-head"
              />
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List>
                {data?.why?.map((e, index) => {
                  return (
                    <ListItem>
                      <ListItemText primary={e} key={index} />
                    </ListItem>
                  );
                })}
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
                          {data?.program?.map((e, index) => {
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
      </div>
      <div className="col-md-5">
        <div className="banner-header" style={{ marginTop: "65px" }}>
          <img src={data?.banner} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};
export default PageCourseShortTermViewComponent;
