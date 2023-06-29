import React, { useState } from "react";
import Image from "next/image";
import Laursoo from "@/public/images/laursoo.png";
import Button from "@/lib/functions/button";

type Props = {
  menuData: {
    [category: string]: {
      name: string;
      label: string;
      description: string;
      image: string;
    }[];
  };
};

type MenuItem = {
  name: string;
  label: string;
  description: string;
  image: string;
};

export default function MenuComponent({ menuData }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleClick = (category: string) => {
    setActiveCategory(category === activeCategory ? null : category);
    setSelectedItem(null);
  };

  const handleItemClick = (itemName: string) => {
    setSelectedItem(itemName === selectedItem ? null : itemName);
  };

  // Sort items for different categories
  const getSortedItems = (category: string) => {
    const items = menuData[category] || [];
    return items.sort((a, b) => a.name.localeCompare(b.name));
  };

  // Sort all items by combining all category details and sorting it
  const getAllItems = () => {
    const allItems: MenuItem[] = [];
    Object.values(menuData).forEach((categoryItems) => {
      allItems.push(...categoryItems);
    });
    return allItems.sort((a, b) => a.name.localeCompare(b.name));
  };

  return (
    <div>
      <div className="menu-parallelogram flex mt-[120px]">
        <div className="flex skew-x-[20deg] text-goodpro gap-[90px] margin justify-center items-center text-white">
          <h2
            className={`font-bold text-5xl cursor-pointer ${
              activeCategory === "ALL" || activeCategory === null
                ? "text-yellow-500 underline underline-offset-4"
                : ""
            }`}
            onClick={() => handleClick("ALL")}
          >
            ALL
          </h2>
          {Object.keys(menuData).map((category, index) => (
            <div key={index} className="cursor-pointer">
              <h2
                className={`font-bold text-5xl ${
                  activeCategory === category
                    ? "text-yellow-500  underline underline-offset-4"
                    : ""
                }`}
                onClick={() => handleClick(category)}
              >
                {category.toUpperCase()}
              </h2>
            </div>
          ))}
        </div>
      </div>
      {/* Details */}
      <div className="flex flex-col w-auto h-auto bg-green-300 margin">
        {activeCategory === "ALL" || activeCategory === null ? (
          <div className="mt-5">
            {getAllItems().map((item) => (
              <div
                key={item.name}
                className={`flex ${
                  selectedItem === item.name ? "selected" : ""
                }`}
                onClick={() => handleItemClick(item.name)}
              >
                <div className="flex flex-row my-5">
                  <Image
                    src={Laursoo}
                    alt="Laursoo"
                    width={1000}
                    height={700}
                  />
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
        ) : (
          <div>
            {getSortedItems(activeCategory).map((item) => (
              <div
                key={item.name}
                className={`item ${
                  selectedItem === item.name ? "selected" : ""
                }`}
                onClick={() => handleItemClick(item.name)}
              >
                <div className="flex flex-row my-5">
                  <Image
                    src={Laursoo}
                    alt="Laursoo"
                    width={1000}
                    height={700}
                  />
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
        )}
      </div>
    </div>
  );
}
