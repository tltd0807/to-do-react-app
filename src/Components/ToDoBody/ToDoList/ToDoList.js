import ToDoFooter from "../ToDoInput/ToDoInput";
import ToDoItem from "../ToDoItem/ToDoItem";
import classes from "./ToDoList.module.css";

const ToDoList = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <ToDoFooter>Create a new todo...</ToDoFooter>
        <ToDoItem>someText</ToDoItem>
        <ToDoItem>someText</ToDoItem>
        <ToDoItem>someText</ToDoItem>
        <ToDoItem>someText</ToDoItem>
      </div>
    </div>
  );
};

export default ToDoList;
