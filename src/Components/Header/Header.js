import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes[`header--dark`]}>
      <div className={classes.container}>
        <h1 className={classes.title}>TODO</h1>
        <div className={classes.icon}></div>
      </div>
    </header>
  );
};

export default Header;
