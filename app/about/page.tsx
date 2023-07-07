"use client";
import React from "react";
import Image from "next/image";
import Banner from "@/lib/components/blocks/aboutPage/banner";
import Accordion from "@/lib/components/blocks/aboutPage/accordion/accordion";
import Tyson from "@/public/images/tyson.png";

export default async function AboutPage() {
  return (
    <main>
      <section>
        <Banner />
      </section>

      <section>
        <div className="parallelogram-background-about flex sm:flex-col mt-[40px] sm:mt-[70px] text-white">
          <div className="sm:skew-x-[3deg] lg:skew-x-[8deg] flex sm:justify-start justify-center margin w-full h-full my-[70px] flex-col gap-[50px] sm:gap-[100px]">
            {/* First Portion */}
            <div className="flex items-center flex-col sm:flex-row">
              <div className="juliana-about h-auto w-auto ">
                <div className="juliana-overlay"></div>
                <Image src={Tyson} alt="Tyson Photo" />
              </div>
              <div className=" flex flex-col w-fit">
                <div className="sm:ml-10 w-fit md:w-[300px] lg:w-[600px] flex flex-col items-center sm:items-start">
                  <span className="text-demonicyellow text-goodpro-bold lg:text-[50px] md:text-[30px] text-[20px]">
                    HOW WE STARTED
                  </span>
                  <br />
                  <span className="text-carrois text-[15px] md:text-[18px] lg:text-2xl">
                    <p>
                      In 2017, Southgate formally launched its direct
                      importation and distributorship of the Italian Brand
                      “Pirelli” which is known for its affiliation and exclusive
                      supply of tires to the Formula 1 racing circuit. The
                      company carries a very extensive line of Pirelli Light
                      Truck Radial (LTR) and Truck Bus Radial (TBR) sizes.
                    </p>
                    <p>
                      In 2021, Prometeon Tyre Group awarded exclusive
                      Distributorship for its TBR and LTR business.
                    </p>
                    <p>
                      In 2022, the company added the Zeetex 5000max PCR range
                      into its product portfolio. It is manufactured in Thailand
                      by ZAFCO International with headquarters in Dubai, UAE.
                    </p>
                  </span>
                </div>
              </div>
            </div>

            {/* Second Portion (video) */}
            <div className="flex sm:justify-start justify-center">
              <video
                src="/videos/southgate.mp4"
                width="80%"
                height="400"
                controls
              />
            </div>

            {/* Third portion */}
            <div className="flex items-center flex-col sm:flex-row ">
              <div className="juliana-about h-auto">
                <div className="juliana-overlay"></div>
                <Image src={Tyson} alt="Tyson Photo" />
              </div>

              <div className=" flex flex-col items-center">
                <div className="sm:ml-10 w-fit md:w-[200px] lg:w-[500px] flex flex-col items-center sm:items-start">
                  <span className="text-demonicyellow text-goodpro-bold lg:text-[50px] md:text-[30px] text-[20px]">
                    WHY CHOOSE US
                  </span>
                  <br />
                  <span className="text-carrois text-[15px] md:text-[18px] lg:text-2xl">
                    <p>
                      Together with its dynamic marketing approach and strong
                      AFTERSALES support, Southgate has built a very formidable
                      portfolio catering across all market segments. With the
                      country’s increasing demand for Quality yet Affordable
                      tires, our Pirelli, Aeolus and Zeetex product lines can
                      surely meet the expectations of every consumer’s
                      requirements.
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Accordion Section */}
      <section>
        <Accordion />
      </section>
    </main>
  );
}
