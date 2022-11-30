import React, { useState } from "react";

const ChangeFont = () => {
  const [value, setValue] = useState("안녕하세요");
  const [font, setFont] = useState("50px");

  return (
    <div>
      <div style={{ fontSize: font }}>{value}</div>
      <button onClick={()=>setFont("100px")}>글자크기변경</button>
    </div>
  );
};

export default ChangeFont;
