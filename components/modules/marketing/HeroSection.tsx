import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function HeroSection() {

    // px-[150px]
  return (
    <main className="relative h-screen w-full overflow-hidden">
    <section className="relative h-dvh  w-full flex items-end  px-6  ">
      <article className="absolute  inset-0 w-full h-screen overflow-hidden">
        <Image
          src="/marketing.png"
          quality={90}
          priority
          width={1920}
          height={1080}
          alt="Hero Image"
          className="object-cover w-full h-full  object-center"
        /> 
        <div className="absolute inset-0 h-48 bg-gradient-to-b from-[#ebdfc4]/90 via-[#ebdfc4]/50 to-transparent" />
      </article>
      <div className=" flex gap-6  flex-col lg:px-[150px] justify-center items-start h-full lg:h-[65%] w-full z-30">
        <div className=" lg:text-6xl  text-5xl text-[#EBDFC4]   ">
          <h3 className=" ">Integrated Marketing <br/> Solutions</h3>
        </div>
        <Button
          variant={"ghost"}
          className="inline-flex  w-fit py-8 px-16 rounded-full bg-white/50"
        >
          Get Quote
        </Button>
      </div>
    </section>
  </main>
  )
}

export default HeroSection