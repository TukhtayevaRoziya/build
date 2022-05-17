import React from "react";
import style from "./HeaderNews/HeaderNews.module.css";
// import img2 from "../../../assets/architecture1.jpg";
import img2 from "../../assets/architecture1.jpg";

const SingleNews = (props) => {
  return (
    <div className={style.WrappererNews}>
      <div
        className={style.HeaderNews2}
        style={{ backgroundImage: `url(${img2})` }}
      >
        <h1 data-aos="fade-up" data-aos-duration="1000">
          yangilik eng so`ngi
        </h1>
      </div>
      <div
        className={style.SingleKatalog}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={style.discription} style={{ width: "100%" }}>
          <h1
            className={style.TitleName}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Biz bilan qolng !
          </h1>
          <h1 className={style.description4}>
            "On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains." "On the other hand, we denounce with righteous
            indignation and dislike men who are so beguiled and demoralized by
            the charms of pleasure of the moment, so blinded by desire, that
            they cannot foresee the pain and trouble that are bound to ensue;
            and equal blame belongs to those who fail in their duty through
            weakness of will, which is the same as saying through shrinking from
            toil and pain. These cases are perfectly simple and easy to
            distinguish. In a free hour, when our power of choice is
            untrammelled and when nothing prevents our being able to do what we
            like best, every pleasure is to be welcomed and every pain avoided.
            But in certain circumstances and owing to the claims of duty or the
            obligations of business it will frequently occur that pleasures have
            to be repudiated and annoyances accepted. The wise man therefore
            always holds in these matters to this principle of selection: he
            rejects pleasures to secure other greater pleasures, or else he
            endures pains to avoid worse pains."
          </h1>
        </div>
      </div>
    </div>
  );
};
export default SingleNews;
