import React, { useState } from "react";
import Image from "next/image";
import Laursoo from "@/public/images/laursoo.png";
import Button from "@/lib/functions/button";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  let allItems = 0;

  const handleClick = (category: string) => {
    setActiveCategory(category === activeCategory ? null : category);
    setSelectedItem(null);
    setCurrentPage(1); // Reset currentPage to 1
  };

  const handleItemClick = (itemName: string) => {
    setSelectedItem(itemName === selectedItem ? null : itemName);
  };

  // Sort items for different categories
  const getSortedItems = (category: string, page: number) => {
    const items = menuData[category] || [];
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    allItems = items.length;
    return items
      .slice(startIndex, endIndex)
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  // Sort all items by combining all category details and sorting it
  const getAllItems = () => {
    const allItems: MenuItem[] = [];
    Object.values(menuData).forEach((categoryItems) => {
      allItems.push(...categoryItems);
    });
    return allItems.sort((a, b) => a.name.localeCompare(b.name));
  };

  // Handle pagination navigation
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(allItems / itemsPerPage);

    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
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
            {getSortedItems(activeCategory || "", currentPage).map((item) => (
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
      <div className="flex justify-center items-center gap-20 my-3">
        {currentPage > 1 && (
          <button onClick={goToPreviousPage}>
            <div className="text-3xl">
              <SlArrowLeft />
            </div>
          </button>
        )}
        {activeCategory === "ALL" || activeCategory === null ? (
          <span className="text-3xl">{currentPage}</span>
        ) : (
          <>
            <span>{currentPage}</span>
          </>
        )}
        {getAllItems().length > itemsPerPage && (
          <button onClick={goToNextPage}>
            <div className="text-3xl">
              <SlArrowRight />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
