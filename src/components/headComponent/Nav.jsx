import React from "react";
import "../../styles/Layout.css";
import { Header } from "react-fullpage";
const Nav = () => {
  const headrItem = ["소개", "통계", "관련영상", "예방법", "시뮬레이션"];
  return (
    <div className="headBox">
      <div className="content">
        <h2 className="headername">
          <a href="/">Crooks</a>
        </h2>
        <ul className="headerlist">
          {headrItem.map((item, i) => (
            <li className="headeritem" key={i}>
              <a href={"#" + i}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
