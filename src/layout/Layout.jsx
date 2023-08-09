import React from "react";
import Header from "../components/headComponent/Header";
import MainPage from "./MainPage";
import Footer from "../components/Footer";
const Page = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Page;
