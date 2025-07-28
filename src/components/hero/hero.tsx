"use client";

import { useEffect, useState } from "react";
import { easeOut, motion } from "motion/react";
import ExploreBtn from "./explore-btn";
import { StarField } from "./starfield";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative w-full bg-grid-white/[0.02] flex flex-col-reverse lg:flex-row items-center overflow-hidden">
      {/* Animated Stars Background */}
      <StarField />

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative items-start z-10 flex-1 flex flex-col justify-center px-8 lg:px-16 max-w-2xl lg:max-w-none"
      >
        {/* CAM-SUST Header */}
        <motion.div variants={itemVariants} className="mb-6 lg:mb-8">
          <div className="text-indigo-300 text-lg md:text-xl lg:text-2xl font-bold tracking-widest mb-3">
            CAM-SUST
          </div>
          <div className="w-20 lg:w-24 h-0.5 bg-gradient-to-r from-indigo-500 to-indigo-800 mb-4"></div>
          <div className="text-neutral-300 text-sm md:text-base lg:text-lg font-light mb-2">
            Astronomy Research & Outreach Organization
          </div>
          <div className="text-neutral-400 text-xs md:text-sm">
            Shahjalal University of Science & Technology
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-6 lg:mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4 leading-tight">
            EXPLORE
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-light text-neutral-300 mb-6">
            The Universe Through Science
          </h2>
        </motion.div>

        {/* Mission Statement */}
        <motion.div variants={itemVariants} className="mb-8 lg:mb-10">
          <p className="text-neutral-200 text-sm md:text-base lg:text-lg leading-relaxed font-light">
            Where <span className="text-blue-400 font-medium">curiosity</span>{" "}
            meets the{" "}
            <span className="text-purple-400 font-medium">cosmos</span>. Join
            our community of stargazers, learners, researchers, and volunteers
            as we explore the universe through observation, discussion, and
            collective discovery.
          </p>
        </motion.div>

        {/* Impact Numbers */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-3 lg:gap-4 mb-8 lg:mb-10"
        >
          {[
            { number: "300+", label: "Active Members" },
            { number: "10+", label: "Research Projects" },
            { number: "13", label: "Years of Excellence" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-2 lg:p-3 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.05] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-lg md:text-xl lg:text-2xl font-bold text-blue-400 mb-1">
                {stat.number}
              </div>
              <div className="text-neutral-400 text-xs md:text-sm font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <ExploreBtn />

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex items-center mt-8 lg:mt-0"
        >
          <p className="text-neutral-500 text-xs md:text-sm mr-4 font-light">
            Discover more about us
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-4 h-6 border border-neutral-500 rounded-full flex justify-center opacity-70"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-0.5 h-1.5 bg-neutral-500 rounded-full mt-1"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Solar System - Right Side */}
      <div className="flex relative flex-1 lg:h-screen items-center justify-center">
        {/* Solar System Container */}
        <motion.div
          className="relative w-full h-full max-w-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Sun */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-full shadow-lg">
              <div className="absolute inset-2 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-70" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-transparent rounded-full opacity-40"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Mercury Orbit */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-500 rounded-full" />
          </motion.div>

          {/* Venus Orbit */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 border border-white/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-600 rounded-full" />
          </motion.div>

          {/* Earth Orbit */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-white/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="relative w-4 h-4 bg-gradient-to-br from-blue-400 via-green-500 to-blue-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                {/* Earth continents */}
                <div className="absolute top-0.5 left-0.5 w-1.5 h-2 bg-green-600 rounded-full opacity-80" />
                <div className="absolute bottom-0.5 right-0.5 w-2 h-1.5 bg-green-700 rounded-full opacity-70" />
                {/* Moon */}
                <motion.div
                  className="absolute w-1 h-1 bg-gray-300 rounded-full"
                  style={{ left: "20px", top: "6px" }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Mars Orbit */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-white/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full" />
          </motion.div>

          {/* Jupiter Orbit */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/8 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="w-6 h-6 bg-gradient-to-br from-orange-300 via-yellow-600 to-orange-700 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              >
                {/* Jupiter bands */}
                <div className="absolute top-1 inset-x-0 h-0.5 bg-orange-800 opacity-60" />
                <div className="absolute top-3 inset-x-0 h-0.5 bg-red-800 opacity-60" />
                <div className="absolute bottom-1 inset-x-0 h-0.5 bg-yellow-800 opacity-60" />
              </motion.div>
            </div>
          </motion.div>

          {/* Saturn Orbit */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] border border-white/8 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                {/* Saturn body */}
                <div className="w-5 h-5 bg-gradient-to-br from-yellow-200 via-orange-300 to-yellow-400 rounded-full" />
                {/* Saturn rings */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full opacity-70" />
              </div>
            </div>
          </motion.div>

          {/* Uranus Orbit */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] border border-white/7 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full" />
          </motion.div>

          {/* Neptune Orbit */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] border border-white/7 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full" />
          </motion.div>

          {/* Asteroid Belt */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] rounded-full">
            {[...Array(48)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-gray-600 rounded-full"
                style={{
                  left: `${50 + 40 * Math.cos((i * 7.5 * Math.PI) / 180)}%`,
                  top: `${50 + 40 * Math.sin((i * 7.5 * Math.PI) / 180)}%`,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Shooting Stars */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`shooting-star-${i}`}
              className="absolute w-1 h-0.5 bg-gradient-to-r from-white to-transparent"
              initial={{
                x: Math.random() * 200,
                y: Math.random() * 200,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * 400 + 200,
                y: Math.random() * 400 + 200,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 3,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
