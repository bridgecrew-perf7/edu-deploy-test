import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderComponent from "../../Components/Header/Header.component";
import CourseDetailsComponent from "../../Components/Details/Course-Details.component";
const PageCourseView = () => {
  const [courseID, setCourseID] = useState();
  let location = useLocation();
  useEffect(() => {
    setCourseID(location.state.id);
  }, []);

  return (
    <div>
      <HeaderComponent />
      <div>
        <CourseDetailsComponent courseID={location.state.id} />
      </div>
    </div>
  );
};

export default PageCourseView;
