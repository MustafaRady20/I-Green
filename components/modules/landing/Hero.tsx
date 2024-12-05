'use client';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { LeafIcon } from "lucide-react"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import React from "react"
// import { TopBar } from "@/components/shared/TopBar";
import { motion } from "framer-motion"
// import { FaLeaf } from "react-icons/fa";

export function Hero() {

  const Gallery = [
    {
      id: 1,
      src: "/pexels-pixabay-247599.jpg?height=1080&width=1920",
      alt: "Lawn care background",
    },
    {
      id: 2,
      src: "/pexels-pixabay-247599.jpg?height=1080&width=1920",
      alt: "Lawn care background",
    },
    {
      id: 3,
      src: "/pexels-pixabay-247599.jpg?height=1080&width=1920",
      alt: "Lawn care background",
    },
    {
      id: 4,
      src: "/pexels-pixabay-247599.jpg?height=1080&width=1920",
      alt: "Lawn care background",
    },
    {
      id: 5,
      src: "/pexels-pixabay-247599.jpg?height=1080&width=1920",
      alt: "Lawn care background",
    },
  ]

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  React.useEffect(() => {
    // Auto-play functionality
    const interval = setInterval(() => {
      api?.scrollNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [api])
  return (
    <motion.div
      // initial={{ x: -100, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // transition={{ duration: 1 }} 
      className="relative h-[500px] bg-[#004d40]  md:h-[600px] 2xl:h-screen flex-col  flex items-center justify-center">
      <Carousel setApi={setApi}
        className="absolute  inset-0 h-full w-full"
        opts={{
          align: "start",
          loop: true,
        }} orientation="horizontal"     >
        <CarouselContent className=" h-[500px] md:h-[600px] 2xl:h-screen">
          {Gallery.map((item, index) => (
            <CarouselItem className="relative z-30 p-0" key={item.id}>
              <Image
                src={item.src}
                alt={item.alt}
                className="object-cover  opacity-50  object-center w-full h-full"
                width={1920}
                height={1080}
                objectFit="cover"
                
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <div className="absolute inset-0  " /> */}
        <div className="absolute right-4 top-1/2 flex z-30 -translate-y-1/2 flex-col gap-2">
          {Gallery.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className="group p-2"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  current === index
                    ? "bg-white"
                    : "bg-white/50 group-hover:bg-white/75"
                )}
              />
            </button>
          ))}
        </div>
      </Carousel>
      {/* <motion.div 
      className="absolute h-full -top-12 opacity-70  right-0  inset-0 " 
      initial={{ x: 100 }} 
      animate={{ x: -100  }} 
      transition={{ duration: 1.75 }}
    >
      <Image 
        src={"/circuit1.png"}  
        width={800} 
        height={600} 
        alt="sd" 
        className="object-cover object-center absolute -right-56 -rotate-90" 
      />
    </motion.div> */}

      {/* <motion.div className="absolute h-full -top-8 opacity-65 inset-0 " 
      initial={{ x: 100 }} 
      animate={{ x:  -50  }} 
      transition={{ duration: 1.75 }}  >

    <Image src={'/tree2.png'} alt={"sa"} width={600} height={400} className="absolute rotate-180  -right-40 -top-8" />

    </motion.div> */}

      {/* </div> */}

      {/* Content */}

{/* 
      <div className="relative z-10 text-center">
          <h1 className={` text-5xl md:text-7xl font-bold mb-4 text-Gold animate-pulse`}>
            Shaping Tomorrow's Landscapes
          </h1>
          <p className="text-xl md:text-2xl text-white bg-[#004d40]/60 backdrop-blur-sm rounded-full px-6 py-2">
            Innovating since 2000
          </p>
        </div> */}
      <motion.div

        // initial={{ x: -100 }}
        // animate={{ x: 0 }}
        // transition={{ duration: 1000 }}
        className="container w-full  mx-auto  px-4 relative z-10 text-white">
        <div className="md:max-w-2xl 2xl:w-full max-w-xs h-full   ">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm md:text-lg items-center flex font-normal mb-4"
        >
          <div className="text-Gold animate-pulse flex mr-2 items-center relative">
            <Image
              src="/leaf.png"
              width={30}
              height={30}
              className=""
              alt="Logo"
            />
          </div>
          I-GREEN LANDSCAPE SOLUTIONS
        </motion.h1>

        <motion.h1
          initial="hidden"
          animate="visible"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl  2xl:text-7xl  w-full  text-Gold animate-pulse  tracking-wide  font-bold mb-6"
        >
          Innovating Landscapes with AI and Automation
        </motion.h1>

        <div className="flex flex-wrap gap-4">
          <Button
            size="sm"
            className=" bg-[#004d40]/60 group border  hover:bg-Gold border-Gold/50 hover:text-white transition-colors text-white rounded-lg font-medium"
            asChild
          >
            <span className="flex text-deepGreen hover:text-white justify-center items-center">
              <LeafIcon size={30} className="mr-2" />
              <Link className="relative text-lg" href="/about">
                Read more
              </Link>
            </span>
          </Button>
        </div>
        </div>
      </motion.div>

    </motion.div>
  )
}
