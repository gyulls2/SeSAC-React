import React, { useState } from "react";

const Prac03 = () => {
  const [fontColor, setFontColor] = useState();
  // const h1Style = { color: fontColor };

  // function changeColor(color) {
  //   setFontColor(color);
  // }

  return (
    <div>
      <h1 style={{ color: fontColor }}>글자색 바꾸기</h1>
      <button onClick={() => setFontColor("red")}>빨간색</button>
      <button onClick={() => setFontColor("green")}>초록색</button>
      <button onClick={() => setFontColor("blue")}>파란색</button>
      {/* <button onClick={() => changeColor("red")}>빨간색</button>
      <button onClick={() => changeColor("green")}>초록색</button>
      <button onClick={() => changeColor("blue")}>파란색</button> */}
    </div>
  );
};

export default Prac03;
