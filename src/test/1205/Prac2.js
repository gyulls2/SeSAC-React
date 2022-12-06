import React, { useEffect, useState } from "react";

const Prac2 = () => {
  const [value, setValue] = useState(0);
  const [input, setInput] = useState("");

  const addValueHandler = () => {
    setValue((prevState) => prevState + 1);
  };

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
  }, []);

  useEffect(() => {
    console.log("count 값이 변경되었습니다.");
  }, [value]);

  useEffect(() => {
    console.log("text 값이 변경되었습니다.");
  }, [input]);

  return (
    <div>
      <h3>{value}</h3>
      <button onClick={addValueHandler}>+ 1</button>
      <hr />
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <h3>{input}</h3>
    </div>
  );
};

export default Prac2;
