import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeaderComponent from "../../Components/Header/Header.component";
import CourseDetailsComponent from "../../Components/Details/Course-Details.component";
const queryString = require("query-string");
const PageCourseView = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const id = query.id;
  return (
    <div>
      <HeaderComponent />
      <div>
        <CourseDetailsComponent courseID={id} />
      </div>
    </div>
  );
};

export default PageCourseView;
