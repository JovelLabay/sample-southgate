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
    <div className="flex flex-col sm:flex-row margin-y justify-center  sm:h-[500px]">
      <div className="sm:-rotate-90 flex  h-auto w-full sm:h-[200px] sm:w-[650px] items-center justify-center sm:-mr-10 sm:mt-[160px]">
        <span className="flex text-goodpro-bold text-[40px] sm:text-[60px] w-[500px] sm:mt-10 items-center align-center justify-center sm:justify-end">
          OUR BRANDS
        </span>
      </div>
      <div className="flex flex-wrap justify-center align-middle items-center gap-[50px] sm:gap-[70px] w-full sm:w-[86%] h-auto">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="sm:w-[350px] w-[150px] h-fit flex sm:h-[100px] justify-center m-3"
          >
            <Image src={Pirelli} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
