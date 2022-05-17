import React from "react";
import style from "../news/HeaderNews/HeaderNews.module.css";
import { NavLink } from "react-router-dom";
import img from "../../assets/architecture2.jpg";
const ProjectHeader = (props) => {
  return (
    <div>
      {/* <MobileNav1 /> */}
      <div className={style.HeaderNews}>
        <img src={img} alt="rasm bor edi!" />

        <div className={style.BlockLink}>
          <h1 data-aos="fade-up" data-aos-duration="1000">
            Projects
          </h1>
          <NavLink
            data-aos="fade-up"
            data-aos-duration="700"
            to="*"
            className={style.Block1}
          >
            Home
          </NavLink>
          <a
            data-aos="fade-up"
            data-aos-duration="700"
            href="*"
            className={style.Block2}
          >
              / Project{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectHeader;
