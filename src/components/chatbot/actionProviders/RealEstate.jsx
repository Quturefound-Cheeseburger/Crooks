import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const RealEstate = ({ createChatBotMessage, setState, children }) => {
  const scenario = [
    { sub: "bot", text: "hi" },
    { sub: "client", text: "client" },
    { sub: "bot", text: "hi2" },
  ];
  //객체를 라이브러리의 함수를 사용해 바꾸는 과정.
  const obj = scenario.map((e, i) => {
    const obj = {};
    if (e.sub === "bot") {
      obj[i] = () => {
        handleBotMessage(e.text);
      };
    } else {
      obj[i] = () => {
        handleClientMessage(e.text);
      };
    }
    return obj;
  });
  const nObj = Object.values(obj).map((innerObj) => Object.values(innerObj)[0]);

  //객체를 받는데, key값을 봇/클라 로 나눔.

  function stateSet(e) {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, e],
    }));
  }
  function handleBotMessage(e) {
    stateSet(createChatBotMessage(e));
  }
  function handleClientMessage(e) {
    stateSet(createClientMessage(e));
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          action1: { ...nObj },
        });
      })}
    </div>
  );
};

export default RealEstate;
