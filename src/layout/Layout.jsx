import React from "react";
import Nav from "../components/headComponent/Nav";
import Footer from "../components/Footer";
const Page = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
