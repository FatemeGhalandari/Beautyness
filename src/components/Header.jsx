import { Logo, reservation } from "../assets";
import { headerLinks } from "../data";
import { NavLink } from "react-router-dom";
import { Menu } from "./Menu";
const Header = () => {
  return (
    <nav className="w-full flex py-4 justify-between items-center navbar sm:px-16 ss:px-8 px-2">
      <div className="flex md:px-8 sm:px-4 px-2">
        <NavLink to="/" className="flex sm:px-16 md:px-8 px-2">
          <img
            src={Logo}
            alt="logo"
            className="w-[191px] h-[36px] leading-[125%]"
          />
        </NavLink>
      </div>
      <div className="flex-row justify-end items-center gap-12 md:flex hidden ml-4 md:ml-2 lg:px-16 px-0">
        <ul className="flex justify-end">
          {headerLinks.map((headerLink, index) => (
            <li
              key={headerLink.id}
              className={`font-normal font-manrope text-[18px] cursor-pointer leading-[125%] text-[#555] ${
                index !== headerLinks.length - 1 ? "mr-4" : "mr-0"
              }`}
            >
              <NavLink to={headerLink.title}>{headerLink.title}</NavLink>
            </li>
          ))}
        </ul>
        <NavLink to="/Reservation">
          <button
            type="button"
            className="flex flex-row justify-center items-start py-4 px-8 bg-[#7A9CA5] rounded-[4px] overflow-hidden group relative "
          >
            <div className="absolute inset-0 w-0 bg-[#5C8692] transition-all duration-[200ms] ease-out group-hover:w-full"></div>
            <img
              src={reservation}
              alt="reservation"
              className=" w-4 h-4 mr-2 relative"
            />
            <span className="text-white font-normal font-manrope text-[16px] uppercase leading-[17.5px] relative ">
              reservation
            </span>
          </button>
        </NavLink>
      </div>
      {/* responsive */}
      <div className="md:hidden flex ">
        <div className="flex items-center justify-center">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Header;
