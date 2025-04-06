import React from "react";
import { motion } from "framer-motion";

function SoftScape() {
  const items = [
    {
      title: "Softscape Expertise",
      content:
        "At I Green, we design beautifully balanced gardens where lush lawns, shrubs, trees, and palms unite to create timeless landscapes. With over two decades of expertise and our own nursery, we provide top-quality plants tailored to your vision—ensuring your outdoor space thrives with harmony, precision, and care.",
    },
    {
      title: "Irrigation Networks",
      content:
        "At I Green, we craft smart irrigation systems that deliver water precisely where and when plants need it. From semi-automatic setups to fully automated networks equipped with weather-responsive technology, our solutions adapt to any environment and scale. Partnering with the world’s top suppliers, we use trusted components to ensure your landscape stays lush, efficient, and worry-free.",
    },
    {
      title: "Our Philosophy",
      content:
        "We believe softscape and irrigation networks must work hand-in-hand to create landscapes that thrive sustainably, ensuring every plant receives the care it needs to flourish.",
    },
  ];

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-6 text-green-700">
        Softscape & Irrigation Networks
      </h1>
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md p-4 rounded-2xl border-l-4 border-green-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-2 text-green-800">
              {item.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default SoftScape;
