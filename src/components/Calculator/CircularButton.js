import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: (props) => ({
    color: props.color,
    background: props.background,
    height: "calc(100% - 16px)",
    width: "calc(100% - 16px)",
    borderRadius: 50,
    display: "grid",
    gridTemplateRows: `repeat(${props.rows}, 1fr)`,
    gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.7,
      background: props.background,
    },
  }),
  text: () => ({
    userSelect: "none",
    fontSize: 36,
  }),
}));

const CircularButton = ({
  text,
  color,
  background,
  justifyContent,
  rows,
  columns,
}) => {
  const classes = useStyles({
    color,
    background,
    justifyContent,
    rows,
    columns,
  });
  return (
    <div className={classes.root}>
      <Button className={classes.button}>
        <span className={classes.text}>{text}</span>
      </Button>
    </div>
  );
};

CircularButton.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  background: PropTypes.string,
  justifyContent: PropTypes.string,
  rows: PropTypes.number,
  columns: PropTypes.number,
};

CircularButton.defaultProps = {
  text: "",
  color: "",
  background: "",
  justifyContent: "center",
  rows: 1,
  columns: 1,
};

export default CircularButton;
