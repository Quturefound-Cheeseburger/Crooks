import React from "react";
import scenario from "../../../constatnts/VocieFishingScenario.js";
import ActionProvider from "./ActionProvider.jsx";
const Account = ({ createChatBotMessage, setState, children }) => {
  return (
    <ActionProvider
      createChatBotMessage={createChatBotMessage}
      setState={setState}
      children={children}
      scenario={scenario}
    />
  );
};

export default Account;
