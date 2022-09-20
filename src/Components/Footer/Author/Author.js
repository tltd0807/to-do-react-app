import React, { useContext } from "react";
import ModeContext from "../../../store/Mode/mode-context";
import classes from "./Author.module.css";

const Author = (props) => {
  const modeCtx = useContext(ModeContext);
  const mode = modeCtx.darkMode ? "dark" : "light";
  return (
    <div
      className={`${classes.attribution} ${props.className} ${classes[mode]}`}
    >
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      Coded by{" "}
      <a href="https://www.frontendmentor.io/profile/tltd0807" target="_blank">
        To Dat
      </a>
      .
    </div>
  );
};

export default Author;
