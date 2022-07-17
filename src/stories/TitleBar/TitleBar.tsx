import React from "react";
import "./titlebar.scss";
import { useSelector } from 'react-redux';

export const TitleBar = () => {
  return (
    <div 
      id="titlebar"
      className={`titlebar--${"linux"}`}
    >
      <h1>Hello</h1>
    </div>
  );
};
