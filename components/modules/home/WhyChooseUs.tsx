import { Award, Clock, Lightbulb, Shield } from 'lucide-react'

export default function WhyChooseUs() {
    // bg-gradient-to-r from-[#004d40] to-[#00695c]
    
  return (
    <section className="w-full py-12  bg-[#004d40] relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0  opacity-90" />
      <div className="absolute inset-0">
        {/* <div className="absolute w-96 h-96 bg-[#ffd700] rounded-full blur-[128px] -top-48 -right-48 opacity-20" /> */}
        <div className="absolute w-96 h-96 bg-[#ffd700] rounded-full blur-[128px] -bottom-48 -left-48 opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <span className="text-[#ffd700] font-medium mb-4 inline-block">WHY CHOOSE US</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text">
            Innovation in Landscape Design,
            <br />
            Exceptional Results
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-[#00695c]/50 backdrop-blur-sm border border-[#ffd700]/10 hover:border-[#ffd700]/30 transition-all duration-300"
            >
              <div className="mb-4 inline-block p-3 rounded-xl bg-[#ffd700]/10 text-[#ffd700]">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Decorative line art */}
        <div className="hidden lg:block absolute right-0 top-0 h-full w-1/3">
          <div className="relative h-full w-full">
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                fill="none"
                className="stroke-[#ffd700]/20"
                strokeWidth="1"
              >
                <path d="M200 0v400M0 200h400M100 100l200 200M300 100L100 300" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    title: "Expert Craftsmanship",
    description: "Holds in these matters to this principle of selection: he rejects pleasures find rationally encounter.",
    icon: Award,
  },
  {
    title: "Quality Materials",
    description: "To the claims of duty or the obligations of business it will frequently occur that have to be repudiated.",
    icon: Shield,
  },
  {
    title: "Innovative Designs",
    description: "Belongs to those who fail in their duty through weakness of will, which is the same as saying through.",
    icon: Lightbulb,
  },
  {
    title: "Timely Completion",
    description: "Holds in these matters to this principle of selection: he rejects pleasures find rationally encounter.",
    icon: Clock,
  },
]
