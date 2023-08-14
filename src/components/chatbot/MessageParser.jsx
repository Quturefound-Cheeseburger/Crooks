import React, { useEffect, useState } from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const MessageParser = ({ children, action1 }) => {
  const [items, setitems] = useState(0);
  const [chatState, setChatState] = useState(0);
  const functionKeys = Object.keys(action1);

  useEffect(() => {
    if (chatState === functionKeys.length) {
      return;
    }
    const interval = setInterval(() => {
      const currentFuctionKeys = functionKeys[chatState];
      action1[currentFuctionKeys]();
      setChatState((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [action1, chatState, functionKeys]);

  const parse = () => {
    setChatState(0);
    console.log(items);
    createChatBotMessage("hi");
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          action1,
        });
      })}
    </div>
  );
};

export default MessageParser;
