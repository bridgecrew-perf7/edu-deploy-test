import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Box,
  IconButton,
  Typography,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import { Close } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import "./modal.css";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Slide from "@material-ui/core/Slide";
const ModalFormContactComponent = (props) => {
  const history = useHistory();

  const [data, setData] = useState({
    phoneNumber: "",
    fullName: "",
  });

  const handleClick = () => {
    if (!data.phoneNumber || data.phoneNumber === "") {
      alert("Xin vui lòng nhập số điện thoại");
    } else if (!data.fullName || data.fullName === "") {
      alert("Xin vui lòng nhập họ tên");
    } else {
      props?.handleClose();
    }
  };

  const handleChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <Dialog
      open={props?.open}
      onClose={props?.handleClose}
      maxWidth="sm"
      className="wrap-modal modal-form"
    >
      <Box position="absolute" top={0} right={0}>
        <IconButton onClick={props?.handleClose} style={{ color: "white" }}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent
        style={{
          textAlign: "center",
        }}
        className="mt-1"
      >
        <DialogTitle style={{ color: "white" }}>
          {" "}
          <span className="title-modal-form">
            Cảm ơn bạn đã quan tâm đến khóa học <br /> Xin bạn vui lòng cung cấp
            thông tin <br /> để được liên hệ tư vấn:
          </span>
        </DialogTitle>
        <div className="modal-btn">
          <Grid container spacing={1}>
            <Grid item lg={4} md={2} xs={12}>
              <div className="title-input-form">
                <span>Họ và tên:</span>
              </div>
            </Grid>
            <Grid item lg={8} md={10} xs={12}>
              <div>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="input-modal"
                  size="small"
                  onChange={(e) => {
                    handleChangeInput(e);
                  }}
                  name="fullName"
                />
              </div>
            </Grid>

            <Grid item lg={4} md={2} xs={12}>
              <div className="title-input-form">
                <span>Số điện thoại:</span>
              </div>
            </Grid>
            <Grid item lg={8} md={10} xs={12}>
              <div>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="input-modal"
                  size="small"
                  type="number"
                  onChange={(e) => {
                    handleChangeInput(e);
                  }}
                  name="phoneNumber"
                />
              </div>
            </Grid>

            <Grid item lg={4} md={2} xs={12}>
              <div className="title-input-form">
                <span>Ghi chú:</span>
              </div>
            </Grid>
            <Grid item lg={8} md={10} xs={12}>
              <div>
                <TextareaAutosize
                  minRows={3}
                  style={{ width: "100%", height: "90px", borderRadius: "4px" }}
                />
                {/* <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="input-modal"
                  size="small"
                  type="number"
                  onChange={(e) => {
                    handleChangeInput(e);
                  }}
                  name="phoneNumber"
                /> */}
              </div>
            </Grid>
          </Grid>
          <a
            className="btn-yes mt-3"
            onClick={handleClick}
            style={{ float: "right", fontSize: "16px" }}
          >
            Xác nhận
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalFormContactComponent;
