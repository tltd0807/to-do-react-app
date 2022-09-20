import classes from "./Done.module.css";
import Icon from "../../../asset/images/icon-check.svg";
const Done = (props) => {
  const isTick = props.isTick ? "isTick" : "";
  return (
    <div
      className={`${classes.done} ${props.className} ${classes[isTick]}`}
      onClick={props.onClick}
    >
      {props.isTick && <img src={Icon} alt="icon-check" />}
    </div>
  );
};
export default Done;
