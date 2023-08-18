import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "react-chatbot-kit/build/main.css";
import "../chatbot/Chatbot.css";
import "../../styles/FullPageScroll.css";
import C4 from "../Videos/C4";
import AccountIntroduction from "../Account/AccountIntroduction";
import AccountStats from "../Account/AccounStats";
import AccountPrevention from "../Account/AccountPrevention";
import VoiceFishingSimul from "../voiceFishing/VoiceFishingSimul";

const Category4 = ({ isRender }) => (
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
              <div className="introduction">
                <AccountIntroduction />
              </div>
              <div className="stats">
                <AccountStats />
              </div>
            </div>
          </div>
          <div className="section">
            <div className="innerSection">
              <div className="video">
                <C4 />
              </div>
            </div>
          </div>
          <div className="section">
            <div className="innerSection">
              <div className="prevention">
                <AccountPrevention />
              </div>
            </div>
          </div>
          <div className="section">
            {isRender === "true" && <VoiceFishingSimul />}
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Category4;
