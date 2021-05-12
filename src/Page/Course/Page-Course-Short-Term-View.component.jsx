import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderComponent from "../../Components/Header/Header.component";
import CourseShortTermDetailsComponent from "../../Components/Details/Course-Short-Term-Detail.component";

const PageCourseShortTermView = (props) => {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <HeaderComponent />
      <div>
        <CourseShortTermDetailsComponent courseID={0} />
      </div>
    </div>
  );
};

export default PageCourseShortTermView;
