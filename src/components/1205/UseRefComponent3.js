import React, { useRef, useState } from "react";

const UseRefComponent3 = () => {
  const [refresh, setRefresh] = useState();
  const countRef = useRef(0);
  let currentVar = 0;

  function refreshHandler() {
    setRefresh(refresh + 1);
  }
  function addRefHandler() {
    countRef.current = countRef.current + 1;
    console.log("ref : ", countRef.current);
  }

  function addVarHandler() {
    currentVar = currentVar + 1;
    console.log("var : ", currentVar);
  }

  return (
    <div>
      <h3>Ref값 :{countRef.current}</h3>
      <h3> 변수 값 : {currentVar} </h3>
      <button onClick={addRefHandler}>Ref</button>
      <button onClick={addVarHandler}>Var</button>
      <button onClick={refreshHandler}>Rendering</button>
    </div>
  );
};

export default UseRefComponent3;
