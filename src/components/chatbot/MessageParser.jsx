import React, { useEffect, useState } from "react";

const MessageParser = ({ children, actions }) => {
  const [chatState, setChatState] = useState(0);

  useEffect(() => {
    function handleChatState(e) {
      setChatState(e);
    }
    if (chatState === 0) {
      actions.handleHello();
      setTimeout(() => {
        handleChatState(1);
      }, 1800);
    }
    if (chatState === 1) {
      actions.handleHello2();
      setTimeout(() => {
        handleChatState(2);
      }, 1800);
    }
    if (chatState === 2) {
      actions.handleHello3();
      setTimeout(() => {
        handleChatState(3);
      }, 1800);
    }
  }, [chatState]);
  const parse = () => {};

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
