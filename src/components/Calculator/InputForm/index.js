import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: (props) => ({
    minHeight: 96,
    marginTop: props.fullWidth ? 0 : 24,
    margin: "0 16px",
    display: "flex",
    alignItems: "flex-end",
  }),
  input: {
    appearance: "none",
    outline: "none",
    border: "none",
    background: "none",
    fontSize: 68,
    color: "white",
    textAlign: "right",
    width: "100%",
    boxSizing: "border-box",
  },
}));

const InputForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <input className={classes.input} type="text" value={0} readOnly />
    </div>
  );
};

export default InputForm;
