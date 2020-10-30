import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  DivideIcon,
  TimesIcon,
  MinusIcon,
  PlusIcon,
  EqualsIcon,
} from "components/Icons";
import CircularButton from "./CircularButton";

const useStyles = makeStyles(() => ({
  root: {
    gridArea: "arithmeticOperator",

    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)",
  },
}));

const ArithmeticOperators = ({ handleOnClick }) => {
  const classes = useStyles();
  const {
    calculator: {
      button: { arithmeticOperator },
    },
  } = useTheme();
  return (
    <div className={classes.root}>
      <CircularButton
        content={<DivideIcon />}
        background={arithmeticOperator.background}
        color={arithmeticOperator.color}
        handleOnClick={() => handleOnClick("/", "arithmeticOperator")}
      />
      <CircularButton
        content={<TimesIcon />}
        background={arithmeticOperator.background}
        color={arithmeticOperator.color}
        handleOnClick={() => handleOnClick("*", "arithmeticOperator")}
      />
      <CircularButton
        content={<MinusIcon />}
        background={arithmeticOperator.background}
        color={arithmeticOperator.color}
        handleOnClick={() => handleOnClick("-", "arithmeticOperator")}
      />
      <CircularButton
        content={<PlusIcon />}
        background={arithmeticOperator.background}
        color={arithmeticOperator.color}
        handleOnClick={() => handleOnClick("+", "arithmeticOperator")}
      />
      <CircularButton
        content={<EqualsIcon />}
        background={arithmeticOperator.background}
        color={arithmeticOperator.color}
        handleOnClick={() => handleOnClick("=", "equal")}
      />
    </div>
  );
};

ArithmeticOperators.propTypes = {
  handleOnClick: PropTypes.func,
};

ArithmeticOperators.defaultProps = {
  handleOnClick: () => {},
};

export default ArithmeticOperators;
