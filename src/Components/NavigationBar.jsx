import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/Facebook.svg";
import linkedin from "../assets/images/linkedin.svg";
import burguer from "../assets/hamburguesa.svg";

export const NavigationBar = () => {
  return (
    <>
      <nav className="absolute text-2xl w-full hidden lg:block">
        <ul className="flex text-white gap-20 p-10 ml-28 align-center">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Bio</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
          <div className="flex gap-6 w-full ml-60 ">
            <li>
              <img src={instagram} alt="" />
            </li>
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={linkedin} alt="" />
            </li>
          </div>
        </ul>
      </nav>
      <div className="w-full p-6 absolute justify-end flex ">
        <button>
          <img src={burguer} alt="" className="w-11" />
        </button>
      </div>
    </>
  );
};
