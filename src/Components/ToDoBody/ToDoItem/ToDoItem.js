import Close from "../../Layout/Button/Close";
import Done from "../../Layout/Button/Done";
import classes from "./ToDoItem.module.css";

const ToDoItem = (props) => {
  return (
    <div className={`${classes["item-container"]} ${props.className} `}>
      <div className={classes.item}>
        <Done isTick={false} className={classes.done} />
        <div>{props.children}</div>
      </div>
      <Close className={classes.close} onClick={props.onClose} />
    </div>
  );
};
export default ToDoItem;
