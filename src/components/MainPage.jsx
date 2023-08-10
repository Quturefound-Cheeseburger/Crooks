import React, { useState } from "react";
import Intro from "./intro/Intro";
import MainCategory from "./mainCategory/MainCategory";
import Category1 from "./categorys/Category1";
import Category2 from "./categorys/Category2";
import Category3 from "./categorys/Category3";

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
