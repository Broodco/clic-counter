import React from 'react';

function Counter({
  counterValue,
  onIncrement,
  onDecrement,
}) {
  return (
    <main>
      <div>
        <button onClick={ onDecrement }>
          -1
        </button>
        <span>{ counterValue }</span>
        <button onClick={ onIncrement }>
          +1
        </button>

      </div>
    </main>
  );
}

export default Counter;
