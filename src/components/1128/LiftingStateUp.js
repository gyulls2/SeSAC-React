import React from "react";

const LiftingStateUp = (props) => {
  function updateValue(e) {
    props.onAddData(e.target.value);
  }
  return (
    <div>
      <h3>
        입력 : <input type="text" onChange={updateValue} />
      </h3>
    </div>
  );
};

export default LiftingStateUp;
