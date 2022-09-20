import React, { useContext } from "react";
import ModeContext from "../../../store/Mode/mode-context";
import Card from "../../Layout/Card/Card";
import classes from "./ToDoFilter.module.css";

const ToDoFilter = (props) => {
  const modeCtx = useContext(ModeContext);
  const mode = modeCtx.darkMode ? "dark" : "light";
  return (
    <Card className={`${classes.container} ${classes[mode]}`}>
      <div
        className={`${classes[props.filter.all ? `active-${mode}` : ""]} ${
          classes[`hover-${mode}`]
        }`}
        onClick={() => props.onFilter(1)}
      >
        All
      </div>
      <div
        className={`${classes[props.filter.active ? `active-${mode}` : ""]} ${
          classes[`hover-${mode}`]
        }`}
        onClick={() => props.onFilter(2)}
      >
        Active
      </div>
      <div
        className={`${
          classes[props.filter.completed ? `active-${mode}` : ""]
        } ${classes[`hover-${mode}`]}`}
        onClick={() => props.onFilter(3)}
      >
        Completed
      </div>
    </Card>
  );
};

export default ToDoFilter;
