import React, { useState } from "react";

const useState1 = () => {
  const [인사, 인사변경] = useState(["안녕하세요", "재미있는", "리액트"]);
  const [font, setFont] = useState("50px");
  const fstyle = { fontSize: font };

  const [value, setValue] = useState("안녕하세요");

  function printConsole() {
    console.log(value);
  }

  // 문자열 변경
  function changeValue() {
    setValue("반가워요");
  }

  // 객체 또는 배열의 state 값 변경
  // 1. 객체 사본 만들기
  const person1 = { name: "gyull" };
  const person2 = { name: "gyull", age: 26 };
  const person3 = { name: "gyull", age: 26, region: "seoul" };

  // const person1 = { name: "gyull" };
  // const person2 = person1;
  // person2.age = 26;
  // const person3 = person2;
  // person3.region = "seoul";

  // const person1 = { name: "gyull" };
  // const person2 = { ...person1, age: 26 };
  // const person3 = { ...person2, region: "seoul" };
  // const person4 = { region: "busan", ...person3 };

  return (
    <div>
      <h1>{JSON.stringify(person1)}</h1>
      <h1>{JSON.stringify(person2)}</h1>
      <h1>{JSON.stringify(person3)}</h1>
      {/* <h1>{JSON.stringify(person4)}</h1> */}

      <h3 style={fstyle}>{인사[0]}</h3>
      <h3>{인사[1]}</h3>
      <h3>{인사[2]}</h3>

      <h1>{value}</h1>
      <button onClick={changeValue}>클릭</button>
    </div>
  );
};

export default useState1;
