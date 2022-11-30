import React, { useState } from "react";

const CheckBox2 = () => {
  // const price = [10000, 30000, 80000];
  // const itemList = ["cap", "shose", "bag"]
  const items = [
    { price: 10000, item: "모자" },
    { price: 30000, item: "신발" },
    { price: 80000, item: "가방" },
  ];

  const itemList = items.map((obj) => (
    <label>
      <input
        type="checkbox"
        value={obj.price}
        onChange={(e) => changeHandler(e.target)}
      />
      {obj.item}
      <br />
    </label>
  ));

  const [total, setTotal] = useState(0);

  function changeHandler(e) {
    if (e.checked) {
      setTotal((prevState) => prevState + parseInt(e.value));
    } else {
      setTotal((prevState) => prevState - parseInt(e.value));
    }
  }

  return (
    <div>
      {itemList}
      <p>합계 : {total}</p>
    </div>
  );
};

export default CheckBox2;
