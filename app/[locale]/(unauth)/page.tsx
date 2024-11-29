// import AboutUsSection from "@/components/modules/home/AboutUsSection";
// import AskUsSection from "@/components/modules/home/AskUsSection";
// import BriefSection from "@/components/modules/home/BriefSection";
// import HeroSection from "@/components/modules/home/HeroSection";
import BriefSection from "@/components/modules/home/BriefSection";
import ServicesGrid from "@/components/modules/home/ServiceSection";
import ServiceSection from "@/components/modules/home/ServiceSection";
import { Hero } from "@/components/modules/landing/Hero";
import Stats from "@/components/modules/landing/Stats";
// import LastWorkSection from "@/components/modules/home/LastWorkSection";
// import OurClientsSection from "@/components/modules/home/OurClientsSection";
// import ServiceSection from "@/components/modules/home/ServiceSection";
// import TestimonialSection from "@/components/modules/home/TestimonialSection";
import React from "react";

// params: { locale : string }
export default function HomePage() {
  // const { locale } = params;

  // const t = useTranslations('HomePage');
  // setRequestLocale(locale);

//  for the hero section
{/* <div class="bg-gradient-to-b from-lightGreenTop to-lightGreenBottom h-screen flex items-center justify-center">
  <h1 class="text-4xl font-bold text-gray-800">Welcome to the Light Green Hero</h1>
</div> */}


  return (
    <main className="max-w-full   md:w-full min-w-screen overflow-hidden h-full ">
      <Hero />
       <Stats />
       <ServicesGrid />

       {/* <BriefSection /> */}
      {/*
      <LastWorkSection />
      <OurClientsSection />
      <AboutUsSection />
      <AskUsSection />
      <TestimonialSection /> */}
    </main>
  );
}
