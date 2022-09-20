import { useEffect, useState } from "react";
import Card from "../../Layout/Card/Card";
import ToDoFilter from "../ToDoFilter/ToDoFilter";
import ToDoFooter from "../ToDoFooter/ToDoFooter";
import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoItem from "../ToDoItem/ToDoItem";
import classes from "./ToDoList.module.css";

const ToDoList = (props) => {
  const [todo, setTodo] = useState("");

  // lấy lên dạng string và parse về arr
  const [todoAll, setTodoAll] = useState(
    JSON.parse(localStorage.getItem("task"))
  );

  const addToDoHandler = (event) => {
    setTodo(event.target.value);
  };
  const onKeyDownHandler = (event) => {
    if (event.key == "Enter") {
      if (todo !== "") {
        const newToDo = {
          isDone: false,
          task: todo,
        };
        // check if todoAll is null
        if (todoAll) {
          setTodoAll([...todoAll, newToDo]);
        } else {
          setTodoAll([newToDo]);
        }
        event.target.value = "";
        setTodo("");
      }
    }
  };
  const removeToDoHandler = (id) => {
    const newToDoAll = todoAll.filter((todo, index) => {
      return index !== id;
    });
    // console.log(newToDoAll);
    setTodoAll(newToDoAll);
  };

  const updateToDo = (id) => {
    const todo = todoAll.filter((todo, index) => {
      return index === id;
    });
    const newToDoAll = [...todoAll];
    const newToDo = {
      isDone: !todo[0].isDone,
      task: todo[0].task,
    };
    newToDoAll[id] = newToDo;
    setTodoAll(newToDoAll);
  };
  const onClearHandler = () => {
    const newToDoAll = todoAll.filter((todo, index) => {
      return todo.isDone !== true;
    });
    setTodoAll(newToDoAll);
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(todoAll));
  }, [todoAll]);

  return (
    <div className={classes.container}>
      <div>
        <ToDoInput onAdd={addToDoHandler} onKeyDownHandler={onKeyDownHandler}>
          Create a new todo...
        </ToDoInput>
        <Card>
          {todoAll !== null &&
            todoAll.map((todo) => (
              <ToDoItem
                key={todoAll.indexOf(todo)}
                id={todoAll.indexOf(todo)}
                isDone={todo.isDone}
                onClose={() => removeToDoHandler(todoAll.indexOf(todo))}
                onUpdate={() => updateToDo(todoAll.indexOf(todo))}
              >
                {todo.task}
              </ToDoItem>
            ))}

          <ToDoFooter
            numberOfItems={todoAll ? todoAll.length : 0}
            onClear={onClearHandler}
          ></ToDoFooter>
        </Card>

        <ToDoFilter></ToDoFilter>
      </div>
    </div>
  );
};

export default ToDoList;
