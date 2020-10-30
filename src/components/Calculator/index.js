import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DisplayBoard from "./DisplayBoard";
import ButtonGrid from "./ButtonsGrid";

const useStyles = makeStyles((theme) => {
  const {
    calculator: { background },
  } = theme;
  return {
    root: (props) => ({
      width: props.fullWidth ? "100%" : props.width,
      height: props.fullWidth ? "100%" : "auto",
      overflowY: "auto",
      backgroundImage: background,
      display: "flex",
      flexDirection: "column",
    }),
  };
});

const Calculator = ({ fullWidth, value, operator, handleOnClick }) => {
  const matches = useMediaQuery("(min-width:768px)");
  const classes = useStyles({ fullWidth, width: matches ? 480 : 360 });

  return (
    <div className={classes.root}>
      <DisplayBoard value={value} operator={operator} />
      <ButtonGrid
        fullWidth={fullWidth}
        matches={matches}
        handleOnClick={handleOnClick}
      />
    </div>
  );
};

Calculator.propTypes = {
  fullWidth: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  operator: PropTypes.string,
  handleOnClick: PropTypes.func,
};

Calculator.defaultProps = {
  fullWidth: false,
  value: 0,
  operator: "",
  handleOnClick: () => {},
};

export default Calculator;
