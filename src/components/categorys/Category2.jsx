import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "../../styles/FullPageScroll.css";
import SmishingIntroduction from "../smishing/SmishingIntroduction";
import SmishingStats from "../smishing/SmishingStats";
import SmishingSimul from "../smishing/SmishingSimul";

const Category2 = ({ isRender }) => (
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
                <SmishingIntroduction />
              </div>
              <div className="stats">
                <SmishingStats />
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
              {isRender === "true" && <SmishingSimul />}
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Category2;
