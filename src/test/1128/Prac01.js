import React, { useState } from "react";

const Prac01 = () => {
  let [value, setValue] = useState(0);

  function addNumber() {
    setValue(++value);
  }

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={addNumber}>클릭</button>
    </div>
  );
};

export default Prac01;
