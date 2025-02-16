"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { use } from "react";
import Image from "next/image";
import { serviceContents } from "@/data/constants";
import { useParams } from "next/navigation";

export function Hero() {
  const params = useParams();
  const content = serviceContents[params.id as keyof typeof serviceContents];
  return (
    <div className="bg-darkgreen h-[500px] text-white py-20 relative overflow-hidden">
      <div className="absolute w-full h-full inset-0">
        <Image
          width={1920}
          height={1080}
          src={"/pexels-q-l-1447393640-29512043.jpg"}
          alt={content?.heroImageAlt || "Hero Image"}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="container flex flex-col  justify-end items-end h-full mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 neon-text">
          Future<span className="text-Gold">Scape</span> Services
        </h1>
      </div>
    </div>
  );
}
