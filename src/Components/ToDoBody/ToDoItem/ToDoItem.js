import classes from "./ToDoItem.module.css";

const ToDoItem = (props) => {
  return (
    <div>
      <div>{props.toDoContent}</div>
    </div>
  );
};
export default ToDoItem;
