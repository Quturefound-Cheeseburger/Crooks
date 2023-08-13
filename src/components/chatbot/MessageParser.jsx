import React, { useEffect, useState } from "react";

const MessageParser = ({ children, action1, action2 }) => {
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
    setitems(1);
    console.log(items);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          action1,
          action2,
        });
      })}
    </div>
  );
};

export default MessageParser;
