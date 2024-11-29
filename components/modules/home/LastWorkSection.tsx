import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

// Define a type for the sizes
type Size = "large" | "xlarge" | "medium" | "small";

interface Work {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
  gridClass: string;
  size: Size; // Use the defined Size type here
}

function LastWorkSection() {
  const works: Work[] = [
    {
      id: 1,
      title: "MAGAZINE PROMO",
      description: "Check our latest work.",
      image: "/boxes.jpeg",
      bgColor: "bg-[#f5f5f0]",
      textColor: "text-black",
      gridClass: "col-span-1",
      size: "small",
    },
    {
      id: 2,
      title: "Character Design",
      description: "Check our latest work.",
      image: "/boxes.jpeg",
      bgColor: "bg-[#2a1c5a]",
      textColor: "text-white",
      gridClass: "row-span-2 ",
      size: "medium",
    },
    {
      id: 4,
      title: "Product Design",
      description: "Check our latest work.",
      image: "/boxes.jpeg",
      bgColor: "bg-[#ff4d2e]",
      textColor: "text-white",
      gridClass: "col-span-1",
      size: "xlarge",
    },
    {
      id: 3, // Changed to a unique id
      title: "Another Character Design",
      description: "Check our latest work.",
      image: "/boxes.jpeg",
      bgColor: "bg-[#2a1c5a]",
      textColor: "text-white",
      gridClass: "row-span-2 ",
      size: "xlarge",
    },
  ];

  const sizeStyle: Record<Size, string> = {
    large: "md:col-span-1 md:row-span-4",
    xlarge: "md:col-span-2 md:row-span-1",
    medium: "md:col-span-1 md:row-span-1",
    small: "md:col-span-1 md:row-span-1",
  };

  return (
    <section className="lg:py-60 font-['Sono'] text-[#134A55] px-6 gap-9 py-[120px] flex flex-col justify-center relative w-full lg:px-[120px]">
      <header className="flex flex-col justify-center gap-8 text-center">
        <h1 className="lg:text-6xl text-4xl font-bold text-center">
          Check our latest work.
        </h1>
        <div className="flex justify-center items-center">
          <p className="leading-6 text-xl font-normal max-w-[521px]">
            Take a look at some of our recent projects to see how we&apos;ve
            helped businesses like yours succeed online.
          </p>
        </div>
      </header>
      <article className="container mx-auto lg:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-auto">
          {works.map((work) => (
            <div
              key={work.id}
              className={cn(
                "group cursor-pointer overflow-hidden w-full h-full hover:shadow-sm",
                sizeStyle[work.size]
              )}
            >
              <div className="relative ">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={800}
                  height={600}
                  className={`object-cover object-center w-full size-[360px] ${
                    work.size === "large" && "lg:h-[1361px]"
                  } ${work.size === "xlarge" && "lg:h-[580px]"}`}
                />
                <div
                  className={`flex flex-col w-full p-4 bg-slate-100 text-black`}
                >
                  <h2 className="font-light tracking-wider mb-2">
                    {work.title}
                  </h2>
                  <div className="space-y-2 ">
                    <p className="text-sm font-light">{work.description}</p>
                    <p className="text-xs font-light opacity-80">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default LastWorkSection;
