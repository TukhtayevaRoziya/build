import React  from "react";
import style from "../HeaderNews/HeaderNews.module.css";
import img from "../../../assets/1.jpg"
import img2 from "../../../assets/architecture1.jpg";
import "./MainNewsCopy.css";
import { NavLink } from "react-router-dom";
<link
  href="https://fonts.googleapis.com/css?family=Raleway:400,800,300"
  rel="stylesheet"
  type="text/css"
></link>;
 const NewsPage = (props) => {
          const map23 = [
            { id: 1, photoUrl: img, title_uz: "robiya yangiligi" },
            { id: 2, photoUrl: img2, title_uz: "robiya yangiligi2" },
          ];
  const map2 = map23.map((a, index) => (
    <div
      key={index}
      data-aos="fade-up"
      data-aos-duration="700"
      className={style.Kategoriya}
    >
      <div className="content">
        <div className="grid">
          <figure className="effect-bubba">
            <img src={a.photoUrl} alt="bu yerda rasm bor edi!" />
            <figcaption>
              <NavLink to={"/singilur"}> </NavLink>
              <h2>Yangilik</h2>
              <p>Bizda doim 1 o`qing</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className={style.Katalog}>
        <div style={{ width: "100%" }}>
          {" "}
         
          <h1>News</h1>
        </div>
        {map2}
      </div>
    </div>
  );
};
export default NewsPage