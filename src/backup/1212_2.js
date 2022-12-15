import { async } from "@firebase/util";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  setDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import "./App.css";
import Router from "./components/fruit/Router";
import { db } from "./firebase";

function App() {
  // const fruitCollection = collection(db, "fruits");

  // async function setFruit() {
  //   await setDoc(doc(fruitCollection, "바나나"), {
  //     season: "봄",
  //     color: "노랑",
  //     taste: "달콤",
  //     price: 3000,
  //   });
  // }

  // useEffect(() => {
  // async function getFruits() {
  // where 함수 => 검색
  // const data = query(fruitCollection, where("price", ">", 5000));
  // const querySnapshot = await getDocs(data);

  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, " : ", doc.data());
  // });

  // 일부 데이터 가져오기 doc(), getDoc()
  // const docRef = doc(fruitCollection, "딸기");
  // const data = await getDoc(docRef);
  // 예외처리
  // if (data.exists()) {
  //   console.log("결과 : ", data.data());
  // } else {
  //   console.log("결과 없음");
  // }

  // 전체 데이터 가져오기 getDocs()
  // const data = await getDocs(fruitCollection);
  // console.log(data);
  //   }
  //   getFruits();
  // }, []);

  return (
    <>
      <Router />
      {/* <button onClick={setFruit}>과일 추가</button> */}
    </>
  );
}

export default App;
