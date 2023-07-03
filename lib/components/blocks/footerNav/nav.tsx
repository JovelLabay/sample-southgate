"use client";
import { useState } from "react";
import Image from "next/image";
import SouthGate from "public/images/southgate.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Nav() {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className="flex py-1 bg-transparent margin">
      <div className="flex items-center">
        <Image src={SouthGate} alt="SouthGate" width={180} height={300} />
      </div>
      {/* Navigation bar for desktop */}
      <nav className="sm:flex w-full gap-[50px] justify-end items-center text-white text-carrois font-bold hidden">
        <a
          href="#"
          className="hover:text-gray-300 text-white text-carrois no-underline font-bold text-[15px]"
        >
          HOME
        </a>
        <a
          href="#"
          className="no-underline text-carrois text-[15px] text-white hover:text-gray-500"
        >
          ABOUT
        </a>
        <a
          href="#"
          className="no-underline text-carrois text-[15px] text-white hover:text-gray-500"
        >
          PRODUCT
        </a>
        <a
          href="#"
          className="no-underline text-carrois text-[15px] text-white hover:text-gray-500"
        >
          CONTACT
        </a>
      </nav>
      {/* Navigation bar for mobile */}
      <nav className="sm:hidden flex items-center w-full cursor-pointer relative">
        <div
          className={`text-white ml-auto transition-transform duration-300 transform ${
            isMenu ? "rotate-180" : ""
          }`}
          onClick={handleMenu}
        >
          {isMenu ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
        {/* Dropdown menu */}
        {isMenu && (
          <div className="absolute top-full right-0 w-full bg-gray-800 bg-opacity-60">
            <a
              href="#"
              className="block px-4 py-2 text-white text-carrois no-underline font-bold text-[10px] hover:text-gray-300"
            >
              HOME
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-white text-carrois no-underline font-bold text-[10px] hover:text-gray-300"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-white text-carrois no-underline font-bold text-[10px] hover:text-gray-300"
            >
              PRODUCT
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-white text-carrois no-underline font-bold text-[10px] hover:text-gray-300"
            >
              CONTACT
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
