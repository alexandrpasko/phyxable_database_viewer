import React from "react";
import classes from "./FlashMessage.module.css";

const FlashMessage = (props) => {
  setTimeout(function () {
    props.onClose();
  }, props.duration);

  return <div className={classes.flash_message}>{props.message}</div>;
};

export default FlashMessage;
