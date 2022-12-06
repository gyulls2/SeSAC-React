import React, { useEffect, useState } from "react";

const UseCallBackComponent2 = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    console.log("count : ", count);
  };
  useEffect(() => {
    console.log("clickHandler()변경");
  }, [clickHandler]);
  return (
    <div>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={clickHandler}>숫자 출력</button>
    </div>
  );
};

export default UseCallBackComponent2;
