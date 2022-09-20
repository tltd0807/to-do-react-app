import classes from "./ToDoFilter.module.css";

import Card from "../../Layout/Card/Card";

const ToDoFilter = (props) => {
  return (
    <Card className={classes.container}>
      <div onClick={() => props.onFilter(1)}>All</div>
      <div onClick={() => props.onFilter(2)}>Active</div>
      <div onClick={() => props.onFilter(3)}>Completed</div>
    </Card>
  );
};

export default ToDoFilter;
