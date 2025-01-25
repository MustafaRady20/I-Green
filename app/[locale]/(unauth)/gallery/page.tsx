"use client";
import { useState, useEffect } from "react";
import EmblaCarousel from "@/components/modules/landing/NewGallery";

interface Work {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
  category: string;
  size?: "large" | "xlarge" | "medium" | "small";
}

const works: Work[] = [
  {
    id: 1,
    title: "MAGAZINE PROMO",
    description: "Check our latest work.",
    image: "/potflower.jpg",
    bgColor: "bg-[#f5f5f0]",
    textColor: "text-black",
    category: "Gardens",
  },
  {
    id: 2,
    title: "Character Design",
    description: "Check our latest work.",
    image: "/potflower.jpg",
    bgColor: "bg-[#2a1c5a]",
    textColor: "text-white",
    category: "Gardens",
  },
  {
    id: 3,
    title: "Product Design",
    description: "Check our latest work.",
    image: "/potflower.jpg",
    bgColor: "bg-[#ff4d2e]",
    textColor: "text-white",
    category: "Gardens",
  },
];

export default function GalleryPage() {
  const [category, setCategory] = useState<string>("all");
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setCategory("all");
    if (category === "all") {
      setImages(works.map((work) => work.image));
    } else {
      setImages(
        works
          .filter((work) => work.category === category)
          .map((work) => work.image)
      );
    }
  }, [category]);

  return (
    <div className="container mx-auto px-4  pt-60 w-full h-full">
      <div className="space-y-5">
        <div className="text-start">
          <h1 className="text-5xl font-bold tracking-tighter text-center">
            Gallery
          </h1>
          <p className="text-darkgray  text-center">
            Explore our collection of beautiful landscaping projects and garden
            designs
          </p>
        </div>
        <div className="w-full">
          <EmblaCarousel slides={images} />
        </div>
      </div>
    </div>
  );
}
