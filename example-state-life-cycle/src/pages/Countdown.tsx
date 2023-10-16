import React, { useState, useEffect, useRef } from "react";

export function Countdown() {
  const [counter, setCounter] = useState(10); // Valor inicial do contador
  const [isPaused, setPaused] = useState(false); // Estado para pausar/reiniciar
  const counterRef = useRef(counter);

  useEffect(() => {
    counterRef.current = counter; // Atualiza a referência quando o contador muda
  }, [counter]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        // Decrementa o contador usando a referência
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => {
      console.log("The component will be unmounted!");
      clearInterval(intervalId);
    };
  }, [isPaused]);

  const handlePauseResume = () => {
    setPaused(!isPaused);
  };

  const handleReset = () => {
    setCounter(10); // Reinicia o contador
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handlePauseResume}>
        {isPaused ? "Resume" : "Pause"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Countdown;
