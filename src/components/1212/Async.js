import React from "react";

const Async = () => {
  console.log("1. 안녕하세요");
  setTimeout(() => {
    console.log("2. 반가워요");
  }, 3000);
  console.log("3. 안녕히계세요");

  return <div></div>;
};

export default Async;
