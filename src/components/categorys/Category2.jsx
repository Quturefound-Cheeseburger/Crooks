import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "../../styles/FullPageScroll.css";
import SmishingIntroduction from "../smishing/SmishingIntroduction";
import SmishingStats from "../smishing/SmishingStats";
import SmishingSimul from "../smishing/SmishingSimul";
import SmishingPrevention from "../smishing/SmishingPrevention";
import C2 from "../Videos/C2";
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
              <div className="video">
                <C2 />s
              </div>
            </div>
          </div>
          <div className="section">
            <div className="innerSection">
              <div className="prevention">
                <SmishingPrevention />
              </div>
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
