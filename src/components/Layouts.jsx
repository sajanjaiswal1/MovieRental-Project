import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

const Layouts = () => {
  return (
    <>
      <Header />
      {/* <Card /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layouts;
