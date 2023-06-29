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
    <div className="flex flex-row margin-y justify-end  h-[500px]">
      <div className="-rotate-90 flex  h-[200px] w-[650px] items-start justify-center -mr-10 mt-[160px]">
        <span className="flex text-goodpro text-[60px] font-bold w-[500px] mt-10 items-end align-bottom justify-center">
          OUR BRANDS
        </span>
      </div>
      <div className="flex flex-wrap justify-start align-middle items-center gap-[70px] w-[86%] h-auto">
        {brands.map((brand, index) => (
          <div key={index} className="w-[337px] flex h-[89px]">
            <Image src={Pirelli} alt={brand.name} width={337} height={9} />
          </div>
        ))}
      </div>
    </div>
  );
}
