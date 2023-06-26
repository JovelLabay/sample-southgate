"use client";
import Image from "next/image";
import Giorgio from "public/images/giorgio.png";
import Logo from "public/images/logo.png";

export default function HomeBanner() {
  return (
    <>
      <div className="flex items-center">
        <Image src={Giorgio} alt="Giorgio" className="banner" />
      </div>
      <div className="p-10 justify-start mt-[80px]">
        <Image
          src={Logo}
          alt="Southgate Express marketing Inc."
          width={200}
          height={100}
        />
      </div>
      <div className="flex flex-col items-start ml-[60px]">
        <span className="text-carrois text-demonicyellow text-4xl font-light">
          Lorem Ipsum
        </span>
        <span className="text-goodpro text-white text-7xl font-bold mt-3">
          TECHNOLOGY MEETS <br /> PERFORMANCE
        </span>
      </div>
    </>
  );
}
