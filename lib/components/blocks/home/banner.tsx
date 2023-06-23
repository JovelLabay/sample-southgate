"use client";
import Image from "next/image";
import Giorgio from "public/giorgio.png";

export default function HomeBanner() {
  return (
    <div>
      <Image src={Giorgio} alt="Giorgio" className="banner" />
      <span className="text-white">Test</span>
    </div>
  );
}
