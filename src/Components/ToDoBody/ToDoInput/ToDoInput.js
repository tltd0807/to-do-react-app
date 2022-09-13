import classes from "./ToDoInput.module.css";
import Card from "../../Layout/Card/Card";
const ToDoInput = (props) => {
  return (
    <Card className={classes.container}>
      <div className={classes.item}>
        <div className={classes["round"]}></div>
        <div>{props.children}</div>
      </div>
    </Card>
  );
};

export default ToDoInput;