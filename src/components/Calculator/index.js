import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(() => ({
  root: (props) => ({
    width: props.fullWidth ? "100%" : props.width,
  }),
}));

const Calculator = ({ fullWidth }) => {
  const matches = useMediaQuery("(min-width:768px)");
  const classes = useStyles({ fullWidth, width: matches ? 480 : 360 });
  return <div className={classes.root}>Calculator</div>;
};

export default Calculator;
