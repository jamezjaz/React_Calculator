import Big from 'big.js';
import calculate from '../logic/calculate';

describe('calculate function', () => {
  it('AC button', () => {
    const calculator = { total: '4', next: '5', operation: '+' };
    expect(calculate(calculator, 'AC')).toEqual({ total: '', next: '', operation: '' });
  });

  it('+/- button with total', () => {
    const calculator = { total: '9', next: '', operation: '' };
    expect(calculate(calculator, '+/-')).toEqual({ total: Big('-9').toJSON(), next: '', operation: '' });
  });

  it('+/- button without total', () => {
    const calculator = { total: '', next: '', operation: '' };
    expect(calculate(calculator, '+/-')).toEqual({ total: Big('-0').toJSON(), next: '', operation: '' });
  });

  it('+/- button with next, without total', () => {
    const calculator = { total: '', next: '9', operation: '' };
    expect(calculate(calculator, '+/-')).toEqual({ total: '', next: Big('-9').toJSON(), operation: '' });
  });

  it('% button with total', () => {
    const calculator = { total: '100', next: '', operation: '' };
    expect(calculate(calculator, '%')).toEqual({ total: '1', next: '', operation: '' });
  });

  it('= button', () => {
    const calculator = { total: '10', next: '2', operation: '÷' };
    expect(calculate(calculator, '=')).toEqual({ total: Big('5').toJSON(), next: '', operation: '' });
  });

  it('= button', () => {
    const calculator = { total: '10', next: '2', operation: 'X' };
    expect(calculate(calculator, '=')).toEqual({ total: Big('20').toJSON(), next: '', operation: '' });
  });

  it('= button', () => {
    const calculator = { total: '10', next: '2', operation: '-' };
    expect(calculate(calculator, '=')).toEqual({ total: Big('8').toJSON(), next: '', operation: '' });
  });

  it('= button', () => {
    const calculator = { total: '10', next: '2.5', operation: '+' };
    expect(calculate(calculator, '=')).toEqual({ total: Big('12.5').toJSON(), next: '', operation: '' });
  });

  it('+ operation without equality', () => {
    const calculator = { total: '10', next: '2.5', operation: '+' };
    expect(calculate(calculator, '+')).toEqual({ total: Big('10').toJSON(), next: Big('2.5').toJSON(), operation: '+' });
  });

  it('- operation without equality', () => {
    const calculator = { total: '5', next: '2', operation: '-' };
    expect(calculate(calculator, '-')).toEqual({ total: Big('5').toJSON(), next: Big('2').toJSON(), operation: '-' });
  });

  it('total & next without operation', () => {
    const calculator = { total: '5', next: '2', operation: '' };
    expect(calculate(calculator, '+')).toEqual({ total: Big('5').toJSON(), next: Big('2').toJSON(), operation: '+' });
  });
});
