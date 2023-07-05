import React from "react";
import { NavigationBar } from "./NavigationBar";
import imagenHeader from "../assets/images/pame2.png";
import imagenHeadermobile from "../assets/images/a.png";
import logo from "../assets/images/logoblack.png";
import imagen from "../assets/images/20f/1.jpg";

export const Header = () => {
  return (
    <>
      <NavigationBar />
      <div className="mx-auto min-h-screen">
        <div className="absolute lg:w-1/3 w-full flex flex-col  mt-0 lg:mx-36  lg:text-left text-center lg:mt-64 mt-40 justify-center text-center ">
          <h1 className="text-white text-8xl whitespace-nowrap">PAM ROBLES</h1>
          <h3 className="text-5xl whitespace-nowrap font-bold text-amber-500">
            Nature Photography
          </h3>
        </div>
        <img
          src={imagenHeader}
          alt=""
          className="min-h-screen w-full hidden lg:block"
        />
        <img
          src={imagenHeadermobile}
          alt=""
          className="min-h-screen w-full lg:hidden"
        />
      </div>
      <div className="mx-auto lg:w-1/5 w-2/4 mx-auto mt-12">
        <img src={logo} alt="" />
      </div>

      <div className="gallery grid lg:grid-cols-3 grid-cols-1 gap-6 justify-center mt-20 p-4">
        <div className="">
          <img src={imagen} alt="" />
        </div>
        <div className="">
          <img src={imagen} alt="" />
        </div>
        <div className="">
          <img src={imagen} alt="" />
        </div>
        <div className="">
          <img src={imagen} alt="" />
        </div>
        <div className="">
          <img src={imagen} alt="" />
        </div>
      </div>

      <div className="footer w-full bg-black text-white p-10 text-center">
        <h4>Designed by</h4>
      </div>
    </>
  );
};
