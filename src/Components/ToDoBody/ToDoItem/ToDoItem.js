import React, { useContext } from "react";

import ModeContext from "../../../store/Mode/mode-context";
import Close from "../../Layout/Button/Close";
import Done from "../../Layout/Button/Done";
import classes from "./ToDoItem.module.css";

const ToDoItem = (props) => {
  const modeCtx = useContext(ModeContext);
  const mode = modeCtx.darkMode ? "dark" : "light";

  return (
    <div
      className={`${classes["item-container"]} ${classes[mode]} ${props.className} `}
    >
      <div className={classes.item}>
        <Done
          isTick={props.isDone}
          className={classes.done}
          onClick={props.onUpdate}
        />
        <div
          className={`${classes["task"]} ${
            classes[props.isDone ? "done" : ""]
          }`}
        >
          {props.children}
        </div>
      </div>
      <Close className={classes.close} onClick={props.onClose} />
    </div>
  );
};
export default ToDoItem;
