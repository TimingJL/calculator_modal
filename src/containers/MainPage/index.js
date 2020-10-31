import React, { useState, useCallback, Suspense, lazy } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import AdaptiveModal from "components/AdaptiveModal";
import SwitchButton from "components/SwitchButton";
import useDeviceDetect from "customHooks/useDeviceDetect";
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
      background: color.primary,
      borderRadius: 50,
      padding: "12px 28px",
      fontSize: 20,
      boxSizing: "border-box",
      transition: "all .3s ease-in-out",
      "&:hover": {
        background: color.primary,
        boxShadow: boxShadow.default,
      },
    },
  };
})(Button);

const useStyles = makeStyles((theme) => {
  const { color } = theme;
  return {
    root: {
      background: color.primaryBackground,
      height: "100vh",
    },
    container: {
      height: "50vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  };
});

const MainPage = ({
  themeMode,
  handleOnSetThemeMode,
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
  const { isMobile } = useDeviceDetect();
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
      <div className={classes.container}>
        <StyledButton onClick={handleOnModalOpen}>計算機 Modal</StyledButton>
        <SwitchButton
          label="Dark mode"
          isDarkMode={themeMode === "dark"}
          handleChange={handleOnSetThemeMode}
        />
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
    </div>
  );
};

MainPage.propTypes = {
  themeMode: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  operator: PropTypes.string,
  handleUpdateNumbers: PropTypes.func,
  handleCalculateArithmeticOperation: PropTypes.func,
  handleOnClickEquals: PropTypes.func,
  handleOnAllClear: PropTypes.func,
  handleOnClickPlusMinus: PropTypes.func,
  handleOnAddDecimalPoint: PropTypes.func,
  handleTranslateToPercentage: PropTypes.func,
  handleOnSetThemeMode: PropTypes.func,
};

MainPage.defaultProps = {
  themeMode: "",
  value: 0,
  operator: "",
  handleUpdateNumbers: () => {},
  handleCalculateArithmeticOperation: () => {},
  handleOnClickEquals: () => {},
  handleOnAllClear: () => {},
  handleOnClickPlusMinus: () => {},
  handleOnAddDecimalPoint: () => {},
  handleTranslateToPercentage: () => {},
  handleOnSetThemeMode: () => {},
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
