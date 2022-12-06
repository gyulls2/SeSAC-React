import React, { useRef, useState } from "react";

const Prac4 = () => {
  // const [refresh, setRefresh] = useState(0);
  // const inputText = useRef("");

  // const onchange = (e) => {
  //   inputText.current = e.target.value;
  // };

  const onclick = (e) => {
    setCurrentText(inputRef.current.value);
    // setRefresh(refresh + 1);
    console.log("렌더링 완료");
  };

  const [currentText, setCurrentText] = useState("");
  const inputRef = useRef("");

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onclick}>전송</button>
      <h3>전송된 단어 : {currentText}</h3>
    </div>
  );
};

export default Prac4;
