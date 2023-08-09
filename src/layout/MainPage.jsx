import React, { useState } from "react";
import Intro from "../components/intro/Intro";
import MainCategory from "../components/mainCategory/MainCategory";
import "../styles/MainPage.css";
import Category1 from "../components/categorys/Category1";
import Category2 from "../components/categorys/Category2";

const MainPage = () => {
  const [categoryState, setCategoryState] = useState();
  function stateHandler(e) {
    setCategoryState(e);
  }
  return (
    <div id="mainContainer">
      <Intro />
      <MainCategory handler={stateHandler} />
      {categoryState === 0 && <Category1 />}{" "}
      {categoryState === 1 && <Category2 />}
    </div>
  );
};

export default MainPage;
