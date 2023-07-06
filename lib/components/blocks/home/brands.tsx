import Image from "next/image";
import Pirelli from "@/public/images/pirelli.png";

type Props = {
  brands: Brand[];
};

type Brand = {
  image: string;
  name: string;
};

export default function DynamicBrands({ brands }: Props) {
  return (
    <div className="flex flex-col lg:flex-row margin-y justify-center  lg:h-[500px]">
      <div className="lg:-rotate-90 flex  h-auto w-full lg:h-[200px] lg:w-[650px] items-center justify-center lg:-mr-10 lg:mt-[160px]">
        <span className="flex text-goodpro-bold text-[40px] lg:text-[60px] w-[500px] lg:mt-10 items-center align-center justify-center lg:justify-end">
          OUR BRANDS
        </span>
      </div>
      <div className="flex flex-wrap justify-center align-middle items-center gap-[50px] lg:gap-[70px] w-full lg:w-[86%] h-auto">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="lg:w-[350px] w-[150px] h-fit flex lg:h-[100px] justify-center m-3"
          >
            <Image src={Pirelli} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
