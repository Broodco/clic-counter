import React from 'react';
import './Counter.css';

function Counter({
  counterValue,
  onIncrement,
  onDecrement,
}) {
  return (
    <main>
      <div className="counter">
        <button className="button decrementButton" onClick={ onDecrement }>
          -1
        </button>
        <span className="counterValue">{ counterValue }</span>
        <button className="button incrementButton" onClick={ onIncrement }>
          +1
        </button>

      </div>
    </main>
  );
}

export default Counter;
