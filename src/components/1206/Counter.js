import React, { useReducer } from "react";
import countReducer from "./countReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, 0);

  const numUp = () => {
    dispatch({ type: "INCREMENT" , icon:"π"});
  };

  const numDown = () => {
    dispatch({ type: "DECREMENT" , icon:"π"});
  };

  return (
    <div>
      <p>
        νμ¬ μΉ΄μ΄ν° κ°μ <b>{state}</b>μλλ€.
      </p>
      <button onClick={numUp}>+1</button>
      <button onClick={numDown}>-1</button>
    </div>
  );
};

export default Counter;
