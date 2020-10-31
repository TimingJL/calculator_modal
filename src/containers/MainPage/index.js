import React, { useState, useCallback, Suspense, lazy } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import AdaptiveModal from "components/AdaptiveModal";
import { isMobile } from "react-device-detect";
import {
  updateNumbers,
  calculateArithmeticOperation,
  clickEquals,
  allClear,
  clickPlusMinus,
  addDecimalPoint,
  translateToPercentage,
} from "actions/calculatorActions";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const Calculator = lazy(() => import("components/Calculator"));

const StyledButton = withStyles((theme) => {
  const { color, boxShadow } = theme;
  return {
    root: {
      color: "white",
      background: color.teachesOrange,
      borderRadius: 50,
      padding: "8px 20px",
      fontSize: 20,
      boxSizing: "border-box",
      transition: "all .3s ease-in-out",
      "&:hover": {
        background: color.teachesOrange,
        boxShadow: boxShadow.default,
      },
    },
  };
})(Button);

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  },
}));

const MainPage = ({
  value,
  operator,
  handleUpdateNumbers,
  handleCalculateArithmeticOperation,
  handleOnClickEquals,
  handleOnAllClear,
  handleOnClickPlusMinus,
  handleOnAddDecimalPoint,
  handleTranslateToPercentage,
}) => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const variant = isMobile ? "bottom-sheet" : "draggable-modal";

  const handleOnModalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleOnModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleOnClickCalculatorButton = useCallback((buttonValue, dataType) => {
    const actionStrategies = {
      number: (number) => handleUpdateNumbers(number),
      arithmeticOperator: (param) => handleCalculateArithmeticOperation(param),
      equal: (param) => handleOnClickEquals(param),
      decimalPoint: () => handleOnAddDecimalPoint(),
      allClear: () => handleOnAllClear(),
      plusMinus: () => handleOnClickPlusMinus(),
      percentage: () => handleTranslateToPercentage(),
    };

    const actionStrategy = actionStrategies[dataType];
    actionStrategy(buttonValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <StyledButton onClick={handleOnModalOpen}>計算機 Modal</StyledButton>
      <AdaptiveModal
        variant={variant}
        open={isModalOpen}
        handleClose={handleOnModalClose}
        content={
          <Suspense fallback={<div>Loading...</div>}>
            <Calculator
              fullWidth={isMobile}
              value={value}
              operator={operator}
              handleOnClick={handleOnClickCalculatorButton}
            />
          </Suspense>
        }
      />
    </div>
  );
};

MainPage.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  operator: PropTypes.string,
  handleUpdateNumbers: PropTypes.func,
  handleCalculateArithmeticOperation: PropTypes.func,
  handleOnClickEquals: PropTypes.func,
  handleOnAllClear: PropTypes.func,
  handleOnClickPlusMinus: PropTypes.func,
  handleOnAddDecimalPoint: PropTypes.func,
  handleTranslateToPercentage: PropTypes.func,
};

MainPage.defaultProps = {
  value: 0,
  operator: "",
  handleUpdateNumbers: () => {},
  handleCalculateArithmeticOperation: () => {},
  handleOnClickEquals: () => {},
  handleOnAllClear: () => {},
  handleOnClickPlusMinus: () => {},
  handleOnAddDecimalPoint: () => {},
  handleTranslateToPercentage: () => {},
};

const mapStateToProps = (state) => {
  const { value, operator } = state.calculatorReducer;
  return {
    value,
    operator,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleUpdateNumbers: (number) => dispatch(updateNumbers(number)),
  handleCalculateArithmeticOperation: (operator) =>
    dispatch(calculateArithmeticOperation(operator)),
  handleOnClickEquals: () => dispatch(clickEquals()),
  handleOnAllClear: () => dispatch(allClear()),
  handleOnClickPlusMinus: () => dispatch(clickPlusMinus()),
  handleOnAddDecimalPoint: () => dispatch(addDecimalPoint()),
  handleTranslateToPercentage: () => dispatch(translateToPercentage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
