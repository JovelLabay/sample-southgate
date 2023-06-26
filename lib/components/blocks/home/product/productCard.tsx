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
      <div className="flex flex-col">
        {/* Temporary image used */}
        <Image
          src={Laursoo}
          width={350}
          height={400}
          alt="Laursoo"
          objectFit="cover"
        />
      </div>
      <div className="mt-5 skew-x-[9deg] ml-3">
        <span className="text-white text-goodpro text-4xl font-bold">
          {label}
        </span>
      </div>
    </div>
  );
}
