import classes from "./ToDoFilter.module.css";

import Card from "../../Layout/Card/Card";

const ToDoFilter = (props) => {
  return (
    <Card className={classes.container}>
      <div>All</div>
      <div>Active</div>
      <div>Completed</div>
    </Card>
  );
};

export default ToDoFilter;
