"use client";
import { motion } from "motion/react";

type Props = {
  title: string;
  subtitle: string;
};

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-slate-300 bg-clip-text text-transparent p-4 mb-4 tracking-tight"
      >
        {title}
      </motion.h3>

      <p className="text-xl text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  );
}
