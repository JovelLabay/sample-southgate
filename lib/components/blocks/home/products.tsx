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
    <div className="flex flex-col h-[600px] bg-red-200 w-auto">
      <div className="flex flex-row justify-end gap-5 bg-green-50">
        <div className=" -rotate-90 text-black font-extrabold text-[50px] text-goodpro item-center justify-center ml-[200px]">
          OUR PRODUCTS
        </div>
        <div className="flex flex-row gap-5">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col">
              <ProductCard label={product.label} image="" />
            </div>
          ))}
        </div>
      </div>
      <div className="justify-center w-5xl ml-[320px] mt-5">
        <Button label="SEE DETAILS" />
      </div>
    </div>
  );
}
