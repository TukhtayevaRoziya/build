import React from "react";
import { HeaderImgContact } from "./HeaderImg/HeaderImg_contact";
import { MainBlockContact } from "./Main/Main_contact";
import YandexMap from "./YandexMap/Map";
import MobileNav1 from "./../mobilnav/MobileNav1";

const ContactPage = () => {
  return (
    <div>
      <MobileNav1 />
      <HeaderImgContact />
      <MainBlockContact />
      <YandexMap />
    </div>
  );
};
export default ContactPage;
