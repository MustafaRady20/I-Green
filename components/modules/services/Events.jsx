import React from "react";
import { motion } from "framer-motion";

function Events() {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Events</h1>

      <motion.div
        className="bg-white shadow-md p-6 rounded-2xl border-l-4 border-purple-500"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-gray-700 leading-relaxed">
          At <strong>I Green</strong>, we’re excited to introduce our newest
          service: <strong>Events</strong>! In partnership with{" "}
          <strong>Cairo Tech Summit</strong>, we bring you exceptional event
          experiences tailored to any occasion.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          Whether it’s a wedding, corporate gathering, or special celebration,
          our expert team designs and executes breathtaking themes, turning your
          vision into reality. From elegant décor to essential event equipment,
          every detail is taken care of—creating unforgettable moments with
          style and precision.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Events;
