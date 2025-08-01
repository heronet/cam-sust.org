"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  Calendar,
  Users,
  Globe,
  Library,
  Newspaper,
  Wrench,
  Sun,
  Snowflake,
  Search,
  FileSearch,
  Speech,
  Star,
  Mic,
} from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/section-header";

interface Activity {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  category: "education" | "outreach" | "development" | "research";
  frequency: string;
  duration: string;
  participants: string;
}

const activities: Activity[] = [
  {
    id: "study-circle",
    title: "STUDY CIRCLE",
    subtitle: "Share knowledge, Increase knowledge",
    description:
      "Our regular program where members discuss various astronomy related topics and share knowledge.",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-blue-400 to-cyan-300",
    image: "/images/studycircle.webp",
    category: "education",
    frequency: "Bi-weekly",
    duration: "1-1.5 hour",
    participants: "25-40 members",
  },
  {
    id: "cosmania",
    title: "COSMANIA",
    subtitle: "Spread what you know",
    description:
      "Our outreach program is conducted in schools and colleges across the country to inspire students.",
    icon: <Users className="w-8 h-8" />,
    color: "from-green-400 to-emerald-300",
    image: "/images/cosmania.webp",
    category: "outreach",
    frequency: "Several a year",
    duration: "Half day",
    participants: "50-200 students",
  },
  {
    id: "astro-carnival",
    title: "ASTRO CARNIVAL",
    subtitle: "Learning in a festive way",
    description:
      "Annual festival for school, college and university students featuring competitions and interactive activities.",
    icon: <Calendar className="w-8 h-8" />,
    color: "from-orange-400 to-yellow-300",
    image: "/images/astrocarnival.webp",
    category: "outreach",
    frequency: "Annual",
    duration: "2 days",
    participants: "500-800 students",
  },
  {
    id: "stargazing",
    title: "STARGAZING",
    subtitle: "Catch a glimpse of the stars",
    description:
      "Telescope and naked-eye observations of stars, planets, galaxies, and nebulae under the night sky.",
    icon: <Star className="w-8 h-8" />,
    color: "from-indigo-400 to-blue-300",
    image: "/images/stargazing.webp",
    category: "outreach",
    frequency: "Several a year",
    duration: "2-3 hours",
    participants: "30-50 observers",
  },
  {
    id: "cam-talk",
    title: "CAM-TALK",
    subtitle: "Conversations that inspire",
    description:
      "Talks by experts on astronomy and research where they share and discuss their expertise and works.",
    icon: <Mic className="w-8 h-8" />,
    color: "from-purple-400 to-pink-300",
    image: "/images/camtalk.webp",
    category: "education",
    frequency: "Several a year",
    duration: "1-1.5 hours",
    participants: "40-60 attendees",
  },
  {
    id: "journal-club",
    title: "JOURNAL CLUB",
    subtitle: "Where research meets curiosity",
    description:
      "Regular Journal Talks to discuss and analyze recent astronomical research papers and publications.",
    icon: <Newspaper className="w-8 h-8" />,
    color: "from-rose-400 to-pink-300",
    image: "/images/journalclub.webp",
    category: "research",
    frequency: "Monthly",
    duration: "2 hours",
    participants: "20-30 members",
  },
  {
    id: "seminar",
    title: "SEMINAR",
    subtitle: "We are also the learner",
    description:
      "Academic seminars on various astronomical topics featuring professors, researchers and scholars.",
    icon: <Speech className="w-8 h-8" />,
    color: "from-violet-400 to-purple-300",
    image: "/images/seminar.webp",
    category: "education",
    frequency: "Bi-Annual",
    duration: "2-3 hours",
    participants: "50-80 attendees",
  },
  {
    id: "workshop",
    title: "WORKSHOP",
    subtitle: "Hands-on learning experience",
    description:
      "Practical workshops on asteroid hunting, observational & computational astronomy and astrophysics.",
    icon: <Wrench className="w-8 h-8" />,
    color: "from-cyan-400 to-blue-300",
    image: "/images/workshop.webp",
    category: "education",
    frequency: "Bi-Annual",
    duration: "4-6 hours",
    participants: "30-40 participants",
  },
  {
    id: "world-space-week",
    title: "WORLD SPACE WEEK",
    subtitle: "Celebrate with the world",
    description:
      "From 4 th to 10 th October we celebrate “World Space Week” with the whole world through many events.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-teal-400 to-cyan-300",
    image: "/images/spaceweek.webp",
    category: "outreach",
    frequency: "Annual",
    duration: "One week",
    participants: "100+ participants",
  },

  {
    id: "library",
    title: "LIBRARY",
    subtitle: "Read, Read & Read",
    description:
      "Read from our collection of astronomy books, magazines and  journals for research and learning.",
    icon: <Library className="w-8 h-8" />,
    color: "from-amber-400 to-orange-300",
    image: "/images/library.webp",
    category: "education",
    frequency: "Always available",
    duration: "Flexible",
    participants: "Individual access",
  },
  {
    id: "research-project",
    title: "RESEARCH & PROJECT",
    subtitle: "Explore, Analyze, Contribute",
    description:
      "Our latest initiative for beginners to advance research projects on various astronomical topics.",
    icon: <FileSearch className="w-8 h-8" />,
    color: "from-emerald-400 to-teal-300",
    image: "/images/research.webp",
    category: "research",
    frequency: "Ongoing",
    duration: "As needed",
    participants: "5-15 researchers",
  },
  {
    id: "summer-winter-school",
    title: "SUMMER/WINTER SCHOOL",
    subtitle: "Learn at academic break",
    description:
      "Week-long lectures and hands-on sessions by experts focusing on astronomy and astrophysics.",
    icon: (
      <div className="flex">
        <Sun className="w-4 h-4" />
        <Snowflake className="w-4 h-4" />
      </div>
    ),
    color: "from-yellow-400 to-red-300",
    image: "/images/school.webp",
    category: "education",
    frequency: "Annual",
    duration: "1-2 weeks",
    participants: "30-40 students",
  },
];

