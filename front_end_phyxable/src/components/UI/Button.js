import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className === "danger" ? classes.danger : classes.success} ${props.className === "float_right" ? classes.float_right : ''}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
