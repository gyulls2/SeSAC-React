import React from "react";

const LiftingStateUp2 = (props) => {
  const value = props.value;
  return (
    <div>
      <h3>형제 컴포넌트로 부터 받아온 값 : {value}</h3>
    </div>
  );
};

export default LiftingStateUp2;
