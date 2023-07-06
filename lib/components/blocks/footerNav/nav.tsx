"use client";
import Image from "next/image";
import SouthGate from "public/images/southgate.png";

export default function Nav() {
  return (
    <div className="flex py-1 bg-transparent margin">
      <div className="flex items-center">
        <Image src={SouthGate} alt="SouthGate" width={180} height={300} />
      </div>
      <nav className="flex w-full gap-[50px] justify-end items-center text-white text-carrois font-bold">
        <a
          href="#"
          className=" hover:text-gray-300 text-white text-carrois no-underline font-bold text-[15px]"
        >
          HOME
        </a>
        <a
          href="#"
          className=" no-underline text-carrois text-[15px] text-white hover:text-gray-500"
        >
          ABOUT
        </a>
        <a
          href="#"
          className=" no-underline text-carrois text-[15px] text-white hover:text-gray-500"
        >
          PRODUCT
        </a>
        <a
          href="#"
          className=" no-underline text-carrois text-[15px] text-white hover:text-gray-500"
        >
          CONTACT
        </a>
      </nav>
    </div>
  );
}
