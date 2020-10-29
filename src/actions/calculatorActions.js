const KEY = "calculator";
const UPDATE_NUMBERS = `${KEY}/UPDATE_NUMBERS`;
const CALCULATE_ARITHMETIC_OPERATION = `${KEY}/CALCULATE_ARITHMETIC_OPERATION`;
const CLICK_EQUALS = `${KEY}/CLICK_EQUALS`;
const ALL_CLEAR = `${KEY}/ALL_CLEAR`;
const CLICK_PLUS_MINUS = `${KEY}/CLICK_PLUS_MINUS`;
const ADD_DECIMAL_POINT = `${KEY}/ADD_DECIMAL_POINT`;
const TRANSLATE_TO_PERCENTAGE = `${KEY}/TRANSLATE_TO_PERCENTAGE`;

export {
  UPDATE_NUMBERS,
  CALCULATE_ARITHMETIC_OPERATION,
  CLICK_EQUALS,
  ALL_CLEAR,
  CLICK_PLUS_MINUS,
  ADD_DECIMAL_POINT,
  TRANSLATE_TO_PERCENTAGE,
};

export const updateNumbers = (number) => ({
  type: UPDATE_NUMBERS,
  payload: {
    number,
  },
});

export const calculateArithmeticOperation = (operator) => ({
  type: CALCULATE_ARITHMETIC_OPERATION,
  payload: {
    operator,
  },
});

export const clickEquals = () => ({
  type: CLICK_EQUALS,
});

export const allClear = () => ({
  type: ALL_CLEAR,
});

export const clickPlusMinus = () => ({
  type: CLICK_PLUS_MINUS,
});

export const addDecimalPoint = () => ({
  type: ADD_DECIMAL_POINT,
});

export const translateToPercentage = () => ({
  type: TRANSLATE_TO_PERCENTAGE,
});
