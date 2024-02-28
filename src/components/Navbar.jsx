import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex flex-1 justify-end items-center hidden">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } font-poppins font-normal text-[16px] text-white cursor-pointer `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } absolute min-w-[140px] top-20 right-0 mx-4 my-2 p-6 rounded-xl sidebar bg-black-gradient`}
        >
          <ul className="list-none flex flex-col flex-1 justify-end items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } font-poppins font-normal text-[16px] text-white cursor-pointer `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
