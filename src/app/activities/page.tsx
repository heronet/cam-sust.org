"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  Calendar,
  Users,
  Eye,
  Globe,
  GraduationCap,
  MessageCircle,
  Library,
  Newspaper,
  Wrench,
  FlaskConical,
  Sun,
  Snowflake,
  Search,
} from "lucide-react";
import Link from "next/link";

interface Activity {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  category: "educational" | "observational" | "community" | "research";
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
      "Interactive learning sessions where members discuss astronomical topics and share knowledge.",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-blue-400 to-cyan-300",
    image: "/images/studycircle.webp",
    category: "educational",
    frequency: "Monthly",
    duration: "1 hour",
    participants: "15-25 members",
  },
  {
    id: "cosmania",
    title: "COSMANIA",
    subtitle: "Spread what you know",
    description:
      "Educational outreach programs conducted in schools across the country to inspire young minds.",
    icon: <Users className="w-8 h-8" />,
    color: "from-green-400 to-emerald-300",
    image: "/images/cosmania.webp",
    category: "community",
    frequency: "Annual",
    duration: "Half day",
    participants: "50-200 students",
  },
  {
    id: "cam-talk",
    title: "CAM-TALK",
    subtitle: "Conversations that inspire",
    description:
      "Regular discussion sessions and talks by experts on cutting-edge astronomical research and discoveries.",
    icon: <MessageCircle className="w-8 h-8" />,
    color: "from-purple-400 to-pink-300",
    image: "/images/camtalk.webp",
    category: "educational",
    frequency: "Bi-weekly",
    duration: "1.5-2 hours",
    participants: "30-50 attendees",
  },
  {
    id: "stargazing",
    title: "STARGAZING",
    subtitle: "Catch a glimpse of the stars",
    description:
      "Telescope and naked-eye observations of celestial objects under the night sky.",
    icon: <Eye className="w-8 h-8" />,
    color: "from-indigo-400 to-blue-300",
    image: "/images/stargazing.webp",
    category: "observational",
    frequency: "Weekly",
    duration: "1-2 hours",
    participants: "10-30 observers",
  },
  {
    id: "world-space-week",
    title: "WORLD SPACE WEEK",
    subtitle: "Exploring the universe together",
    description:
      "Annual celebration of space achievements with documentaries, seminars, and film screenings.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-teal-400 to-cyan-300",
    image: "/images/spaceweek.webp",
    category: "community",
    frequency: "Annual",
    duration: "One week",
    participants: "100+ participants",
  },
  {
    id: "astro-carnival",
    title: "ASTRO CARNIVAL",
    subtitle: "Learning in a festive way",
    description:
      "Annual festival for high school and college students featuring interactive astronomy activities.",
    icon: <Calendar className="w-8 h-8" />,
    color: "from-orange-400 to-yellow-300",
    image: "/images/astrocarnival.webp",
    category: "community",
    frequency: "Annual",
    duration: "Two days",
    participants: "200-500 students",
  },
  {
    id: "seminar",
    title: "SEMINAR",
    subtitle: "We are also the learner",
    description:
      "Academic seminars featuring distinguished scholars and researchers in astronomy and related fields.",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "from-violet-400 to-purple-300",
    image: "/images/seminar.webp",
    category: "educational",
    frequency: "Monthly",
    duration: "2-3 hours",
    participants: "40-80 attendees",
  },
  {
    id: "library",
    title: "LIBRARY",
    subtitle: "Gateway to cosmic knowledge",
    description:
      "Comprehensive collection of astronomy books, journals, and digital resources for research and learning.",
    icon: <Library className="w-8 h-8" />,
    color: "from-amber-400 to-orange-300",
    image: "/images/library.webp",
    category: "educational",
    frequency: "Always available",
    duration: "Flexible",
    participants: "Individual access",
  },
  {
    id: "journal-club",
    title: "JOURNAL CLUB",
    subtitle: "Exploring cutting-edge research",
    description:
      "Regular meetings to discuss and analyze recent astronomical research papers and publications.",
    icon: <Newspaper className="w-8 h-8" />,
    color: "from-rose-400 to-pink-300",
    image: "/images/journalclub.webp",
    category: "research",
    frequency: "Bi-weekly",
    duration: "2 hours",
    participants: "12-20 members",
  },
  {
    id: "workshop",
    title: "WORKSHOP",
    subtitle: "Hands-on learning experience",
    description:
      "Practical workshops on telescope making, astrophotography, data analysis, and observational techniques.",
    icon: <Wrench className="w-8 h-8" />,
    color: "from-cyan-400 to-blue-300",
    image: "/images/workshop.webp",
    category: "educational",
    frequency: "Monthly",
    duration: "4-6 hours",
    participants: "15-25 participants",
  },
  {
    id: "research-project",
    title: "RESEARCH & PROJECT",
    subtitle: "Contributing to astronomical knowledge",
    description:
      "Independent and collaborative research projects on various astronomical phenomena and observations.",
    icon: <FlaskConical className="w-8 h-8" />,
    color: "from-emerald-400 to-teal-300",
    image: "/images/research.webp",
    category: "research",
    frequency: "Ongoing",
    duration: "3-12 months",
    participants: "5-15 researchers",
  },
  {
    id: "summer-winter-school",
    title: "SUMMER/WINTER SCHOOL",
    subtitle: "Intensive learning programs",
    description:
      "Seasonal intensive courses and camps focusing on specific astronomical topics and skills.",
    icon: (
      <div className="flex">
        <Sun className="w-4 h-4" />
        <Snowflake className="w-4 h-4" />
      </div>
    ),
    color: "from-yellow-400 to-red-300",
    image: "/images/school.webp",
    category: "educational",
    frequency: "Bi-annual",
    duration: "5-10 days",
    participants: "20-40 students",
  },
];

const categories = [
  { id: "all", name: "All Activities", color: "from-gray-400 to-gray-300" },
  {
    id: "educational",
    name: "Educational",
    color: "from-blue-400 to-cyan-300",
  },
  {
    id: "observational",
    name: "Observational",
    color: "from-indigo-400 to-purple-300",
  },
  {
    id: "community",
    name: "Community",
    color: "from-green-400 to-emerald-300",
  },
  { id: "research", name: "Research", color: "from-orange-400 to-red-300" },
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
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        {/* <Header
          title="All Activities"
          subtitle="Comprehensive programs designed to explore, learn, and contribute to astronomical knowledge"
        /> */}

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
