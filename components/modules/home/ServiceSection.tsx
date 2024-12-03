/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useCallback, useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Leaf, FlowerIcon, Trees, TreesIcon as Plant, Scissors, Sprout, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { useRouter } from "@/i18n/routing"
import { ServiceGridTypes } from "@/types/types"
import { servicesGrid } from "@/data/constants"





export default function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [isMobile, setIsMobile] = useState(false)
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])
 const router = useRouter()
  const ServiceCard = ({ service, index }: {
    service: ServiceGridTypes
    index: number
  }) => (
    <Card
      key={service.title}
      className="relative overflow-hidden border w-full h-72 lg:w-full lg:h-full rounded-lg cursor-pointer hover:shadow-lg transition-opacity duration-200"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => router.push(`/services/${service.id}`)
    }
    >
      <Image src={'/tree2.png'} alt={service.title} width={600} height={400} className="absolute rotate-180 -right-56 md:-right-64 -top-48 opacity-10  sm:opacity-25 md:-top-48" />

      {hoveredIndex === index && service.image ? (
        <div className="absolute lg:h-full lg:w-full inset-0">
          <div
            className="absolute inset-0 bg-cover object-cover w-full h-full object-center bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 bg-[#65a30d]/10" />

          <div className="flex flex-col absolute gap-y-2 left-4 bottom-4">
            <div className="py-1 px-4 text-sm rounded-lg bg-white text-deepGreen">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                {service.title}
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 text-deepGreen h-full">
          <div className="mb-6 z-10">
            <service.icon className="w-12 h-12 text-[#65a30d]" />
          </div>
          <div className="flex items-center  gap-2 mb-2">
            <span className="w-5 h-0.5 bg-primary" />
            <h3 className=" text-base sm:text-lg font-semibold">{service.title}</h3>
          </div>
          <p className="text-darkgray text-sm sm:text-base  ml-1 mb-4">{service.description}</p>
          <button className="hover:underline inline-flex items-center gap-2">
            VIEW MORE DETAILS
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </Card>
  )
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])


  const PrevButton = ({ enabled, onClick }:{
    enabled: boolean
    onClick: () => void
  
  }) => (
    <button
      className="absolute -left-0 top-[37%] sm:top-1/2 -translate-y-1/2 z-10 bg-[#fbfaf6] rounded-full p-[6px] shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={!enabled}
    >
      <ChevronLeft size={40} className="w-6 h-6 text-deepGreen" />
    </button>
  )

  const NextButton = ({ enabled, onClick }:{
    enabled: boolean
    onClick: () => void
  }) => (
    <button
      className="absolute -right-0 top-[37%] sm:top-1/2 -translate-y-1/2 z-10 bg-[#fbfaf6] rounded-full p-[6px] shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={!enabled}
    >
      <ChevronRight size={40} className="w-6 h-6 text-deepGreen" />
    </button>
  )
  return (
    <section className="lg:py-44 py-28 px-6 lg:px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-around md:justify-between w-full md:w-[95%] items-center mb-12">
          <h2 className="md:text-3xl text-base font-semibold text-darkgreen">Tailored Landscape Services</h2>
          <button className="text-darkgreen text-sm md:text-base  hover:text-[#65a30d] hover:animate-pulse hover:underline inline-flex items-center gap-2 font-medium">
            VIEW MORE SERVICES
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        {/* mobile */}
        {isMobile ? (
          <div className="overflow-hidden h-full w-full relative   " ref={emblaRef}>
            <div className="flex">
              {servicesGrid.map((service, index) => (
                <div key={service.title} className="flex-[0_0_100%] min-w-0 pl-4 first:pl-0">
                  <ServiceCard service={service} index={index} />
                </div>
              ))}
              
            </div>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />

          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesGrid.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        )}


      </div>
    </section>
  )
}


