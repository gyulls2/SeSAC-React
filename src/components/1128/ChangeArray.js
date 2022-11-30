import React, { useState } from "react";

const ChangeArray = () => {
  const [value, setValue] = useState(["안녕", "hi"]);

  function changeArr() {
    let cValue = [...value];
    cValue[0] = "hello";
    setValue(cValue);
  }

  return (
    <div>
      <h1>{value[0]}</h1>
      <h1>{value[1]}</h1>
      <button onClick={changeArr}>배열 값 변경</button>
    </div>
  );
};

export default ChangeArray;
