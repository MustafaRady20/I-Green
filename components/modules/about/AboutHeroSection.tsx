import Image from 'next/image'
import React from 'react'

function AboutHeroSection() {
  return (
    <main className="relative  h-screen lg:h-screen w-full overflow-hidden">
    <section className="relative flex h-full flex-col items-center justify-center px-4 text-center">
    <article className="absolute top-0 inset-0 w-full h-full overflow-hidden">
        <Image
          src="/about-team.png"
          quality={90}
          priority
          alt="Hero Image"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
          />
        <div className="absolute inset-0 h-48 bg-gradient-to-b from-[#ebdfc4]/90 via-[#ebdfc4]/50 to-transparent" />
      </article>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/50 via-white/0 to-transparent" />
    </section>
  </main>
  )
}

export default AboutHeroSection