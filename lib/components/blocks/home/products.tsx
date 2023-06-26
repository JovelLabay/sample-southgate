import Image from "next/image";
import ProductCard from "./productCard";
import Laursoo from "@/public/images/laursoo.png";

type Product = {
  label: string;
};

type Props = {
  products: Product[];
};

export default function DynamicProducts({ products }: Props) {
  return (
    <div className="flex flex-row justify-end mt-auto ml-[10px] gap-5 bg-red-200 w-[100%]">
      <div className="-rotate-90 text-black font-extrabold text-[60px] text-goodpro bg-orange-50 w-[100%]">
        OUR PRODUCTS
      </div>

      {products.map((product, index) => (
        <div key={index} className="flex flex-col">
          <ProductCard label={product.label} image="" />
        </div>
      ))}
    </div>
  );
}
