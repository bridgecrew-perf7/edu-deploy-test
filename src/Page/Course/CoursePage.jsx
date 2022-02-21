import React, { useState, useEffect } from "react";
import HeaderComponent from "../../Components/Header/Header.component";
import education from "../../Components/Education Soon/education.json";
import BannerComponent from "../../Components/Banner/Banner.component";
import ProgramComponent from "../../Components/Program/Program.component";
import FooterComponent from "../../Components/Footer/Footer.component";
import "../../assets/style/style.css";
import CourseDescriptionComponent from "../../Components/Course Description/CourseDescription.component";
import ModalFormContactComponent from "../../Components/Modal/ModalFormContact.component";
import AOS from "aos";

export default function CoursePage(props) {
  const [slug, setSlug] = useState();
  const [course, setCourse] = useState();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (props.match.params.slug) {
      setSlug(props.match.params.slug);
      console.log(props.match.params.slug);

      education?.course?.map((e) => {
        if (e.slug === props.match.params.slug) {
          setCourse(e);
        }
      });
    }
  }, [props]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <HeaderComponent />
      <div>
        <BannerComponent image={course?.image} name={course?.name} />
        <CourseDescriptionComponent
          program={course}
          handleClick={handleClick}
        />

        <ProgramComponent program={course} />
        <ModalFormContactComponent
          open={open}
          handleClose={handleClose}
          courseName={course?.name}
        />
      </div>
      <FooterComponent />
    </div>
  );
}
