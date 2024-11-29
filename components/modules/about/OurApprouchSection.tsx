import React from 'react'

function OurApprouchSection() {
  return (
    <main className="relative px-6 pb-28 font-['Sono'] min-h-screen  w-full overflow-hidden">
    <section className="md:w-[85vw] lg:w-[90vw] xl:w-[85vw] mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex flex-col gap-14 mt-10 justify-between">
        <div className="w-full flex flex-col items-center justify-center">
          <h4 className="text-[#134A55] text-3xl md:text-4xl capitalize font-bold">
            our approach
          </h4>
        </div>
        <div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 text-[#134A55] flex flex-col gap-5 h-auto md:h-[380px] p-8 md:p-16 border-b md:border-r md:border-b-0">
              <h3 className="font-extrabold capitalize text-2xl md:text-3xl">
                1
              </h3>
              <h3 className="font-bold capitalize text-xl">
                discovery and analysis
              </h3>
              <p className="leading-7 md:leading-8 text-sm md:text-base">
                In this first phase, we dive deep into your business to
                understand your goals, target audience and market. We
                conduct extensive research and analysis to identify
                opportunities and challenges. This phase lays the foundation
                for a successful design project.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-[#134A55] flex flex-col gap-5 h-auto md:h-[380px] p-8 md:p-16 border-b">
              <h3 className="font-extrabold capitalize text-2xl md:text-3xl">
                2
              </h3>
              <h3 className="font-bold capitalize text-xl">
                concept development
              </h3>
              <p className="leading-7 md:leading-8 text-sm md:text-base">
                Based on our findings, we develop creative concepts that
                align with your brand and objectives. We explore various
                design directions and present you with innovative ideas that
                will set you apart from the competition.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 text-[#134A55] flex flex-col gap-5 h-auto md:h-[380px] p-8 md:p-16 border-b md:border-b-0">
              <h3 className="font-extrabold capitalize text-2xl md:text-3xl">
                3
              </h3>
              <h3 className="font-bold capitalize text-xl">
                design and implementation
              </h3>
              <p className="leading-7 md:leading-8 text-sm md:text-base">
                Once the concept is approved, we move into the design phase.
                Our talented designers bring the ideas to life, creating
                visually stunning and functional designs. We pay attention
                to every detail to ensure a cohesive and impactful result.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-[#134A55] flex flex-col gap-5 h-auto md:h-[380px] p-8 md:p-16 md:border-l">
              <h3 className="font-extrabold capitalize text-2xl md:text-3xl">
                4
              </h3>
              <h3 className="font-bold capitalize text-xl">
                refinement and delivery
              </h3>
              <p className="leading-7 md:leading-8 text-sm md:text-base">
                We believe in perfection, so we refine and iterate on the
                designs based on your feedback. Once everything is polished,
                we prepare the final deliverables, ensuring they meet the
                highest quality standards and are ready for implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default OurApprouchSection