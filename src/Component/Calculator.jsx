import React from 'react';
import '../index.css';

export default function Calculator() {
  return (
    <div className="calc">
      <div className="calc-style">
        <div className="row">
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">+/-</button>
          <button className="btn" type="button">%</button>
          <button className="btn operator" type="button">-</button>
        </div>
        <div className="row">
          <button className="btn" type="button">7</button>
          <button className="btn" type="button">8</button>
          <button className="btn" type="button">9</button>
          <button className="btn operator" type="button">/</button>
        </div>
        <div className="row">
          <button className="btn" type="button">4</button>
          <button className="btn" type="button">5</button>
          <button className="btn" type="button">6</button>
          <button className="btn operator" type="button">x</button>
        </div>
        <div className="row">
          <button className="btn" type="button">1</button>
          <button className="btn" type="button">2</button>
          <button className="btn" type="button">3</button>
          <button className="btn operator" type="button">+</button>
        </div>
        <div className="row">
          <button className="btn" type="button">.</button>
          <button className="btn" type="button">0</button>
          <button className="btn operator" type="button">=</button>
        </div>
      </div>
    </div>
  );
}
