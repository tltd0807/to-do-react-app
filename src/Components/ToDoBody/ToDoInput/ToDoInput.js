import classes from "./ToDoInput.module.css";
import Card from "../../Layout/Card/Card";
const ToDoInput = (props) => {
  return (
    <Card className={classes.container}>
      <form className={classes.item}>
        <div className={classes["round"]}></div>
        <input placeholder={props.children} className={classes.input} />
      </form>
    </Card>
  );
};

export default ToDoInput;
