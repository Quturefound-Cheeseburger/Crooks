import React from "react";
import Intro from "./intro/Intro";
import MainCategory from "./mainCategory/MainCategory";
import "../styles/MainPage.css";

const MainPage = () => {
  return (
    <div id="mainContainer">
      <Intro />
      <MainCategory />
    </div>
  );
};

export default MainPage;
