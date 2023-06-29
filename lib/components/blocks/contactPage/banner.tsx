"use client";
import Image from "next/image";
import Nilsson from "public/images/nilsson.png";

export default function Banner() {
  return (
    <div className="margin">
      <div className="flex items-center ">
        <Image
          src={Nilsson}
          alt="Rosenke"
          className="banner"
          style={{ height: "600px" }}
        />
      </div>
      <div className="flex flex-col items-start mt-[200px]">
        <span className="text-carrois text-demonicyellow text-4xl font-light">
          Contact Us
        </span>
        <span className="text-goodpro text-white text-7xl font-bold mt-3">
          WE’D LOVE TO TALK WITH YOU
        </span>
      </div>
    </div>
  );
}
