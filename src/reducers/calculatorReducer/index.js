/* eslint-disable no-eval */
import update from "react-addons-update";
import {
  CLICK_NUMBER,
  CLICK_ARITHMETIC_OPERATOR,
  CLICK_EQUALS,
  ALL_CLEAR,
} from "./actions";

const defaultState = {
  temp: [0, 0],
  value: 0,
  operator: "",
};

const initialState = { ...defaultState };

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLICK_NUMBER: {
      const { temp, operator } = state;
      const tempIndex = operator ? 1 : 0;
      const updatedValue = temp[tempIndex] * 10 + payload.number;
      const updatedState = update(state, {
        value: { $set: updatedValue },
        temp: {
          [tempIndex]: { $set: updatedValue },
        },
      });
      return updatedState;
    }

    case CLICK_ARITHMETIC_OPERATOR: {
      const { temp, operator } = state;
      let updatedState = state;
      if (operator && temp[1]) {
        const expression = eval(`${temp[0]}${operator}${temp[1]}`);
        const updatedValue = temp[1] === 0 ? 0 : eval(expression);
        updatedState = update(defaultState, {
          value: { $set: updatedValue },
          temp: {
            0: { $set: updatedValue },
          },
          operator: { $set: payload.operator },
        });
      }
      if (!temp[1]) {
        updatedState = update(state, {
          operator: { $set: payload.operator },
        });
      }
      return updatedState;
    }

    case CLICK_EQUALS: {
      const { temp, operator } = state;
      if (operator) {
        const expression = eval(`${temp[0]}${operator}${temp[1]}`);
        const updatedValue = temp[1] === 0 ? 0 : eval(expression);
        const updatedState = update(defaultState, {
          value: { $set: updatedValue },
          temp: {
            0: { $set: updatedValue },
          },
        });
        return updatedState;
      }
      return state;
    }

    case ALL_CLEAR: {
      return defaultState;
    }

    default:
      return state;
  }
};
