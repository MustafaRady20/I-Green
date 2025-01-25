"use client";
import React, { useState } from "react";
import Image from "next/image";

// External data for each section (cover images and titles)
const sections = [
  {
    coverImage: "/pexels-q-l-1447393640-29512043.jpg",
    title: "Section 1: Futuristic Design",
  },
  {
    coverImage: "/pexels-q-l-1447393640-29512043.jpg",
    title: "Section 2: Eco-Friendly Tech",
  },
  {
    coverImage: "/pexels-q-l-1447393640-29512043.jpg",
    title: "Section 3: AI-Driven Solutions",
  },
  {
    coverImage: "/pexels-q-l-1447393640-29512043.jpg",
    title: "Section 4: Sustainable Landscapes",
  },
];

const content = {
  description: `Our cutting-edge sfd technology for $sd is designed to revolutionize your outdoor spaces. We utilize advanced eco-friendly nanotech and AI-driven solutions to create sustainable, self-maintaining landscapes of the future.`,
  videoUrl: "https://www.example.com/futuristic-landscape-video.mp4",
  galleryImages: [
    "/futuristic-landscape-1.jpg",
    "/futuristic-landscape-2.jpg",
    "/futuristic-landscape-3.jpg",
    "/futuristic-landscape-4.jpg",
  ],
};

export function ServiceContent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleClose = () => {
    setExpandedIndex(null);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen p-4 gap-4">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`relative transition-all duration-300 ease-in-out cursor-pointer ${
            expandedIndex === index
              ? "w-full h-full" // Expanded section takes full width and height
              : expandedIndex === null
              ? "w-full md:w-[25%] h-[25vh] md:h-full" // Collapsed sections take full width on mobile, 25% on desktop
              : "hidden" // Hide other sections when one is expanded
          }`}
          onClick={() => handleClick(index)}
        >
          {/* White Box with Section Title (Visible Only When Not Expanded) */}
          {expandedIndex !== index && (
            <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md z-10">
              <h2 className="text-lg font-bold text-gray-800">
                {section.title}
              </h2>
            </div>
          )}

          <div className="h-full overflow-hidden rounded-lg shadow-lg">
            {/* Cover Image */}
            <Image
              src={section.coverImage}
              alt={`Cover Image ${index + 1}`}
              fill
              className="object-cover"
            />
            {/* Expanded Content */}
            {expandedIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-75 p-6 overflow-y-auto">
                {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent section click event
                    handleClose();
                  }}
                  className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  ✕
                </button>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-white mb-4">{content.description}</p>
                <video
                  src={content.videoUrl}
                  controls
                  className="w-full mb-4"
                />
                <div className="grid grid-cols-2 gap-4">
                  {content.galleryImages.map((img, idx) => (
                    <div key={idx} className="relative h-40">
                      <Image
                        src={img}
                        alt={`Futuristic Landscape ${idx + 1}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
