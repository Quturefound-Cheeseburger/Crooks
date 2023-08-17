import React from "react";
import styled from "styled-components";
import backgraoundImage from "../../assets/images/main-bg.gif";
const Intro = () => {
  return (
    <IntroContainer>
      <Title>Crooks</Title>
    </IntroContainer>
  );
};
export default Intro;
const IntroContainer = styled.div`
  background: url(${backgraoundImage}) no-repeat;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  vertical-align: middle;
  border-bottom: solid;
  border-top: solid;
  height: 65vh;
  line-height: 40vh;
`;
const Title = styled.h1`
  text-align: center;
  margin: 100px;
  font-size: 10vw;
`;
