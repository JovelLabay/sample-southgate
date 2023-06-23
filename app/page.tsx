"use client";
import Image from "next/image";
import HomeBanner from "@/lib/components/blocks/home/banner";
import Logo from "public/images/logo.png";
import Juliana from "public/images/juliana.png";

export default function Home() {
  return (
    <main>
      {/* YOU DIVIDE THE SECTION FROM HOMEPAGE HERE */}
      <section>
        {/* Home Banner contains image for background only */}
        <HomeBanner />
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
      </section>
      {/* Image Section */}
      <section className="flex flex-col mt-[90px] text-white">
        <div className="parallelogram-background ">
          <div className="skew-x-[9deg] flex ml-[70px] items-center w-full h-full">
            <div className="juliana">
              <div className="juliana-overlay"></div>
              <Image src={Juliana} alt="Juliana Photo" />
            </div>

            <div className="ml-10 w-[600px]">
              <span className="text-demonicyellow text-goodpro text-[80px] font-extrabold">
                SOUTHGATE TAGLINE HERE
              </span>
              <br />
              <span className="text-carrois text-3xl">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section></section>
    </main>
  );
}
