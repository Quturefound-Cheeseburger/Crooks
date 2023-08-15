import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "react-chatbot-kit/build/main.css";
import "../chatbot/Chatbot.css";
import "../../styles/FullPageScroll.css";
import Simul from "../transaction_simul/Simul.jsx";
import C5 from "../Videos/C5";

const Category5 = ({ isRender }) => (
  <ReactFullpage
    sectionsColor={["#097bdb", "#097bdb", "#097bdb", "#097bdb", "#097bdb"]}
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
                <div className="video">
                    <C5/>
                    <div className="innerText">
                        아무거나
                    </div>
                </div>
            </div>
          </div>
          <div className="section">
            <div className="innerSection">
              <div className="prevention">pevention</div>
            </div>
          </div>
          <div className="section">
              <div className="innerSection">
              <Simul/>
              </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Category5;
