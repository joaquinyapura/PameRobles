import React from "react";
import { NavigationBar } from "./Components/NavigationBar";
import imagenCirculo from "./assets/images/pamecirculo.png";

export const Bio = () => {
  return (
    <>
      <NavigationBar />
      <div className="gradient w-full mx-auto flex">
        <div className="imagen ">
          <img src={imagenCirculo} alt="" />
        </div>
        <div className="inform w-1/2 mt-60">
          <h2 className="text-8xl  font-bold text-yellow-600">¡HOLA!</h2>
          <p className="w-3/4 mt-2 text-xl">
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
            para transformar en arte aquello que deseo transmitir. Me entrego
            por completo a esta pasión.
          </p>
        </div>
      </div>
    </>
  );
};
