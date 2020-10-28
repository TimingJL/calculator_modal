import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Numbers from "./Numbers";
import ArithmeticOperators from "./ArithmeticOperators";
import OtherOperators from "./OtherOperators";
import DisplayBoard from "./DisplayBoard";

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
      "otherOperator otherOperator otherOperator arithmeticOperator"
      "numbers numbers numbers arithmeticOperator"
      "numbers numbers numbers arithmeticOperator"
      "numbers numbers numbers arithmeticOperator"
      "numbers numbers numbers arithmeticOperator"
    `,
  }),
}));

const Calculator = ({ fullWidth, value, handleOnClick }) => {
  const matches = useMediaQuery("(min-width:768px)");
  const classes = useStyles({ fullWidth, width: matches ? 480 : 360 });

  return (
    <div className={classes.root}>
      <DisplayBoard value={value} />
      <div className={classes.gridContainer}>
        <div className={classes.buttonsGrid}>
          <OtherOperators handleOnClick={handleOnClick} />
          <Numbers handleOnClick={handleOnClick} />
          <ArithmeticOperators handleOnClick={handleOnClick} />
        </div>
      </div>
    </div>
  );
};

Calculator.propTypes = {
  value: PropTypes.number,
  fullWidth: PropTypes.bool,
  handleOnClick: PropTypes.func,
};

Calculator.defaultProps = {
  value: 0,
  fullWidth: false,
  handleOnClick: () => {},
};

export default Calculator;
