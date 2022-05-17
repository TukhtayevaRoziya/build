import React from "react";
import { NavLink } from "react-router-dom";
import moduleName from "./HeaderImg.module.css";
export const Breadcrumb = ({ pageNameForTitle, pageName }) => {
  return (
    <>
      <h1
        data-aos="fade-up"
        data-aos-duration="700"
        className={moduleName.title}
      >
        {pageNameForTitle}
      </h1>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className={moduleName.breadcrumb}
      >
        <NavLink to={"*"}>Home page / </NavLink>
        <h3> {pageName}</h3>
      </div>
    </>
  );
};
