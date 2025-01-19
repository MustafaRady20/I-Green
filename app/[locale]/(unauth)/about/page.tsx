/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
// import { Orbitron } from 'next/font/google'

// const orbitron = Orbitron({ subsets: ['latin'] })

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#004d40] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/pexels-pixabay-247599.jpg?height=1080&width=1920"
          alt="Futuristic Landscape"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 opacity-50"
        />
        <div className="relative z-10 text-center">
          <h1
            className={` text-5xl md:text-7xl font-bold mb-4 text-Gold animate-pulse`}
          >
            Shaping Tomorrow's Landscapes
          </h1>
          <p className="text-xl md:text-2xl text-white bg-[#004d40]/60 backdrop-blur-sm rounded-full px-6 py-2">
            Innovating since 2000
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-[#004d40] ">
        <div className="container mx-auto px-4">
          <h2
            className={` text-4xl font-bold mb-8 text-Gold-light text-center`}
          >
            Our Mission
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto text-white">
            To revolutionize outdoor spaces by seamlessly blending cutting-edge
            technology with nature's beauty, creating sustainable and
            awe-inspiring landscapes that push the boundaries of imagination.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-[#004d40] ">
        <div className="container mx-auto px-4">
          <h2
            className={` text-4xl font-bold mb-8 text-Gold-light text-center`}
          >
            Our Vision
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto text-white">
            To be the global leader in futuristic landscape design, setting new
            standards for eco-friendly innovation and transforming the way
            people interact with their environment.
          </p>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-gradient-to-b from-[#004d40] w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-gold-light text-center">
            A Word from Our CEO
          </h2>
          <div className="relative mx-auto flex flex-col items-center">
            {/* Blockquote */}
            <blockquote className="text-lg italic max-w-2xl text-white text-center mb-8">
              "At our core, we believe that the landscapes of tomorrow are
              limited only by our imagination. Our team of visionaries and
              innovators work tirelessly to bring dreams to life, creating
              spaces that inspire, nurture, and evolve with the world around
              us."
              <footer className="mt-4 text-gold font-semibold">
                - Jane Doe, CEO
              </footer>
            </blockquote>

            {/* Image */}
            <div className="relative w-[200px] h-[200px]">
              <Image
                src="/pexels-amie-roussel-1990939723-28965893.jpg"
                alt="Portrait of Jane Doe, CEO of our company"
                fill
                className="rounded-full border-4 border-gold object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gradient-to-b from-[#004d40] ">
        <div className="container mx-auto px-4">
          <h2
            className={` text-4xl font-bold mb-8 text-Gold-light text-center`}
          >
            Our Journey Since 2000
          </h2>
          <div className="relative border-l-2 border-gold pl-8 ml-4">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-Gold">2000</h3>
              <p className="text-white">
                Founded with a vision to revolutionize landscape design
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-Gold">2010</h3>
              <p className="text-white">
                Pioneered the integration of smart technology in outdoor spaces
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-Gold">2015</h3>
              <p className="text-white">
                Launched our award-winning sustainable design initiative
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-Gold">Today</h3>
              <p className="text-white">
                Leading the industry in futuristic, eco-friendly landscape
                solutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
