import React from "react";
import { Link } from "react-router-dom";

const MainCategory = () => {
  const obj1 = ["icon1", "icon2", "icon3", "icon4", "icon5"];
  const about = "About/"
  const icons = obj1.map((icon, i) => (
    <li className="icons" key={i} >
      <Link to={about+icon}>{icon}</Link>
    </li>
  ));

  return (
    <div className="mainCategory" style={{ textAlign: "left" }}>
      이런 유형들이 있어요
      <ul className="iconBox">{icons}</ul>
    </div>
  );
};
export default MainCategory;
