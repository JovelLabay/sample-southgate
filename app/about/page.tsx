"use client";
import React from "react";
import Image from "next/image";
import Banner from "@/lib/components/blocks/aboutPage/banner";
// import VideoJS from "@/lib/functions/videoJS";
import Accordion from "@/lib/components/blocks/aboutPage/accordion/accordion";
import Tyson from "@/public/images/tyson.png";
// import SouthgateVideo from "../../public/videos/southgate.mp4";

export default async function AboutPage() {
  // const playerRef = React.useRef(null);

  // const videoJsOptions = {
  //   autoplay: true,
  //   controls: true,
  //   responsive: true,
  //   fluid: true,
  //   sources: [
  //     {
  //       src: "/path/to/video.mp4",
  //       type: "video/mp4",
  //     },
  //   ],
  // };

  // const handlePlayerReady = (player) => {
  //   playerRef.current = player;

  //   // You can handle player events here, for example:
  //   player.on("waiting", () => {
  //     videojs.log("player is waiting");
  //   });

  //   player.on("dispose", () => {
  //     videojs.log("player will dispose");
  //   });
  // };
  return (
    <main>
      <section>
        <Banner />
      </section>

      <section className="flex flex-col mt-[90px] text-white">
        {/* First Take */}
        <div className="parallelogram-background ">
          <div className="skew-x-[8deg] flex margin items-center w-full h-full my-[70px]">
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

          {/* <div>
            <h2>Video Player</h2>
            <video src={SouthgateVideo} width="800" height="400" controls />
          </div> */}

          {/* Second Take */}
          <div className="skew-x-[8deg] flex margin items-center w-full h-full my-[70px]">
            <div className="juliana">
              <div className="juliana-overlay"></div>
              <Image src={Tyson} alt="Tyson Photo" />
            </div>

            <div className=" flex flex-col w">
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
