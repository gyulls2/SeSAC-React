import React, { useState } from "react";

const Prac02 = () => {
  const [message, setMessage] = useState({ title: "제목", color: "black" });
  const newMessage = { ...message };

  function onChange(e) {
    newMessage.title = e.target.value;
    newMessage.color = "red";
    setMessage(newMessage);
  }

  function openMessage() {
    alert(message.title);
  }

  return (
    <div>
      <h1 style={{ color: newMessage.color }}>{message.title}</h1>
      <hr />
      <input type="text" onChange={onChange} />
      <button type="button" onClick={openMessage}>
        클릭
      </button>
    </div>
  );
};

export default Prac02;
