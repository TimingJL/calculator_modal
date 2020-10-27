import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(() => ({
  root: (props) => ({
    width: props.fullWidth ? "100%" : props.width,
    height: props.fullWidth ? "100%" : 500,
    backgroundImage: "linear-gradient(#84baff, #0b0e1c)",
    display: "flex",
    flexDirection: "column",
  }),
  buttonsContainer: {
    flex: "1 1 auto",

    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)",
    gridTemplateAreas: `
      "other other other calculateOperators"
      "numbers numbers numbers calculateOperators"
      "numbers numbers numbers calculateOperators"
      "numbers numbers numbers calculateOperators"
      "numbers numbers numbers calculateOperators"
    `,
  },
  otherOperator: {
    gridArea: "other",
    background: "grey",
  },
  calculateOperators: {
    gridArea: "calculateOperators",
    background: "blue",
  },
  numbers: {
    gridArea: "numbers",
    background: "black",
  },
}));

const Calculator = ({ fullWidth }) => {
  const matches = useMediaQuery("(min-width:768px)");
  const classes = useStyles({ fullWidth, width: matches ? 480 : 360 });
  return (
    <div className={classes.root}>
      <div>input form</div>
      <div className={classes.buttonsContainer}>
        <div className={classes.otherOperator} />
        <div className={classes.numbers} />
        <div className={classes.calculateOperators} />
      </div>
    </div>
  );
};

export default Calculator;
