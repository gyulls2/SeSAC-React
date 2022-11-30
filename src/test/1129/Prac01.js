import React, { useState } from "react";

const Prac01 = () => {
  let [value, setValue] = useState(0);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(++value)} onMouseOut={() => setValue(0)}>
        클릭
      </button>
    </div>
  );
};

export default Prac01;
