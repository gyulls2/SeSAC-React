import "./App.css";
import CreateHeader from "./components/CreateHeader";
import CreateBody from "./components/CreateBody";
import CreateFooter from "./components/CreateFooter";
import Movie from "./components/Movie";
import No1 from "./test/test01/No1";
import DefaultProps from "./components/1125/DefaultProps";
import Wrapper from "./components/1125/Wrapper";
import PropTypesComponent from "./components/1125/PropTypesComponent";
import TodoTask from "./components/1125/TodoTask";
import PriceList from "./components/1125/PriceList";
import UIDesign from "./components/1125/UIDesign";
import ChangePropsValue from "./components/1128/ChangePropsValue";
import UseState1 from "./components/1128/UseState1";
import ChangeArray from "./components/1128/ChangeArray";
// import LiftingStateUp from "./components/1128/LiftingStateUp";
import { useState } from "react";
// import LiftingStateUp2 from "./components/1128/LiftingStateUp2";
import PreventDefault from "./components/1129/PreventDefault";
import ChangeFont from "./components/1129/ChangeFont";
import EventOnChange from "./components/1129/EventOnChange";
import MultiInput from "./components/1129/MultiInput";
import NameForm from "./components/1129/NameForm";
import TextArea from "./components/1129/TextArea";
import Select from "./components/1129/Select";
import InsertImages from "./components/1129/InsertImages";
import SelectImage from "./components/1129/SelectImage";
import CheckBox from "./components/1129/CheckBox";
import CheckBox2 from "./components/1129/CheckBox2";
// import Prac01 from "./test/1129/Prac01";
// import Prac02 from "./test/1129/Prac02";
// import Prac03_id from "./test/1129/Prac03_id";
// import Prac03_pw from "./test/1129/Prac03_pw";
// import Prac04 from "./test/1129/Prac04";
// import Prac05 from "./test/1129/Prac05";
// import Button1 from "./components/1130/Button1";
// import Button2 from "./components/1130/Button2";
// import FirstScssComponent from "./components/1130/FirstScssComponent";
// import SecondScssComponent from "./components/1130/SecondScssComponent";
// import ThirdScssComponent from "./components/1130/ThirdScssComponent";
// import NestingComponent from "./components/1130/NestingComponent";
// import Operations from "./components/1130/Operations";
import Prac01 from "./test/1130/Prac01";

function App() {
  const priceList = [1000, 2000, 3000, 4000];
  const prices = priceList.map((price) => (
    <div key={price}>가격 : {price}원</div>
  ));

  const todoList = [
    { taskName: "빨래하기", finished: false },
    { taskName: "공부하기", finished: true },
  ];

  const movieList = [
    {
      title: "공조 2: 인터내셔날",
      open: "2022.09.07",
      poster:
        "https://movie-phinf.pstatic.net/20220826_188/1661489945659Su2RI_JPEG/movie_image.jpg?type=m203_290_2",
    },
    {
      title: "인생은 아름다워",
      open: "2022.09.28",
      poster:
        "https://movie-phinf.pstatic.net/20220929_135/1664441921246ae2RC_JPEG/movie_image.jpg?type=m203_290_2",
    },
    {
      title: "정직한 후보 2",
      open: "2022.09.28",
      poster:
        "https://movie-phinf.pstatic.net/20220928_85/1664332929020nYWPc_JPEG/movie_image.jpg?type=m203_290_2",
    },
  ];

  var a = "hello";
  if (true) {
    var a = "bye";
    // let a = "bye";
    // let을 사용할 경우 그대로 hello가 출력됨
    // let은 scope가 블록 단위이기 때문에 if문 내부의 값은 if문 밖에서 사용할 수 없음
  }
  const study = "react";

  const style = {
    backgroundColor: "blue",
    fontSize: "50px",
    fontWeight: "bold",
    color: "yellow",
  };

  const name = "리액트";

  // const [value, setValue] = useState("");

  // function addDataHandler(data) {
  //   setValue(data);
  // }

  const [value, setValue] = useState("");

  function addEventHandler(data) {
    setValue(data);
  }

  return (
    <>
      <Prac01 />
      {/* <Operations />
      <NestingComponent />
      <ThirdScssComponent />

      <SecondScssComponent />
      <FirstScssComponent />

      <Button1 />
      <Button2 /> */}
      {/* 
      <Prac05 />
      <Prac04 />
      <Prac03_id onAddData={addEventHandler} />
      <Prac03_pw id={value} />
      <Prac02 />
      <Prac01 /> */}

      <CheckBox2 />
      <CheckBox cap={10000} shose={30000} bag={80000} />
      <SelectImage />
      <InsertImages />
      <Select />
      <TextArea />
      <NameForm />
      <MultiInput />
      <EventOnChange />
      <ChangeFont />
      <PreventDefault />

      {/* <h3>chlidComponent로부터 전달받은 데이터 : {value}</h3> */}
      {/* <LiftingStateUp onAddData={addDataHandler} /> */}
      {/* <LiftingStateUp2 value={value} /> */}

      <ChangeArray />
      <UseState1 />
      <ChangePropsValue name="gyull" />

      <UIDesign />
      <PriceList key={prices} prices={prices} />

      {todoList.map((todo) => (
        <TodoTask key={todo.taskName} taskName={todo.taskName} />
      ))}

      {movieList.map((movie) => (
        <Movie
          key={movie.title}
          title={movie.title}
          open={movie.open}
          poster={movie.poster}
        />
      ))}
      <PropTypesComponent name="3" favoriteNumber={3} />
      <>
        <Wrapper>
          <CreateHeader />
          <CreateBody />
          <CreateFooter />
        </Wrapper>
      </>
      <>
        <DefaultProps name="gyull" age={26} />
        <DefaultProps />
      </>
      <>
        {/* 1 - 1 */}
        {/* 하나의 부모 태그로 감싸야 함 */}
        {/* 모든 태그가 닫혀있어야 함 */}
        <h1>첫번째</h1>
        <br />
        <h2>리액트 실습</h2>
        <br />
        <h3>화이팅</h3>
      </>
      <>
        {/* 1 - 2 */}
        <h1>{a}</h1>
      </>
      <>
        {/* 1 - 3 */}
        {study === "react" ? <h1>리액트입니다</h1> : <h1>리액트가 아닙니다</h1>}
      </>
      <>
        {/* 1 - 4 */}
        <h1 style={style}>리액트</h1>
      </>
      <>
        {/* 1 - 5 */}
        <h1 className="style">리액트</h1>
      </>
      <>
        {/* 1 - 6 */}
        {/* 리액트에서 주석을 작성하는 방법*/}
        <div> {name} </div>
        // 이런주석이나 /* 이런 주석은 화면에 그대로 출력됩니다. */
      </>
      <>
        {/* 2 - 1 */}
        <No1 name="김규리" age={26} address="서울"></No1>
      </>
    </>
  );
}

export default App;
