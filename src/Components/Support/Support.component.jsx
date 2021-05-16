import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AOS from "aos";

import "./support.css";

const useStyles = makeStyles((theme) => ({
  support: {
    width: "90%",
    margin: "0 auto",
    marginTop: "60px",
    marginBottom: "100px",
  },
  title: {
    marginBottom: "40px",
  },
  root: {
    display: "flex",
    height: "139px !important",
  },
  details: {
    display: "flex",
    width: "260px",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 140,
    height: 140,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));
const SupportComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="mt-5" className={classes.support}>
      <div className={classes.title}>
        <h2>Tiện ích hỗ trợ</h2>
      </div>
      <div style={{ width: "80%", margin: "0 auto" }} className="support">
        <Grid container spacing={3}>
          <Grid container item lg={12} spacing={3}>
            <Grid item lg={6} xs={12} data-aos="fade-right">
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  image="https://res.cloudinary.com/toantqt/image/upload/v1619411484/icon-edu-d24/icon_3_mgmk1p.jpg"
                  title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      Cộng Đồng Designer
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Kho đề thi mẫu và video hướng dẫn giải đề giúp...
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
            <Grid item lg={6} xs={12} data-aos="fade-left">
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  image="https://res.cloudinary.com/toantqt/image/upload/v1619411484/icon-edu-d24/icon_4_oud1dg.jpg"
                  title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      Thư Viện Dự Án Thực Tế
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Hỗ trợ học viên tra cứu kết quả thi...
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
            <Grid item lg={6} xs={12} data-aos="fade-right">
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  image="https://res.cloudinary.com/toantqt/image/upload/v1619411484/icon-edu-d24/icon_5_thcp8v.jpg"
                  title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      Tài Nguyên Đồ họa
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Chia sẻ kho tài liệu học tập miễn phí...
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
            <Grid item lg={6} xs={12} data-aos="fade-left">
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  image="https://res.cloudinary.com/toantqt/image/upload/v1619411484/icon-edu-d24/icon_1_jlwoy6.jpg"
                  title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      Giới thiệu việc làm
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Học trực tiếp với giáo viên qua mạng Internet...
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SupportComponent;
