import React from 'react';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = () => (
  <div>
    <div className="calculator-grid">
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button">÷</button>
    </div>
    <div className="calculator-grid">
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button">X</button>
    </div>
    <div className="calculator-grid">
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button">-</button>
    </div>
    <div className="calculator-grid">
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">+</button>
    </div>
    <div className="calculator-grid">
      <button type="button" className="span-two">0</button>
      <button type="button">.</button>
      <button type="button">=</button>
    </div>
    <Button name="Calculator" />
  </div>
);
export default ButtonPanel;
