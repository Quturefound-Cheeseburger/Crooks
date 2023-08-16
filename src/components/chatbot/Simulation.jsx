import React from "react";
import "react-chatbot-kit/build/main.css";
import Chatbot from "react-chatbot-kit";
import "./Chatbot.css";

const Simulation = ( {config, MessageParser, ActionProvider} ) =>{
    return(
        <div>
            <Chatbot
             config={config}
             messageParser={MessageParser}
             actionProvider={ActionProvider}
             />
        </div>
    )
}
export default React.memo(Simulation);