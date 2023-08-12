import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  function stateSet(e) {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, e],
    }));
  }
  function handleBotMessage(e) {
    const Message = createChatBotMessage(e);
    stateSet(Message);
  }
  function handleClientMessage(e) {
    const Message = createClientMessage(e);
    stateSet(Message);
  }

  const bot1 = () => {
    handleBotMessage("1");
  };
  const client2 = () => {
    handleClientMessage("sibal???");
  };
  const bot3 = () => {
    handleBotMessage("3");
  };

  const actionsArray = {
    bot1,
    client2,
    bot3,
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { ...actionsArray },
        });
      })}
    </div>
  );
};

export default ActionProvider;
