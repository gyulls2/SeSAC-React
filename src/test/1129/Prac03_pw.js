import React, { useState } from "react";

const Prac03_pw = (props) => {
  const id = props.id;

  const [pw, setPW] = useState("");

  function onChange(e) {
    setPW(e.target.value);
  }

  function login() {
    if (id == "gyull" && pw == 123) {
      alert("로그인 성공");
    } else alert("로그인 실패");
  }

  return (
    <div>
      <h1>
        PW : <input type="text" className="pw" onChange={onChange} />
      </h1>
      <button type="button" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Prac03_pw;
