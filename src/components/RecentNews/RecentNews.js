import React from "react";
import { Link } from "react-router-dom";
import "./RecentNews.scss";
import img1 from "../../assets/slider1.jpg";
import img2 from "../../assets/slider2.jpg";
import img3 from "../../assets/slider3.jpg";
function RecentNews() {
  const map = [
    {
      id: 1,
      img: img1,
      title1: "Bke parts warehouse.DE",
      date: "2022.04.03",
      title2: `  We take our time for lunch, because we didn't have a breakfast.
              Usually I don't eat breakfast,so My mother always punish me )`,
      link: "news",
    },
    {
      id: 2,
      img: img2,
      title1: "Bke parts warehouse.DE",
      date: "2022.04.03",
      title2: `you should always have breakfast because breakfast is good for your health)`,
      link: "news",
    },
    {
      id: 3,
      img: img3,
      title1: "Bke parts warehouse.DE",
      date: "2022.04.03",
      title2: `you should always have breakfast because breakfast is good for your health)`,
      link: "news",
    },
  ];
  const map2 = map.map((a) => (
    <div className="col-md-4" key={a.id}>
      <Link to="news">
        <div className="top">
          <img src={img2} alt="Image" />
        </div>
        <div className="news_text">
          <h3>{a.title1}</h3>
          <span className="date">{a.date}</span>
          <p>{a.title2}</p>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="RecentNews">
      <div className="container">
        <div className="intro">
          <h2>So'ngi yangiliklar</h2>
        </div>
        <div className="row">{map2}</div>
      </div>
    </div>
  );
}

export default RecentNews;
