import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import "./HomeComponent.scss";
import MainComponent from "./MainComponent";

const HomeComponent = () => {
  const data = useContext(ThemeContext);
  console.log(data);

  return (
    <div className="container">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
};

export default HomeComponent;
