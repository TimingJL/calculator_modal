import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
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
    gridArea: "calculateOperators",

    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)",
  },
}));

const CalculateOperators = ({ handleOnClick }) => {
  const classes = useStyles();
  const background = "#3091fd";
  const color = "#fff";
  return (
    <div className={classes.root}>
      <CircularButton
        content={<DivideIcon />}
        background={background}
        color={color}
        handleOnClick={() => handleOnClick("divide")}
      />
      <CircularButton
        content={<TimesIcon />}
        background={background}
        color={color}
        handleOnClick={() => handleOnClick("times")}
      />
      <CircularButton
        content={<MinusIcon />}
        background={background}
        color={color}
        handleOnClick={() => handleOnClick("minus")}
      />
      <CircularButton
        content={<PlusIcon />}
        background={background}
        color={color}
        handleOnClick={() => handleOnClick("plus")}
      />
      <CircularButton
        content={<EqualsIcon />}
        background={background}
        color={color}
        handleOnClick={() => handleOnClick("equals")}
      />
    </div>
  );
};

CalculateOperators.propTypes = {
  handleOnClick: PropTypes.func,
};

CalculateOperators.defaultProps = {
  handleOnClick: () => {},
};

export default CalculateOperators;
