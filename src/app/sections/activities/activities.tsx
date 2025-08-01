"use client";

import React from "react";
import { motion } from "motion/react";
import { BookOpen, Calendar, Users, Mic, Star, Newspaper } from "lucide-react";
import Header from "../../../components/header";
import Link from "next/link";

interface Activity {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
}

const activities: Activity[] = [
  {
    id: "study-circle",
    title: "STUDY CIRCLE",
    subtitle: "Share knowledge, Increase knowledge",
    description:
      "Everyone you will ever meet knows something you do not. That is why we arrange several study circles per month where we meet each other and discuss certain topics related to astronomy.",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-blue-400 to-cyan-300",
    image: "/images/studycircle.webp",
  },
  {
    id: "cosmania",
    title: "COSMANIA",
    subtitle: "Spread what you know",
    description:
      "If you have the knowledge, let others light their candles in it. That is why we organize school programs in different schools & colleges throughout the country since we are trying to spread curiosity among all.",
    icon: <Users className="w-8 h-8" />,
    color: "from-green-400 to-emerald-300",
    image: "/images/cosmania.webp",
  },
  {
    id: "astro-carnival",
    title: "ASTRO CARNIVAL",
    subtitle: "Learning in a festive way",
    description:
      "We organize an Astro carnival once a year for all school, college, madrasa and university students throughout the country. Their participation in the carnival makes our work worthwhile. Their curious eyes tell the rest.",
    icon: <Calendar className="w-8 h-8" />,
    color: "from-orange-400 to-yellow-300",
    image: "/images/astrocarnival.webp",
  },
  {
    id: "star-gazing",
    title: "STAR GAZING",
    subtitle: "Catch a glimpse of the stars",
    description:
      "Looking at stars, planets, galaxies, and nebulae we realize that we're just one tiny part of that. Sometimes, we CAM people, gaze into the night sky with a telescope but regularly we do naked-eye stargazing.",
    icon: <Star className="w-8 h-8" />,
    color: "from-indigo-400 to-blue-300",
    image: "/images/stargazing.webp",
  },
  {
    id: "cam-talk",
    title: "CAM-TALK",
    subtitle: "Conversations that inspire",
    description:
      "We are eager to learn more from experts. That is why we invite guest speakers from reputable institutions to share and discuss their expertise, works, and points of view during this event.",
    icon: <Mic className="w-8 h-8" />,
    color: "from-teal-400 to-cyan-300",
    image: "/images/spaceweek.webp",
  },
  {
    id: "journal-club",
    title: "JOURNAL CLUB",
    subtitle: "Where research meets curiosity",
    description:
      "We want to learn about the important and recent works on astronomy. That is why we arrange regular journal talks to discuss and analyze recent astronomical research papers and publications.",
    icon: <Newspaper className="w-8 h-8" />,
    color: "from-violet-400 to-purple-300",
    image: "/images/seminar.webp",
  },
];

const ActivityCard: React.FC<{ activity: Activity; index: number }> = ({
  activity,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-gray-500/80 transition-all duration-500 hover:scale-105"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-80 transition-opacity duration-500">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Subtle Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Content */}
      <div className="relative p-8 h-full flex flex-col">
        {/* Icon */}
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${activity.color} text-black mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
        >
          {activity.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-2">{activity.title}</h3>

        {/* Subtitle */}
        <p
          className={`text-lg font-medium bg-gradient-to-r ${activity.color} bg-clip-text text-transparent mb-4`}
        >
          {activity.subtitle}
        </p>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-sm flex-grow group-hover:text-white transition-colors duration-300">
          {activity.description}
        </p>

        {/* Hover Effect Line */}
        <div
          className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${activity.color} transition-all duration-500 rounded-full`}
        />
      </div>

      {/* Corner Glow */}
      <div
        className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-all duration-500`}
      />
    </motion.div>
  );
};

const Activities: React.FC = () => {
  return (
    <div className="relative overflow-hidden" id="activities">
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <Header
          title="Regular Activities"
          subtitle="Exploring the cosmos through education, observation, and community
        engagement"
        />

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {activities.map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>

        {/* See All Activities Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Link
            href="/activities"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-300 text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25 group"
          >
            <span className="mr-2">Explore All Activities</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <p className="text-gray-400 text-sm mt-4 max-w-md mx-auto">
            Discover our complete range of educational programs, workshops, and
            community events
          </p>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

export default Activities;
