import React from "react";
import styled from "styled-components";

const Prevention = ({ title, item }) => {
  const itemList = item.map((e, i) => <List key={i}>{item[i]}</List>);
  return (
    <Container>
      <Title>{title}</Title>
      <ListBox>{itemList}</ListBox>
    </Container>
  );
};

export default Prevention;
const Container = styled.div`
  width: 80vw;
  height: 70vh;
  text-align: center;
`;
const ListBox = styled.ol`
  justify-content: center;
  align-items: center;
  display: inline-block;
`;
const List = styled.li`
  margin: 0.5em;
  font-size: 1.2em;
  text-align: left;
`;
const Title = styled.h1`
  text-align: left;
  margin: 0px;
  font-size: 2em;
  height: 10vh;
`;
