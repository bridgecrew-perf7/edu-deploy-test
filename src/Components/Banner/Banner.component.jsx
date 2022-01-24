import React, { useState, useEffect } from "react";
import "./banner.css";
export default function BannerComponent(props) {
  return (
    <div style={{ position: "relative" }} className="wrap-banner">
      <div className="header-name">
        <div className="name">
          <span>{props?.name}</span>
        </div>
      </div>
      <div className="banner">
        <img src={props?.image} width="100%" height="100%" />
      </div>
    </div>
  );
}
