import "./App.css";
import CreateHeader from "../components/CreateHeader";
import CreateBody from "../components/CreateBody";
import CreateFooter from "../components/CreateFooter";
import Movie from "../components/Movie";
import No1 from "../test/test01/No1";
import DefaultProps from "../components/1125/DefaultProps";
import Wrapper from "../components/1125/Wrapper";
import PropTypesComponent from "../components/1125/PropTypesComponent";
import TodoTask from "../components/1125/TodoTask";
import PriceList from "../components/1125/PriceList";
import UIDesign from "../components/1125/UIDesign";
import ChangePropsValue from "../components/1128/ChangePropsValue";
import UseState1 from "../components/1128/UseState1";
import ChangeArray from "../components/1128/ChangeArray";
// import LiftingStateUp from "./components/1128/LiftingStateUp";
import { useState } from "react";
// import LiftingStateUp2 from "./components/1128/LiftingStateUp2";
import PreventDefault from "../components/1129/PreventDefault";
import ChangeFont from "../components/1129/ChangeFont";
import EventOnChange from "../components/1129/EventOnChange";
import MultiInput from "../components/1129/MultiInput";
import NameForm from "../components/1129/NameForm";
import TextArea from "../components/1129/TextArea";
import Select from "../components/1129/Select";
import InsertImages from "../components/1129/InsertImages";
// import SelectImage from "./components/1129/SelectImage";
import CheckBox from "../components/1129/CheckBox";
// import CheckBox2 from "./components/1129/CheckBox2";
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
// import Prac01 from "./test/1130/Prac01";
import CSSModule from "../components/1201/CSSModule";
import GlobalStyle1 from "../components/1201/GlobalStyle1";
import StyledComponents from "../components/1201/StyledComponents";
import AddName from "../components/1205/AddName";
import UseRefComponent1 from "../components/1205/UseRefComponent1";
import UseRefComponent2 from "../components/1205/UseRefComponent2";
import UseRefComponent3 from "../components/1205/UseRefComponent3";

function App() {
  const priceList = [1000, 2000, 3000, 4000];
  const prices = priceList.map((price) => (
    <div key={price}>?????? : {price}???</div>
  ));

  const todoList = [
    { taskName: "????????????", finished: false },
    { taskName: "????????????", finished: true },
  ];

  const movieList = [
    {
      title: "?????? 2: ???????????????",
      open: "2022.09.07",
      poster:
        "https://movie-phinf.pstatic.net/20220826_188/1661489945659Su2RI_JPEG/movie_image.jpg?type=m203_290_2",
    },
    {
      title: "????????? ????????????",
      open: "2022.09.28",
      poster:
        "https://movie-phinf.pstatic.net/20220929_135/1664441921246ae2RC_JPEG/movie_image.jpg?type=m203_290_2",
    },
    {
      title: "????????? ?????? 2",
      open: "2022.09.28",
      poster:
        "https://movie-phinf.pstatic.net/20220928_85/1664332929020nYWPc_JPEG/movie_image.jpg?type=m203_290_2",
    },
  ];

  var a = "hello";
  if (true) {
    var a = "bye";
    // let a = "bye";
    // let??? ????????? ?????? ????????? hello??? ?????????
    // let??? scope??? ?????? ???????????? ????????? if??? ????????? ?????? if??? ????????? ????????? ??? ??????
  }
  const study = "react";

  const style = {
    backgroundColor: "blue",
    fontSize: "50px",
    fontWeight: "bold",
    color: "yellow",
  };

  const name = "?????????";

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
      <UseRefComponent3 />
      <UseRefComponent2 />
      <UseRefComponent1 />
      <AddName />

      <StyledComponents />
      <GlobalStyle1 />
      <CSSModule />

      {/* <Prac01 /> */}
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

      {/* <CheckBox2 /> */}
      <CheckBox cap={10000} shose={30000} bag={80000} />
      {/* <SelectImage /> */}
      <InsertImages />
      <Select />
      <TextArea />
      <NameForm />
      <MultiInput />
      <EventOnChange />
      <ChangeFont />
      <PreventDefault />

      {/* <h3>chlidComponent????????? ???????????? ????????? : {value}</h3> */}
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
        {/* ????????? ?????? ????????? ????????? ??? */}
        {/* ?????? ????????? ??????????????? ??? */}
        <h1>?????????</h1>
        <br />
        <h2>????????? ??????</h2>
        <br />
        <h3>?????????</h3>
      </>
      <>
        {/* 1 - 2 */}
        <h1>{a}</h1>
      </>
      <>
        {/* 1 - 3 */}
        {study === "react" ? <h1>??????????????????</h1> : <h1>???????????? ????????????</h1>}
      </>
      <>
        {/* 1 - 4 */}
        <h1 style={style}>?????????</h1>
      </>
      <>
        {/* 1 - 5 */}
        <h1 className="style">?????????</h1>
      </>
      <>
        {/* 1 - 6 */}
        {/* ??????????????? ????????? ???????????? ??????*/}
        <div> {name} </div>
        // ?????????????????? /* ?????? ????????? ????????? ????????? ???????????????. */
      </>
      <>
        {/* 2 - 1 */}
        <No1 name="?????????" age={26} address="??????"></No1>
      </>
    </>
  );
}

export default App;
