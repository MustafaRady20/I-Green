import React from 'react'

function ValuesSection() {
  return (
    <main className="relative  px-6 lg:px-[120px] pb-28  h-full w-full overflow-hidden">
    <section className="mx-auto px-4">
      <div className="flex flex-col gap-14  justify-between">
        <div className="w-full flex flex-col items-center justify-center">
          <h4 className="text-[#134A55] text-3xl md:text-4xl capitalize font-bold">
            values
          </h4>
          <div className="w-[239px] h-1 bg-[#134A55] mt-2" />
        </div>
        <div>
          <p className="text-[#134A55] text-center text-base md:text-lg">
            Welcome to suiiz media! We are not just another design agency –
            we are creative minds who love and live design in every form. We
            are all about ideas that inspire and designs that get to the
            point. We firmly believe that design should be more than just
            aesthetics – it should tell stories, evoke emotions and bring
            brands to life. At suiiz media, we combine artistic talent with
            strategic thinking to give your projects that special something.
          </p>
        </div>
        <div className="bg-[#EBDFC4] w-full flex flex-wrap justify-center gap-4 rounded-[50px] px-4 md:px-8 py-8">
          {[11, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1].map((i) => (
            <div
              key={i}
              className="bg-[#719299] w-fit px-4 md:px-6 py-2 md:py-3 rounded-full"
            >
              <p className="text-sm md:text-base">support</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>

  )
}

export default ValuesSection