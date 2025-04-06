"use client";
import React, { useRef, useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css";
import EmblaCarousel from "@/components/modules/landing/NewGallery";
import Image from "next/image";

const images = [
  "/potflower.jpg?height=400&width=600",
  "/potflower.jpg?height=400&width=600",
  "/potflower.jpg?height=400&width=600",
  "/potflower.jpg?height=400&width=600",
  "/potflower.jpg?height=400&width=600",
];

const ImageSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sync thumbnails with main slider
  useEffect(() => {
    if (thumbsRef.current && mainRef.current) {
      thumbsRef.current.go(currentIndex);
    }
  }, [currentIndex]);

  return (
    <>
      {isMobile ? (
        <EmblaCarousel images={images} />
      ) : (
        <div className="w-screen px-8 xl:px-14 py-8">
          {/* ✅ Main Slider */}
          <Splide
            options={{
              type: "fade",
              heightRatio: 0.4,
              pagination: true,
              arrows: true,
              cover: true,
              autoplay: true,
              interval: 3000,
              rewind: true,
              speed: 800,
            }}
            onMounted={(splide) => (mainRef.current = splide)}
            onMove={(splide) => setCurrentIndex(splide.index)}
            className="rounded-2xl overflow-hidden object-cover"
          >
            {images.map((src, index) => (
              <SplideSlide key={index}>
                <Image
                  fill
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[500px] rounded-2xl"
                />
              </SplideSlide>
            ))}
          </Splide>

          {/* ✅ Thumbnail Slider */}
          <Splide
            options={{
              fixedHeight: 100,
              isNavigation: true,
              gap: "10px",
              focus: "center",
              pagination: false,
              arrows: false,
              perPage: 5,
              drag: "free",
            }}
            onMounted={(splide) => (thumbsRef.current = splide)}
            className="mt-4"
          >
            {images.map((src, index) => (
              <SplideSlide key={index}>
                <Image
                  fill
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full h-full object-cover cursor-pointer border-2 ${
                    currentIndex === index
                      ? "border-blue-400"
                      : "border-transparent"
                  } rounded-md`}
                  onClick={() => {
                    mainRef.current?.go(index);
                    setCurrentIndex(index);
                  }}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      )}
    </>
  );
};

export default ImageSlider;
