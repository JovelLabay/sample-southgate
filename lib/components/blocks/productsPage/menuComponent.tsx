import React, { useState, useEffect } from "react";
import Image from "next/image";
import MenuCategories from "./menuCategories";
import Laursoo from "@/public/images/laursoo.png";
import Button from "@/lib/functions/button";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import ProductList from "./productList";
import Pagination from "./pagination";

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

const getSortedItems = (
  category: string,
  currentPage: number,
  itemsPerPage: number,
  menuData: Props["menuData"]
) => {
  const items: MenuItem[] = [];

  if (category === "ALL") {
    Object.values(menuData).forEach((categoryItems) => {
      items.push(...categoryItems);
    });
  } else if (category !== "ALL" && category !== "") {
    items.push(...menuData[category]);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const sortedItems = items.sort((a, b) => a.name.localeCompare(b.name));
  const slicedItems = items.slice(startIndex, endIndex);

  return slicedItems;
};

export default function MenuComponent({ menuData }: Props) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [allItems, setAllItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleClick = (category: string) => {
    setActiveCategory(category === activeCategory ? "" : category);
    setSelectedItem(null);
    setCurrentPage(1); // Reset currentPage to 1
  };

  useEffect(() => {
    const items: MenuItem[] = [];

    if (activeCategory === "ALL") {
      Object.values(menuData).forEach((categoryItems) => {
        items.push(...categoryItems);
      });
    } else if (activeCategory !== "ALL" && activeCategory !== "") {
      items.push(...menuData[activeCategory]);
    }

    setAllItems(items.length); // Update the total number of items
  }, [activeCategory, menuData]);

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
      {/* Menu Categories */}
      <MenuCategories
        activeCategory={activeCategory}
        handleClick={handleClick}
        menuData={menuData}
      />
      {/* Details */}
      <ProductList
        getSortedItems={() =>
          getSortedItems(activeCategory, currentPage, itemsPerPage, menuData)
        }
        activeCategory={activeCategory}
        selectedItem={selectedItem}
      />
      {/* Pagination */}
      <Pagination
        allItems={allItems}
        currentPage={currentPage}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        activeCategory={activeCategory}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
}
