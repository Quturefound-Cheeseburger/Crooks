import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "react-chatbot-kit/build/main.css";
import Chatbot from "react-chatbot-kit";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider1 from "../chatbot/actionProviders/VoiceFishing";
import "../chatbot/Chatbot.css";

const Category4 = ({isRender}) => (
  <ReactFullpage
    sectionsColor={["#ff5f45", "#0798ec", "#fc6c7c", "#435b71", "orange"]}
    //fullpage options
    anchors={["0", "1", "2", "3"]}
    navigation={"true"}
    licenseKey={"YOUR_KEY_HERE"}
    verticalCentered={"true"}
    scrollingSpeed={800} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <h1>4 </h1>
          </div>
          <div className="section">
            <h1>Section 2</h1>
          </div>
          <div className="section">
            <h1>Section 3</h1>
          </div>
          <div className="section">
            {isRender === "true" &&
              <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider1}
            />}
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Category4;
