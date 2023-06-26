"use client";
import Image from "next/image";
import SouthGate from "public/images/southgate.png";

export default function Nav() {
  return (
    <div className="flex py-2 bg-transparent margin">
      <div className="flex items-center">
        <Image src={SouthGate} alt="SouthGate" width={300} height={300} />
      </div>
      <nav className="flex w-full gap-[50px] justify-end items-center text-carrois text-2xl">
        <a
          href="#"
          className=" no-underline text-carrois text-2xl text-white hover:text-gray-500"
        >
          HOME
        </a>
        <a
          href="#"
          className=" no-underline text-carrois text-2xl text-white hover:text-gray-500"
        >
          ABOUT
        </a>
        <a
          href="#"
          className=" no-underline text-carrois text-2xl text-white hover:text-gray-500"
        >
          PRODUCT
        </a>
        <a
          href="#"
          className=" no-underline text-carrois text-2xl text-white hover:text-gray-500"
        >
          CONTACT
        </a>
      </nav>
    </div>
  );
}
