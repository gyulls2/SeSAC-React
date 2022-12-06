import React, { useState } from "react";

const Prac1 = () => {
  const [items, setItems] = useState(["초콜렛", "사탕"]);
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onClick = () => {
    setItems((prevState) => [input, ...prevState]);
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>
        {/* 중괄호 - return 키워드 포함 */}
        {items.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}

        {/* 소괄호 사용 */}
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Prac1;
