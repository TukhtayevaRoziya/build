import React from "react";
import { Breadcrumb } from "./HeaderImg/Breadcrumb.jsx";
import logo from "./HeaderImg/changed.jpg";
import moduleName from "./Header_contact.module.css";

function ContactHeader() {
  return <>
    {" "}
    <div
      className={moduleName.body}
      style={{
        backgroundImage: `url(${logo})`,
      }}
    >
      <Breadcrumb pageName="contact " pageNameForTitle="  Contact" />
    </div>
  </>;
}
export default ContactHeader;