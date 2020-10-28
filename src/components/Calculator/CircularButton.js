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
    display: "flex",
    alignItems: "center",
    justifyContent: props.justifyContent,
    cursor: "pointer",
    "&:hover": {
      opacity: 0.7,
      background: props.background,
    },
  }),
  content: (props) => ({
    userSelect: "none",
    fontSize: props.fontSize || 36,
    marginLeft: props.justifyContent === "flex-start" ? "16%" : 0,
  }),
}));

const CircularButton = ({
  content,
  color,
  background,
  justifyContent,
  fontSize,
}) => {
  const classes = useStyles({
    color,
    background,
    justifyContent,
    fontSize,
  });
  return (
    <div className={classes.root}>
      <Button className={classes.button}>
        <span className={classes.content}>{content}</span>
      </Button>
    </div>
  );
};

CircularButton.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  color: PropTypes.string,
  background: PropTypes.string,
  justifyContent: PropTypes.string,
  fontSize: PropTypes.number,
};

CircularButton.defaultProps = {
  content: "",
  color: "",
  background: "",
  justifyContent: "center",
  fontSize: 36,
};

export default CircularButton;
