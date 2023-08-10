import React from "react";
import ReactDOM from "react-dom";
import { ScrollToTopOnMount, SectionsContainer, Section } from "react-fullpage";
import "./scrollLayout.css";
const ScrollLayout = () => {
  let options = {
    scrollingSpeed: 10000,
    sectionClassName: "section",
    anchors: ["0", "1", "2", "3", "4"],
    scrollBar: false,
    navigation: true,
    verticalAlign: true,
    sectionPaddingTop: "0px",
    sectionPaddingBottom: "0px",
    arrowNavigation: true,
  };
  return (
    <div id="scrollContainer">
      {/* <Header>
        <a href="/#0" className="opa">
          Section One
        </a>
        <a href="/#1">Section Two</a>
        <a href="/#2">Section Three</a>
        <a href="/#3">Section Three</a>
        <a href="/#4">Section Three</a>
      </Header> */}
      <ScrollToTopOnMount />
      <SectionsContainer {...options}>
        <Section>
          <div className="page1">Page 1</div>
        </Section>
        <Section>
          <div className="page2">Page 2</div>
        </Section>
        <Section>
          <div className="page3">Page 3</div>
        </Section>
        <Section>
          <div className="page4">Page 4</div>
        </Section>
        <Section>
          <div className="page5">Page 5</div>
        </Section>
      </SectionsContainer>
    </div>
  );
};

export default ScrollLayout;
