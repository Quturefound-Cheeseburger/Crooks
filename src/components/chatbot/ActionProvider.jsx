import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  function stateSet(e) {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, e],
    }));
  }
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");
    stateSet(botMessage);
  };
  const handleHello2 = () => {
    const botMessage = createClientMessage("sibal");
    stateSet(botMessage);
  };
  const handleHello3 = () => {
    const botMessage = createChatBotMessage("sibal");
    stateSet(botMessage);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleHello, handleHello2, handleHello3 },
        });
      })}
    </div>
  );
};

export default ActionProvider;
