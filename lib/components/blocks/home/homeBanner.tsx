"use client";
import Image from "next/image";
import Giorgio from "public/images/giorgio.png";
import Logo from "public/images/logo.png";

export default function HomeBanner() {
  return (
    <div className="margin">
      <div className="flex items-center">
        <Image src={Giorgio} alt="Giorgio" className="banner" />
      </div>
      <div className="py-8 justify-start mt-[60px]">
        <Image
          src={Logo}
          alt="Southgate Express marketing Inc."
          width={130}
          height={70}
        />
      </div>
      <div className="flex flex-col items-start ">
        <span className="text-carrois text-demonicyellow sm:text-1xl sm:text-3xl font-light">
          Lorem Ipsum
        </span>
        <span className="text-goodpro-bold text-white text-3xl sm:text-5xl mt-3">
          TECHNOLOGY MEETS <br /> PERFORMANCE
        </span>
      </div>
    </div>
  );
}
