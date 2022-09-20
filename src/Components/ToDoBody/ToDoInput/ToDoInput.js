import React, { useContext } from "react";

import Card from "../../Layout/Card/Card";
import ModeContext from "../../../store/Mode/mode-context";
import classes from "./ToDoInput.module.css";
const ToDoInput = (props) => {
  const modeCtx = useContext(ModeContext);
  const mode = modeCtx.darkMode ? "dark" : "light";
  return (
    <Card className={`${classes.container} ${classes[mode]}`}>
      <div className={classes.item}>
        <div className={classes["round"]}></div>
        <input
          placeholder={props.children}
          className={classes.input}
          onChange={props.onAdd}
          onKeyDown={props.onKeyDownHandler}
        />
      </div>
    </Card>
  );
};

export default ToDoInput;
