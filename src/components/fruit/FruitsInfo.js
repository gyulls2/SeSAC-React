import { async } from "@firebase/util";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const FruitsInfo = ({ fruitRef }) => {
  const { fruitId } = useParams();
  const [value, setValue] = useState({});
  const navigate = useNavigate();

  let info = {};
  useEffect(() => {
    async function getFruits() {
      info = await getDoc(doc(fruitRef, fruitId));
      setValue(info.data());
    }
    getFruits();
  }, []);

  const onChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  async function updateFruit() {
    await updateDoc(doc(fruitRef, fruitId), {
      id: value.id,
      fruitName: value.fruitName,
      season: value.season,
      color: value.color,
      taste: value.taste,
      price: parseInt(value.price),
      amount: parseInt(value.amount),
    });
    navigate("/fruitsList");
  }

  // 데이터 삭제
  async function deleteFruit() {
    if (window.confirm("삭제하시겠습니까?")) {
      await deleteDoc(doc(fruitRef, fruitId));
      alert("삭제되었습니다.");
      navigate("/fruitsList");
    } else {
      alert("취소합니다.");
    }
  }

  return (
    <form>
      <h1>{fruitId} 제품 상세 페이지</h1>
      <label>
        ID
        <input
          type="text"
          name="id"
          onChange={onChangeHandler}
          defaultValue={value.id || ""}
        />
      </label>
      <label>
        이름
        <input
          type="text"
          name="fruitName"
          onChange={onChangeHandler}
          defaultValue={value.fruitName || ""}
        />
      </label>
      <label>
        계절
        <input
          type="text"
          name="season"
          onChange={onChangeHandler}
          defaultValue={value.season || ""}
        />
      </label>
      <label>
        색상
        <input
          type="text"
          name="color"
          onChange={onChangeHandler}
          defaultValue={value.color || ""}
        />
      </label>
      <label>
        맛
        <input
          type="text"
          name="taste"
          onChange={onChangeHandler}
          defaultValue={value.taste || ""}
        />
      </label>
      <label>
        가격
        <input
          type="text"
          name="price"
          onChange={onChangeHandler}
          defaultValue={value.price || ""}
        />
      </label>
      <label>
        수량
        <input
          type="number"
          name="amount"
          onChange={onChangeHandler}
          defaultValue={value.amount || ""}
        />
      </label>
      <button type="button" onClick={updateFruit}>
        수정
      </button>
      <button type="button" onClick={deleteFruit}>
        삭제
      </button>
    </form>
  );
};

export default FruitsInfo;
