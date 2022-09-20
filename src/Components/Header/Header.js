import React, { useContext } from "react";
import ModeContext from "../../store/Mode/mode-context";
import classes from "./Header.module.css";

const Header = (props) => {
  const modeCtx = useContext(ModeContext);
  const mode = modeCtx.darkMode ? "dark" : "light";

  return (
    <header className={`${classes.header} ${classes[`header-${mode}`]}`}>
      <div className={classes.container}>
        <h1 className={classes.title}>TODO</h1>
        <div
          className={`${classes.icon} ${classes[`icon-${mode}`]}`}
          onClick={props.onChangeMode}
        ></div>
      </div>
    </header>
  );
};

export default Header;
