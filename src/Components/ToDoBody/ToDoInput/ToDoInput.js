import classes from "./ToDoInput.module.css";
import Done from "../../Layout/Button/Done";
import Card from "../../Layout/Card/Card";
const ToDoInput = (props) => {
  return (
    <Card className={classes.container}>
      <div className={classes.item}>
        <Done />
        <div>{props.children}</div>
      </div>
    </Card>
  );
};

export default ToDoInput;
