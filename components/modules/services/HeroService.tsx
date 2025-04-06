"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Image from "next/image";
import { serviceContents } from "@/data/constants";
import { useParams } from "next/navigation";

export function Hero() {
  const params = useParams();
  const content = serviceContents[params.id as keyof typeof serviceContents];

  return (
    <div className="relative h-[700px] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          width={1920}
          height={1080}
          src={"/pexels-q-l-1447393640-29512043.jpg"}
          alt={content?.heroImageAlt || "Hero Image"}
          className="w-full h-full object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white neon-text">
          Future<span className="text-Gold">Scape</span> Services
        </h1>
      </div>
    </div>
  );
}
