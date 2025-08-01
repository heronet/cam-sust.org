"use client";

import React, { useMemo, useState } from "react";
import {
  Search,
  Download,
  Users,
  Calendar,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import Header from "../common/header";

interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publishDate: string;
  category: string;
  downloadUrl: string;
  citations: number;
  tags: string[];
  journal?: string;
  doi?: string;
  journalImage?: string;
}

const samplePapers: ResearchPaper[] = [
  {
    id: "1",
    title:
      "Exploring Evolutionary Track of Individual Stars with Aperture Photometry",
    authors: ["Nusrath Jahan", "Abantika Maytra Oishee", "Dibbendu Barua"],
    abstract:
      "This project aims to understand different stages of star evolution by constructing a model Hertzsprung-Russell Diagram. In this study, twelve target stars were particularly selected and their data were collected from the publicly available database of SDSS and we used aperture photometry for our analysis. Our results showed that most of these stars are in the main sequence phase; therefore, they are very important in the star life cycle. We also considered the effectiveness of simple aperture photometry for this kind of analysis. Since our project had to be as simple and accessible as possible, we chose methods that are easy to understand and deliberately avoided complex analyses.",
    publishDate: "2024-10-8",
    category: "Exoplanets",
    downloadUrl: "https://cam-sust.org/files/papers/exploring.pdf",
    citations: 47,
    tags: [
      "Absolute Magnitude",
      "Color Index",
      "Aperture Photometry",
      "H-R Diagram",
      "Stellar Evolution",
    ],
    journalImage: "/images/papers/exploring.webp",
  },
  {
    id: "2",
    title:
      "Image Processing and Analysis of Multiple Wavelength Astronomical Data Using Python Tools",
    authors: [
      "Tanmoy Bhowmik",
      "MD Fardin Islam",
      "Kazi Nusrat Tasneem",
      "Rantideb Roy",
      "Rownok",
      "Shahariar ",
    ],
    abstract:
      "We developed a Python based framework for astronomical image processing and analysis. Astronomical image loading, normalizing, stacking, and filtering processes represent visible range images from grayscale. Besides, the blending process helps to analyze the image of multiple wavelengths in the visible range. The methods take advantage of include median filtering for noise reduction, unsharp masking for sharpening details, and intensity normalization techniques. The detailed analysis of pixel intensity distributions and applying Gaussian fitting to variations across different wavelength bands. These methods highlight Python as a valuable tool for astronomers.",
    publishDate: "2024-10-9",
    category: "Tools and Techniques",
    downloadUrl: "https://cam-sust.org/files/papers/image.pdf",
    citations: 47,
    tags: ["Normalization", "FITS", "Noise Reduction", "Composite", "Blending"],
    doi: "10.48550/arXiv.2410.06573",
    journalImage: "/images/papers/image-processing.webp",
  },
  {
    id: "3",
    title:
      "Correlation Study of Distances Calculated Using Absorption Line Identification and Cosmological Parameters from Plank Data Release",
    authors: [
      "K M Shariat Ullah",
      "Md. Iftakhar Hossain Simanto",
      "Nafis Shyan",
      "Bayozid Hossen",
    ],
    abstract:
      "The vast distance between objects in the universe can be directly calculated by observing it's spectra. The red-shift of the object due to the Hubble flow helps to find the relativistic distance (DS ) of the object. The cosmological parameters ΩM , Ωk and ΩΛ could be used to calculate the co-moving distance (DC ), the angular distance (DA) and the luminosity distance (DL). The focus of this report was to take spectra of four galaxies and calculate the relativistic distance by identifying the location of the Hα and Hβ lines. DC , DA and DL were calculated with cosmological parameters with ΩΛ = 0.6847 ±0.0073,ΩM = 0.3153 ± 0.0073,Ωk = 0.001 ±0.002 and the Hubble constant H0 = 72 (km/s)/MPc",
    publishDate: "2024-10-9",
    category: "Galactic Astronomy",
    downloadUrl: "https://cam-sust.org/files/papers/correlation.pdf",
    citations: 47,
    tags: [
      "Redshift",
      "Cosmological Parameter",
      "Comoving Distance",
      "Hubble Distance",
    ],
    journalImage: "/images/papers/correlation-study.webp",
  },
  {
    id: "4",
    title:
      "Mass of the Central Black Hole of Active Galactic Nuclei: Reverberation Mapping",
    authors: [
      "Ahmad Al - Imtiaz",
      "K.M Shariat Ullah",
      "Nusrath Jahan",
      "Rahul Dev Sharma",
      "Sakibul Islam Rayhan",
    ],
    abstract:
      "Information about Active Galactic Nuclei (AGN's) mass can help to know more about the host galaxy's evolution. Using reverberation mapping, we can determine the 'primary' mass of the AGN. Here primary mass refers to the mass determined by motion of the nearby gas. In this study we retrieved spectral data of five Active Galactic Nuclei (AGN) to get these data. We fit two 2D Gaussian curves for a narrow line and a broad line region of the AGN spectra to determine the mass.",
    publishDate: "2024-10-9",
    category: "Stellar Physics",
    downloadUrl: "https://cam-sust.org/files/papers/agnreport.pdf",
    citations: 47,
    tags: [
      "Active Galactic Nuclei",
      "Reverberation Mapping",
      "Black Hole Mass",
      "Spectroscopy",
    ],
    doi: "10.13140/RG.2.2.14243.22567",
    journalImage: "/images/papers/agnreport.webp",
  },
];

const categories = [
  "All",
  "Exoplanets",
  "Cosmology",
  "Stellar Physics",
  "Galactic Astronomy",
  "Solar System",
  "Tools and Techniques",
];

const ResearchPapers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  const filteredPapers = samplePapers.filter((paper) => {
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

  const sortedPapers = useMemo(() => {
    return [...filteredPapers].sort((a, b) => {
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
  }, [filteredPapers, sortBy]);

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased" id="research">
      <div className="relative z-10 pt-16">
        {/* Header */}
        <Header
          title="Research Papers"
          subtitle="Discover our amateur to advance astronomical research projects from our club members"
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
                    placeholder="Search papers, authors, or keywords..."
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
              Found {sortedPapers.length} papers
            </div>

            <div className="space-y-6">
              {sortedPapers.map((paper) => (
                <div key={paper.id} className="group">
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-500/70 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row">
                      {/* Journal Image */}
                      <div className="lg:w-96 h-48 lg:h-auto relative overflow-hidden">
                        <img
                          src={paper.journalImage}
                          alt={`${paper.journal} cover`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/50 lg:bg-gradient-to-l lg:from-slate-900/80 lg:to-transparent"></div>

                        {/* Citation badge on image */}
                        {/* <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-white">
                            {paper.citations} 
                          </span>
                        </div> */}
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
                              className="flex items-center justify-center gap-2 bg-gradient-to-r bg-slate-700 to-slate-600 hover:bg-slate-600  text-white px-4 py-3 rounded-lg transition-all duration-300 flex-1"
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

            {sortedPapers.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  No papers found
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

export default ResearchPapers;
