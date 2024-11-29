
import ServicesGrid from "@/components/modules/home/ServiceSection";
import { Hero } from "@/components/modules/landing/Hero";
import Stats from "@/components/modules/landing/Stats";

import React from "react";

export default function HomePage() {


  return (
    <main className="max-w-full   md:w-full min-w-screen overflow-hidden h-full ">
      <Hero />
       <Stats />
       <ServicesGrid />
    </main>
  );
}
