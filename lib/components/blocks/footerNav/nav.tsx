"use client";
import Image from "next/image";
import SouthGate from "public/images/southgate.png";

export default function Nav() {
  return (
    <div className="flex py-2 bg-transparent margin">
      <div className="flex items-center">
        <Image src={SouthGate} alt="SouthGate" width={300} height={300} />
      </div>
      <nav className="flex w-full gap-[50px] justify-end items-center text-white text-carrois text-2xl">
        <a href="#" className=" hover:text-gray-300">
          HOME
        </a>
        <a href="#" className=" hover:text-gray-300">
          ABOUT
        </a>
        <a href="#" className=" hover:text-gray-300">
          PRODUCT
        </a>
        <a href="#" className=" hover:text-gray-300">
          CONTACT
        </a>
      </nav>
    </div>
  );
}
