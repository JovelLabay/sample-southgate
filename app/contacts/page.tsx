"use client";
import React from "react";
import Banner from "@/lib/components/blocks/contactPage/banner";
import ContactForm from "@/lib/components/blocks/contactPage/contactForm";

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
    </main>
  );
}
