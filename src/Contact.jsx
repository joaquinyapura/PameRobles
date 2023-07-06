import { NavigationBar } from "./Components/NavigationBar";
import instagram from "./assets/images/instagram.svg";
import facebook from "./assets/images/Facebook.svg";
import linkedin from "./assets/images/linkedin.svg";

export const Contact = () => {
  const clases = "text-black svgNegro";
  return (
    <>
      <NavigationBar class={clases} />
      <div className="mt-20 w-full absolute">
        <div className=" flex px-20 gap-10 ">
          <div className="flex flex-col justify-center w-1/2 px-10">
            <div className=" text-center">
              <h1 className="text-6xl text-amber-500 font-extrabold">
                ¡Contactame!
              </h1>
              <p className=" text-lg text-gray-600 px-36">
                Si te interesa trabajar conmigo o simplemente comprar alguna de
                mis fotos podrias contactarme mediante este formulario o sino a
                cualquiera de mis redes aquí abajo.
              </p>
              <div className="logos mt-4">
                <div className=" flex justify-center gap-3">
                  <a href="">
                    <img
                      src={instagram}
                      alt=""
                      className="svgNegro opacity-25 hover:opacity-40 transition ease-in-out duration-400"
                    />
                  </a>
                  <a href="">
                    <img
                      src={facebook}
                      alt=""
                      className="svgNegro opacity-25 hover:opacity-40 transition ease-in-out duration-400"
                    />
                  </a>
                  <a href="">
                    <img
                      src={linkedin}
                      alt=""
                      className="svgNegro opacity-25 hover:opacity-40 transition ease-in-out duration-400"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="formulario w-1/2 mt-24">
            <form className="text-right flex flex-col">
              <div className="item flex">
                <p className="mx-3 text-gray-600 text-lg">Nombre Completo</p>
                <input
                  type="text"
                  size="30"
                  className=" border-solid border-b-slate-300 border-b-2 border-0 border-black"
                />
              </div>
              <div className="item flex py-4">
                <p className="mx-3 text-gray-600 text-lg text-right">
                  Correo electronico{" "}
                </p>
                <input
                  type="email"
                  size="30"
                  className=" border-solid border-b-slate-300 border-b-2 border-0 border-black"
                />
              </div>
              <div className="item flex">
                <p className="mx-3 text-gray-600 text-lg">Su mensaje</p>
                <textarea
                  cols="40"
                  rows="5"
                  type="text"
                  size="45"
                  className=" border-solid border-b-slate-300 border-b-2 border-0 border-black ml-12"
                />
              </div>

              <button className="p-1 mt-5 w-2/3  border-slate-200 border-solid border-2">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
