"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeader from "@/components/section-header";

const StargazingPage = () => {
  return (
    <div className="pt-24 mt-12">
      {/* Header */}
      <SectionHeader
        title="Stargazing Sessions"
        subtitle="Catch a glimpse of the stars - Telescope and naked-eye
              observations of stars, planets, galaxies, and nebulae under the
              night sky"
      />

      {/* Main Content */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">
              About Our Stargazing Sessions
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                We love to look at the night sky. Stargazing is the most fun and
                engaging outreach event for us. We arrange several stargazing
                sessions every year. Our stargazing sessions are always open for
                all. All of our members and astronomy enthusiasts gather at
                those events to see the wonders of the night sky with us.
              </p>

              <p>
                We arrange these stargazing sessions as standalone events or
                most of the time we arrange this as a closing part of our other
                regular events like Cosamnia or Study Circle.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 mb-8"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Naked-Eye Stargazing
            </h3>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We mostly organize naked-eye stargazing sessions. Because, we
                believe that it is the most accessible and sophisticated way to
                connect with our universe. Telescopes are not available for all.
                So, we make sure our participants can learn to identify
                constellations, bright stars, planets without any extra
                equipment.
              </p>

              <p>
                This way we give our participants the experience of how our
                ancestors used the night sky pattern to identify time and
                direction in ancient times.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 mb-8"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Stories & Cultural Connections
            </h3>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Also we discuss why we observe the sky, its historical
                significance, and the long connection of humanity with the
                stars. We also share stories, myths and cultural connections
                related to some stars and constellations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 mb-8"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Telescope Observations
            </h3>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                When telescopes are available, we see planets, nebulae and
                bright stars. We explain what objects our participants are
                seeing at the eyepiece and why it matters.
              </p>

              <p>
                We also hold sessions on how to operate a telescope, how
                different types of mount works.
              </p>
            </div>
          </motion.div>

          {/* What to Expect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 mb-8"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              What to Expect
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-200 mb-2">
                  Naked-Eye Sessions
                </h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Constellation identification</li>
                  <li>• Bright star recognition</li>
                  <li>• Planet spotting</li>
                  <li>• Navigation techniques</li>
                  <li>• Historical context</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-200 mb-2">
                  Telescope Sessions
                </h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Planetary observations</li>
                  <li>• Nebulae viewing</li>
                  <li>• Star cluster observations</li>
                  <li>• Telescope operation training</li>
                  <li>• Mount system explanations</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Session Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Session Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  Open Access
                </div>
                <div className="text-sm text-gray-400">
                  All members and enthusiasts welcome
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  Regular Events
                </div>
                <div className="text-sm text-gray-400">
                  Several sessions throughout the year
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  No Equipment
                </div>
                <div className="text-sm text-gray-400">
                  Naked-eye sessions need nothing extra
                </div>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 text-sm">
              <div>
                <span className="font-semibold text-gray-200">When:</span>{" "}
                Regular sessions throughout the year, 2 - 3 hours
              </div>
              <div>
                <span className="font-semibold text-gray-200">
                  Who Can Join:
                </span>{" "}
                Open for all members and astronomy enthusiasts
              </div>
              <div>
                <span className="font-semibold text-gray-200">
                  What to Bring:
                </span>{" "}
                Nothing required for naked-eye sessions, telescopes provided
                when available
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StargazingPage;
