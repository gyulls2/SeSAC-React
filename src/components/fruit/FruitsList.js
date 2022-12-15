import React, { useState } from "react";
import { async } from "@firebase/util";
import { db } from "../../firebase";
import { useEffect } from "react";
import {
  collection,
  getDocs,
  doc,
  data,
  updateDoc,
  deleteField,
  deleteDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const FruitsList = ({ fruitRef }) => {
  const [fruitId, setFruitId] = useState("");
  const navigate = useNavigate();
  const [fruitsList, setFruitsList] = useState([]);
  const clickHandler = (e) => {
    setFruitId(e.target.value);
  };

  useEffect(() => {
    navigate(`/fruitsList/${fruitId}`);
  }, [fruitId]);

  useEffect(() => {
    async function getFruits() {
      const data = await getDocs(fruitRef);
      const arr = data.docs.map((item) => {
        return item.data();
      });
      setFruitsList(arr);
    }
    getFruits();
  }, []);

  return (
    <>
      <h1>전체 상품 리스트</h1>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>색상</th>
            <th>수량</th>
            <th>상세정보</th>
          </tr>
        </thead>
        <tbody>
          {fruitsList.map((item, idx) => (
            <tr key={idx}>
              <td>{item.id}</td>
              <td>{item.fruitName}</td>
              <td>{item.color}</td>
              <td>{item.amount}</td>
              <td>
                <button onClick={clickHandler} value={item.id}>
                  상세정보
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button onClick={deleteFieldFruit}>특정 필드 삭제</button> */}
    </>
  );
};

export default FruitsList;
