"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LeafIcon } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  const Gallery = [
    { id: 1, src: "/pexels-pixabay-247599.jpg", alt: "Lawn care background" },
    { id: 2, src: "/pexels-pixabay-247599.jpg", alt: "Lawn care background" },
    { id: 3, src: "/pexels-pixabay-247599.jpg", alt: "Lawn care background" },
    { id: 4, src: "/pexels-pixabay-247599.jpg", alt: "Lawn care background" },
    { id: 5, src: "/pexels-pixabay-247599.jpg", alt: "Lawn care background" },
  ];

  const [api, setApi] = React.useState<CarouselApi>();
  // const [current, setCurrent] = React.useState(0);

  // React.useEffect(() => {
  //   if (!api) return;
  //   api.on("select", () => setCurrent(api.selectedScrollSnap()));
  // }, [api]);

  React.useEffect(() => {
    const interval = setInterval(() => api?.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <motion.div className="relative h-[600px] 2xl:h-screen flex flex-col items-center justify-center bg-[#004d40] overflow-hidden">
      {/* Carousel */}
      <Carousel
        setApi={setApi}
        className="absolute inset-0 h-full w-full"
        opts={{ align: "start", loop: true }}
        orientation="horizontal"
      >
        <CarouselContent className="h-full">
          {Gallery.map((item, index) => (
            <CarouselItem className="relative p-0" key={item.id}>
              <Image
                src={item.src}
                alt={item.alt}
                className="object-cover w-full h-full"
                width={1920}
                height={1080}
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Ensure the Overlay is Only Inside Hero */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10 pointer-events-none"></div>

      {/* Content */}
      <motion.div className="container mx-auto px-4 relative z-20 text-white">
        <div className="md:max-w-2xl 2xl:w-full max-w-xs">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm md:text-lg flex items-center font-normal mb-4"
          >
            <Image
              src="/leaf.png"
              width={30}
              height={30}
              alt="Logo"
              className="mr-2 animate-pulse"
            />
            I-GREEN LANDSCAPE SOLUTIONS
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl 2xl:text-7xl font-bold mb-6"
          >
            Where Nature Meets Technology
          </motion.h1>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#004d40]/60 group border border-Gold/50 hover:bg-Gold hover:text-white text-white rounded-lg font-medium">
              <span className="flex items-center">
                <LeafIcon size={30} className="mr-2" />
                <Link href="/about" className="relative text-lg">
                  Read More
                </Link>
              </span>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
