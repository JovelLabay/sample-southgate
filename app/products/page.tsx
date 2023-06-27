import React from "react";
import ProductBanner from "@/lib/components/blocks/productsPage/banner";

export default async function ProductsPage() {
  return (
    <main>
      {/* Header Section */}
      <section>
        <ProductBanner />
      </section>
      {/* Menu Section */}
      <section>
        <div></div>
      </section>
    </main>
  );
}
