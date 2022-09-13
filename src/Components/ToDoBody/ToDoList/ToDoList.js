import Card from "../../Layout/Card/Card";
import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoItem from "../ToDoItem/ToDoItem";
import classes from "./ToDoList.module.css";

const ToDoList = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <ToDoInput>Create a new todo...</ToDoInput>

        <ToDoItem>someText</ToDoItem>
        <ToDoItem>someText</ToDoItem>
        <ToDoItem>someText</ToDoItem>
        <ToDoItem>someText</ToDoItem>
      </div>
    </div>
  );
};

export default ToDoList;
