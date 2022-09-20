import classes from "./ToDoFilter.module.css";

import Card from "../../Layout/Card/Card";

const ToDoFilter = (props) => {
  return (
    <Card className={classes.container}>
      <div
        className={classes[props.filter.all ? "active" : ""]}
        onClick={() => props.onFilter(1)}
      >
        All
      </div>
      <div
        className={classes[props.filter.active ? "active" : ""]}
        onClick={() => props.onFilter(2)}
      >
        Active
      </div>
      <div
        className={classes[props.filter.completed ? "active" : ""]}
        onClick={() => props.onFilter(3)}
      >
        Completed
      </div>
    </Card>
  );
};

export default ToDoFilter;
