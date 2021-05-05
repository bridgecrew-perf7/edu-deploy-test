import React, { useEffect } from "react";
import "./filter.css";
import AOS from "aos";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import { blue } from "@material-ui/core/colors";
// import SearchIcon from "@material-ui/icons/Search";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    height: "30px",
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 20,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 200,

    // backgroundColor: "white",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(2),
  },
}));

export default function FilterComponent() {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="filter" data-aos="fade-up">
      <div className="container-fixed">
        <div className="row">
          <div className="col-md-12">
            <div className="wrapper-filter">
              <h1
                className="headline"
                style={{ textAlign: "center", fontWeight: "500" }}
              >
                Tìm khóa học quan tâm.
                <br className="visible-xs" />{" "}
              </h1>
              <div className="box-search">
                <div className={classes.search}>
                  <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-textbox">
                      Môn học
                    </InputLabel>
                    <BootstrapInput
                      id="demo-customized-textbox"
                      placeholder="Môn học"
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">
                      Chương trình đào tạo
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      //   value={age}
                      //   onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <ColorButton
                    variant="contained"
                    color="primary"
                    className={classes.margin}
                    style={{ marginTop: "36px" }}
                  >
                    Tìm kiếm nhanh
                  </ColorButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
