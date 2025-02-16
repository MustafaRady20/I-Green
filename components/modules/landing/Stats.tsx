"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}

const statsData: StatItemProps[] = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 720, suffix: "+", label: "gardens designed" },
  { value: 90000, label: "SQMs of green spaces accomplished" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: "all" });

  return (
    <main className="w-full bg-white relative overflow-hidden px-6 lg:px-4 pt-24 h-full">
      <section
        ref={ref}
        className="container mx-auto max-w-6xl text-deepGreen text-center grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      >
        {statsData.map((stat, index) => (
          <StatItem key={index} {...stat} isInView={isInView} />
        ))}
      </section>
    </main>
  );
}

const StatItem: React.FC<StatItemProps & { isInView: boolean }> = ({
  value,
  suffix = "",
  decimals = 0,
  label,
  isInView,
}) => {
  return (
    <div>
      <motion.div
        className="text-4xl md:text-5xl font-bold text-darkgreen"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CountingNumber
          value={value}
          suffix={suffix}
          decimals={decimals}
          isInView={isInView}
          label={""}
        />
      </motion.div>
      <motion.div
        className="md:text-2xl text-darkgray"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {label}
      </motion.div>
    </div>
  );
};

const CountingNumber: React.FC<StatItemProps & { isInView: boolean }> = ({
  value,
  suffix = "",
  decimals = 0,
  isInView,
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const duration = 2500;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentValue = Math.round(value * progress);

      if (ref.current) {
        ref.current.textContent = currentValue.toFixed(decimals) + suffix;
      }

      if (frame === totalFrames) clearInterval(counter);
    }, frameDuration);

    return () => clearInterval(counter);
  }, [value, suffix, decimals, isInView]);

  return <span ref={ref}>0{suffix}</span>;
};
