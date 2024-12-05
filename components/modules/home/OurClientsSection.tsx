/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { useAnimation, useInView } from "framer-motion"
import { motion } from "framer-motion"
const logos = [
  { src: "/Pepsi_2023.webp?height=80&width=160", alt: "Webflow" },
  { src: "/Pepsi_2023.webp?height=80&width=160", alt: "Relume" },
  { src: "/Pepsi_2023.webp?height=80&width=160", alt: "Webflow" },
  { src: "/Pepsi_2023.webp?height=80&width=160", alt: "Relume" },
  { src: "/Pepsi_2023.webp?height=80&width=160", alt: "Webflow" },
  { src: "/Pepsi_2023.webp?height=80&width=160", alt: "Relume" },
]

export function ClientLogoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const controls = useAnimation()
  const ref = React.useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  useEffect(() => {
    if (emblaApi) {
      let animationId: number
      
      const autoScroll = () => {
        emblaApi.scrollNext()
        animationId = requestAnimationFrame(autoScroll)
      }

      animationId = requestAnimationFrame(autoScroll)

      return () => {
        cancelAnimationFrame(animationId)
      }
    }
  }, [emblaApi])




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
    }, 2000) // Change slide every 2 seconds

    return () => clearInterval(interval)
  }, [api])

  return (
    <main className="w-full  px-6 sm:px-0   md:w-full min-w-screen overflow-hidden h-full ">
    <div className="w-full py-16  ">
      <div className="text-center mb-12">
      <motion.h2 
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-deepGreen bg-gradient-to-r from-yellow-400 to-yellow-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Trusted by Industry Pioneers
        </motion.h2>

        {/* <h2 className="text-2xl font-semibold">Trusted by Industry Leaders Worldwide</h2> */}
      </div>
      <Carousel
       setApi={setApi}
        ref={emblaRef}
        opts={{
          align: "center",
          loop: true,
          axis: "x",
          containScroll: "trimSnaps",
           
//  duration: 300,
        }}
        orientation="horizontal"
        
        className="w-full   mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {logos.map((logo, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-auto  md:basis-1/3 lg:basis-1/4">
              <div className="p-2">
                <div className="size-36 relative ">
                  <div className="flex   items-center justify-center transition-shadow duration-300 p-4">
                    <Image width={100} height={100}  src={logo.src} alt={logo.alt} className="  size-full flex items-center justify-center object-center object-cover " />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
     
    </div>
    </main>
  )
}
