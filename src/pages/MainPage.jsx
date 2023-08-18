import React from "react";
import Intro from "../components/intro/Intro";
import MainCategory from "../components/mainCategory/MainCategory";
import Nav from "../components/headComponent/Nav";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div>
      <Nav />
      <Intro />
      <MainCategory />
      <Footer />
    </div>
  );
};

export default MainPage;
