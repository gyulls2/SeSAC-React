import React from 'react';

const Wrapper = ({children}) => {
  const style = {
    border : '3px solid red',
    padding : '30px'
  }

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default Wrapper;