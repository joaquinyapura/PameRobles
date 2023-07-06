import React from "react";
import { NavigationBar } from "./Components/NavigationBar";
import imagenCirculo from "./assets/images/pame-cerro.jpg";

export const Bio = () => {
  return (
    <>
      <NavigationBar />
      <div className="gradient w-full mx-auto flex flex-col items-center text-center lg:text-right lg:flex-row">
        <div className="imagen mx-auto w-1/3 mt-40 hidden lg:block">
          <div className="circulo aspect-square bg-green-950 rounded-full mt-10 overflow-hidden flex flex-col justify-center  ">
            <img src={imagenCirculo} alt="" className=" relative " />
          </div>
        </div>
        <div className="inform lg:w-1/2 w-full  lg:mt-60 mt-10 text-gray-600">
          <h2 className="text-8xl lg:w-3/4 w-full font-bold  text-yellow-600">
            ¡HOLA!
          </h2>
          <p className="lg:w-3/4 w-full lg:px-0 px-10 mt-2 text-xl">
            Soy Pam Robles, tengo 28 años, nací en la provincia de Tucumán,
            Argentina. Realicé mis estudios en la Facultad de Artes, Universidad
            Nacional de Tucumán y me recibí como Fotógrafa en Febrero del 2019.
            <br />
            <br />
            Continué formándome a través de diversos cursos que despertaron mi
            pasión por la fotografía de naturaleza. Durante mi trayectoria, he
            tenido la suerte de rodearme de colegas que me han inspirado, y hoy
            en día son grandes amigos con quienes he compartido muestras y
            exposiciones. La fotografía siempre ha sido mi refugio, mi razón de
            ser y sentir en muchos momentos de mi vida. Para mí, es la forma de
            encontrarme en plena conciencia y alcanzar la inspiración necesaria
            para transformar en arte aquello que deseo transmitir.
          </p>
        </div>
      </div>
    </>
  );
};
