import React, { useState } from "react";
import Intro from "../components/intro/Intro";
import MainCategory from "../components/mainCategory/MainCategory";
import Category1 from "../components/categorys/Category1";
import Category2 from "../components/categorys/Category2";
import Category3 from "../components/categorys/Category3";

import "../styles/MainPage.css";

const MainPage = () => {
  const [categoryState, setCategoryState] = useState();
  function stateHandler(e) {
    setCategoryState(e);
  }
  return (
    <div id="mainContainer">
      {categoryState === 0 && <Category1 />}{" "}
      {categoryState === 1 && <Category2 />}
      {categoryState === 2 && <Category3 />}
      <Intro />
      <MainCategory handler={stateHandler} />
    </div>
  );
};

export default MainPage;
