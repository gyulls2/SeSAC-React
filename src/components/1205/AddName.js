import React, { useEffect, useState } from "react";

const AddName = () => {
  // 콜백함수 형태로 초기값을 넣으면 최초에 한번만 실행
  const [names, setNames] = useState(() => heavyWork());
  const [input, setInput] = useState("");

  function heavyWork() {
    for (let i = 0; i < 1000; i++) {
      console.log("엄청 복잡한 계산 중 .. ");
    }
    return ["달팽이", "햄스터"];
  }
  const InputChange = (e) => {
    setInput(e.target.value);
  };

  const uploadInput = () => {
    // setNames([input, ...names]);
    setNames((prevState) => [input, ...prevState]);
  };

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({ names });

    // 실제 업데이트 되기 바로 직전에 cleanup이 실행됨
    return () => {
      console.log("cleanup");
      console.log({ names });
    };
  }, [names]);

  return (
    <div>
      <input type="text" onChange={InputChange} />
      <button onClick={uploadInput}>추가</button>
      <div>
        {names.map((name, idx) => (
          <p key={idx}>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default AddName;
