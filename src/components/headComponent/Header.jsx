import React from "react";
import "../../styles/Header.css";
const Header = () => {
  const headrItem = ["소개", "통계", "관련영상", "예방법", "시뮬레이션"];
  return (
    <div className="headBox">
      <div className="content">
        <h2 className="headername">Crooks</h2>
        <ul className="headerlist">
          {headrItem.map((item, i) => (
            <li className="headeritem" key={i}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
