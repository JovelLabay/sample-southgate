"use client";
import Image from "next/image";
import SouthGate from "public/images/southgate.png";

export default function Nav() {
  return (
    <div className="flex py-2 bg-transparent">
      <div className="flex items-center border-black border-solid">
        <Image src={SouthGate} alt="SouthGate" width={500} height={500} />
      </div>
      <nav className="flex w-full justify-end items-center text-black text-carrois text-3xl border-black border-solid">
        <a href="#" className=" px-4 hover:text-gray-300">
          HOME
        </a>
        <a href="#" className="px-4 hover:text-gray-300">
          ABOUT
        </a>
        <a href="#" className=" px-4 hover:text-gray-300">
          PRODUCT
        </a>
        <a href="#" className=" px-4 hover:text-gray-300">
          CONTACT
        </a>
      </nav>
    </div>
  );
}
