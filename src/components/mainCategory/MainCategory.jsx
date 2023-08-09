import React from "react";
const MainCategory = (props) => {
  const obj1 = ["icon1", "icon2", "icon3", "icon4", "icon5"];

  const icons = obj1.map((icon, i) => (
    <li className="icons" key={i} onClick={() => props.handler(i)}>
      {icon}
    </li>
  ));

  return (
    <div className="mainCategory">
      이런 유형들이 있어요
      <ul className="iconBox">{icons}</ul>
    </div>
  );
};
export default MainCategory;
