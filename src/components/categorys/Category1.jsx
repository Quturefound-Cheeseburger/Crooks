import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "react-chatbot-kit/build/main.css";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import VoiceFishing from "../chatbot/actionProviders/VoiceFishing";
import "../chatbot/Chatbot.css";
import Simulation from "../chatbot/Simulation";
import "../../styles/FullPageScroll.css";

const Category1 = ({ isRender }) => (
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
            <div className="innerSection">
              <div className="introduction">Introduction</div>
              <div className="stats">stats</div>
            </div>
          </div>
          <div className="section">
            <div className="innerSection">
              <div className="vedio">관련영상</div>
            </div>
          </div>
          <div className="section">
            <div className="innerSection">
              <div className="prevention">pevention</div>
            </div>
          </div>
          <div className="section">
            {isRender === "true" && (
              <Simulation
                config={config}
                MessageParser={MessageParser}
                ActionProvider={VoiceFishing}
              />
            )}
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Category1;
