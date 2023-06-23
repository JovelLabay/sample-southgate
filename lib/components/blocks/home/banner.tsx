"use client";
import Image from "next/image";
import Giorgio from "public/giorgio.png";
import Logo from "public/images/logo.png";

export default function HomeBanner() {
  return (
    <div className="flex items-center">
      <Image src={Giorgio} alt="Giorgio" className="banner" />
    </div>
  );
}
