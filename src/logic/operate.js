import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = Big(numberOne);
  const numTwo = Big(numberTwo);
  let result;

  if (operation == '+') {
    result = numOne.plus(numTwo);
  } else if (operation == '-') {
    result = numOne.minus(numTwo);
  } else if (operation == 'X') {
    result = numOne.times(numTwo);
  } else if (operation == '÷') {
    result = numOne.div(numTwo);
  } else if (operation == '%') {
    result = numOne.mod(numTwo);
  }
  return result.toString();
};

export default operate;