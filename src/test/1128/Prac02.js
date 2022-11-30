import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

const Prac02 = () => {
  const [value, setValue] = useState("안녕하세요");

  function clickLogInHandler() {
    setValue("로그인 되었습니다.");
  }

  function clickLogOutHandler() {
    setValue("로그아웃 되었습니다.");
  }

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={clickLogInHandler}>로그인</button>
      <button onClick={clickLogOutHandler}>로그아웃</button>
    </div>
  );
};

export default Prac02;