const categories = [
  { id: "all", name: "All", color: "from-gray-400 to-gray-300" },
  {
    id: "education",
    name: "Education",
    color: "from-blue-400 to-cyan-300",
  },
  {
    id: "outreach",
    name: "Outreach",
    color: "from-green-400 to-emerald-300",
  },
  { id: "research", name: "Research", color: "from-orange-400 to-red-300" },
  {
    id: "development",
    name: "Development",
    color: "from-indigo-400 to-indigo-300",
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
      className="group relative overflow-hidden rounded-2xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:border-gray-500/80 transition-all duration-500 hover:scale-[1.02]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-opacity duration-500">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Content */}
      <Link
        className="relative p-6 h-full flex flex-col"
        href={`/activities/${activity.id}`}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${activity.color} text-black group-hover:scale-110 transition-transform duration-300 shrink-0`}
          >
            {activity.icon}
          </div>
          <div className="flex flex-col items-end gap-1 text-xs text-gray-400 ml-4">
            <span
              className={`px-2 py-1 rounded-full bg-gradient-to-r ${activity.color} text-black font-medium`}
            >
              {activity.category}
            </span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
        <p
          className={`text-sm font-medium bg-gradient-to-r ${activity.color} bg-clip-text text-transparent mb-3`}
        >
          {activity.subtitle}
        </p>

        {/* Quick Info */}
        <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-gray-400">
          <div>
            <span className="block text-gray-500">Frequency</span>
            <span className="text-white">{activity.frequency}</span>
          </div>
          <div>
            <span className="block text-gray-500">Duration</span>
            <span className="text-white">{activity.duration}</span>
          </div>
          <div>
            <span className="block text-gray-500">Participants</span>
            <span className="text-white">{activity.participants}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
          {activity.description}
        </p>

        {/* Bottom Accent Line */}
        <div
          className={`mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${activity.color} transition-all duration-500 rounded-full`}
        />
      </Link>

      {/* Corner Glow */}
      <div
        className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-all duration-500`}
      />
    </motion.div>
  );
};

const Activities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredActivities = activities.filter((activity) => {
    const matchesCategory =
      selectedCategory === "all" || activity.category === selectedCategory;
    const matchesSearch =
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative pt-16 overflow-hidden">
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <SectionHeader
          title="Our Activities"
          subtitle="Our core mission is to learn and share astronomy through everything we do. Below are some of our common activities. Click on any card to explore them in detail"
        />

        {/* Search and Filter Controls */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search activities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 transition-colors duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-black`
                    : "bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Activities Count */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm">
            Showing {filteredActivities.length} of {activities.length}{" "}
            activities
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredActivities.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-lg mb-4">
              No activities found
            </div>
            <p className="text-gray-500 text-sm">
              Try adjusting your search terms or category filter
            </p>
          </div>
        )}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

export default Activities;
