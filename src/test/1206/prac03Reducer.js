import React from "react";

const prac03Reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        member: [...state.member, action.input],
      };

    case "DELETE":
      const newState = state.member.filter(
        (item) => item.name !== action.input
      );
      return {
        member: newState,
      };

    default:
      return state;
  }
};

export default prac03Reducer;
