import classes from "./Done.module.css";
import Icon from "../../../asset/images/icon-check.svg";
const Done = () => {
  return (
    <div className={classes.done}>
      <img src={Icon} alt="icon-check" />
    </div>
  );
};
export default Done;
