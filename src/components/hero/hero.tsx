"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import ExploreBtn from "./explore-btn";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] flex items-center justify-center overflow-hidden">
      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center px-4 text-center"
      >
        {/* CAM-SUST Header */}
        <motion.div variants={itemVariants} className="mb-6 z-50">
          <div className="text-indigo-300 text-xl md:text-2xl font-bold tracking-widest mb-2">
            CAM-SUST
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-indigo-500 to-indigo-800 mx-auto mb-4"></div>
          <div className="text-neutral-300 text-base md:text-lg font-light">
            Celestial Astronomy & Research Organization
          </div>
          <div className="text-neutral-400 text-sm">
            Shahjalal University of Science & Technology
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-8 z-10">
          <h1 className="text-5xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            EXPLORE
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-center text-neutral-300">
            The Universe Through Science
          </h2>
        </motion.div>

        {/* Mission Statement */}
        <motion.div variants={itemVariants} className="max-w-3xl mb-12 z-10">
          <p className="text-neutral-200 text-lg md:text-xl leading-relaxed text-center font-light">
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
          className="grid grid-cols-3 gap-6 mb-12 w-full max-w-2xl"
        >
          {[
            { number: "300+", label: "Active Members" },
            { number: "10+", label: "Research Projects" },
            { number: "13", label: "Years of Excellence" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.05] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
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
          className="flex flex-col items-center"
        >
          <p className="text-neutral-500 text-sm mb-3 font-light">
            Discover more about us
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border border-neutral-500 rounded-full flex justify-center opacity-70"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-0.5 h-2 bg-neutral-500 rounded-full mt-1"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Space Elements - Rockets, Planets, Satellites */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Realistic Rocket Animation */}
        <motion.div
          className="absolute top-1/4 right-1/6 w-12 h-48"
          animate={{
            y: [-40, 40, -40],
            rotate: [2, -2, 2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative w-full h-full">
            {/* Main Rocket Body */}
            <div className="absolute inset-x-0 top-8 bottom-16 bg-gradient-to-b from-gray-100 via-white to-gray-200 rounded-t-lg shadow-lg border-l border-r border-gray-300" />

            {/* Rocket Nose Cone */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-red-600 via-red-500 to-red-400 clip-path-triangle shadow-md"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            />

            {/* Command Module Windows */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full opacity-80" />
            <div className="absolute top-16 left-2 w-2 h-2 bg-gradient-to-b from-cyan-300 to-blue-500 rounded-full opacity-70" />
            <div className="absolute top-16 right-2 w-2 h-2 bg-gradient-to-b from-cyan-300 to-blue-500 rounded-full opacity-70" />

            {/* Fuel Tank Bands */}
            <div className="absolute top-20 inset-x-0 h-0.5 bg-gray-400" />
            <div className="absolute top-28 inset-x-0 h-0.5 bg-gray-400" />
            <div className="absolute top-36 inset-x-0 h-0.5 bg-gray-400" />

            {/* Side Boosters */}
            <div className="absolute top-12 -left-2 w-3 h-24 bg-gradient-to-b from-gray-200 to-gray-400 rounded-t-lg rounded-b-sm" />
            <div className="absolute top-12 -right-2 w-3 h-24 bg-gradient-to-b from-gray-200 to-gray-400 rounded-t-lg rounded-b-sm" />

            {/* Main Engine Nozzle */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-gray-600 to-gray-800 rounded-b-full" />

            {/* Side Booster Nozzles */}
            <div className="absolute bottom-12 -left-2 w-3 h-4 bg-gradient-to-b from-gray-500 to-gray-700 rounded-b-full" />
            <div className="absolute bottom-12 -right-2 w-3 h-4 bg-gradient-to-b from-gray-500 to-gray-700 rounded-b-full" />

            {/* Main Engine Flames */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-16"
              animate={{
                scaleY: [1, 1.3, 1],
                scaleX: [1, 0.8, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-gradient-to-b from-blue-400 via-orange-500 to-yellow-300 rounded-b-3xl opacity-90" />
              <div className="absolute inset-2 bg-gradient-to-b from-white via-yellow-400 to-orange-500 rounded-b-3xl opacity-70" />
            </motion.div>

            {/* Side Booster Flames */}
            <motion.div
              className="absolute bottom-8 -left-2 w-4 h-8"
              animate={{
                scaleY: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-gradient-to-b from-orange-400 to-red-500 rounded-b-full opacity-80" />
            </motion.div>

            <motion.div
              className="absolute bottom-8 -right-2 w-4 h-8"
              animate={{
                scaleY: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 0.25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.1,
              }}
            >
              <div className="w-full h-full bg-gradient-to-b from-orange-400 to-red-500 rounded-b-full opacity-80" />
            </motion.div>

            {/* Exhaust Trail */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-20"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scaleY: [1, 1.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-gradient-to-b from-orange-300 to-transparent rounded-full" />
            </motion.div>
          </div>
        </motion.div>

        {/* Planet Earth */}
        <motion.div
          className="absolute bottom-1/4 left-1/12 w-24 h-24"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-green-500 to-blue-600 shadow-lg">
            {/* Continents */}
            <div className="absolute top-2 left-3 w-6 h-8 bg-green-600 rounded-full opacity-80" />
            <div className="absolute bottom-3 right-2 w-8 h-6 bg-green-700 rounded-full opacity-70" />
            <div className="absolute top-6 right-4 w-4 h-5 bg-green-600 rounded-full opacity-60" />
            {/* Clouds */}
            <div className="absolute top-1 right-1 w-8 h-3 bg-white rounded-full opacity-40" />
            <div className="absolute bottom-2 left-1 w-6 h-2 bg-white rounded-full opacity-30" />
          </div>
        </motion.div>

        {/* Saturn with Rings */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-20 h-20"
          animate={{
            y: [-25, 25, -25],
            x: [-15, 15, -15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            {/* Saturn Body */}
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-200 via-orange-300 to-yellow-400 rounded-full mx-auto" />
            {/* Saturn Rings */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full" />
          </div>
        </motion.div>

        {/* Moon */}
        <motion.div
          className="absolute top-1/2 right-1/3 w-12 h-12"
          animate={{
            y: [20, -20, 20],
            rotate: 360,
          }}
          transition={{
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 rounded-full relative">
            {/* Moon Craters */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-gray-600 rounded-full" />
            <div className="absolute bottom-3 right-2 w-1.5 h-1.5 bg-gray-600 rounded-full" />
            <div className="absolute top-5 right-3 w-1 h-1 bg-gray-600 rounded-full" />
          </div>
        </motion.div>

        {/* Space Station/Satellite - Made Fluid */}
        <motion.div
          className="absolute top-1/6 w-16 h-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: windowWidth + 100,
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            x: { duration: 25, repeat: Infinity, ease: "linear" },
            opacity: {
              duration: 25,
              repeat: Infinity,
              times: [0, 0.05, 0.9, 0.95, 1],
              ease: "linear",
            },
          }}
          style={{ left: "25%" }}
        >
          <div className="relative">
            {/* Main Body */}
            <div className="w-8 h-6 bg-gradient-to-b from-gray-200 to-gray-400 rounded mx-auto" />
            {/* Solar Panels */}
            <div className="absolute top-1 -left-2 w-6 h-4 bg-gradient-to-r from-blue-900 to-blue-700" />
            <div className="absolute top-1 -right-2 w-6 h-4 bg-gradient-to-r from-blue-900 to-blue-700" />
            {/* Antenna */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-gray-500" />
          </div>
        </motion.div>

        {/* Asteroid Field - Made Fluid */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`asteroid-${i}`}
            className="absolute w-2 h-2 bg-gray-600 rounded-full"
            initial={{
              x: -50,
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: 0,
            }}
            animate={{
              x: windowWidth + 50,
              rotate: 360,
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              x: {
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              },
              rotate: {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear",
              },
              opacity: {
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                times: [0, 0.1, 0.8, 0.9, 1],
                ease: "linear",
                delay: Math.random() * 5,
              },
            }}
            style={{
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Galaxy Spiral */}
        <motion.div
          className="absolute bottom-1/6 right-1/12 w-32 h-32 opacity-20"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative w-full h-full">
            {/* Galaxy Arms */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full transform rotate-0"
              style={{ clipPath: "ellipse(40% 20% at 50% 50%)" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full transform rotate-45"
              style={{ clipPath: "ellipse(40% 20% at 50% 50%)" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full transform rotate-90"
              style={{ clipPath: "ellipse(40% 20% at 50% 50%)" }}
            />
            {/* Galaxy Center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
          </div>
        </motion.div>

        {/* Comet - Made Fluid */}
        <motion.div
          className="absolute top-1/3 w-40 h-4"
          initial={{ x: -160, opacity: 0 }}
          animate={{
            x: windowWidth + 40,
            y: [-20, 20],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            x: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            opacity: {
              duration: 20,
              repeat: Infinity,
              times: [0, 0.1, 0.8, 0.9, 1],
              ease: "linear",
            },
          }}
        >
          <div className="relative">
            {/* Comet Head */}
            <div className="absolute right-0 w-4 h-4 bg-gradient-to-r from-cyan-400 to-white rounded-full" />
            {/* Comet Tail */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-32 h-1 bg-gradient-to-l from-cyan-200 to-transparent" />
            <div className="absolute right-3 top-1/2 transform  translate-y-1 w-28 h-0.5 bg-gradient-to-l from-blue-200 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
