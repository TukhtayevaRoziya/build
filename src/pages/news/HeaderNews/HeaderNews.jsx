import React from "react";
import style from "./HeaderNews.module.css";
import { NavLink } from "react-router-dom";
import img from "../picture/video-2.mp4"
// import MobileNav1 from "./../mobilnav/MobileNav1";
const MainNews = (props) => {
  return (
    <div>
      {/* <MobileNav1 /> */}
      <div className={style.HeaderNews}>
   <video src={img} autoPlay loop></video>

        <div className={style.BlockLink}>
          <h1 data-aos="fade-up" data-aos-duration="1000">
        News
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
   /  News        </a>
        </div>
      </div>
    </div>
  );
};
export default MainNews;