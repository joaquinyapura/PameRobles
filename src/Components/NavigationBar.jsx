import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/Facebook.svg";
import linkedin from "../assets/images/linkedin.svg";
import burguer from "../assets/hamburguesa.svg";

export const NavigationBar = (e) => {
  const openMenu = () => {
    const menu = document.querySelector("#menu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };

  /* const remover = () => {
    const ul = document.querySelector("#ul");
    e ? ul.classList.remove("text-white") : console.log("nollego");
  };
  setTimeout(() => {
    remover();
  }, 2250);
 */
  return (
    <>
      <nav
        id="menu"
        className={`background text-center hidden  absolute text-2xl w-full min-h-screen  lg:block `}
      >
        <ul
          id="ul"
          className={`flex flex-col lg:flex-row ${e.class} text-white lg:gap-20 gap-3 p-10 ml-0 lg:ml-28 min-h-screen  justify-center`}
        >
          <li className="hover:text-amber-500 transition ease-in-out duration-500">
            <a href="">Inicio</a>
          </li>
          <li className="hover:text-amber-500 transition ease-in-out duration-500">
            <a href="">Bio</a>
          </li>
          <li className="hover:text-amber-500 transition ease-in-out duration-500">
            <a href="">Contacto</a>
          </li>
          <div className="flex gap-6 w-full lg:ml-80 justify-center lg:justify-start py-10 lg:py-0  ">
            <li>
              <a href="">
                <img
                  src={instagram}
                  alt=""
                  className="hover:scale-75 transition ease-in-out"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src={facebook}
                  alt=""
                  className="hover:scale-75 transition ease-in-out"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src={linkedin}
                  alt=""
                  className="hover:scale-75 transition ease-in-out"
                />
              </a>
            </li>
          </div>
        </ul>
      </nav>
      <div className="w-full p-6 absolute justify-end flex lg:hidden  ">
        <button onClick={openMenu}>
          <img src={burguer} alt="" className="w-11" />
        </button>
      </div>
    </>
  );
};
