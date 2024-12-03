'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  feature: string;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 p-6 rounded-xl border border-gray-800 backdrop-blur-lg bg-opacity-50 hover:bg-opacity-70 transition-all duration-300"
    >
      <p className="text-gray-100">{feature}</p>
    </motion.div>
  );
}