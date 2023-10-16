import React, { useState } from "react";

export function Counter() {
  // Setting the initial state of the counter to 0
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCounter(counter + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
