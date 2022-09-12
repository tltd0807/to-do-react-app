import classes from "./Close.module.css";
import Icon from "../../../asset/images/icon-cross.svg";

const Close = () => {
  return (
    <div className={classes.close}>
      <img src={Icon} alt="icon-cross" />
    </div>
  );
};
export default Close;
