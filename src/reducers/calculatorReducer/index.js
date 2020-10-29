import update from "react-addons-update";
import { evaluate } from "mathjs";
import {
  CLICK_NUMBER,
  CLICK_ARITHMETIC_OPERATOR,
  CLICK_EQUALS,
  ALL_CLEAR,
  CLICK_PLUS_MINUS,
} from "./actions";

const initialState = {
  temp: [0, 0],
  value: 0,
  operator: "",
};

const execEquals = (state) => {
  const { temp, operator } = state;
  if (operator && operator !== "=") {
    const expression = `${temp[0]}${operator}${temp[1]}`;
    const updatedValue = evaluate(expression);
    return update(state, {
      value: { $set: updatedValue },
      operator: { $set: "=" },
      temp: { $set: [updatedValue, 0] },
    });
  }
  return state;
};

const updateNumber = (state, number) => {
  const { temp, operator } = state;
  if (operator === "=") {
    const updatedValue = initialState.temp[0] * 10 + number;
    return update(state, {
      value: { $set: updatedValue },
      temp: { $set: [updatedValue, 0] },
      operator: { $set: "" },
    });
  }

  const tempIndex = operator && operator !== "=" ? 1 : 0;
  const updatedValue = temp[tempIndex] * 10 + number;
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
  const updatedValue = temp[tempIndex] * -1;
  const updatedState = update(state, {
    value: { $set: updatedValue },
    temp: {
      [tempIndex]: { $set: updatedValue },
    },
  });
  return updatedState;
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLICK_NUMBER: {
      return updateNumber(state, payload.number);
    }
    case CLICK_ARITHMETIC_OPERATOR: {
      return update(state, {
        operator: { $set: payload.operator },
      });
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
    default:
      return state;
  }
};
