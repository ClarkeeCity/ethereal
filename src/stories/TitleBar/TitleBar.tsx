import React from "react";
import "./titlebar.scss";
import { useSelector } from 'react-redux';

interface TitleBarProps {
  os : string; // TODO: Get redux to apply the type of OS here.
}

export const TitleBar = () => {
  // const os = useSelector((state : any) => {
  //   console.log("value", state.setOS.value);
  //   state.setOS.value;
  // });
  //console.log(os);
  return (
    <div 
      id="titlebar"
      className={`titlebar--${"linux"}`}
    >
      <h1>Hello</h1>
    </div>
  );
};
