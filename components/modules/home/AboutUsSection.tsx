"use client";
// import { ArrowRight, Leaf, Palette, Shield, TrendingUp, Sparkles, Recycle } from 'lucide-react'
// import { Button } from "@/components/ui/button"
import Image from "next/image";

//   // from-[#D8F3DC] via-darkgreen to-deepGreen

//   // color: #99a537;
//   // background: #233841;

import { Globe2, Award, Phone, Leaf } from "lucide-react";
import WhyChooseUs from "./WhyChooseUs";

const features = [
  {
    title: "Decades of excellence in landscaping ",
    description:
      "Established in 2000, we’ve spent over two decades improving our skills and deepening our roots in the landscaping industry. With a legacy built on experience and innovation, we understand what it takes to transform outdoor spaces into breathtaking, smart, and sustainable landscapes.",
    icon: Globe2,
  },
  {
    title: "Trusted experts in tailored, sustainable landscape maintenance",
    description:
      "From intimate gardens to expansive commercial grounds, we maintain green spaces of every scale. No project is too niche, and no detail is overlooked. With flexible scheduling and customized care, we craft plans tailored to your unique needs and budget—ensuring your outdoor space thrives sustainably, year-round",
    icon: Leaf,
  },
  {
    title: "Our higher standards",
    description:
      "Higher standards mean smart innovation, sustainable precision, and 20+ years of expertise—crafting breathtaking landscapes with trusted partners and tailored care built to last.",
    icon: Award,
  },
];

export default function AboutUs() {
  return (
    <main className="   max-w-[1920px]       w-full  overflow-x-hidden h-full ">
      <section className="w-full py-16 bg-[#004d40] relative overflow-hidden">
        {/* Futuristic background elements */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMjVsNSA1TDI1IDYwIDAgMzBsNS01IDIwIDIweiIgZmlsbD0iI2ZmZDcwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-10" />
          <div className="absolute w-96 h-96 bg-[#ffd700] rounded-full blur-[128px] -top-48 -right-48 opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column */}
            <div className="lg:w-1/2">
              <span className="text-[#ffd700] text-2xl font-medium mb-4 inline-block">
                ABOUT OUR COMPANY
              </span>
              <div className="relative">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  OUR PASSION FOR LANDSCAPING INNOVATION{" "}
                  <span className="text-yellow-500">SINCE 2000</span>
                  {/* <span className="absolute -right-10 top-10 text-[#ffd700]/20 text-7xl font-light">
                  SINCE 2000
                </span> */}
                </h1>
              </div>

              <div className="relative h-[555px] overflow-hidden rounded-xl">
                <div className="rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/pexels-davidmcbee-1546166.jpg?height=400&width=600"
                    alt="Landscaping Project"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-[#ffd700]/20">
                    <div className="text-4xl font-bold text-[#ffd700]">1k+</div>
                    <div className="text-white">
                      Projects Completed Efficiently
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 space-y-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group p-6 rounded-2xl bg-[#00695c]/50 backdrop-blur-sm border border-[#ffd700]/10 hover:border-[#ffd700]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#ffd700]/10 text-[#ffd700]">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-6 rounded-2xl bg-[#ffd700]/10 backdrop-blur-sm border border-[#ffd700]/20">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Considering a Project?
                </h3>
                <p className="text-gray-300 mb-4">
                  Feel free to reach out via a text message, email, or a phone
                  call.
                </p>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ffd700] text-[#004d40] font-medium hover:bg-[#ffd700]/90 transition-colors">
                  <Phone className="w-4 h-4" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute hidden xl:visible w-96 h-96  bg-[#ffd700] rounded-full blur-[128px] -top-48  -right-48 opacity-20" />
      <WhyChooseUs />
    </main>
  );
}
