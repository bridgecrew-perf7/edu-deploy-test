import React, { useState, useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./bannerArchives.css";

const BannerArchivesComponent = () => {
  const [select, setSelect] = useState("haha");
  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  return (
    <div className="banner">
      <div
        className="input-group mb-3"
        style={{ width: "40%", margin: "0 auto" }}
      >
        <div className="input-group-prepend">
          <FormControl variant="outlined">
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              onChange={handleChange}
              value={select}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
          style={{ height: "56px" }}
        />
      </div>
    </div>
  );
};
export default BannerArchivesComponent;
