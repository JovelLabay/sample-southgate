"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import SouthGate from "public/images/southgate.png";
import Logo from "@/public/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Nav() {
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full z-2 sticky top-0 ${
        isScrolled ? "bg-[#2b2b2b]" : "bg-transparent"
      }`}
    >
      <div className="flex  py-1 margin ">
        <div className="flex items-center">
          <Image src={SouthGate} alt="SouthGate" width={180} height={300} />
        </div>
        {/* Navigation bar for desktop */}
        <nav className="sm:flex w-full gap-[50px] justify-end items-center text-white text-carrois font-bold hidden">
          <Link href="/">
            <div className="hover:text-gray-300 text-white text-carrois no-underline font-bold text-[15px]">
              HOME
            </div>
          </Link>
          <Link href="/about">
            <div className="no-underline text-carrois text-[15px] text-white hover:text-gray-500">
              ABOUT
            </div>
          </Link>
          <Link href="/products">
            <div className="no-underline text-carrois text-[15px] text-white hover:text-gray-500">
              PRODUCT
            </div>
          </Link>
          <Link href="/contacts">
            <div className="no-underline text-carrois text-[15px] text-white hover:text-gray-500">
              CONTACT
            </div>
          </Link>
        </nav>
        {/* Navigation bar for mobile */}
        <nav className="sm:hidden flex items-center w-full cursor-pointer relative">
          <div
            className={`text-white ml-auto transition-transform duration-300 transform ${
              isMenu ? "rotate-180" : ""
            }`}
            onClick={handleMenu}
          >
            {isMenu ? "" : <GiHamburgerMenu />}
          </div>
          {/* Dropdown menu */}
          {isMenu && (
            <div className="absolute flex-col justify-center items-center top-full right-0 bg-[#2b2b2b] h-[700px] w-[300px] z-2 animate-fade-in shadow-lg rounded-lg">
              <div
                className={`text-white m-2 flex transition-transform duration-300 transform ${
                  isMenu ? "rotate-180" : ""
                }`}
                onClick={handleMenu}
              >
                <div className="text-2xl flex items-center justify-center m-2">
                  {isMenu ? <AiOutlineClose /> : <GiHamburgerMenu />}
                </div>
                <div className="w-full justify-end flex m-2">
                  <Image
                    src={Logo}
                    alt="Southgate"
                    className="h-auto w-[30px]"
                  />
                </div>
              </div>
              <Link
                onClick={() => setIsMenu(!isMenu)}
                href="/"
                className="block px-4 py-2 text-white text-carrois no-underline font-bold text-[15px] hover:text-gray-300 my-3"
              >
                HOME
              </Link>
              <Link
                onClick={() => setIsMenu(!isMenu)}
                href="/about"
                className="block px-4 py-2 text-white text-carrois no-underline font-bold  text-[15px]hover:text-gray-300 my-3"
              >
                ABOUT
              </Link>
              <Link
                onClick={() => setIsMenu(!isMenu)}
                href="/products"
                className="block px-4 py-2 text-white text-carrois no-underline font-bold text-[15px] hover:text-gray-300 my-3"
              >
                PRODUCT
              </Link>
              <Link
                onClick={() => setIsMenu(!isMenu)}
                href="/contacts"
                className="block px-4 py-2 text-white text-carrois no-underline font-bold  text-[15px] hover:text-gray-300 my-3"
              >
                CONTACT
              </Link>
              <hr className="text-white mt-10" />
              <div className="w-full items-center justify-center flex h-fit mt-3 flex-col">
                <Image
                  src={Logo}
                  alt="Southgate"
                  className="h-auto w-[70px] text-center"
                />
                <Image
                  src={SouthGate}
                  alt="Southgate"
                  className="h-auto w-[200px]"
                />
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
