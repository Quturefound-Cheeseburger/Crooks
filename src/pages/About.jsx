import React, { useEffect, useState } from "react";
import Nav from "../components/headComponent/Nav";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Category1 from "../components/categorys/Category1";
import Category2 from "../components/categorys/Category2";
import Category3 from "../components/categorys/Category3";
import Category4 from "../components/categorys/Category4";
import Category5 from "../components/categorys/Category5";

const About = () => {
  const [categoryState, setCategoryState] = useState("/");
  const [isRender, setIsRender] = useState(false);
  const [isSimulation, setIsSimulation] = useState(false);
  const location = useLocation();
  //About페이지 첫 진입 시 어떤 카테고리를 랜더링할지 결정
  useEffect(() => {
    setCategoryState(location.pathname);
  }, []);
  //시뮬레이션 진입 인식
  useEffect(() => {
    location.hash === "#3" && setIsSimulation(true);
    console.log(location.hash);
    console.log(isSimulation);
  }, [location.hash]);
  //인식 후 동작/유지
  useEffect(() => {
    if (isSimulation) {
      setIsRender("true");
    }
    return () => setIsSimulation("true");
  }, [isSimulation]);

  return (
    <>
      <Nav />
      {categoryState === "/About/icon1" && <Category1 isRender={isRender} />}
      {categoryState === "/About/icon2" && <Category2 isRender={isRender} />}
      {categoryState === "/About/icon3" && <Category3 isRender={isRender} />}
      {categoryState === "/About/icon4" && <Category4 isRender={isRender} />}
      {categoryState === "/About/icon5" && <Category5 isRender={isRender} />}
      <Footer />
    </>
  );
};
export default About;
