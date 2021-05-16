import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderComponent from "../../Components/Header/Header.component";
import CourseShortTermDetailsComponent from "../../Components/Details/Course-Short-Term-Detail.component";
const queryString = require("query-string");

const PageCourseShortTermView = (props) => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const id = query.id;
  return (
    <div>
      <HeaderComponent />
      <div>
        <CourseShortTermDetailsComponent courseID={id} />
      </div>
    </div>
  );
};

export default PageCourseShortTermView;
