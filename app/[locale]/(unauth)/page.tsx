import AboutUs from "@/components/modules/home/AboutUsSection";
import ContactUsSection from "@/components/modules/home/Contact-Us-Section";
import { ClientLogoCarousel } from "@/components/modules/home/OurClientsSection";
import ServicesGrid from "@/components/modules/home/ServiceSection";
// import TestimonialSection from "@/components/modules/home/TestimonialSection";
// import WhyChooseUs from "@/components/modules/home/WhyChooseUs";
import Gallery from "@/components/modules/landing/Gallery";
import { Hero } from "@/components/modules/landing/Hero";
import Stats from "@/components/modules/landing/Stats";

import React from "react";

export default function HomePage() {
  return (
    <main className="max-w-[1920px]   md:w-full w-full overflow-hidden h-full ">
      <Hero />
      <Stats />
      <ServicesGrid />
      <Gallery />
      <AboutUs />
      <ClientLogoCarousel />
      <ContactUsSection />
    </main>
  );
}
