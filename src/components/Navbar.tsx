import { useContext } from "react";
import { NavProfile } from ".";
import logoImg from "../assets/logo.png";
import searchSvg from "../assets/search.svg";
import toggleSvg from "../assets/toggle.svg";
import MyContext from "../context";
import { OPENSIDEBAR } from "../actionTypes";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { state, dispatch } = useContext(MyContext);

  const openSidebar = () => dispatch({ type: OPENSIDEBAR, payload: true });

  return (
    <div className="w-full h-[55px] relative bg-[#222]">
      <div
        className={`flex flex-row ${
          !state.isSidebarOpen ? "justify-start" : "justify-between"
        } items-center`}
        style={{ maxWidth: "1700px", margin: "0 auto", width: "90%" }}
      >
        <Link to="/" className="w-72 h-[55px]">
          <img
            src={logoImg}
            alt="innoloft-logo"
            className={`w-[150px] h-[60px] ${
              !state.isSidebarOpen ? "ml-5" : "ml-[-1.2em]"
            } min-w-[140px]`}
          />
        </Link>
        <div
          className={`ml-20 md:ml-30 flex justify-between items-center w-full ${
            !state.isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <div className="relative">
            <input
              placeholder="Search loan request"
              className="w-[250px] md:w-[500px] h-[27px] rounded-[4px] bg-white outline-none px-3"
            />
            <div className="absolute top-[50%] right-[10px] translate-y-[-50%]">
              <img
                src={searchSvg}
                alt="search"
                className=" h-4 w-4 text-[#222]"
              />
            </div>
          </div>
          <div>
            <NavProfile />
          </div>
        </div>

        <div
          className={`cursor-pointer ${
            !state.isSidebarOpen ? "hidden" : "block"
          }`}
          onClick={openSidebar}
        >
          <img src={toggleSvg} alt="search" className=" h-8 w-8 text-[#222]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
