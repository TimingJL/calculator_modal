import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Numbers from "./Numbers";
import CalculateOperators from "./CalculateOperators";
import OtherOperator from "./OtherOperator";
import InputForm from "./InputForm";

const useStyles = makeStyles(() => ({
  root: (props) => ({
    width: props.fullWidth ? "100%" : props.width,
    height: props.fullWidth ? "100%" : "auto",
    overflowY: "auto",
    backgroundImage: "linear-gradient(#84baff, #0b0e1c)",
    display: "flex",
    flexDirection: "column",
  }),
  gridContainer: (props) => ({
    width: props.fullWidth ? "100vw" : props.width,
    height: props.fullWidth ? "125vw" : props.width * 1.25,
    padding: 8,
    boxSizing: "border-box",
  }),
  buttonsGrid: () => ({
    width: "100%",
    height: "100%",

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
  }),
  otherOperator: {
    gridArea: "other",
  },
  calculateOperators: {
    gridArea: "calculateOperators",
  },
}));

const Calculator = ({ fullWidth }) => {
  const matches = useMediaQuery("(min-width:768px)");
  const classes = useStyles({ fullWidth, width: matches ? 480 : 360 });
  return (
    <div className={classes.root}>
      <InputForm />
      <div className={classes.gridContainer}>
        <div className={classes.buttonsGrid}>
          <OtherOperator />
          <Numbers />
          <CalculateOperators />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
