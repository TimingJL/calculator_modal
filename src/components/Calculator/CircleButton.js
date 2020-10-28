import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

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
    display: "flex",
    alignItems: "center",
    justifyContent: props.justifyContent,
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
    "&:active": {
      opacity: 0.5,
    },
  }),
  text: (props) => ({
    marginLeft: props.justifyContent === "flex-start" ? "16%" : 0,
    userSelect: "none",
    fontSize: 36,
  }),
}));

const CircleButton = ({ text, color, background, justifyContent }) => {
  const classes = useStyles({ color, background, justifyContent });
  return (
    <div className={classes.root}>
      <div className={classes.button}>
        <span className={classes.text}>{text}</span>
      </div>
    </div>
  );
};

CircleButton.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  background: PropTypes.string,
  justifyContent: PropTypes.string,
};

CircleButton.defaultProps = {
  text: "",
  color: "",
  background: "",
  justifyContent: "center",
};

export default CircleButton;
