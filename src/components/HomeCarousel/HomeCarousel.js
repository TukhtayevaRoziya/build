import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomeCarousel.scss";

function HomeCarousel() {
  const map = [
    {
      id: 1,
      clas1: "for_backline1",
      class2: "slider1",
      title: "QURILISHLAR",
      title2: "BIZ QURGAN BINOLARNI LOYIHALAR BO'LIMIDA KO'RING",
    },
    {
      id: 2,
      clas1: "for_backline2",
      class2: "slider2",
      title: "QURILISHLAR",
      title2: "Biz qurgan 10 ta binolarni qanday qurilganini koring",
    },
    {
      id: 3,
      clas1: "for_backline3",
      class2: "slider3",
      title: "QURILISHLAR",
      title2: "Biz qurgan 10 ta binolarni qanday qurilganini koring",
    },
  ];
  const map2 = map.map((a) => (
    <Carousel.Item key={a.id}>
      <div className={a.clas1}>
        <div className={a.class2}>
          <div className="sometext">
            <h1>{a.title}</h1>
            <h4>{a.title2}</h4>
          </div>
        </div>
      </div>
    </Carousel.Item>
  ));
  return (
    <div className="HomeCarousel">
      <Carousel fade>{map2}</Carousel>
    </div>
  );
}

export default HomeCarousel;
