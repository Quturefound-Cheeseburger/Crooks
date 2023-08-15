import React from "react";
import { Link } from "react-router-dom";
import IconList from "../../assets/IconList.js";
const MainCategory = () => {
  const url = ["icon1", "icon2", "icon3", "icon4", "icon5"];
  const about = "About/";
  const icons = IconList.map(({ name, icon }, i) => (
    <li className="icons" key={i}>
      <Link to={about + url[i]}>
        <div>
          {icon()}
          <br />
          {name}
        </div>
      </Link>
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
