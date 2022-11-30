import React, { useState } from "react";

const EventOnChange = () => {
  const [message, setMessage] = useState("onChange 이벤트");

  function printConsole(e) {
    console.log(e.target.value);
  }

  function onChange(e) {
    setMessage(e.target.value);
  }

  return (
    <div>
      <h1>{message}</h1>
      <input
        type="text"
        name="msg1"
        placeholder="
내용을 입력하세요"
        onChange={printConsole}
      />

      <input
        type="text"
        name="msg2"
        placeholder="
내용을 입력하세요"
        onChange={onChange}
      />
    </div>
  );
};

export default EventOnChange;
