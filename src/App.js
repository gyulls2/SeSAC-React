import "./App.css";
import { ColorProvider } from "../src/test/1207/ColorProvider";
import ColorBox from "./test/1207/ColorBox";
import UseCallBackComponent2 from "./components/1206/UseCallBackComponent2";

function App() {
  return (
    <>
    <UseCallBackComponent2/>
      <ColorProvider.Provider value={prompt("원하는 색상을 입력하세요")}>
        <ColorBox />
      </ColorProvider.Provider>
    </>
  );
}

export default App;
