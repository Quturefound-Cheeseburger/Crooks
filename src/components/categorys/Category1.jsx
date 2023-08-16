import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "react-chatbot-kit/build/main.css";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import VoiceFishing from "../chatbot/actionProviders/VoiceFishing";
import "../chatbot/Chatbot.css";
import Simulation from "../chatbot/Simulation";
import "../../styles/FullPageScroll.css";
import VoiceFishingSimul from "../voiceFishing/VoiceFishingSimul";
import VoiceFishingIntroduction from "../voiceFishing/VoiceFishingIntroduction";
import VoiceFishingStats from "../voiceFishing/VoiceFishingStats";

const Category1 = ({ isRender }) => (
  <ReactFullpage
    sectionsColor={["#097BDB", "#097BDB", "#097BDB", "#097BDB", "#097BDB  "]}
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
              <div className="introduction">
                <VoiceFishingIntroduction/>
              </div>
              <div className="stats">
                <VoiceFishingStats/>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="innerSection">
              <div className="video">관련영상</div>
            </div>
          </div>
          <div className="section">
            <div className="innerSection">
              <div className="prevention">pevention</div>
            </div>
          </div>
          <div className="section">
            <div className="innerSection">
            <div className="simul">
            {isRender === "true" && (
              <VoiceFishingSimul/>
            )}
            </div>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Category1;
