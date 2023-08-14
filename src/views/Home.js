import React from 'react';
import Counter from "../containers/CounterContainer";
import './Home.css';

function Home({counterValue}) {
  return (
    <div className="home">
      <p>Counter Value : {counterValue}</p>
      <Counter />
    </div>
  );
}

export default Home;
