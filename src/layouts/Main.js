import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/NavBar";
import Home from "../pages/Home/Home/Home";

const Main = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
   
    </>
  );
};

export default Main;
