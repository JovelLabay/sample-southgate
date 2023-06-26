"use client";
import Image from "next/image";
import Rosenke from "public/images/rosenke.png";
import Logo from "public/images/logo.png";

export default function Banner() {
  return (
    <div className="margin">
      <div className="flex items-center ">
        <Image
          src={Rosenke}
          alt="Rosenke"
          className="banner"
          style={{ height: "600px" }}
        />
      </div>
      <div className="flex flex-col items-start mt-[200px]">
        <span className="text-carrois text-demonicyellow text-4xl font-light">
          About Us
        </span>
        <span className="text-goodpro text-white text-7xl font-bold mt-3">
          GET TO KNOW THE COMPANY
        </span>
      </div>
    </div>
  );
}
