import classes from "./ToDoFooter.module.css";

const ToDoFooter = (props) => {
  return (
    <div className={classes.container}>
      <div>{`${props.numberOfItems} items left`}</div>
      <div>Clear Completed</div>
    </div>
  );
};
export default ToDoFooter;
