import React from "react";

const PreventDefault = () => {
  function linkClick(e) {
    e.preventDefault();
    console.log("Link is clicked");
  }
  
  return (
    <div>
      <a href="http://www.naver.com" onClick={linkClick}>
        클릭하세요
      </a>
    </div>
  );
};

export default PreventDefault;
