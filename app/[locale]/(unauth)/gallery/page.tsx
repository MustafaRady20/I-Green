"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Work {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
  category: string;
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
    category: "Design",
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
  {
    id: 4,
    title: "Modern Garden",
    description: "Fresh landscape designs.",
    image: "/basket-with-plants-copy-space.jpg",
    bgColor: "bg-[#1a2e40]",
    textColor: "text-white",
    category: "Gardens",
  },
  {
    id: 5,
    title: "Modern Garden",
    description: "Fresh landscape designs.",
    image: "/basket-with-plants-copy-space.jpg",
    bgColor: "bg-[#1a2e40]",
    textColor: "text-white",
    category: "Gardens",
  },
  {
    id: 6,
    title: "Modern Garden",
    description: "Fresh landscape designs.",
    image: "/basket-with-plants-copy-space.jpg",
    bgColor: "bg-[#1a2e40]",
    textColor: "text-white",
    category: "Gardens",
  },
  {
    id: 7,
    title: "Modern Garden",
    description: "Fresh landscape designs.",
    image: "/basket-with-plants-copy-space.jpg",
    bgColor: "bg-[#1a2e40]",
    textColor: "text-white",
    category: "Gardens",
  },
  {
    id: 8,
    title: "Modern Garden",
    description: "Fresh landscape designs.",
    image: "/basket-with-plants-copy-space.jpg",
    bgColor: "bg-[#1a2e40]",
    textColor: "text-white",
    category: "Gardens",
  },
];

export default function GalleryPage() {
  const [category, setCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<Work | null>(null);

  const imagesPerPage = 6;
  const filteredWorks =
    category === "all"
      ? works
      : works.filter((work) => work.category === category);
  const totalPages = Math.ceil(filteredWorks.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const displayedWorks = filteredWorks.slice(
    startIndex,
    startIndex + imagesPerPage
  );

  // Close modal when clicking outside or pressing ESC
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="container mx-auto px-6 pt-40 pb-16 w-full h-full">
      {/* Title & Description */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-gray-900">
          Gallery
        </h1>
        <p className="text-lg text-gray-600">
          Explore our collection of beautiful landscaping projects and creative
          designs.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center space-x-3 mt-8">
        {["all", "Gardens", "Design"].map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 text-sm font-semibold rounded-full transition duration-300 ${
              category === cat
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => {
              setCategory(cat);
              setCurrentPage(1);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {displayedWorks.map((work) => (
          <div
            key={work.id}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(work)}
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className={`p-4 ${work.bgColor} ${work.textColor}`}>
              <h3 className="text-lg font-bold">{work.title}</h3>
              <p className="text-sm">{work.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-3 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-semibold bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-lg font-semibold">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-semibold bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white p-4 rounded-lg shadow-lg w-11/12 max-w-5xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
            >
              <button
                className="absolute top-3 right-3 text-white bg-black rounded-full p-2"
                onClick={closeModal}
              >
                ✕
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                <p className="text-gray-700">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
