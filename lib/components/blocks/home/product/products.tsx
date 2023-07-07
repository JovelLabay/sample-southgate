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
    <div className="lg:flex lg:flex-col block justify-end w-auto margin-y overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:justify-end ">
        <div className="flex  h-auto w-auto justify-center items-center">
          <span className="lg:-rotate-90 flex text-goodpro-bold text-[40px] lg:text-[55px] items-end align-bottom justify-center">
            OUR PRODUCTS
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col">
              <ProductCard label={product.label} image="" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-3 mr-[790px]">
        <Button label="SEE DETAILS" />
      </div>
    </div>
  );
}
