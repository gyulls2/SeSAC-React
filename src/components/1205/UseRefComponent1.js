import React, { useRef } from "react";

const UseRefComponent1 = () => {
  const ref = useRef("안녕하세요");
  console.log("변경 전 : ", ref.current);

  ref.current = "hello";
  console.log("변경 후 : ", ref.current);

  return <div></div>;
};

export default UseRefComponent1;
