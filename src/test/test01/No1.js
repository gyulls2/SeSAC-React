import React from "react";

const No1 = (props) => {
  const { name, age, address } = props;
  const style1 = {
    backgroundColor: "yellow",
    color: "blue",
  };
  const style2 = {
    backgroundColor: "green",
    color: "red",
  };
  const style3 = {
    backgroundColor: "blue",
    color: "orange",
  };

  return (
    <div>
      안녕하세요. 제 이름은<span style={style1}>{name} </span> 입니다. 저는
      <span style={style2}>{age}</span> 살이고,
      <span style={style3}>{address}</span>에 살고 있습니다.
    </div>
  );
};

export default No1;
