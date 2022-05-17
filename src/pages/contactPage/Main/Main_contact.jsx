import React from "react";
import moduleName from "./Main_contact.module.css";
import { MainBlock } from './MainBlock/MainBlock_contact';
import Location from './Location/Location';
export const MainBlockContact = () => {
  return (
    <div className={moduleName.body}>
      <div className={moduleName.block_body}>
        <Location/>
        <MainBlock />
      </div>
    </div>
  );
};
