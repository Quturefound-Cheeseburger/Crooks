import React, { useEffect, useState } from "react";

const MessageParser = ({ children, actions }) => {
  const [items, setitems] = useState(actions);
  const [chatState, setChatState] = useState(0);
  const functionKeys = Object.keys(actions);

  useEffect(() => {
    if (chatState === functionKeys.length) {
      return;
    }
    const interval = setInterval(() => {
      const currentFuctionKeys = functionKeys[chatState];
      actions[currentFuctionKeys]();
      setChatState((prev) => prev + 1);
      console.log("state=" + chatState);
      console.log(functionKeys.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [actions, chatState, functionKeys]);

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
