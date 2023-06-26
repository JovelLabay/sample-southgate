import Image from "next/image";
import ProductCard from "./productCard";
import Button from "@/lib/functions/button";
import Laursoo from "@/public/images/laursoo.png";

type Product = {
  label: string;
};

type Props = {
  products: Product[];
};

export default function DynamicProducts({ products }: Props) {
  return (
    <div className="flex flex-col w-[100%] overflow-hidden margin-y">
      <div className="flex flex-row justify-end">
        <div className="-rotate-90 flex  h-[300px] w-[650px] items-bottom justify-bottom ml-1 -mr-10 mt-[100px]">
          <span className="flex text-goodpro text-[60px] font-bold w-[500px] items-end align-bottom justify-center">
            OUR PRODUCTS
          </span>
        </div>
        <div className="flex flex-row gap-5">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col">
              <ProductCard label={product.label} image="" />
            </div>
          ))}
        </div>
      </div>
      <div className="justify-center w-5xl ml-[240px] mt-3">
        <Button label="SEE DETAILS" />
      </div>
    </div>
  );
}
