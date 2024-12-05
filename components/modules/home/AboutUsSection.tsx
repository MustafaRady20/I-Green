'use client'
// import { ArrowRight, Leaf, Palette, Shield, TrendingUp, Sparkles, Recycle } from 'lucide-react'
// import { Button } from "@/components/ui/button"
import Image from "next/image"

//   // from-[#D8F3DC] via-darkgreen to-deepGreen

//   // color: #99a537;
//   // background: #233841;



import { Globe2, Award, Phone, Leaf } from 'lucide-react'
import WhyChooseUs from "./WhyChooseUs"

const features = [
  {
    title: "Most Trusted in the Globe",
    description: "Choice is untrammelled & when nothing prevents us being able obligations of business it will frequently beguiled by the charms pleasure of the moment.",
    icon: Globe2,
  },
  {
    title: "Sustainability in Gardening",
    description: "The charms of pleasure of moment so blinded by desire about creating and maintaining green spaces that are environmentally friendly and supportive of local ecosystems.",
    icon: Leaf,
  },
  {
    title: "Our Higher Standards",
    description: "Nothing prevents our being able we like best, every pleasure is to be avoided circumstances.",
    icon: Award,
  },
]


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
            <span className="text-[#ffd700] font-medium mb-4 inline-block">ABOUT OUR COMPANY</span>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Passion for Landscaping Excellence
                <span className="absolute -right-10 top-10 text-[#ffd700]/20 text-7xl font-light">
                  SINCE 2000
                </span>
              </h1>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/pexels-davidmcbee-1546166.jpg?height=400&width=600"
                  
                  alt="Landscaping Project"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-[#ffd700]/20">
                  <div className="text-4xl font-bold text-[#ffd700]">1k+</div>
                  <div className="text-white">Projects Completed Efficiently</div>
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
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-6 rounded-2xl bg-[#ffd700]/10 backdrop-blur-sm border border-[#ffd700]/20">
              <h3 className="text-xl font-semibold text-white mb-2">Considering a Project?</h3>
              <p className="text-gray-300 mb-4">Feel free to reach out via message or phone call.</p>
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
  )
}
