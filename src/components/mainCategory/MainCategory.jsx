import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IconList from "../../assets/IconList.js";
import { useState } from "react";
const MainCategory = () => {
  const url = ["icon1", "icon2", "icon3", "icon4", "icon5"];
  const about = "About/";
  const [isMouseOver, setIsMouseOver] = useState(false);
  const handleMouseOver = () => {
    setIsMouseOver(!isMouseOver);
    console.log(isMouseOver);
  };

  const icons = IconList.map((icon, i) => (
    <Icons
      isMouseOver={isMouseOver}
      key={i}
      onMouseOver={handleMouseOver}
      style={{ boxShadow: isMouseOver ? "0px 0px 30px;" : "" }}
    >
      <Link to={about + url[i]}>
        <div>
          {icon.icon}
          <br />
          {icon.name}
        </div>
      </Link>
    </Icons>
  ));

  return (
    <Container>
      <CategoryTitle>이런 유형이 있어요</CategoryTitle>
      <IconBox>{icons}</IconBox>
    </Container>
  );
};
export default MainCategory;
const Container = styled.div`
  height: 100%;
`;
const CategoryTitle = styled.div`
  font-size: 1.2em;
  text-align: left;
  height: 8vh;
`;
const IconBox = styled.ul`
  text-align: center;
`;
const Icons = styled.li`
  display: inline-block;
  font-size: 10x;
  margin: 10px 5%;
  padding: 5px;
  border-radius: 30px;
`;
