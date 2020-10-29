const KEY = "calculator";
const CLICK_NUMBER = `${KEY}/CLICK_NUMBER`;
const CLICK_ARITHMETIC_OPERATOR = `${KEY}/CLICK_ARITHMETIC_OPERATOR`;
const CLICK_EQUALS = `${KEY}/CLICK_EQUALS`;
const ALL_CLEAR = `${KEY}/ALL_CLEAR`;
const CLICK_PLUS_MINUS = `${KEY}/CLICK_PLUS_MINUS`;

export {
  CLICK_NUMBER,
  CLICK_ARITHMETIC_OPERATOR,
  CLICK_EQUALS,
  ALL_CLEAR,
  CLICK_PLUS_MINUS,
};

export const clickNumber = (number) => ({
  type: CLICK_NUMBER,
  payload: {
    number,
  },
});

export const clickArithmeticOperator = (operator) => ({
  type: CLICK_ARITHMETIC_OPERATOR,
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
