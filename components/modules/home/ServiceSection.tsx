"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Leaf, FlowerIcon, Trees, TreesIcon as Plant, Scissors, Sprout, ArrowRight } from 'lucide-react'
import Image from "next/image"


interface Service {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  image: string 
  specialtyLabel?: string
}

const services: Service[] = [
  {
    title: "Gardens and Ponds",
    description: "To blend seamlessly with urban featuring native plants and wildlife.",
    icon: FlowerIcon,
    image: "/pexels-amie-roussel-1990939723-28965893.jpg?height=400&width=600" ,
    specialtyLabel: "Specialty Gardening"  },
  {
    title: "Container Gardening",
    description: "Container's come in various materials like terracotta, plastic, metal, wood.",
    icon: Plant,
    image: "/pexels-amie-roussel-1990939723-28965893.jpg?height=400&width=600" ,
    specialtyLabel: "Specialty Gardening"  },
  {
    title: "Organic Gardening",
    description: "We apply organic methods such as areas access surfaces to improve.",
    icon: Leaf,
    image: "/pexels-amie-roussel-1990939723-28965893.jpg?height=400&width=600" ,
    specialtyLabel: "Specialty Gardening"  },
  {
    title: "Plant Health Care",
    description: "We analyze soil composition and pH level, adding soil care.",
    icon: Sprout,
    image: "/pexels-amie-roussel-1990939723-28965893.jpg?height=400&width=600" ,
    specialtyLabel: "Specialty Gardening"  },
  {
    title: "Pruning and Trimming",
    description: "Regular pruning of trees helps maintain their structural integrity intact.",
    icon: Scissors,
    image: "/pexels-amie-roussel-1990939723-28965893.jpg?height=400&width=600" ,
    specialtyLabel: "Specialty Gardening"


  },
  {
    title: "Weeding and Mulching",
    description: "Lawn Care services upon lawn remains healthy and weed free all year.",
    icon: Trees,
    image: "/pexels-amie-roussel-1990939723-28965893.jpg?height=400&width=600" ,
    specialtyLabel: "Specialty Gardening"  }
]

export default function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-44 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between w-[95%] items-center mb-12">
          <h2 className="text-3xl font-semibold text-darkgreen">Tailored Landscape Services</h2>
          <button className="text-darkgreen hover:text-[#65a30d] hover:animate-bounce hover:underline inline-flex items-center gap-2 font-medium">
            VIEW MORE SERVICES
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="relative overflow-hidden border  w-full h-72 lg:w-full lg:h-full  rounded-lg cursor-pointer hover:shadow-lg transition-opacity duration-200"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)} 
              onClick={() => console.log('clicked')}
            >
                                <Image src={'/tree2.png'} alt={service.title} width={600} height={400} className="absolute rotate-180  -right-64 opacity-25 -top-48" />

              {hoveredIndex === index && service.image ? (
                <div className="absolute lg:h-full lg:w-full   inset-0">
                  <div
                    className="absolute  inset-0 bg-cover object-cover w-full h-full object-center bg-center "
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-[#65a30d]/10" />

                  <div className=" flex flex-col absolute gap-y-2 left-4 bottom-4">
                  {/* {service.specialtyLabel && (
                    // <div className="">
                      <Badge variant={"default"}  className="bg-lightGreen hover:bg-lightGreen  flex text-xs items-center text-Gold">
                      <FolderArchive   className=" mr-2 text-white" />
                        {service.specialtyLabel}
                      </Badge>
                    // </div>
                  )} */}

                  <div  className=" py-1 px-4   text-sm rounded-lg  bg-white text-deepGreen">
                    <h3 className="text-sm font-semibold   flex items-center gap-2">
                      {/* <span className="w-5 h-0.5 bg-white " /> */}
                      {service.title}
                    </h3>
                  </div>
                  </div>
               
                </div>
              ) : (
                <div className="p-6 text-deepGreen h-full ">
                  {/* <div  
                    className="absolute inset-0 bg-cover bg-center opacity-100 left-0 top-0 " 
                    style={{ backgroundImage: `url('/tree2.png'})` }} > 
                  </div> */}
                  {/* <Image src={'/tree2.png'} alt={service.title} width={600} height={400} className="absolute  left-0 top-0  inset-0" /> */}
                  <div className="mb-6 z-10">
                 
                    <service.icon  className="w-12 h-12  text-[#65a30d]"  />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-0.5 bg-primary" />
                    <h3 className="text-lg font-semibold  ">{service.title}</h3>
                  </div>
                  <p className="text-darkgray mb-4">{service.description}</p>
                  <button className=" hover:underline inline-flex items-center gap-2">
                    VIEW MORE
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
