import React from "react";
import { useParams } from "react-router-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Simulation from "../chatbot/Simulation";

const Category1 = ({ props }) => (
  <ReactFullpage
    sectionsColor={["#ff5f45", "#0798ec", "#fc6c7c", "#435b71", "orange"]}
    //fullpage options
    anchors={["0", "1", "2", "3", "4"]}
    navigation={"true"}
    licenseKey={"YOUR_KEY_HERE"}
    verticalCentered={"true"}
    scrollingSpeed={800} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">{props}</div>
          <div className="section">
            <h1>Section 2</h1>
          </div>
          <div className="section">
            <h1>Section 3</h1>
          </div>
          <div className="section">
            <h1>Section 4</h1>
          </div>
          <div className="section">
            <Simulation />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Category1;
