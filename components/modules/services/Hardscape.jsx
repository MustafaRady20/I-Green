import React from "react";
import { motion } from "framer-motion";

function Hardscape() {
  const sections = [
    {
      title: "Hardscape Excellence",
      description:
        "We design and install durable, aesthetic paved areas—marble plazas, granite entrances, and rustic patios. Our custom pergolas blend form and function, elevating landscapes with timeless structure.",
    },
    {
      title: "Water Features with Purpose",
      description:
        "Design pools, waterfalls, or fountains tailored to your space. From horizon pools to marble waterfalls, every feature blends with nature to enrich your landscape.",
    },
    {
      title: "Lighting as Art & Science",
      description:
        "Transform landscapes with smart lighting: pathway safety, water accents, or texture highlights. We install systems (poles, up lights, and panels) that turn nightscapes into captivating art.",
    },
    {
      title: "Our Philosophy",
      description:
        "We believe lighting, hardscape, and water features are inseparable partners in sustainable design. By integrating these elements seamlessly, we ensure each project tells a story and every detail works in harmony to create spaces that inspire, endure, and evolve with nature.",
    },
  ];

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-stone-700 mb-6">
        Hardscape, Water Features & Lighting Fixtures
      </h1>

      <div className="space-y-6">
        {sections.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white border-l-4 border-stone-500 p-4 shadow rounded-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-xl font-semibold text-stone-800 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Hardscape;
