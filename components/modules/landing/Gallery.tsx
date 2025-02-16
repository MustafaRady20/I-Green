"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  Splide,
  SplideSlide,
  Splide as SplideType,
} from "@splidejs/react-splide";
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css";
import EmblaCarousel from "@/components/modules/landing/NewGallery";

const images = [
  "/potflower.jpg?height=400&width=600",
  "/potflower.jpg?height=400&width=600",
  "/potflower.jpg?height=400&width=600",
  "/potflower.jpg?height=400&width=600",
  "/potflower.jpg?height=400&width=600",
  "/potflower.jpg?height=400&width=600",
];

const ImageSlider: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const mainRef = useRef<SplideType | null>(null);
  const thumbsRef = useRef<SplideType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (thumbsRef.current && mainRef.current) {
      thumbsRef.current.splide.go(currentIndex);
    }
  }, [currentIndex]);

  return (
    <>
      {isMobile ? (
        <EmblaCarousel slides={images} />
      ) : (
        <div className="w-screen px-8 xl:px-14 py-8">
          {/* Main Swiper */}
          <Splide
            ref={mainRef}
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
              classes: {
                pagination: "splide__pagination splide__pagination--custom",
                page: "splide__pagination__page splide__pagination__page--custom",
              },
            }}
            onMove={(splide) => setCurrentIndex(splide.index)}
            className="rounded-2xl overflow-hidden object-cover"
          >
            {images.map((src, index) => (
              <SplideSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[500px] rounded-2xl"
                />
              </SplideSlide>
            ))}
          </Splide>

          {/* Thumbnail Swiper */}
          <Splide
            ref={thumbsRef}
            options={{
              fixedHeight: 150,
              isNavigation: true,
              gap: "10px",
              focus: "center",
              pagination: false,
              arrows: false,
              perPage: 5,
              drag: "free",
            }}
            className="mt-4"
          >
            {images.map((src, index) => (
              <SplideSlide
                key={index}
                onClick={() => {
                  mainRef.current?.splide.go(index);
                  setCurrentIndex(index);
                }}
              >
                <img
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full h-full object-cover cursor-pointer border-2 ${
                    currentIndex === index
                      ? "border-blue-400"
                      : "border-transparent"
                  } rounded-md`}
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
