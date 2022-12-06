import { unstable_extendSxProp } from "@mui/system";
import React, { useReducer } from "react";
import prac01Reducer from "./prac01Reducer";

const Prac01 = () => {
  const [price, dispatch] = useReducer(prac01Reducer, 0);

  const onClickHandler = (e) => {
    dispatch({ type: e.target.name });
  };

  const btnStyle = {
    all: "unset",
    fontSize: "40px",
    margin: "10px",
    pointer: "cursor",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>새싹 햄버거 가게 🐹</h1>
      <h1>지불할 금액 : {price} </h1>
      <div>
        <button
          style={btnStyle}
          name="hamberger"
          onClick={onClickHandler}
        >
          🍔
        </button>
        <button
          style={btnStyle}
          name="potato"
          onClick={onClickHandler}
        >
          🍟
        </button>
        <button
          style={btnStyle}
          name="coke"
          onClick={onClickHandler}
        >
          🥤
        </button>
      </div>
    </div>
  );
};

export default Prac01;
