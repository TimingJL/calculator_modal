/*
Generate suitable factor which is a power of 10 for avoiding round-off errors.
*/
const makeFactor = (params) => {
  const decimalPlaceNumberArr = params
    .map((param) => param.split("."))
    .filter((item) => item.length > 1)
    .map((item) => item[1].length);
  const factor = decimalPlaceNumberArr.length
    ? Math.max(...decimalPlaceNumberArr)
    : 0;
  return 10 ** factor;
};

/*
Calculate expression by using integer instead of float to avoid some common case of round-off errors.
*/
const makeEvaluateExpression = (numbers, operator, factor) => {
  let expression = "";
  if (["+", "-"].indexOf(operator) > -1) {
    expression = `(((${numbers[0]}*${factor})${operator}(${numbers[1]}*${factor})) / ${factor})`;
  }
  if (operator === "*") {
    expression = `((${numbers[0]}*${factor})${operator}(${
      numbers[1]
    }*${factor}) / ${factor * factor})`;
  }
  if (operator === "/") {
    expression = `(${numbers[0]}*${factor})/(${numbers[1]}*${factor})`;
  }
  return expression;
};

export { makeFactor, makeEvaluateExpression };
