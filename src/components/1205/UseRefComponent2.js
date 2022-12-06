import React, { useRef, useState } from "react";

const UseRefComponent2 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  function addStateHandler() {
    console.log("state변경");
    setCount(count + 1);
  }

  function addRefHandler() {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  }

  return (
    <div>
      <h3>state 값 : {count}</h3>
      <h3>ref 값 : {countRef.current}</h3>
      <button onClick={addStateHandler}>State</button>
      <button onClick={addRefHandler}>Ref</button>
    </div>
  );
};

export default UseRefComponent2;
