import Image from 'next/image'
import React from 'react'

function OurAmazinTeamSection() {
  return (
    <main className="relative px-6 pb-28 font-['Sono']  h-auto bg-[#134A55] w-full overflow-hidden">
    <section className="flex flex-col gap-24 md:w-[85vw] mx-auto px-8 md:px-0">
      <div className="flex flex-col gap-14  mt-10 justify-between">
        <div className=" w-full flex flex-col items-center justify-center">
          <h4 className="text-[#EBDFC4] text-4xl capitalize font-bold">
            meet our amazing team
          </h4>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-[#EBDFC4] md:w-2/3 lg:w-1/2 text-center capitalize font-bold text-sm md:text-base">
            We love our team. They are the ones who make the agency run.
            They are the ones who deliver your projects. They are the ones
            we present on this page. Logical!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-full md:w-[350px] gap-8 md:gap-16 px-3 flex flex-col"
            >
              <div className="flex items-center flex-col gap-4">
                <Image
                width={256}
                height={256}
                  src="/happy-cloud.png"
                  className="w-32 md:w-48 lg:w-64"
                  alt=""
                />
                <div
                  className={`bg-white w-full ${
                    i % 2 === 0 ? "rotate-2" : "-rotate-2"
                  } text-[#144A54] rounded-2xl py-3`}
                >
                  <h4
                    className={`text-center text-xl md:text-2xl font-bold ${
                      i === 2 ? "text-[#ED8B19]" : ""
                    }`}
                  >
                    {i === 1
                      ? "Kindness"
                      : i === 2
                      ? "Transparency"
                      : "Innovation"}
                  </h4>
                </div>
              </div>
              <p className="text-sm text-center text-[#EBDFC4]">
                {i === 1
                  ? "Everyone is beautiful, everyone is kind. At our place, no judgment, no bad moves. We help each other and we take care of others."
                  : i === 2
                  ? "We believe in open communication and honesty. Our processes are transparent, and we keep our clients informed every step of the way."
                  : "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions that set our clients apart."}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="w-full flex items-center justify-center flex-col gap-4">
          <div className="w-fit bg-[#ED8B19] px-3 py-2 text-white rounded-xl -rotate-3">
            <h4 className="text-sm md:text-base">
              Because we are proud of them
            </h4>
          </div>
          <div className="leading-8 text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white capitalize">
              We present to you
            </h3>
            <h3 className="text-center font-semibold text-[#ED8B19] text-4xl md:text-5xl lg:text-6xl capitalize">
              the creators
            </h3>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="h-[200px] md:h-[250px] lg:h-[300px] w-full bg-white rounded-lg shadow-md"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default OurAmazinTeamSection