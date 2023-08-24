import { useState } from "react";
import {
  Logo,
  call,
  facebook,
  linkedIn,
  twitter,
  reservation,
  close,
  menu,
} from "../assets";
import { headerLinks } from "../constants";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-4 justify-between items-center navbar">
      <div className="flex items-center gap-0 shrink-0">
        <img
          src={Logo}
          alt="logo"
          className="w-[191px] h-[36px] leading-[125%]"
        />
        <div className="md:flex hidden">
          <img
            src={call}
            alt="call"
            className="h-[23px] w-[23px] ml-[46px] leading-[125%] "
          />
          <p className="font-semibold font-manrope text-[18px] ml-[12px] text-[#141414] leading-[125%]">
            Call Us - (+22) 123 456 7890
          </p>
        </div>
      </div>
      <div className="  flex-row justify-end items-center gap-8 shrink-0 md:flex hidden ml-4 md:ml-2">
        <ul className=" h-[23px] shrink-0 flex">
          {headerLinks.map((headerLink, index) => (
            <li
              key={headerLink.id}
              className={`font-normal font-manrope text-[18px] cursor-pointer leading-[125%] text-[#555] ${
                index !== headerLinks.length - 1 ? "mr-4" : "mr-0"
              }`}
            >
              {headerLink.title}
            </li>
          ))}
        </ul>
        <div className="flex w-24 justify-end items-center gap-8 shrink-0 cursor-pointer">
          <img src={facebook} alt="facebook" className="w-[10px] h-[17px]" />
          <img src={twitter} alt="twitter" className="w-[17px] h-[13px]" />
          <img src={linkedIn} alt="linkedIn" className="w-[15px] h-[15px]" />
        </div>

        <button
          type="button"
          className="flex flex-row justify-center items-start  py-4 px-8 bg-[#7A9CA5] "
        >
          <img src={reservation} alt="reservation" className=" w-4 h-4 mr-2 " />
          <span className="text-white font-normal font-manrope text-[14px] uppercase leading-[17.5px] ">
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
          } absolute sm:top-12 sm:right-20 mx-4 my-2 top-10 right-30`}
        >
          <div className="flex flex-col  items-center bg-slate-300 rounded-[20px] mt-4">
            <ul className="flex flex-col  mt-4">
              {headerLinks.map((headerLink, index) => (
                <li
                  key={headerLink.id}
                  className={`font-normal font-manrope text-[18px] cursor-pointer leading-[125%] text-[#555] ${
                    index !== headerLinks.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {headerLink.title}
                </li>
              ))}
            </ul>
            <div className="flex justify-end items-center gap-8 shrink-0 cursor-pointer mt-4 mb-2">
              <img
                src={facebook}
                alt="facebook"
                className="w-[10px] h-[17px]"
              />
              <img src={twitter} alt="twitter" className="w-[17px] h-[13px]" />
              <img
                src={linkedIn}
                alt="linkedIn"
                className="w-[15px] h-[15px]"
              />
            </div>
            <button
              type="button"
              className="flex flex-row justify-center items-start  py-4 px-8 bg-[#7A9CA5] rounded-b-[20px] "
            >
              <img
                src={reservation}
                alt="reservation"
                className=" w-4 h-4 mr-2 "
              />
              <span className="text-white font-normal font-manrope text-[14px] uppercase leading-[17.5px] ">
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
