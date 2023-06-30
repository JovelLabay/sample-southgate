"use client";
import Image from "next/image";
import HomeBanner from "@/lib/components/blocks/home/homeBanner";
import DynamicProducts from "@/lib/components/blocks/home/product/products";
import CarouselStatements from "@/lib/components/blocks/home/carousel";
import Brands from "@/lib/components/blocks/home/brands";
import Button from "@/lib/functions/button";
import EmbedVideo from "@/lib/components/blocks/home/embedVideo";
import Juliana from "@/public/images/juliana.png";
import { Carousel } from "react-bootstrap";

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

  //Sample data forbrands in HomePage
  const sampleBrands = [
    {
      image: "",
      name: "Brand",
    },
    {
      image: "",
      name: "Brand",
    },
    {
      image: "",
      name: "Brand",
    },
    {
      image: "",
      name: "Brand",
    },
    {
      image: "",
      name: "Brand",
    },
    {
      image: "",
      name: "Brand",
    },
  ];

  // Sample data for statements in HomePage
  const sampleStatements = [
    {
      name: "Hans Tan",
      title: "President",
      image: "",
      statement:
        "OUR MOST TRUSTED TIRE SUPPLIER - QUALITY TIRES AND EXCELLENT SERVICE",
      company: "Company A",
    },
    {
      name: "John Doe",
      title: "President",
      image: "",
      statement:
        "OUR MOST TRUSTED TIRE SUPPLIER - QUALITY TIRES AND EXCELLENT SERVICE",
      company: "Company B",
    },
    {
      name: "Jane Doe",
      title: "President",
      image: "",
      statement:
        "OUR MOST TRUSTED TIRE SUPPLIER - QUALITY TIRES AND EXCELLENT SERVICE",
      company: "Company C",
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
        <div className="parallelogram-background">
          <div className="skew-x-[9deg] flex margin items-center w-full h-full my-[70px] margin-y">
            <div className="juliana">
              <div className="juliana-overlay"></div>
              <Image src={Juliana} alt="Juliana Photo" />
            </div>

            <div className=" flex flex-col w">
              <div className="ml-10 w-[600px]">
                <span className="text-demonicyellow text-goodpro-bold text-[80px]">
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
      <section>
        <DynamicProducts products={sampleProducts} />
      </section>
      <section>
        {/* Carousel Here */}
        <CarouselStatements statements={sampleStatements} />
      </section>
      <section>
        <Brands brands={sampleBrands} />
      </section>
      <section>
        <EmbedVideo />
      </section>
    </main>
  );
}
