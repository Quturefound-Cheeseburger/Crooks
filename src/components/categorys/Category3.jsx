import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "react-chatbot-kit/build/main.css";
import Chatbot from "react-chatbot-kit";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import "../chatbot/Chatbot.css";
import RealEstate from "../chatbot/actionProviders/RealEstate";
import "../../styles/FullPageScroll.css";

const Category3 = ({ isRender }) => (
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
              <div className="video">관련영상</div>
            </div>
          </div>
          <div className="section">
            <div className="innerSection">
              <div className="prevention">pevention</div>
            </div>
          </div>
          <div className="section">
            {isRender === "true" && (
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={RealEstate}
              />
            )}
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Category3;
