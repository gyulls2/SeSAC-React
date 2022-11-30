import React, { useState } from "react";

const Prac04 = () => {
  const [select, setSelect] = useState("");

  const city = ["서울", "부산", "제주"];
  const cityList = city.map((item) => (
    <legend>
      <input
        type="radio"
        name="city"
        value={item}
        onChange={(e) => setSelect(e.target.value)}
      />
      {item}
    </legend>
  ));

  function openAlert() {
    alert(select);
  }

  return (
    <div>
      <form>
        {cityList}
        <button type="button" onClick={openAlert}>
          확인
        </button>
      </form>
    </div>
  );
};

export default Prac04;
