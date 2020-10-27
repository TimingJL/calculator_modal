import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: (props) => ({
    color: props.color,
    background: props.background,
    height: "100%",
    width: "100%",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: 48,
    "&:hover": {
      opacity: 0.8,
    },
  }),
}));

const CircleButton = ({ text, color, background }) => {
  const classes = useStyles({ color, background });
  return <div className={classes.root}>{text}</div>;
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
