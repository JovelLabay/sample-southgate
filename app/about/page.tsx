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

      <section className="flex flex-col mt-[90px] text-white">
        {/* First Portion */}
        <div className="parallelogram-background ">
          <div className="skew-x-[8deg] flex margin w-full h-full my-[70px] flex-col gap-[100px]">
            <div className="flex">
              <div className="juliana">
                <div className="juliana-overlay"></div>
                <Image src={Tyson} alt="Tyson Photo" />
              </div>
              <div className=" flex flex-col w">
                <div className="ml-10 w-[600px]">
                  <span className="text-demonicyellow text-goodpro text-[80px] font-extrabold">
                    WHY CHOOSE US
                  </span>
                  <br />
                  <span className="text-carrois text-3xl">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                  </span>
                </div>
              </div>
            </div>

            {/* Second Portion (video) */}
            <div className="flex">
              <video
                src="/videos/southgate.mp4"
                width="80%"
                height="400"
                controls
              />
            </div>

            {/* Third portion */}
            <div className="flex">
              <div className="juliana">
                <div className="juliana-overlay"></div>
                <Image src={Tyson} alt="Tyson Photo" />
              </div>

              <div className="ml-10 w-[600px]">
                <span className="text-demonicyellow text-goodpro text-[80px] font-extrabold">
                  HOW WE STARTED
                </span>
                <br />
                <span className="text-carrois text-3xl">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </span>
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
