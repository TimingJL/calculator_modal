import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: (props) => ({
    minHeight: 96,
    marginTop: props.fullWidth ? 0 : 24,
    padding: "0 16px",
    textAlign: "right",
    color: "white",
  }),
  displayOperator: {
    height: 20,
  },
  displayValue: {
    appearance: "none",
    outline: "none",
    border: "none",
    background: "none",
    fontSize: 68,
    width: "100%",
    boxSizing: "border-box",
  },
}));

const DisplayBoard = ({ value, operator }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.displayOperator}>{operator}</div>
      <div className={classes.displayValue}>{value}</div>
    </div>
  );
};

DisplayBoard.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  operator: PropTypes.string,
};

DisplayBoard.defaultProps = {
  value: 0,
  operator: "",
};

export default DisplayBoard;
