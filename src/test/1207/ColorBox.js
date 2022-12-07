import React, { useContext } from "react";
import { ColorProvider } from "./ColorProvider";

const ColorBox = () => {
  const value = useContext(ColorProvider);
  return (
    <div style={{ width: "100%", height: "100vh", background: value }}></div>
  );
};

export default ColorBox;
