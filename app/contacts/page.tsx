"use client";
import React from "react";
import Banner from "@/lib/components/blocks/contactPage/banner";
import ContactForm from "@/lib/components/blocks/contactPage/contactForm";
import MapView from "@/lib/components/blocks/contactPage/mapView";

export default async function ContactPage() {
  return (
    <main>
      {/* Banner */}
      <section>
        <Banner />
      </section>
      {/* Contact Forms */}
      <section>
        <ContactForm />
      </section>
      {/* Maps */}
      <section>
        <div className="w-full flex flex-col sm:flex-row items-center justify-left h-auto my-[55px] -ml-[100px]">
          <div className="flex items-center justify-center sm:justify-end sm:-rotate-90 w-full sm:w-[700px] sm:-ml-[100px]">
            <span className="text-goodpro-bold text-[20px] ml-[50%] sm:ml-0 sm:text-[50px] sm:transform sm:-translate-x-2xl">
              FIND US
            </span>
          </div>
          <MapView />
        </div>
      </section>
    </main>
  );
}
