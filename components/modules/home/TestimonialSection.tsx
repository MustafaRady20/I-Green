"use client";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
// import Image from 'next/image'
import React, { useState } from "react";
// import { RxAvatar } from "react-icons/rx";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  image: string;
  title?: string;
}

function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Mike taylor",
      position: "Lahore, Pakistan",
      quote:
        "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
      image: "",
    },
    {
      id: 2,
      name: "Chris Thomas",
      position: "CEO of Red Button",
      image: "/placeholder.svg?",
      quote:
        "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <section className="flex font-['Sono'] flex-col lg:py-0 py-44  h-full lg:flex-row text-[#5E6282] lg:pb-28 pt-[120px] px-6 lg:pt-60 lg:pl-[284px] ">
      <div className="flex lg:h-[362px]   flex-col h-full  justify-center lg:flex-row w-full lg:gap-28 ">
        <div className="flex-1 lg:justify-start mx-auto justify-center items-center lg:min-w-32 lg:items-start">
          <h3 className="text-lg leading-7 lg:text-start text-center font-semibold mb-4">
            Testimonials
          </h3>
          <h1 className="lg:text-5xl text-4xl text-[#134A55] lg:leading-[64.5px] font-bold mb-12 lg:mb-20">
            What people say about Us.
          </h1>
          <div className="flex justify-center mb-12 lg:mb-0 items-center lg:justify-start  gap-8 ">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-4 w-4 rounded-full  cursor-pointer hover:cursor-pointer transition-colors ${
                  currentSlide === index ? "bg-[#39425D]" : "bg-muted"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* lg:h-64 */}
        <div className="relative lg:w-[874px] pr-14 h-[362px] ">
          <Avatar className="lg:w-20 lg:h-20 m-5 lg:m-0 size-14 absolute z-10  top-0 lg:-left-10 rounded-full border-2 border-blue-200">
            <AvatarImage
              src={testimonials[currentSlide].image}
              alt={testimonials[currentSlide].name}
            />
            <AvatarFallback>
              {testimonials[currentSlide].name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="relative  h-full p-6  lg:w-[707px] lg:h-[245px] bg-white rounded-lg z-[1]  shadow-lg  mb-4">
            <div className="flex lg:items-start  h-full items-center py-7 px-11 lg:w-[707px]   space-x-4">
              <div className="flex-1  space-y-[6px]">
                <p className=" ">{testimonials[currentSlide].quote}</p>
                <h3 className="font-semibold text-lg">
                  {testimonials[currentSlide].name}
                </h3>
                <p className="text-base font-medium ">
                  {testimonials[currentSlide].position ||
                    testimonials[currentSlide].title}
                </p>
              </div>
            </div>
          </div>

          {testimonials.length > 1 && (
            <div className="absolute flex  flex-col -bottom-20 w-[80%]  lg:bottom-5 lg:w-[606px] h-full lg:h-56 right-0  lg:right-24 bg-[#f8f8f8]  rounded-lg shadow-lg p-4">
              <footer className="flex h-full flex-col justify-end text-[#5E6282] px-11  space-y-[6px] ">
                <h3 className="font-semibold text-lg">
                  {testimonials[(currentSlide + 1) % testimonials.length].name}
                </h3>
                <p className="text-base font-medium ">
                  {testimonials[(currentSlide + 1) % testimonials.length]
                    .position ||
                    testimonials[(currentSlide + 1) % testimonials.length]
                      .title}
                </p>
              </footer>
            </div>
            //   <div className="relative lg:w-[606px] lg:bottom-5 ml-auto bg-[#f8f8f8] rounded-lg shadow-lg p-4">
            //   <div className="flex flex-col justify-end text-[#5E6282] px-11 space-y-[6px]">
            //     <h3 className="font-semibold text-lg">
            //       {testimonials[(currentSlide + 1) % testimonials.length].name}
            //     </h3>
            //     <p className="text-base font-medium">
            //       {testimonials[(currentSlide + 1) % testimonials.length].position ||
            //         testimonials[(currentSlide + 1) % testimonials.length].title}
            //     </p>
            //   </div>
            // </div>
          )}

          <div className="absolute  gap-x-6 mt-20 lg:mt-0 justify-center   lg:right-16 w-full lg:w-0 lg:top-1/2 lg:-translate-y-1/2 flex lg:flex-col lg:space-y-12">
            <button onClick={prevSlide} className="p-2   focus:outline-none  ">
              <ChevronUp className="w-7 h-7 -rotate-90 lg:rotate-0 text-[#3E2E4D]" />
            </button>
            <button onClick={nextSlide} className="p-2   focus:outline-none  ">
              <ChevronDown className="w-7 h-7 -rotate-90 lg:rotate-0 text-[#3E2E4D]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
