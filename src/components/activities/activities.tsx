"use client";

import React from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  Calendar,
  Users,
  Eye,
  Globe,
  GraduationCap,
} from "lucide-react";
import Header from "../common/header";

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
    id: "astro-carnival",
    title: "ASTRO CARNIVAL",
    subtitle: "Learning in a festive way",
    description:
      "We organize an Astro carnival once a year for all the high school and college students of Sylhet. Their participation in the carnival makes our work worthwhile. Their curious eyes tell the rest.",
    icon: <Calendar className="w-8 h-8" />,
    color: "from-orange-400 to-yellow-300",
    image: "/images/astrocarnival.webp",
  },
  {
    id: "cosmania",
    title: "COSMANIA",
    subtitle: "Spread what you know",
    description:
      "If you have the knowledge, let others light their candles in it. Spreading knowledge in different places will gather new experiences. We organize school programs in different schools throughout the country since we are trying to spread the curiosity to look at the night sky.",
    icon: <Users className="w-8 h-8" />,
    color: "from-green-400 to-emerald-300",
    image: "/images/cosmania.webp",
  },
  {
    id: "star-gazing",
    title: "STAR GAZING",
    subtitle: "Catch a glimpse of the stars",
    description:
      "We can't look up into the Universe without wondering what's out there. Looking at stars, planets, galaxies, and nebulae and realize that we're just one tiny part of that. Sometimes, we CAM people, gaze into the night sky with a telescope but regularly we do naked eye star gazing.",
    icon: <Eye className="w-8 h-8" />,
    color: "from-indigo-400 to-blue-300",
    image: "/images/stargazing.webp",
  },
  {
    id: "world-space-week",
    title: "WORLD SPACE WEEK",
    subtitle: "Exploring the universe",
    description:
      "From 4th to 10th October we celebrate 'World Space Week (WSW)' with the whole world through many events. Documentary shows, Seminars and film shows on astronomy are arranged to celebrate this week.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-teal-400 to-cyan-300",
    image: "/images/spaceweek.webp",
  },
  {
    id: "seminar",
    title: "SEMINAR",
    subtitle: "We are also the learner",
    description:
      "We also organize seminars on various interesting topics and approach the best scholars who will inspire us and enlighten us with their knowledge.",
    icon: <GraduationCap className="w-8 h-8" />,
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
    <div
      className="min-h-screen bg-black relative overflow-hidden"
      id="activities"
    >
      {/* Star Field Background */}
      {/* <StarField /> */}

      {/* Subtle Space Nebula Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-indigo-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <Header
          title="Regular Activities"
          subtitle="Exploring the cosmos through education, observation, and community
        engagement"
        />

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

export default Activities;
