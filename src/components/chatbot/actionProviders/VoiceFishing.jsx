import React from "react";
import scenario from "../../../constatnts/VocieFishingScenario.js";
import ActionProvider from "./ActionProvider.jsx";
const VoiceFishing = ({ createChatBotMessage, setState, children }) => {
  return (
    <ActionProvider
      createChatBotMessage={createChatBotMessage}
      setState={setState}
      children={children}
      scenario={scenario}
    />
  );
};

export default VoiceFishing;
