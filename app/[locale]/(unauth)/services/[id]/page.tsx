/* eslint-disable @typescript-eslint/no-unused-vars */
import { Hero } from "@/components/modules/services/HeroService";
import { ServiceContent } from "@/components/modules/services/ServiceContent";
// import { ServiceContent } from '@/components/modules/services/ServiceContent'
// import { Link } from '@/i18n/routing';
import React from "react";
const services = [
  {
    name: "EcoSynthesis",
    subservices: ["NanoTurf", "BioEnhancement", "ClimaShield"],
  },
  {
    name: "TerraForm",
    subservices: ["HoloDesign", "GeoFusion", "BioMesh"],
  },
  {
    name: "ArborTech",
    subservices: ["QuantumGrowth", "NeuroPruning", "GeneSculpt"],
  },
];
function page() {
  return (
    // <div className="h-full bg-[#fbfaf6] overflow-hidden flex flex-col w-full">
    //   <Hero />
    //   <div className="h-full md:px-48 md:py-12  flex-col-reverse md:flex-row flex">
    //     <Sidebar />
    //     <main className="flex-1">
    //       <ServiceContent />
    //     </main>
    //   </div>
    // </div>

    <div className="min-h-screen bg-[#fbfaf6]">
      <Hero />
      <div className="px-8">
        <ServiceContent />
      </div>
    </div>
  );
}

export default page;
