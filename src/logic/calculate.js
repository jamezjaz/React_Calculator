import operate from './operate';

const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (buttonName === 'AC') {
    total = 0;
    next = '';
    operation = '';
  } else if (buttonName === '%') {
    if (next === '') {
      total = (total / 100).toString();
    } else {
      next = (next / 100).toString();
    }
  } else if (buttonName === '=') {
    if (operation !== null) {
      total = operate(total, next, operation);
      next = '';
      operation = '';
    }
  } else if (/^[0-9]+$/.test(buttonName)) {
    if (operation === '') {
      if (total[0] === '0' && buttonName === '0' && total[1] !== '.') {
        total = '';
      } else {
        total = total.concat(buttonName);
      }
    } else if (next === '') {
      next = next.concat(buttonName);
    }
  } else if (/[+|\-|÷|X]/.test(buttonName)) {
    if (total === '') {
      total = 0;
    }
    operation = buttonName;
  } else if (/[.]/.test(buttonName)) {
    if (operation === null) {
      if (total === null) {
        total = 0 + buttonName;
      } else if (!/[.]/.test(total)) {
        total += buttonName;
      }
    } else if (next === null) {
      next = 0 + buttonName;
    } else if (!/[.]/.test(next)) {
      next += buttonName;
    }
  }
  return { total, next, operation };
};

export default calculate;
