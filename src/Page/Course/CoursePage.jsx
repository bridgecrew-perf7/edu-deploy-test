import React, { useState, useEffect } from "react";
import HeaderComponent from "../../Components/Header/Header.component";
import education from "../../Components/Education Soon/education.json";
import BannerComponent from "../../Components/Banner/Banner.component";
import ProgramComponent from "../../Components/Program/Program.component";
import FooterComponent from "../../Components/Footer/Footer.component";
import "../../assets/style/style.css";
export default function CoursePage(props) {
  const [slug, setSlug] = useState();
  const [course, setCourse] = useState();
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
  console.log(course);
  return (
    <div>
      <HeaderComponent />
      <div>
        <BannerComponent image={course?.image} name={course?.name} />
        <ProgramComponent program={course} />
      </div>
      <FooterComponent />
    </div>
  );
}
