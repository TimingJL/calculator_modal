import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: (props) => ({
    minHeight: 96,
    marginTop: props.fullWidth ? 0 : 24,
    padding: "0 16px",
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

const DisplayBoard = ({ value }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.input}>{value}</div>
    </div>
  );
};

DisplayBoard.propTypes = {
  value: PropTypes.number,
};

DisplayBoard.defaultProps = {
  value: 0,
};

export default DisplayBoard;
