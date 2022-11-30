import React from "react";

const Prac03_id = (props) => {
  function onChange(e) {
    props.onAddData(e.target.value);
  }

  return (
    <div>
      <h1>
        ID : <input type="text" name="id" onChange={onChange} />
      </h1>
    </div>
  );
};

export default Prac03_id;
