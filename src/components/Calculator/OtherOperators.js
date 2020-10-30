import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { PlusMinusIcon, PercentageIcon } from "components/Icons";
import CircularButton from "./CircularButton";

const useStyles = makeStyles(() => ({
  root: {
    gridArea: "otherOperator",

    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(1, 1fr)",
  },
}));

const OtherOperators = ({ handleOnClick }) => {
  const classes = useStyles();
  const {
    calculator: {
      button: { otherOperator },
    },
  } = useTheme();
  return (
    <div className={classes.root}>
      <CircularButton
        content="AC"
        background={otherOperator.background}
        color={otherOperator.color}
        fontSize={28}
        handleOnClick={() => handleOnClick("allClear", "allClear")}
      />
      <CircularButton
        content={<PlusMinusIcon />}
        background={otherOperator.background}
        color={otherOperator.color}
        handleOnClick={() => handleOnClick("plusMinus", "plusMinus")}
      />
      <CircularButton
        content={<PercentageIcon />}
        background={otherOperator.background}
        color={otherOperator.color}
        handleOnClick={() => handleOnClick("percentage", "percentage")}
      />
    </div>
  );
};

OtherOperators.propTypes = {
  handleOnClick: PropTypes.func,
};

OtherOperators.defaultProps = {
  handleOnClick: () => {},
};

export default OtherOperators;
