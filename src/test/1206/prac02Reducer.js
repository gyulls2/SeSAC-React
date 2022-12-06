import React from "react";

const prac02Reducer = (state, action) => {
  switch (action.type) {
    case "deposit":
      return (state += action.value);

    case "withdraw":
      return (state -= action.value);

    default:
      return state;
  }
};

export default prac02Reducer;
