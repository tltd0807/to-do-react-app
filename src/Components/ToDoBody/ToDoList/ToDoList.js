import Card from "../../Layout/Card/Card";
import ToDoFilter from "../ToDoFilter/ToDoFilter";
import ToDoFooter from "../ToDoFooter/ToDoFooter";
import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoItem from "../ToDoItem/ToDoItem";
import classes from "./ToDoList.module.css";

const ToDoList = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <ToDoInput>Create a new todo...</ToDoInput>
        <Card>
          <ToDoItem>someText</ToDoItem>
          <ToDoItem>someText</ToDoItem>
          <ToDoItem>someText</ToDoItem>
          <ToDoItem>someText</ToDoItem>
          <ToDoFooter></ToDoFooter>
        </Card>

        <ToDoFilter></ToDoFilter>
      </div>
    </div>
  );
};

export default ToDoList;
