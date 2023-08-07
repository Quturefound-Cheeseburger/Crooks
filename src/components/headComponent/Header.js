import React from "react";
import "../../styles/Header.css";
const Header = () => {
  return (
    <div className="headBox">
      <h2 className="headername">Crooks</h2>
      <ul className="headerlist">
        <li className="headeritem">소개</li>
        <li className="headeritem">통계</li>
        <li className="headeritem">관련영상</li>
        <li className="headeritem">예방법</li>
        <li className="headeritem">시뮬레이션</li>
      </ul>
    </div>
  );
};

export default Header;
