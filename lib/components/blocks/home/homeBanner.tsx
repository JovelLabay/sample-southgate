"use client";
import Image from "next/image";
import Giorgio from "public/images/giorgio.png";
import Logo from "public/images/logo.png";

export default function HomeBanner() {
  return (
    <>
      <div className="items-center">
        <Image src={Giorgio} alt="Giorgio" className="banner" />
      </div>

      <div className="margin">
        <div className="flex flex-none mt-3 sm:flex-col">
          <div className="flex py-8 sm:mt-[60px] w-auto h-full">
            <Image
              src={Logo}
              alt="Southgate Express marketing Inc."
              className="sm:w-[130px] sm:h[70px] w-[90px] h-auto"
            />
          </div>
          <div className="flex flex-col justify-center sm:items-start ml-4 sm:ml-0">
            <span className="text-carrois text-demonicyellow sm:text-1xl sm:text-3xl font-light">
              Lorem Ipsum
            </span>
            <span className="text-goodpro-bold text-white text-2xl sm:text-5xl mt-3">
              TECHNOLOGY MEETS <br /> PERFORMANCE
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
