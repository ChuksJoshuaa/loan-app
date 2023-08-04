import { Link } from "react-router-dom";
import dashboardSvg from "../assets/dashboard.svg";
import arrowRightSvg from "../assets/arrowRight.svg";
import { useContext } from "react";
import MyContext from "../context";

const Header = () => {
  const { state } = useContext(MyContext);
  return (
    <div
      className={`flex flex-wrap justify-between items-center mt-5 py-5 ${
        !state.isSidebarOpen ? "mx-6" : "mx-1"
      }`}
    >
      <div
        className={`mb-2 flex justify-start items-center ${
          !state.isSidebarOpen ? "ml-[1em]" : "ml-0"
        }`}
      >
        <img src={dashboardSvg} alt="dashboard" className="w-[20px] h-[20px]" />
        <img
          src={arrowRightSvg}
          alt="arrow-right"
          className="w-[20px] h-[20px] mx-2"
        />
        <h3 className="font-bold text-[14px] md:text-[17px] leading-[20px] text-[#222]">
          All Loan Request
        </h3>
      </div>
      <Link
        to={`/request-loan`}
        className="rounded-[6px] bg-[#222] py-[5px] px-[10px] gap-[5px] flex items-center cursor-pointer"
      >
        <h3 className="text-white text-[14px] leading-[24px] font-normal">
          Request Loan
        </h3>
      </Link>
    </div>
  );
};

export default Header;
