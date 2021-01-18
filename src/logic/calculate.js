const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;

  if (buttonName == '+/-') {
    total = total * (-1);
    next = next * (-1);
  } else if (buttonName == 'AC') {
    total = 0;
    next = '';
    operation = '';
  } else if (buttonName == '%') {
    total = (next / 100);
  }
}

export default calculate;