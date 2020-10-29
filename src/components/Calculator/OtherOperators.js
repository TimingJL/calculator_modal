import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
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
  const background = "#afafaf";
  const color = "#000000";
  return (
    <div className={classes.root}>
      <CircularButton
        content="AC"
        background={background}
        color={color}
        fontSize={28}
        handleOnClick={() => handleOnClick("allClear", "allClear")}
      />
      <CircularButton
        content={<PlusMinusIcon />}
        background={background}
        color={color}
        handleOnClick={() => handleOnClick("plusMinus", "plusMinus")}
      />
      <CircularButton
        content={<PercentageIcon />}
        background={background}
        color={color}
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
