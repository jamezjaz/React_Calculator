import Big from 'big.js';
import operate from '../logic/operate';

describe('operate function', () => {
  let numOne;
  let numTwo;

  beforeEach(() => {
    numOne = Big(5);
    numTwo = Big(3);
  });

  it('returns a quotient when a divisor divides a dividend', () => {
    expect(operate(numOne, numTwo, '÷')).toEqual('1.66666666666666666667');
  });

  it('returns the product of two numbers when numOne multiplies numTwo', () => {
    expect(operate(numOne, numTwo, 'X')).toEqual('15');
  });

  it('returns the difference of two numbers', () => {
    expect(operate(numTwo, numOne, '-')).toEqual('-2');
  });

  it('returns the sum of two numbers', () => {
    expect(operate(numOne, numTwo, '+')).toEqual('8');
  });

  it('returns the % of two numbers', () => {
    const numOne = Big(50);
    const numTwo = Big(100);
    expect(operate(numOne, numTwo, '%')).toEqual('50');
  });
});
