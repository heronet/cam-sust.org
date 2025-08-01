import React from "react";
import { Download, Users, Star, BookOpen, Eye } from "lucide-react";
import Header from "../../../components/header";

const Magazine = () => {
  const magazine = {
    title: "Novokheya",
    subtitle: "নভোখেয়া - A CAM-SUST Magazine",
    issue: "Inaugural Issue",
    date: "2025",
    description:
      "The astronomy magazine ‘নভোখেয়া’ is published by Copernicus Astronomical Memorial of SUST, an Astronomy Research and Outreach Organization of Shahjalal University of Science and Technology. This is the first issue of the magazine. It is available for anyone to download from here.",
    coverImage: "/images/magazine/novokheya-cover.webp",
    pdfUrl: "https://cam-sust.org/files/magazine/Novokheya.pdf",
    pages: 51,
    downloads: "500+",
    authors: 6,
    articles: 13,
  };

  return (
    <div
      className="min-h-screen bg-black/[0.96] antialiased relative overflow-hidden pt-16"
      id="magazine"
    >
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <Header
          title="Our Magazine"
          subtitle="Introducing our inaugural digital publication - a cosmic journey
            through Bengali skies"
        />

        {/* Featured Magazine Showcase */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Special Showcase Container */}
          <div className="relative">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-slate-600 rounded-3xl blur-sm opacity-75 animate-pulse" />

            <div className="relative bg-black border border-gray-800 rounded-3xl overflow-hidden">
              {/* Top Banner */}
              <div className="bg-gradient-to-r from-slate-900/50 to-blue-900/50 backdrop-blur-sm p-4 text-center border-b border-gray-800">
                <div className="inline-flex items-center gap-2 text-yellow-300">
                  <Star className="w-5 h-5 animate-spin" />
                  <span className="font-bold text-lg">INAUGURAL ISSUE</span>
                  <Star className="w-5 h-5 animate-spin" />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 min-h-[600px]">
                {/* Magazine Cover */}
                <div className="relative group">
                  <div className="absolute inset-4 bg-gradient-to-br from-blue-500/20 to-slate-500/20 rounded-2xl" />
                  <div className="relative h-full p-8 flex items-center justify-center">
                    <div className="relative">
                      {/* Floating Animation */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />

                      <img
                        src={magazine.coverImage}
                        alt={magazine.title}
                        className="relative  object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700 border-2 border-blue-500/30"
                      />

                      {/* Floating Elements */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                        NEW
                      </div>
                    </div>
                  </div>
                </div>

                {/* Magazine Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  <div>
                    <h2 className="text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
                      {magazine.title}
                    </h2>
                    <p className="text-2xl text-cyan-300 mb-2 font-light">
                      {magazine.subtitle}
                    </p>
                    <div className="flex items-center gap-4 text-gray-400">
                      <span className="bg-blue-900/50 px-3 py-1 rounded-full text-sm">
                        {magazine.issue}
                      </span>
                      <span>{magazine.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {magazine.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-8 h-8 text-blue-400" />
                        <div>
                          <div className="text-2xl font-bold text-white">
                            {magazine.pages}
                          </div>
                          <div className="text-sm text-gray-400">Pages</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                      <div className="flex items-center gap-3">
                        <Users className="w-8 h-8 text-cyan-400" />
                        <div>
                          <div className="text-2xl font-bold text-white">
                            {magazine.authors}
                          </div>
                          <div className="text-sm text-gray-400">Authors</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                      <div className="flex items-center gap-3">
                        <Download className="w-8 h-8 text-green-400" />
                        <div>
                          <div className="text-2xl font-bold text-white">
                            {magazine.downloads}
                          </div>
                          <div className="text-sm text-gray-400">Downloads</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                      <div className="flex items-center gap-3">
                        <Star className="w-8 h-8 text-yellow-400" />
                        <div>
                          <div className="text-2xl font-bold text-white">
                            {magazine.articles}
                          </div>
                          <div className="text-sm text-gray-400">Articles</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <a
                      href={magazine.pdfUrl}
                      download
                      className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative flex items-center gap-3">
                        <Download className="w-6 h-6 group-hover:animate-bounce" />
                        Download Novokheya
                      </div>
                    </a>

                    <a
                      href={magazine.pdfUrl}
                      className="flex items-center gap-3 bg-gray-900/70 backdrop-blur-sm border border-gray-600 text-white px-6 py-4 rounded-xl font-medium hover:bg-gray-800/70 hover:border-gray-500 transition-all duration-300"
                    >
                      <Eye className="w-5 h-5" />
                      Preview Online
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
