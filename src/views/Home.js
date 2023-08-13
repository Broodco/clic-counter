import React from 'react';
import Counter from "../containers/CounterContainer";

function Home({counterValue}) {
  return (
    <div>
      <p>Counter Value : {counterValue}</p>
      <Counter />
    </div>
  );
}

export default Home;
