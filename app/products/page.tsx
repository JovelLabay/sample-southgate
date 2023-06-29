"use client";
import React from "react";
import ProductBanner from "@/lib/components/blocks/productsPage/banner";
import MenuComponent from "@/lib/components/blocks/productsPage/menuComponent";

export default async function ProductsPage() {
  // Sample data for menu
  const sampleMenuData = {
    CARS: [
      {
        name: "A CAR AEOLUS STEERINGACE AU01",
        label: "THE HIGH PERFORMANCE TYRE FOR A SPORTY DRIVING STYLE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "",
      },
      {
        name: "C CAR AEOLUS STEERINGACE AU01",
        label: "THE HIGH PERFORMANCE TYRE FOR A SPORTY DRIVING STYLE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "",
      },
      {
        name: "B CAR AEOLUS STEERINGACE AU01",
        label: "THE HIGH PERFORMANCE TYRE FOR A SPORTY DRIVING STYLE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "",
      },
    ],
    SUV: [
      {
        name: "A SUV AEOLUS STEERINGACE AU01",
        label: "THE HIGH PERFORMANCE TYRE FOR A SPORTY DRIVING STYLE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "",
      },
      {
        name: "C SUV AEOLUS STEERINGACE AU01",
        label: "THE HIGH PERFORMANCE TYRE FOR A SPORTY DRIVING STYLE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "",
      },
      {
        name: "B SUV AEOLUS STEERINGACE AU01",
        label: "THE HIGH PERFORMANCE TYRE FOR A SPORTY DRIVING STYLE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "",
      },
    ],
    VAN: [
      {
        name: "A VAN AEOLUS STEERINGACE AU01",
        label: "THE HIGH PERFORMANCE TYRE FOR A SPORTY DRIVING STYLE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "",
      },
      {
        name: "C VAN AEOLUS STEERINGACE AU01",
        label: "THE HIGH PERFORMANCE TYRE FOR A SPORTY DRIVING STYLE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "",
      },
      {
        name: "B VAN AEOLUS STEERINGACE AU01",
        label: "THE HIGH PERFORMANCE TYRE FOR A SPORTY DRIVING STYLE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "",
      },
    ],
    "TRUCKS & BUS": [
      {
        name: "A TB AEOLUS STEERINGACE AU01",
        label: "THE HIGH PERFORMANCE TYRE FOR A SPORTY DRIVING STYLE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "",
      },
      {
        name: "C TB AEOLUS STEERINGACE AU01",
        label: "THE HIGH PERFORMANCE TYRE FOR A SPORTY DRIVING STYLE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "",
      },
      {
        name: "B TB AEOLUS STEERINGACE AU01",
        label: "THE HIGH PERFORMANCE TYRE FOR A SPORTY DRIVING STYLE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "",
      },
    ],
  };

  console.log(sampleMenuData);
  console.log("CARS: ", sampleMenuData.CARS);
  console.log("TRUCKS: ", sampleMenuData["TRUCKS & BUS"]);
  console.log("CATEGORIES: ", sampleMenuData);

  return (
    <main>
      {/* Header Section */}
      <section>
        <ProductBanner />
      </section>
      {/* Menu Section */}
      <section>
        <div>
          <MenuComponent menuData={sampleMenuData} />
        </div>
      </section>
    </main>
  );
}
