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
      {/* Google Maps */}
      <section>
        <div className="w-full flex flex-row items-center justify-left h-auto margin-y -ml-[100px]">
          <div className="flex items-center justify-end -rotate-90 w-[700px] -ml-[100px]">
            <span className="text-goodpro-bold text-[60px] transform -translate-x-2xl">
              FIND US
            </span>
          </div>
          <MapView />
        </div>
      </section>
    </main>
  );
}
