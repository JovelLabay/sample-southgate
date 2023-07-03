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
        <div className="ml-3 items-left  text-goodpro mt-[40px]">
          <span className="block py-2 text-1xl font-bold">
            SOUTHGATE EXPRESS MARKETING INC,
          </span>
          <span className="block text-[12px]">
            Aniceto Seno Street, Banilad, Mandaue City, Philippines 6014
          </span>
          <span className="block text-[12px]">sgtyre@yahoo.com.ph</span>
          <span className="block text-[12px]">Telefax: (032) 344-8808</span>
          <span className="block text-[12px]">Direct Line: (032)268-8818</span>
          <span className="block text-[12px]">
            Mobile: (032) 0917-8832858 | 0922- 8468808
          </span>
        </div>

        <div className="flex flex-grow justify-end">
          <div className="flex flex-col items-end">
            <div className="p-10 flex gap-3">
              <Image src={FacebookLogo} alt="Facebook" height={15} width={70} />
              <Image src={YoutubeLogo} alt="Facebook" height={15} width={45} />
            </div>
            <div className="mt-auto flex p-10">
              @ 2023 Southgate Express Marketing Inc. Powered by &nbsp;
              <a
                href="https://www.hatchitsolutions.com/#landing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={HatchitLogo}
                  alt="Hatchit"
                  height={40}
                  width={170}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
