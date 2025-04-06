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
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-100 p-4 border-r">
        <ul className="space-y-4">
          {sections.map((section, index) => (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer p-2 rounded-md ${
                activeIndex === index
                  ? "bg-green-600 text-white"
                  : "hover:bg-green-100"
              }`}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Content area */}
      <div className="w-4/5 p-6">{sections[activeIndex].content}</div>
    </div>
  );
}
