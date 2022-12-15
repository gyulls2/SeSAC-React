import React, { useState } from "react";
import { async } from "@firebase/util";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  // where,
  setDoc,
} from "firebase/firestore";
// import { useEffect } from "react";
// import { db } from "../../firebase";

const Addfruit = ({ fruitRef }) => {
  // const fruitCollection = collection(db, "fruits");
  // const nameRef = useRef("");
  const [value, setValue] = useState({});

  async function setFruit() {
    await setDoc(doc(fruitRef, value.id), {
      id: value.id,
      fruitName: value.fruitName,
      season: value.season,
      color: value.color,
      taste: value.taste,
      price: parseInt(value.price),
      amount: parseInt(value.amount),
    });
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFruit();
    setValue({
      id: "",
      fruitName: "",
      season: "",
      color: "",
      taste: "",
      price: "",
      amount: "",
    });
  };

  const onChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h1>과일 데이터베이스</h1>
      <label>
        ID
        <input
          type="text"
          name="id"
          onChange={onChangeHandler}
          value={value.id || ""}
        />
      </label>
      <label>
        이름
        <input
          type="text"
          name="fruitName"
          onChange={onChangeHandler}
          value={value.fruitName || ""}
        />
      </label>
      <label>
        계절
        <input
          type="text"
          name="season"
          onChange={onChangeHandler}
          value={value.season || ""}
        />
      </label>
      <label>
        색상
        <input
          type="text"
          name="color"
          onChange={onChangeHandler}
          value={value.color || ""}
        />
      </label>
      <label>
        맛
        <input
          type="text"
          name="taste"
          onChange={onChangeHandler}
          value={value.taste || ""}
        />
      </label>
      <label>
        가격
        <input
          type="text"
          name="price"
          onChange={onChangeHandler}
          value={value.price || ""}
        />
      </label>
      <label>
        수량
        <input
          type="number"
          name="amount"
          onChange={onChangeHandler}
          value={value.amount || ""}
        />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};

export default Addfruit;
