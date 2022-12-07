import { createContext, useCallback, useContext, useState } from "react";
import "./App.css";
import ChildComponent from "./components/1206/ChildComponent";
import HeaderComponent from "./components/1206/HeaderComponent";
import HomeComponent from "./components/1206/HomeComponent";
import ParentComponent from "./components/1206/ParentComponent";
import { ThemeContext } from "./components/1206/ThemeContext";

// MyContext 객체 생성
const MyContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // const [count, setCount] = useState(0);

  // const updateHandler = useCallback(() => {
  //   console.log("update");
  // }, []);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <HomeComponent/>
      </ThemeContext.Provider>

      <ParentComponent />
      <MyContext.Provider value="Hello World">
        <GrandParent />
      </MyContext.Provider>

      {/* <input type="number" onChange={(e) => setCount(e.target.value)} />
      <ChildComponent update={updateHandler} /> */}
    </>
  );
}

function GrandParent() {
  return <Parent />;
}
function Parent() {
  return <Child />;
}
function Child() {
  return <Message />;
}
function Message() {
  const value = useContext(MyContext);
  return <div>전달받은 데이터 : {value}</div>;
}

export default App;
