import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./errorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onErrorHandler}/>
      <Card cssClass={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>{props.message}</div>
        <footer className={classes.actions}>
          <Button clickOn={props.onErrorHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
