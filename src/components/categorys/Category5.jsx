import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "react-chatbot-kit/build/main.css";
import "../chatbot/Chatbot.css";
import "../../styles/FullPageScroll.css";
import Simul from "../transaction/Simul.jsx";
import C5 from "../Videos/C5";
import Introduction from "../transaction/Introduction";
import Preventive from "../transaction/Preventive";

const Category5 = ({ isRender }) => (
  <ReactFullpage
    sectionsColor={["#0053cf", "#097bdb", "#185096", "#90c1ea", "#097bdb"]}
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
                  <img src="/img/chart.svg" alt="chart"/>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="innerSection">
                <div className="video">
                    <C5/>
                    <div className="innerText">
                        출처 :
                    </div>
                </div>
            </div>
          </div>
          <div className="section">
            <div className="innerSection">
              <div className="prevention"><Preventive/></div>
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
