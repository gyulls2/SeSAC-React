import React from "react";
import ChildComponent from "./ChildComponent";
import ChildComponent1 from "./ChildComponent1";
import { MyContext } from "./Context";

const ParentComponent = () => {
  return (
    <MyContext.Provider value="안녕하세요">
      <ChildComponent1 />
    </MyContext.Provider>
  );
};

export default ParentComponent;
