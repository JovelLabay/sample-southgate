"use client";
import Image from "next/image";
import Logo from "public/images/logo.png";
import HatchitLogo from "public/images/hatchit_logo.png";
import FacebookLogo from "public/images/fb_logo.png";
import YoutubeLogo from "public/images/yt_logo.png";

export default function Footer() {
  return (
    <div className="bg-darkcharcoal text-white flex">
      <div className="flex align-center w-full margin sm:flex-row flex-col ">
        {/* Logo Image */}
        <div className="py-2 sm:py-10 flex sm:relative justify-center items-center w-full">
          <Image
            src={Logo}
            width={200}
            height={100}
            alt="Southgate Express marketing Inc."
          />
        </div>
        {/* Details */}
        <div className="sm:ml-3 sm:items-left flex flex-col text-goodpro justify-center items-center sm:items-start sm:text-left">
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

        <div className="flex sm:flex-grow justify-end">
          <div className="flex flex-col items-end">
            <div className="p-3 sm:p-10 flex gap-3 w-full justify-center sm:justify-end">
              <Image src={FacebookLogo} alt="Facebook" height={10} width={60} />
              <Image src={YoutubeLogo} alt="Youtube" height={10} width={40} />
            </div>
            <div className="mt-auto flex p-3 sm:flex-row flex-col justify-center items-center">
              <span className="text-[12px] text-center">
                @ 2023 Southgate Express Marketing Inc. Powered by
              </span>
              &nbsp;
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
