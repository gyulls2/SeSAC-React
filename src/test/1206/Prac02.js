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
      <h1>πΉ κΈμ‘μ μλ ₯νμΈμ.</h1>
      <input
        type="number"
        step="1000"
        onChange={(e) => setInput(e.target.value)}
      />
      <h1>πΉ μκΈ λλ μΆκΈ λ²νΌμ ν΄λ¦­νμΈμ.</h1>
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
          μκΈ
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
          μΆκΈ
        </div>
      </div>
      <h1>π° νμ¬ μμ‘ : {account} </h1>
    </div>
  );
};

export default Prac02;
