import classes from "./ToDoFooter.module.css";

const ToDoFooter = (props) => {
  const numberOfItems = 5;
  return (
    <div className={classes.container}>
      <div>{`${numberOfItems} items left`}</div>
      <div>Clear Completed</div>
    </div>
  );
};
export default ToDoFooter;
