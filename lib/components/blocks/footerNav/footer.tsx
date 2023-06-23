"use client";
import Image from "next/image";
import Logo from "public/images/logo.png";
import HatchitLogo from "public/images/hatchit_logo.png";
import FacebookLogo from "public/images/fb_logo.png";
import YoutubeLogo from "public/images/yt_logo.png";

export default function Footer() {
  return (
    <div className="bg-darkcharcoal text-white flex">
      <div className="flex align-center w-full margin">
        <div className="py-10 pr-5 justify-start">
          <Image
            src={Logo}
            width={200}
            height={100}
            alt="Southgate Express marketing Inc."
          />
        </div>
        <div className="ml-4 pt-20 text-goodpro flex-grow">
          <span className="block py-2 text-2xl font-bold">
            SOUTHGATE EXPRESS MARKETING INC,
          </span>
          <span className="block text-1xl">
            123 Street Mandaue City Philippines 6014
          </span>
          <span className="block">mail@southgateexpress.com</span>
          <span className="block">(032) 123 4567 +63 917 123 4567 </span>
        </div>

        <div className="flex flex-grow justify-end">
          <div className="flex flex-col items-end">
            <div className="p-10 flex">
              <Image
                src={FacebookLogo}
                alt="Facebook"
                height={30}
                width={110}
              />
              <Image src={YoutubeLogo} alt="Facebook" height={30} width={70} />
            </div>
            <div className="mt-auto flex p-10">
              @ 2023 Southgate Express Marketing Inc. Powered by &nbsp;
              <Image src={HatchitLogo} alt="Hatchit" height={200} width={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
