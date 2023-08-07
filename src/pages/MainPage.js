import React from "react";
import "../styles/MainPage.css";

const MainPage = () => {
  const obj1 = ["icon1", "icon2", "icon3", "icon4", "icon5"];
  const icons = obj1.map((icon, i) => (
    <li className="icons" key={i}>
      {icon}
    </li>
  ));
  const Intro = () => {
    return (
      <div className="mainSection1">
        {" "}
        <h1>MainPage</h1>
      </div>
    );
  };
  const MainCategory = () => {
    return (
      <div className="mainCategory">
        이런 유형들이 있어요
        <ul className="iconBox"> {icons}</ul>
      </div>
    );
  };
  return (
    <div id="mainContainer">
      <Intro />
      <MainCategory />
    </div>
  );
};

export default MainPage;
