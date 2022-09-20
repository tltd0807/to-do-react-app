import React, { useContext } from "react";
import ModeContext from "../../../store/Mode/mode-context";
import classes from "./ToDoFooter.module.css";

const ToDoFooter = (props) => {
  const modeCtx = useContext(ModeContext);
  const mode = modeCtx.darkMode ? "dark" : "light";
  return (
    <div className={`${classes.container} ${classes[mode]}`}>
      <div>{`${props.numberOfItems} items left`}</div>
      <div
        className={`${classes.clear} ${classes[`clear-${mode}`]}`}
        onClick={props.onClear}
      >
        Clear Completed
      </div>
    </div>
  );
};
export default ToDoFooter;
