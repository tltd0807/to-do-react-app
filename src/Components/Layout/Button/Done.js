import classes from "./Done.module.css";
import Icon from "../../../asset/images/icon-check.svg";
const Done = (props) => {
  return (
    <div className={`${classes.done} ${props.className}`}>
      <img src={Icon} alt="icon-check" />
    </div>
  );
};
export default Done;
