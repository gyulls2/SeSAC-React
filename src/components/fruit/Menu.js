import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/addFruit">추가</Link>
      <Link to="/fruitsList">리스트</Link>
    </div>
  );
};

export default Menu;