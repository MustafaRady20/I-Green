"use client";
import React, { useState } from "react";
import SoftScape from "./SoftScape";
import Hardscape from "./Hardscape";
import Events from "./Events";
import SolarEnergy from "./SolarEnergy";

const sections = [
  {
    title: "Softscape and Irrigation Networks",
    content: <SoftScape />,
  },
  {
    title: "Hardscape",
    content: <Hardscape />,
  },
  {
    title: "Events",
    content: <Events />,
  },
  {
    title: "Solar Energy",
    content: <SolarEnergy />,
  },
];

export function ServiceContent() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar for desktop, Navbar for mobile */}
      <div className="md:w-1/5 w-full bg-gray-100 border-b md:border-b-0 md:border-r">
        <ul className="flex md:flex-col overflow-x-auto md:overflow-visible space-x-2 md:space-x-0 md:space-y-4 p-4">
          {sections.map((section, index) => (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`whitespace-nowrap cursor-pointer px-4 py-2 rounded-md text-sm md:text-base transition-all ${
                activeIndex === index
                  ? "bg-green-600 text-white"
                  : "hover:bg-green-100 text-gray-700"
              }`}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Content area */}
      <div className="md:w-4/5 w-full p-6">{sections[activeIndex].content}</div>
    </div>
  );
}
