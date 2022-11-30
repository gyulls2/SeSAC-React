import React from "react";
import "./NestingComponent.scss";

const NestingComponent = () => {
  return (
    <div>
      <div className="container2">
        <ul>
          <li>빨강</li>
          <li>파랑</li>
          <li>초록</li>
        </ul>
      </div>
      <div className="parent-small"> 안녕하세요 </div>
      <div className="parent-medium"> 안녕하세요 </div>
      <div className="parent-large"> 안녕하세요 </div>
    </div>
  );
};

export default NestingComponent;
