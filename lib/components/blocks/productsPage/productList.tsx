import React from "react";
import Image from "next/image";
import Button from "@/lib/functions/button"; // Update the import path for the Button component
import Laursoo from "@/public/images/laursoo.png";

type MenuItem = {
  name: string;
  label: string;
  description: string;
  image: string;
};

type ProductListProps = {
  getSortedItems: (category: string) => MenuItem[];
  activeCategory: string;
  selectedItem: string | null;
};

const ProductList: React.FC<ProductListProps> = ({
  getSortedItems,
  activeCategory,
  selectedItem,
}) => {
  return (
    <div className="flex flex-col w-auto h-auto margin">
      {/* Category Choice */}
      <div>
        {/* Other Categories */}
        {getSortedItems(activeCategory || "").map((item) => (
          <div
            key={item.name}
            className={`item ${selectedItem === item.name ? "selected" : ""}`}
          >
            <div className="flex flex-row my-5">
              <Image src={Laursoo} alt="Laursoo" width={1000} height={700} />
              <div className="flex flex-col ml-10 justify-center items-left w-auto">
                <h3 className="text-goodpro font-extrabold text-[50px]">
                  {item.name}
                </h3>
                <span className="text-goodpro -mt-2 text-[25px]">
                  {item.label.toUpperCase()}
                </span>
                <div className="w-[85%]">
                  <p className="text-carrois mt-3 text-[34px]">
                    {item.description}
                  </p>
                </div>
                <div className="-ml-10">
                  <Button label="DOWNLOAD BROCHURE" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
