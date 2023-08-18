import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IconList from "../../assets/IconList.js";
const MainCategory = () => {
  const url = ["icon1", "icon2", "icon3", "icon4", "icon5"];
  const about = "About/";
  console.log(IconList);
  const icons = IconList.map((icon, i) => (
    <li className="icons" key={i}>
      <Link to={about + url[i]}>
        <div>
          {icon.icon}
          <br />
          {icon.name}
        </div>
      </Link>
    </li>
  ));

  return (
    <Container>
      <CategoryTitle>이런 유형이 있어요</CategoryTitle>
      <ul className="iconBox">{icons}</ul>
    </Container>
  );
};
export default MainCategory;
const Container = styled.div`
  height: 100%;
`;
const CategoryTitle = styled.div`
  text-align: left;
  height: 8vh;
`;
