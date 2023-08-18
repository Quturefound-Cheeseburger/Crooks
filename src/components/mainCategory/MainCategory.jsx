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
    <Icons isMouseOver={isMouseOver} key={i} onMouseOver={handleMouseOver}>
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
      <IconBox>{icons}</IconBox>
    </Container>
  );
};
export default MainCategory;
const Container = styled.div`
  height: 100%;
  min-height: 30vh;
`;

const IconBox = styled.ul`
  text-align: center;
`;
const Icons = styled.li`
  display: inline-block;
  font-size: 1em;
  margin: 10px 5%;
  padding: 3px;
  border-radius: 20px;
  &:hover {
    box-shadow: 0 0 50px #8b9b9b;
  }
  transition: box-shadow 0.3s ease;
`;
