"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"; // For v9+ (use 'swiper' for v8 or earlier)
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRef } from "react";
const data = [
  {
    title: "Branding",
    description:
      "Helping you effectively communicate your unique identity to your audience through engaging content...",
  },
  {
    title: "Social Media Designs",
    description:
      "Helping you effectively communicate your unique identity to your audience through engaging content...",
  },
  {
    title: "Content Creation",
    description:
      "Helping you effectively communicate your unique identity to your audience through engaging content...",
  },
  {
    title: "Content Creation",
    description:
      "Helping you effectively communicate your unique identity to your audience through engaging content...",
  },
  {
    title: "Content Creation",
    description:
      "Helping you effectively communicate your unique identity to your audience through engaging content...",
  },
  {
    title: "Content Creation",
    description:
      "Helping you effectively communicate your unique identity to your audience through engaging content...",
  },
  {
    title: "Content Creation",
    description:
      "Helping you effectively communicate your unique identity to your audience through engaging content...",
  },
];

const BriefWorkSwiper = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <div className="relative lg:px-[120px]  px-6 font-['Sono'] text-[#134A55] h-full w-full">
      {/* Swiper */}
      <Swiper
        className="w-full mx-auto h-full"
        spaceBetween={24}
        slidesPerView={2}
        breakpoints={{
          768: { slidesPerView: 3 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation]}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="w-full h-full ">
            <div className="flex flex-col p-6 h-full w-full items-center bg-[#FAFAFA] rounded-lg  shadow-sm">
              <div className=" lg:h-72 h-full   w-full rounded-lg">
                <Image
                  width={820}
                  height={632}
                  src="/marketing.png"
                  alt="Brief Work"
                  className="object-cover w-full h-full  rounded-lg"
                />
              </div>
              <h2 className="text-xl text-center font-bold text-gray-800 mt-4">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm text-center mt-2">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Arrows */}
      <div className="absolute  -bottom-20  mx-auto translate-x-[41%] items-center flex w-full space-x-11">
        <button
          ref={prevRef}
          className="text-gray-600  hover:text-gray-900  bg-transparent  flex items-center justify-center "
        >
          <ChevronLeft size={40} className="" />
        </button>
        <button
          ref={nextRef}
          className="text-gray-600   hover:text-gray-900  bg-transparent  flex items-center justify-center "
        >
          <ChevronRight size={40} className="" />
        </button>
      </div>
    </div>
  );
};

export default BriefWorkSwiper;
