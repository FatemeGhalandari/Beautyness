import { useState } from "react";
import {
  Logo,
  reservation,
  close,
  menu,
} from "../assets";
import { headerLinks } from "../constants";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-4 justify-between items-center navbar sm:px-16 ss:px-8 px-4">
      <div className="flex sm:px-8 px-4">
        <NavLink to="/" className="flex sm:px-16 md:px-8">
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
      </div>
      {/* responsive */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } absolute top-14 left-0 bg-[#FFF] pt-4 w-full item-center justify-center`}
        >
          <div className="flex flex-col items-center justify-center rounded-t-[2px] ">
            <ul className="flex flex-col mt-4">
              {headerLinks.map((headerLink, index) => (
                <li
                  key={headerLink.id}
                  className={`font-normal font-manrope text-[18px] cursor-pointer leading-[125%] text-[#555] ${
                    index !== headerLinks.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <NavLink to={headerLink.title}>{headerLink.title}</NavLink>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="flex flex-row justify-center items-center py-3"
            >
              <span className="text-[#7A9CA5] text-center font-semibold font-manrope text-[16px] uppercase py-2">
                reservation
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
