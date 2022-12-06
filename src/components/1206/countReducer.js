import React from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return action.icon;

    case "DECREMENT":
      return action.icon;

    // react에서는 default 사용하지 않으면 warning 뜸
    default:
      return state;
  }
};

export default countReducer;
