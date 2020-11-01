/* eslint-disable import/prefer-default-export */
import { format, evaluate } from "mathjs";

const calculate = (numbers, operator) => {
  const precision = 14;
  const expression = `${numbers[0]}${operator}${numbers[1]}`;
  const value = evaluate(expression);
  const formattedValue = format(value, precision);
  return formattedValue;
};

export { calculate };
