"use client";
import Image from "next/image";
import Nilsson from "public/images/nilsson.png";

export default function Banner() {
  return (
    <div className="margin">
      <div className="flex items-center ">
        <Image src={Nilsson} alt="Nilsson" className="banner-contacts" />
      </div>
      <div className="flex flex-col items-start mt-[80px] sm:mt-[100px]">
        <span className="text-carrois text-demonicyellow sm:text-1xl sm:text-3xl font-light">
          About Us
        </span>
        <span className="text-goodpro-bold text-white text-3xl sm:text-5xl mt-3">
          GET TO KNOW THE COMPANY
        </span>
      </div>
    </div>
  );
}
