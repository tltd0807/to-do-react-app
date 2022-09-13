import classes from "./Close.module.css";
import Icon from "../../../asset/images/icon-cross.svg";

const Close = (props) => {
  return (
    <div className={`${classes.close} ${props.className}`}>
      <img src={Icon} alt="icon-cross" />
    </div>
  );
};
export default Close;
