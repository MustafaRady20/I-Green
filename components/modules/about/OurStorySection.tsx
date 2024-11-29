import Image from 'next/image'
import React from 'react'

function OurStorySection() {
  return (
    <main className="relative lg:px-[120px] mx-auto px-6 pb-28   h-full  w-full overflow-hidden">
        <section className="mx-auto ">
          <div className="flex flex-col gap-7 lg:flex-row mt-10 justify-between items-center">
            <div className="lg:w-1/2 flex flex-col gap-10">
              <div>
                <h4 className="text-[#134A55] text-3xl md:text-4xl capitalize font-bold">
                  Our story
                </h4>
              </div>
              <p className="text-[#134A55] text-base md:text-lg">
                This story is that of resourceful people who want to express
                their creativity, who are not afraid to learn new things and
                evolve in their profession. This is the story we have built with
                our hardware stores over the years, it is their story, our
                story, and also the stories of our customers.
              </p>
            </div>
            <div className="lg:w-1/3 mt-6 lg:mt-0">
              <Image
                src="/cloud-about.png"
                priority
                width={500}
                height={500}
                alt="Hero Image"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </main>
  )
}

export default OurStorySection