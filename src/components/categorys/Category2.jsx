import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Nav from "../headComponent/Nav";
import Intro from "../intro/Intro";

import "./styles.css";
const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
};

const originalColors = [
  "#ff5f45",
  "#0798ec",
  "#fc6c7c",
  "#435b71",
  "orange",
  "blue",
  "purple",
  "yellow",
];

export default class Category2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      looptop: true,
      verticalCentered: true,
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: "소개",
        },
        {
          text: "통계",
        },
        {
          text: "관련 영상",
        },
        {
          text: "예방법",
        },
        {
          text: "시뮬레이션",
        },
      ],
    };
  }

  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          backgroundcolor: "#435b71",
        }}
      >
        <Nav />
      </div>
    );

    return (
      <div
        className="Category2
      "
      >
        <Menu />
        <ReactFullpage
          pluginWrapper={pluginWrapper}
          // fullpage options

          navigation
          anchors={["0", "1", "2", "4"]}
          sectionSelector={SECTION_SEL}
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          render={(comp) => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text }) => (
                <div key={text} className={SEL}>
                  <div className="slide">
                    <h3>{text}</h3>
                  </div>
                  <div className="slide">
                    <h3>{text}</h3>
                  </div>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}
