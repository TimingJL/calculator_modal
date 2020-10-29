import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Calculator from "components/Calculator";
import AdaptiveModal from "components/AdaptiveModal";
import { isMobile } from "react-device-detect";
import {
  clickNumber,
  clickArithmeticOperator,
  clickEquals,
  allClear,
  clickPlusMinus,
  addDecimalPoint,
  translateToPercentage,
} from "reducers/calculatorReducer/actions";

const MainPage = ({
  value,
  operator,
  handleOnClickNumber,
  handleOnClickArithmeticOperator,
  handleOnClickEquals,
  handleOnAllClear,
  handleOnClickPlusMinus,
  handleOnAddDecimalPoint,
  handleTranslateToPercentage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const variant = isMobile ? "bottom-sheet" : "draggable-modal";

  const handleOnModalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleOnModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleOnClickCalculatorButton = useCallback((buttonValue) => {
    if (typeof buttonValue === "number") {
      handleOnClickNumber(buttonValue);
      return;
    }
    if (["+", "-", "*", "/"].indexOf(buttonValue) > -1) {
      handleOnClickArithmeticOperator(buttonValue);
      return;
    }
    if (buttonValue === "=") {
      handleOnClickEquals();
      return;
    }
    if (buttonValue === ".") {
      handleOnAddDecimalPoint();
      return;
    }
    if (buttonValue === "allClear") {
      handleOnAllClear();
      return;
    }
    if (buttonValue === "plusMinus") {
      handleOnClickPlusMinus();
      return;
    }
    if (buttonValue === "percentage") {
      handleTranslateToPercentage();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Button color="primary" onClick={handleOnModalOpen}>
        Open
      </Button>
      <AdaptiveModal
        variant={variant}
        open={isModalOpen}
        handleClose={handleOnModalClose}
        content={
          <Calculator
            fullWidth={isMobile}
            value={value}
            operator={operator}
            handleOnClick={handleOnClickCalculatorButton}
          />
        }
      />
    </div>
  );
};

MainPage.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  operator: PropTypes.string,
  handleOnClickNumber: PropTypes.func,
  handleOnClickArithmeticOperator: PropTypes.func,
  handleOnClickEquals: PropTypes.func,
  handleOnAllClear: PropTypes.func,
  handleOnClickPlusMinus: PropTypes.func,
  handleOnAddDecimalPoint: PropTypes.func,
  handleTranslateToPercentage: PropTypes.func,
};

MainPage.defaultProps = {
  value: 0,
  operator: "",
  handleOnClickNumber: () => {},
  handleOnClickArithmeticOperator: () => {},
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
  handleOnClickNumber: (number) => dispatch(clickNumber(number)),
  handleOnClickArithmeticOperator: (operator) =>
    dispatch(clickArithmeticOperator(operator)),
  handleOnClickEquals: () => dispatch(clickEquals()),
  handleOnAllClear: () => dispatch(allClear()),
  handleOnClickPlusMinus: () => dispatch(clickPlusMinus()),
  handleOnAddDecimalPoint: () => dispatch(addDecimalPoint()),
  handleTranslateToPercentage: () => dispatch(translateToPercentage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
