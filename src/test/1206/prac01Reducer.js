import React from "react";

const prac01Reducer = (state, action) => {
  switch (action.type) {
    case "hamberger":
      return state + 8000;
    case "potato":
      return state + 2000;
    case "coke":
      return state + 1500;
    default:
      return state;
  }
};

export default prac01Reducer;
