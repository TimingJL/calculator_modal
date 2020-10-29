import update from "react-addons-update";
import { evaluate } from "mathjs";
import {
  UPDATE_NUMBERS,
  CALCULATE_ARITHMETIC_OPERATION,
  CLICK_EQUALS,
  ALL_CLEAR,
  CLICK_PLUS_MINUS,
  ADD_DECIMAL_POINT,
  TRANSLATE_TO_PERCENTAGE,
} from "actions/calculatorActions";

const initialState = {
  temp: ["0", "0"],
  value: "0",
  operator: "",
};

const execEquals = (state) => {
  const { temp, operator } = state;
  if (operator && operator !== "=") {
    const expression = `${temp[0]}${operator}${temp[1]}`;
    const updatedValue = evaluate(expression).toString();
    return update(state, {
      value: { $set: updatedValue },
      operator: { $set: "=" },
      temp: { $set: [updatedValue, "0"] },
    });
  }
  return state;
};

const updateNumbers = (state, number) => {
  const { temp, operator } = state;
  if (operator === "=") {
    const updatedValue =
      initialState.temp[0] === "0" ? number : initialState.temp[0] + number;
    return update(state, {
      value: { $set: updatedValue },
      temp: { $set: [updatedValue, "0"] },
      operator: { $set: "" },
    });
  }

  const tempIndex = operator && operator !== "=" ? 1 : 0;
  const updatedValue =
    temp[tempIndex] === "0" ? number : temp[tempIndex] + number;
  return update(state, {
    value: { $set: updatedValue },
    temp: {
      [tempIndex]: { $set: updatedValue },
    },
  });
};

const updatePlusMinus = (state) => {
  const { temp, operator } = state;
  const tempIndex = operator ? 1 : 0;
  const updatedValue = temp[tempIndex] === "0" ? "0" : temp[tempIndex] * -1;
  const updatedState = update(state, {
    value: { $set: updatedValue },
    temp: {
      [tempIndex]: { $set: updatedValue },
    },
  });
  return updatedState;
};

const calculateArithmeticOperation = (state, operator) => {
  const { temp } = state;
  if (temp[1] !== "0") {
    const expression = `${temp[0]}${operator}${temp[1]}`;
    const updatedValue = evaluate(expression);
    return update(state, {
      value: { $set: updatedValue },
      temp: { $set: [updatedValue, "0"] },
      operator: { $set: operator },
    });
  }
  return update(state, {
    operator: { $set: operator },
  });
};

const translateIntegerToFloat = (state) => {
  const { temp, operator } = state;
  const tempIndex = operator && operator !== "=" ? 1 : 0;
  let updatedValue = temp[tempIndex];
  if (operator === "=") {
    updatedValue = "0.";
    return update(state, {
      value: { $set: updatedValue },
      temp: {
        [tempIndex]: { $set: updatedValue },
      },
      operator: { $set: "" },
    });
  }
  if (updatedValue.indexOf(".") < 0) {
    updatedValue = `${updatedValue}.`;
    return update(state, {
      value: { $set: updatedValue },
      temp: {
        [tempIndex]: { $set: updatedValue },
      },
    });
  }
  return state;
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_NUMBERS: {
      return updateNumbers(state, payload.number.toString());
    }
    case CALCULATE_ARITHMETIC_OPERATION: {
      return calculateArithmeticOperation(state, payload.operator);
    }
    case CLICK_EQUALS: {
      return execEquals(state);
    }
    case ALL_CLEAR: {
      return initialState;
    }
    case CLICK_PLUS_MINUS: {
      return updatePlusMinus(state);
    }
    case ADD_DECIMAL_POINT: {
      return translateIntegerToFloat(state);
    }
    case TRANSLATE_TO_PERCENTAGE: {
      console.log("TRANSLATE_TO_PERCENTAGE");
      return state;
    }
    default:
      return state;
  }
};
