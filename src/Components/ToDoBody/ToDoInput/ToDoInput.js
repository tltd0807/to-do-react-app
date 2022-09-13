import classes from "./ToDoInput.module.css";
import Card from "../../Layout/Card/Card";
const ToDoInput = (props) => {
  return (
    <Card className={classes.container}>
      <div className={classes.item}>
        <div className={classes["round"]}></div>
      </div>
      <input placeholder={props.children} className={classes.input} />
    </Card>
  );
};

export default ToDoInput;
