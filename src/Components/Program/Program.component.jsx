import React, { useState, useEffect } from "react";
import "./program.css";
export default function ProgramComponent(props) {
  console.log(props);
  const lists = props?.program?.details?.map((e, index) => {
    console.log(e);
    return (
      <div className="program-item mt-3">
        <span>
          Buổi {index + 1} - {e}{" "}
        </span>
      </div>
    );
  });
  return (
    <div className="program mb-5">
      <div className="header-title">
        <span>Giáo trình</span>
      </div>
      <div>{lists}</div>
    </div>
  );
}
