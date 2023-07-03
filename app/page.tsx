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
      <section>
        <div className="parallelogram-background flex sm:flex-col mt-[70px] text-white">
          <div className="sm:skew-x-[8deg] sm:flex margin items-center w-full h-full my-[70px] margin-y">
            <div className="juliana">
              <div className="juliana-overlay"></div>
              <Image src={Juliana} alt="Juliana Photo" />
            </div>

            <div className="flex flex-col items-center">
              <div className="sm:ml-10 w-auto sm:w-[550px] text-center sm:text-left">
                <span className="text-demonicyellow text-1xl sm:text-4xl font-bold">
                  SOUTHGATE TAGLINE HERE
                </span>
                <br />
                <span className="text-carrois text-[15px] sm:text-2xl">
                  Southgate Express Marketing, Inc. is presently one of the
                  leaders in importation and distribution of tires in the
                  Philippines. It was established in August 1999 and has been
                  the sole agent of Aeolus Brand Tires in the country since
                  then. Southgate propelled the Aeolus brand as a primary
                  imported tire brand in the Philippines capturing significant
                  market share and establishing the “Aeolus” brand across Luzon,
                  Visayas and Mindanao.
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
      <section>{/* <DynamicProducts products={sampleProducts} /> */}</section>
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
