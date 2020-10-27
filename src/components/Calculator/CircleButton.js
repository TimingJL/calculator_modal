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
    justifyContent: "center",
    cursor: "pointer",
    fontSize: 36,
    userSelect: "none",
    "&:hover": {
      opacity: 0.8,
    },
    "&:active": {
      opacity: 0.5,
    },
  }),
}));

const CircleButton = ({ text, color, background }) => {
  const classes = useStyles({ color, background });
  return (
    <div className={classes.root}>
      <span className={classes.button}>{text}</span>
    </div>
  );
};

CircleButton.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  background: PropTypes.string,
};

CircleButton.defaultProps = {
  text: "",
  color: "",
  background: "",
};

export default CircleButton;
