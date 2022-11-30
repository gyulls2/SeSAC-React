import { checkboxClasses } from "@mui/material";
import React, { useState } from "react";

const CheckBox = (props) => {
  const { cap, shose, bag } = props;
  const [total, setTotal] = useState(0);

  function changeHandler(e) {
    if (e.checked) {
      setTotal((prevState) => prevState + parseInt(e.value));
    } else {
      setTotal((prevState) => prevState - parseInt(e.value));
    }
  }

  return (
    <div>
      <input
        type="checkbox"
        value={cap}
        onChange={(e) => changeHandler(e.target)}
      />
      모자 1만원
      <br />
      <input
        type="checkbox"
        value={shose}
        onChange={(e) => changeHandler(e.target)}
      />
      신발 3만원
      <br />
      <input
        type="checkbox"
        value={bag}
        onChange={(e) => changeHandler(e.target)}
      />
      가방 8만원
      <br />
      <p>합계 : {total}</p>
    </div>
  );
};

export default CheckBox;
