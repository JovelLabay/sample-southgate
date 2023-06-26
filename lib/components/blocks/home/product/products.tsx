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
    <div className="flex flex-col bg-red-200 w-[100%] my-10">
      <div className="flex flex-row justify-end gap-5 bg-green-500">
        <div className=" -rotate-90 flex flex-row gap-5 mb-[500px] bg-red-400">
          <span className="flex">OUR PRODUCTS</span>
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
