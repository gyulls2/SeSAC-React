import React from "react";

const DefaultProps = ({ name, age }) => {
  return (
    <div>
      안녕하세요. 제 이름은 {name} 입니다 나이는 {age}살 입니다
    </div>
  );
};

DefaultProps.defaultProps = {
  name: "이름없음",
  age: 10,
};

export default DefaultProps;
