import React, { useReducer, useState } from "react";
import prac02Reducer from "./prac02Reducer";

const Prac02 = () => {
  const [input, setInput] = useState(0);
  const [account, dispatch] = useReducer(prac02Reducer, 0);

  const depositHandler = () => {
    dispatch({ type: "deposit", value: parseInt(input) });
  };

  const withdrawHandler = () => {
    dispatch({ type: "withdraw", value: parseInt(input) });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🐹 금액을 입력하세요.</h1>
      <input
        type="number"
        step="1000"
        onChange={(e) => setInput(e.target.value)}
      />
      <h1>🐹 입금 또는 출금 버튼을 클릭하세요.</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "100px",
            height: "100px",
            background: "skyblue",
            margin: "10px",
            lineHeight: "100px",
          }}
          onClick={depositHandler}
        >
          입금
        </div>
        <div
          style={{
            width: "100px",
            height: "100px",
            background: "pink",
            margin: "10px",
            lineHeight: "100px",
          }}
          onClick={withdrawHandler}
        >
          출금
        </div>
      </div>
      <h1>💰 현재 잔액 : {account} </h1>
    </div>
  );
};

export default Prac02;
