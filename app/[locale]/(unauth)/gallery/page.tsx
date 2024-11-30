'use client'

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"


type Size = "large" | "xlarge" | "medium" | "small";


interface Work {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
  gridClass?: string;
  size: Size; // Use the defined Size type here
}
// Sample gallery data - replace with your actual images
const galleryImages = [
  {
    id: 1,
    src: "/potflower.jpg?height=600&width=800",
    alt: "Modern terraced building with gardens",
    width: 800,
    height: 600,
    className: "col-span-2 row-span-2"
  },
  {
    id: 2,
    src: "/potflower.jpg?height=400&width=300",
    alt: "Yellow flower in pot",
    width: 300,
    height: 400,
    className: "col-span-2 row-span-2"

  },
  {
    id: 3,
    src: "/potflower.jpg?height=400&width=600",
    alt: "Japanese temple garden",
    width: 600,
    height: 400,
    className: "col-span-2"
  },
  {
    id: 4,
    src: "/potflower.jpg?height=300&width=400",
    alt: "Residential landscaping",
    width: 400,
    height: 300,
  },
  {
    id: 5,
    src: "/potflower.jpg?height=500&width=800",
    alt: "Garden pathway",
    width: 800,
    height: 500,
    className: "col-span-2"
  },
  {
    id: 6,
    src: "/potflower.jpg?height=400&width=300",
    alt: "Hobbit garden house",
    width: 300,
    height: 400,
  },
  {
    id: 7,
    src: "/potflower.jpg?height=400&width=600",
    alt: "Purple lupine flowers",
    width: 600,
    height: 400,
    className: "col-span-4"
  },
  {
    id: 8,
    src: "/potflower.jpg?height=600&width=400",
    alt: "Cacti garden",
    width: 400,
    height: 600,
  },
  {
    id: 9,
    src: "/potflower.jpg?height=500&width=800",
    alt: "Large tree with sunset",
    width: 800,
    height: 500,
    className: "col-span-1"
  },
]



const works: Work[] = [
  {
    id: 1,
    title: "MAGAZINE PROMO",
    description: "Check our latest work.",
    image: "/potflower.jpg",
    bgColor: "bg-[#f5f5f0]",
    textColor: "text-black",
    // gridClass: "col-span-1",
    size: "large",
  },
  {
    id: 2,
    title: "Character Design",
    description: "Check our latest work.",
    image: "/potflower.jpg",
    bgColor: "bg-[#2a1c5a]",
    textColor: "text-white",
    // gridClass: "row-span-2 ",
    size: "small",
  },
  {
    id: 4,
    title: "Product Design",
    description: "Check our latest work.",
    image: "/potflower.jpg",
    bgColor: "bg-[#ff4d2e]",
    textColor: "text-white",
    // gridClass: "col-span-1",
    size: "medium",
  },
  {
    id: 3, // Changed to a unique id
    title: "Another Character Design",
    description: "Check our latest work.",
    image: "/potflower.jpg",
    bgColor: "bg-[#2a1c5a]",
    textColor: "text-white",
    // gridClass: "row-span-2 ",
    size: "medium",
  },
  {
    id: 4, // Changed to a unique id
    title: "Another Character Design",
    description: "Check our latest work.",
    image: "/potflower.jpg",
    bgColor: "bg-[#2a1c5a]",
    textColor: "text-white",
    // gridClass: "row-span-4 ",
    size: "xlarge",
  }
];
// const sizeStyle: Record<Size, string> = {
//   xlarge: "col-span-4 row-span-2", // Extra-large items span 4 columns and 2 rows
//   large: "col-span-3 row-span-2",  // Large items span 3 columns and 2 rows
//   medium: "col-span-2 row-span-1", // Medium items span 2 columns and 1 row
//   small: "col-span-1 row-span-1",  // Small items span 1 column and 1 row
// };


const sizeStyle: Record<Size, string> = {
  small: "col-span-1 row-span-1 ",
  medium: "col-span-2 row-span-3  ",
  large: "col-span-2 row-span-2",
  xlarge: "col-span-2 row-span-2",
};


export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  // <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-auto">
  // {works.map((work) => (
  //   <div
  //     key={work.id}
  //     className={cn(
  //       "group cursor-pointer overflow-hidden w-full h-full hover:shadow-sm",
  //       sizeStyle[work.size]
  //     )}
  //   >
  //     <div className="relative ">
  //       <Image
  //         src={work.image}
  //         alt={work.title}
  //         width={800}
  //         height={600}
  //         className={`object-cover object-center w-full size-[360px] ${
  //           work.size === "large" && "lg:h-[1361px]"
  //         } ${work.size === "xlarge" && "lg:h-[580px]"}`}
  //       />
  return (
    <div className="container mx-auto px-4  py-12 pt-60 w-full h-full ">
      <div className="space-y-8">
        <div className="text-start">
          <h1 className="text-7xl font-bold tracking-tighter">Gallery</h1>
          <p className="text-darkgray mt-4">
            Explore our collection of beautiful landscaping projects and garden designs
          </p>
        </div>

        <div className="grid grid-cols-1   gap-4  md:grid-cols-4  " style={
          { gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" ,
          gridAutoRows: "200px"
             
           }
           
        }>
          {works.map((image) => (
            <div
              key={image.id}
              className={cn(

                "group relative cursor-pointer overflow-hidden rounded-lg bg-muted transition-all hover:opacity-90",
                sizeStyle[image.size]
              )}
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.image}
                alt={image.title}
                width={800}
                height={600}
                className={`object-cover   transition-transform duration-300 group-hover:scale-105 object-center w-full h-full `}
              />
              {/* // className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" */}

              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white text-sm font-medium">View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog   open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl px-4">
          {selectedImage && (
            <div className="relative  min-w-max min-h-96  lg:h-[700px] overflow-hidden rounded-lg">
              <Image
                src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
                 layout="fill"
                className="object-contain object-center w-full h-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

