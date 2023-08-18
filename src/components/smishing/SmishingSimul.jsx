import React from "react";
import styled from "styled-components";
import "react-chatbot-kit/build/main.css";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import Smishing from "../chatbot/actionProviders/Smishing";
import "../chatbot/Chatbot.css";
import Simulation from "../chatbot/Simulation";

const SmishingSimul = () => {
  return (
    <Container>
      <Simulation
        config={config}
        MessageParser={MessageParser}
        ActionProvider={Smishing}
      />
    </Container>
  );
};
export default SmishingSimul;
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
