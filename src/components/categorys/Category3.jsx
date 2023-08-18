import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "react-chatbot-kit/build/main.css";
import "../chatbot/Chatbot.css";
import "../../styles/FullPageScroll.css";
import Simul from "../house/Simul.jsx";
import C3 from "../Videos/C3";
import Introduction from "../house/Introduction";
import Preventive from "../house/Preventive";


const Category3 = ({ isRender }) => (
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
              <div className="introduction"><Introduction/></div>
              <div className="stats">
                  <img className="chart3" src="/img/3/chart3.svg" alt="chart"/>
                </div>
            </div>
          </div>
          <div className="section">
            <div className="innerSection">
              <div className="video">
                <C3/>
                <div className="innerText">
                    출처 : 호갱구조대 - '직접 1억을 사기 당하고 알게된 전세사기의 모든 것'
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="innerSection">
              <div className="prevention">
                <Preventive/>
              </div>
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

export default Category3;
