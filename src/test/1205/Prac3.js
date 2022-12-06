import React, { useEffect, useRef, useState } from "react";

const Prac3 = () => {
  const [count, setCount] = useState(0);
  // const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    // setRenderCount(renderCount + 1);
    console.log("랜더링 완료");
  }, [count]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>랜더링 횟수 : {renderCount.current }</h1>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
};

export default Prac3;
