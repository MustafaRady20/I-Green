import React from "react";
import { motion } from "framer-motion";

function SolarEnergy() {
  const solarSolutions = [
    {
      title: "Off-Grid Systems",
      description:
        "Reliable, independent power for remote locations, ensuring seamless energy access without reliance on the public grid.",
    },
    {
      title: "On-Grid Systems",
      description:
        "Generate your own energy while seamlessly transferring excess power back to the grid, optimizing efficiency and sustainability.",
    },
    {
      title: "Solar-Powered Irrigation",
      description:
        "A fully self-sufficient system that powers all types of pumps, delivering efficient water management powered by the sun.",
    },
  ];

  const heatingSolutions = [
    {
      title: "Wall-Mounted Systems",
      description:
        "Gas-powered boilers connected to radiators, offering rapid heating, modern design, and easy installation.",
    },
    {
      title: "Floor Heating Systems",
      description:
        "A discreet, energy-efficient solution with underground pipes distributing warmth evenly, preserving aesthetics while maximizing comfort. With smart technology and expert installation, we deliver seamless heating solutions tailored to your needs.",
    },
  ];

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Solar Energy Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-yellow-600 mb-4">
          Solar Energy & Central Heating Solutions
        </h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          At I Green, we provide smart, sustainable solar energy solutions
          tailored to every need. From off-grid and on-grid systems to
          solar-powered irrigation, we integrate cutting-edge technology with
          expert design to maximize efficiency and reduce energy consumption.
        </p>

        <div className="space-y-4">
          {solarSolutions.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border-l-4 border-yellow-500 shadow p-4 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className="font-semibold text-lg text-yellow-700 mb-1">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed">
          With innovative solutions and expert support, we bring the future of
          energy to your outdoor space.
        </p>
      </div>

      {/* Central Heating Section */}
      <div>
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Central Heating Solutions
        </h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          At I Green, we bring warmth and efficiency to every space with our
          advanced central heating systems. Designed for comfort, luxury, and
          sustainability, our solutions include wall-mounted and floor heating
          systems, using premium Italian, Turkish, and German materials that
          meet international quality standards.
        </p>

        <div className="space-y-4">
          {heatingSolutions.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border-l-4 border-red-500 shadow p-4 rounded-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className="font-semibold text-lg text-red-700 mb-1">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default SolarEnergy;
