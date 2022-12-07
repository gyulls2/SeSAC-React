import React from "react";

const BooleanComponent = ({bored}) => {
  const message = bored ? "놀러가자" : "하던 일 마무리";
  return <div>{message}</div>;
};

export default BooleanComponent;
