import React from "react";
import classes from './FixedDiv.module.css';

const FixedDiv = (props) => {
  return <div className={classes.fixed_div}>{props.children}</div>;
};

export default FixedDiv;
