"use client";
import Image from "next/image";
import HomeBanner from "@/lib/components/blocks/home/homeBanner";
import DynamicProducts from "@/lib/components/blocks/home/products";
import Button from "@/lib/functions/button";
import Juliana from "@/public/images/juliana.png";

export default function Home() {
  // Sample data for dynamic products in Home Page
  const sampleProducts = [
    {
      label: "CAR",
    },
    {
      label: "SUV",
    },
    {
      label: "VAN",
    },
    {
      label: "TRUCKS & BUS",
    },
  ];

  return (
    <main>
      {/* YOU DIVIDE THE SECTION FROM HOMEPAGE HERE */}
      <section>
        {/* Home Banner contains image for background only */}
        <HomeBanner />
      </section>
      {/* Image Section */}
      <section className="flex flex-col mt-[90px] text-white">
        <div className="parallelogram-background ">
          <div className="skew-x-[9deg] flex ml-[70px] items-center w-full h-full my-[70px]">
            <div className="juliana">
              <div className="juliana-overlay"></div>
              <Image src={Juliana} alt="Juliana Photo" />
            </div>

            <div className=" flex flex-col w">
              <div className="ml-10 w-[600px]">
                <span className="text-demonicyellow text-goodpro text-[80px] font-extrabold">
                  SOUTHGATE TAGLINE HERE
                </span>
                <br />
                <span className="text-carrois text-3xl">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </span>
              </div>
              <div className="mt-3">
                <Button label="KNOW MORE" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="my-10">
        <DynamicProducts products={sampleProducts} />
      </section>
    </main>
  );
}
