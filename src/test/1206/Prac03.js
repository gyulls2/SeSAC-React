import React, { useReducer, useState } from "react";
import prac03Reducer from "./prac03Reducer";
import "./Prac03.scss";

const Prac03 = () => {
  const initialState = {
    count: 0,
    member: [],
  };

  const [input, setInput] = useState({});
  const [memberList, dispatch] = useReducer(prac03Reducer, initialState);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", input: input });
  };

  const deleteHandler = (name) => {
    dispatch({ type: "DELETE", input: name });
  };

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h3>전체 회원 수 : {memberList.member.length}</h3>
        <label>
          이름 :
          <input type="text" name="name" onChange={inputHandler} />
        </label>
        <br />
        <label>
          나이 :
          <input type="text" name="age" onChange={inputHandler} />
        </label>
        <br />
        <label>
          지역 :
          <input type="text" name="address" onChange={inputHandler} />
        </label>
        <br />
        <button type="submit">추가</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>지역</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {memberList.member.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.address}</td>
              <td>
                <button onClick={() => deleteHandler(item.name)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Prac03;
