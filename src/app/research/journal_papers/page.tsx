"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import {
  Search,
  Download,
  Users,
  Calendar,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import SectionHeader from "../../../components/section-header";

interface JournalPaper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publishDate: string;
  category: string;
  downloadUrl?: string;
  citations: number;
  tags: string[];
  journal?: string;
  doi?: string;
  journalImage?: string;
}

const journalPapers: JournalPaper[] = [
  {
    id: "1",
    title:
     "Investigating the relation between the environment and internal structure of massive elliptical galaxies using strong lensing",
    authors: [
      "S M Rafee Adnan", 
      "Muhammad Jobair Hasan", 
      "Ahmad Al-Imtiaz", 
      "Sulyman H. Robin", 
      "Fahim R. Shwadhin", 
      "Anowar J. Shajib", 
      "Mamun Hossain Nahid", 
      "Mehedi Hasan Tanver", 
      "Tanjela Akter", 
      "Nusrath Jahan", 
      "Zareef Jafar", 
      "Mamunur Rashid", 
      "Anik Biswas", 
      "Akbar Ahmed Chowdhury", 
      "Jannatul Feardous", 
      "Ajmi Rahaman", 
      "Masuk Ridwan", 
      "Rahul D. Sharma", 
      "Zannat Chowdhury", 
      "Mir Sazzat Hossain"],
    abstract:
     "Strong lensing by massive galaxies probes their mass distribution, thus providing a window for studying their internal structure, i.e., the distributions of luminous and dark matter. In this paper, we investigate the relation between the internal structure of massive elliptical galaxies and their environment using a sample of 15 strong lensing systems. We performed lens modeling for them using LENSTRONOMY and constrained the mass and light distributions of the deflector galaxies. We adopted the local galaxy density as a metric for the environment and tested our results against several alternative definitions of it. We robustly find that the centroid offset between the mass and light is not correlated with the local galaxy density. This result supports using centroid offsets as a probe of dark-matter theories, since the environment’s impact on these offsets can be treated as negligible. Although we find a moderate to strong correlation between the position angle offset and the standard definition of the local galaxy density, consistent with previous studies, the correlation becomes weaker for alternative definitions of the local galaxy density. This result weakens the support for interpreting the position angle misalignment as having originated from interaction with the environment. Furthermore, we find that the “residual shear” magnitude in the lens model to be uncorrelated with the local galaxy density, supporting the interpretation of the residual shear originating, in part, from the inadequacy in modeling the angular structure of the lensing galaxy and not solely from the structures present in the environment or along the line of sight.",
    publishDate: "2025-07-16",
    category: "Extragalactic astronomy",
    downloadUrl: "https://cam-sust.org/files/papers/lensing.pdf",
    citations: 1,
    tags: [ 
      "gravitational lensing: strong / galaxies: elliptical and lenticular",
      "cD / galaxies: structure"
    ],
    journal: "Astronomy & Astrophysics (A&A)",
    doi: "10.1051/0004-6361/202453239",
    journalImage: "/images/papers/lensing.webp",
  },
];

const categories = [
  "All",
  "Extragalactic astronomy",
  "Exoplanets",
  "Cosmology",
  "Stellar Physics",
  "Galactic Astronomy",
  "Solar System",
  "Tools and Techniques",
];

const JournalPublications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  const filteredJournals = journalPapers.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.authors.some((author) =>
        author.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      paper.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedJournals = useMemo(() => {
    return [...filteredJournals].sort((a, b) => {
      switch (sortBy) {
        case "date":
          return (
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
          );
        case "citations":
          return b.citations - a.citations;
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  }, [filteredJournals, sortBy]);

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased" id="journal">
      <div className="relative z-10 pt-24">
        {/* Navigation Links */}
        <section className="px-6 mb-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-3 w-full">
              <Link
                href="/research/research_papers"
                className="w-full text-center px-5 py-3 rounded-lg bg-slate-700/60 border border-slate-500 text-slate-100 font-semibold hover:bg-slate-600/70 transition-colors"
              >
                Project Papers
              </Link>
              <Link
                href="/research/journal_papers"
                className="w-full text-center px-5 py-3 rounded-lg bg-slate-200 text-slate-900 font-semibold transition-colors"
              >
                Journal Papers
              </Link>
            </div>
          </div>
        </section>

        {/* Header */}
        <SectionHeader
          title="Publications"
          subtitle="Explore journal publications by CAM-SUST members"
        />


        {/* Search and Filters */}
        <section className="px-6 mb-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search journals, authors, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  />
                </div>

                <div className="flex gap-3 w-full lg:w-auto flex-wrap">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
                  >
                    <option value="date">Sort by Date</option>
                    <option value="citations">Sort by Citations</option>
                    <option value="title">Sort by Title</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Papers Grid */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6 text-gray-400">
              Found {sortedJournals.length} journals
            </div>

            <div className="space-y-6">
              {sortedJournals.map((paper) => (
                <div key={paper.id} className="group">
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-500/70 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-96 h-48 lg:h-auto relative overflow-hidden">
                        <img
                          src={paper.journalImage}
                          alt={`${paper.journal} cover`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/50 lg:bg-gradient-to-l lg:from-slate-900/80 lg:to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6">
                        <div className="flex flex-col">
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-3">
                              <h3 className="text-xl font-semibold text-white group-hover:text-slate-300 transition-colors leading-tight">
                                {paper.title}
                              </h3>
                            </div>

                            <div className="flex items-center gap-2 mb-3 flex-wrap">
                              <Users className="w-4 h-4 text-gray-400" />
                              <div className="flex flex-wrap gap-2">
                                {paper.authors.map((author, index) => (
                                  <span
                                    key={index}
                                    className="text-slate-300 italic hover:text-slate-200 cursor-pointer transition-colors"
                                  >
                                    {author}
                                    {index < paper.authors.length - 1 && (
                                      <span className="text-gray-400">,</span>
                                    )}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <h1>  
                              <span className="text-xl font-bold text-gray-200 mb-8">
                                Abstract:
                              </span>
                            </h1>
                            <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                              {paper.abstract}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(
                                  paper.publishDate
                                ).toLocaleDateString()}
                              </span>
                              <span className="bg-slate-600/40 text-slate-300 px-2 py-1 rounded">
                                {paper.category}
                              </span>
                              {paper.journal && (
                                <span className="flex items-center gap-1">
                                  <BookOpen className="w-4 h-4" />
                                  {paper.journal}
                                </span>
                              )}
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {paper.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded-md text-xs hover:bg-slate-600/50 transition-colors"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>


                          {/* Action Buttons */}
                          <div className="flex flex-row gap-3 pt-4 border-t border-slate-700/50">
                            <a
                              href={paper.downloadUrl}
                              download
                              className="flex items-center justify-center gap-2 bg-gradient-to-r bg-slate-700 to-slate-600 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-all duration-300 flex-1"
                            >
                              <Download className="w-4 h-4" />
                              <span>Download File</span>
                            </a>

                            {paper.doi && (
                              <a
                                href={`https://doi.org/${paper.doi}`}
                                target="_blank"
                                className="flex items-center justify-center gap-2 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 text-gray-300 px-4 py-3 rounded-lg transition-all duration-300 flex-1"
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>View DOI</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedJournals.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  No journals found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or filters
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default JournalPublications;

