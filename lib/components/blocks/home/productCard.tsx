"use client";

import Image from "next/image";
import Laursoo from "@/public/images/laursoo.png";

type Props = {
  label: string;
  image: string;
};

export default function productCard({ label, image }: Props) {
  return (
    <div className="parallelogram-card">
      <div className="skew-x-[9deg] ml-[32px] flex flex-col">
        {/* Temporary image used */}
        <Image src={Laursoo} width={285} height={400} alt="Laursoo" />
        <span className="text-white text-goodpro text-4xl font-bold mt-5">
          {label}
        </span>
      </div>
    </div>
  );
}
