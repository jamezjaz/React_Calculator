import operate from './operate';

const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === '+/-') {
    if (next) {
      next = (next * -1).toString();
    } else {
      total = (total * -1).toString();
    }
  } else if (buttonName === 'AC') {
    total = '';
    next = '';
    operation = '';
  } else if (buttonName === '%') {
    if (next === '') {
      total = (total / 100).toString();
    } else {
      next = (next / 100).toString();
    }
  } else if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = '';
      operation = '';
    }
  } else if (digits.includes(buttonName)) {
    if (operation === '') {
      if (total[0] === '0' && buttonName === '0' && total[1] !== '.') {
        total = '';
      } else {
        total += (buttonName);
      }
    } else {
      next = next.concat(buttonName);
    }
  } else if (/[+|\-|÷|X]/.test(buttonName)) {
    if (total === '') {
      total = 0;
    }
    operation = buttonName;
  // } else if (/[.]/.test(buttonName)) {
  //   console.log('Decimal');
  //   if (operation === null) {
  //     if (total === null) {
  //       total = 0 + buttonName;
  //     } else if (!/[.]/.test(total)) {
  //       total += buttonName;
  //     }
  //   } else if (next === null) {
  //     next = 0 + buttonName;
  //   } else if (!/[.]/.test(next)) {
  //     next += buttonName;
  //   }
  } else if (buttonName === '.') {
    if (next && !next.includes(buttonName)) {
      next = next.concat(buttonName);
    } else if (next !== '' && !next.includes(buttonName)) {
      next = next.concat(buttonName);
    } else if (total === '') {
      total = '0';
      total = total.concat(buttonName);
    } else if (total !== '' && !total.includes(buttonName)) {
      total = total.concat(buttonName);
    }
  }
  return { total, next, operation };
};

export default calculate;
