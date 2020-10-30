import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Numbers from "./Numbers";
import ArithmeticOperators from "./ArithmeticOperators";
import OtherOperators from "./OtherOperators";

const useStyles = makeStyles(() => {
  return {
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
  };
});

const ButtonGrid = ({ fullWidth, matches, handleOnClick }) => {
  const classes = useStyles({ fullWidth, width: matches ? 480 : 360 });
  return (
    <div className={classes.gridContainer}>
      <div className={classes.buttonsGrid}>
        <OtherOperators handleOnClick={handleOnClick} />
        <Numbers handleOnClick={handleOnClick} />
        <ArithmeticOperators handleOnClick={handleOnClick} />
      </div>
    </div>
  );
};

ButtonGrid.propTypes = {
  fullWidth: PropTypes.bool,
  matches: PropTypes.bool,
  handleOnClick: PropTypes.func,
};

ButtonGrid.defaultProps = {
  fullWidth: false,
  matches: false,
  handleOnClick: () => {},
};

export default ButtonGrid;
