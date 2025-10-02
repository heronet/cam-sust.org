"use client";
import React, { useState, useEffect } from "react";
import {
  Star,
  Rocket,
  Palette,
  PlaneTakeoff,
  Phone,
  Mail,
  Presentation,
  Wallpaper,
  MapPin,
  Calendar,
} from "lucide-react";
import StarsBackground from "@/components/stars-background";
import ImageSlider from "@/components/image-slider";
import { School, schools } from "./data";

// Declare global L for Leaflet
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    L: any | unknown;
  }
}

// Custom Map Component
const InteractiveMap: React.FC<{ schools: School[] }> = ({ schools }) => {
  const mapRef = React.useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Load Leaflet CSS and JS
    const loadLeaflet = async () => {
      // Load CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);

      // Load JS
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = () => {
        setMapLoaded(true);
      };
      document.head.appendChild(script);
    };

    loadLeaflet();
  }, []);

  useEffect(() => {
    if (!mapLoaded || !mapRef.current || !window.L) return;

    // Initialize map centered on Bangladesh
    const map = window.L.map(mapRef.current).setView([23.685, 90.3563], 7);

    // Add tile layer
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Custom icon for schools
    const schoolIcon = window.L.divIcon({
      html: `
        <div style="
          background-color: #DC2626; 
          border: 3px solid #FFFFFF; 
          border-radius: 50%; 
          width: 18px; 
          height: 18px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4);
          position: relative;
        ">
          <div style="
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 8px solid #DC2626;
          "></div>
        </div>
      `,
      className: "custom-school-marker",
      iconSize: [18, 26],
      iconAnchor: [9, 26],
    });

    // Add markers for each school
    schools.forEach((school) => {
      const marker = window.L.marker([school.latitude, school.longitude], {
        icon: schoolIcon,
      }).addTo(map);

      // Create popup content
      const popupContent = `
        <div style="color: #1F2937; font-family: system-ui;">
          <h3 style="font-size: 14px; font-weight: bold; margin: 0 0 8px 0; color: #111827;">${
            school.name
          }</h3>
          <p style="margin: 0 0 4px 0; font-size: 12px; color: #374151;"><strong>District:</strong> ${
            school.district
          }</p>
          <p style="margin: 0; font-size: 12px; color: #374151;"><strong>Years:</strong> ${school.years.join(
            ", "
          )}</p>
        </div>
      `;

      marker.bindPopup(popupContent);
    });

    // Cleanup function
    return () => {
      map.remove();
    };
  }, [mapLoaded, schools]);

  if (!mapLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-300 bg-black/40 rounded-lg border border-gray-800/50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-300 mx-auto mb-4"></div>
          <p className="text-sm">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      className="w-full h-full rounded-lg border border-gray-800/50"
      style={{ minHeight: "500px" }}
    />
  );
};

const CosmaniaPage = () => {
  const sectionImages = {
    astro: [
      "/images/activities/cosmania/astro1.webp",
      "/images/activities/cosmania/astro2.webp",
    ],
    poster: [
      "/images/activities/cosmania/poster1.webp",
      "/images/activities/cosmania/poster2.webp",
    ],
    art: [
      "/images/activities/cosmania/art.webp",
      "/images/activities/cosmania/vr.webp",
    ],
    plane: [
      "/images/activities/cosmania/plane1.webp",
      "/images/activities/cosmania/plane2.webp",
    ],
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 relative pt-24">
      <StarsBackground />

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-20">
          <div className="relative text-center mb-24">
            {/* Subtle glow effect behind title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gray-700/5 rounded-full blur-3xl"></div>
            </div>

            {/* Main title with letter spacing and subtle animation */}
            <div className="relative z-10">
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-gray-100 tracking-wider">
                <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">
                  C
                </span>
                <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-75">
                  O
                </span>
                <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-150">
                  S
                </span>
                <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-225">
                  M
                </span>
                <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-300">
                  A
                </span>
                <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-375">
                  N
                </span>
                <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-450">
                  I
                </span>
                <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-525">
                  A
                </span>
              </h1>

              {/* Subtle line separator */}
              <div className="flex items-center justify-center mb-8">
                <div className="h-px bg-gray-600 w-16"></div>
                <Star className="w-4 h-4 text-gray-500 mx-4 animate-pulse" />
                <div className="h-px bg-gray-600 w-16"></div>
              </div>

              <div className="max-w-3xl mx-auto relative">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  Our outreach program is conducted in schools and colleges
                  across the country to inspire students.
                </p>
              </div>

              {/* Floating elements */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-500 rounded-full animate-pulse opacity-30"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gray-400 rounded-full animate-pulse opacity-40 delay-1000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse opacity-20 delay-2000"></div>
            </div>
          </div>

          {/* What is Cosmania Section */}
          <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-10 mb-20 border border-gray-800/30">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
              <Rocket className="inline-block w-7 h-7 mr-3 text-gray-300" />
              What is Cosmania?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-5xl mx-auto font-light">
              Cosmania is one of CAM-SUST&apos;s most exciting outreach programs
              conducted regularly at schools and colleges across Bangladesh. The
              name &quot;Cosmania&quot; means &apos;Powerful Symbolism&apos;.
              And we use this program as a symbol of astronomy outreach events
              through Astro-Presentation, Q&A, Problem Solving, Art competition,
              Puzzle, Sudoku, VR App show, Paper Plane competition, and the most
              interesting Water Rocket exhibition with an explanation.
            </p>
          </div>

          {/* Activities Sections */}
          <div className="space-y-20">
            {/* Astro-Presentation */}
            <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8 flex items-center text-gray-100">
                  <Presentation className="w-7 h-7 mr-3 text-gray-300" />
                  Astro-Presentation
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  The philosophy behind Astro-Presentation is to introduce up to
                  date astronomy concepts to school-college level students. Our
                  focus will be on understandable astronomy topics for
                  junior-level like Planets, Exoplanets, Solar system, Galaxy,
                  astronomy observation technique, and a lot more interesting
                  topics. Q&A is the extended part of this segment where
                  students can ask their own questions or share their
                  imaginative universe with us.
                </p>
              </div>
              <ImageSlider section="astro" images={sectionImages.astro} />
            </div>

            {/* Poster Presentation */}
            <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="lg:order-2">
                <h3 className="text-3xl font-bold mb-8 flex items-center text-gray-100">
                  <Wallpaper className="w-7 h-7 mr-3 text-gray-300" />
                  Poster Presentation
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  We hold Problem Solving sessions & Poster Presentations based
                  on the presentation topics. We design this segment in such a
                  way that students can interact with each other. Mainly in our
                  education system, it is rare to see senior-junior interaction
                  in the school-college level or we can say there is no merit
                  exchange among senior-junior. So we set problems for this
                  session where students will solve those problems in a group of
                  three students from three different classes (mainly secondary
                  and higher secondary). The problem will make them think as
                  they have never done before. Then they present a poster
                  explaining their solution to that problem. And obviously, we
                  don&apos;t judge their answer, we judge their approach to a
                  problem.
                </p>
              </div>
              <div className="lg:order-1">
                <ImageSlider section="poster" images={sectionImages.poster} />
              </div>
            </div>

            {/* Art Competition & VR Show */}
            <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8 flex items-center text-gray-100">
                  <Palette className="w-7 h-7 mr-3 text-gray-300" />
                  Art Competition, VR Show
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  We arrange Art Competition, Puzzle or Sudoku Competition based
                  on the students&apos; age. And we show the Lunar VR app by
                  Team Olik (Nasa Space App Challenge Global Winner 2018).
                  Through the Lunar VR app we simulate the experience of walking
                  on the &apos;s surface. Also, we make students familiar with
                  the landing site of Apollo 11. They can also experience the
                  Solar Eclipse on the moon and see the Lunar Reconnaissance
                  Orbiter (LRO).
                </p>
              </div>
              <ImageSlider section="art" images={sectionImages.art} />
            </div>

            {/* Paper Plane Competition */}
            <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="lg:order-2">
                <h3 className="text-3xl font-bold mb-8 flex items-center text-gray-100">
                  <PlaneTakeoff className="w-7 h-7 mr-3 text-gray-300" />
                  Paper Plane Competition
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  To make science even more exciting, we arrange Paper Plane
                  competitions among the students. Prior to the competition, we
                  brief about basic principles of aerodynamics like how a plane
                  glides and demonstrate how to make a paper plane. After that,
                  students make their own and compete with that. So far, our
                  longest recorded glide is{" "}
                  <span className="text-gray-100 font-medium">78.4 feet</span>.
                </p>
              </div>
              <div className="lg:order-1">
                <ImageSlider section="plane" images={sectionImages.plane} />
              </div>
            </div>

            {/* Water Rocket Launch */}
            <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-10 border border-gray-800/30">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-8 flex items-center text-gray-100">
                    <Rocket className="w-7 h-7 mr-3 text-gray-300" />
                    Water Rocket Launch
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed font-light">
                    This is the most fun and engaging part of Cosmania. We have
                    a couple of Water Rockets made with water bottles, paper and
                    duck tape. We also made water rocket launchers with our own
                    design. We use these for water rocket shows. Before that, we
                    describe how a real rocket launches to the sky. Then we set
                    everything up, and the students count down from 5 to 1. When
                    it reaches zero, we pull the string and the rocket launches
                    and with that students cheering is phenomenal.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-black/40 rounded-lg flex items-center justify-center border border-gray-800/50">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/rp7vnDb8TS4"
                      title="Water Rocket Launching | Cosmania, Tarapur Primary School, Sylhet | CAM-SUST"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Locations Section */}
          <div className="mt-24">
            <h2 className="text-4xl font-bold mb-10 text-center text-gray-100">
              <MapPin className="inline-block w-8 h-8 mr-3 text-gray-300" />
              Our Journey Across Bangladesh
            </h2>
            <p className="text-lg text-gray-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed font-light">
              Over the years, Cosmania has reached {schools.length} educational
              institutions across Bangladesh, inspiring thousands of students
              with the wonders of astronomy and science.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Interactive Map */}
              <div className="lg:col-span-2">
                <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-6 border border-gray-800/30 h-[600px]">
                  <div className="h-full">
                    <InteractiveMap schools={schools} />
                  </div>
                </div>
              </div>

              {/* Schools List */}
              <div className="lg:col-span-1">
                <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-6 border border-gray-800/30 h-[600px] flex flex-col">
                  <h3 className="text-2xl font-bold mb-6 text-gray-100">
                    Schools & Colleges
                  </h3>
                  <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600">
                    {schools.map((school) => (
                      <div
                        key={school.id}
                        className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:bg-gray-800/50 transition-colors duration-200 cursor-pointer"
                      >
                        <h4 className="font-semibold text-gray-100 text-sm mb-2">
                          {school.name}
                        </h4>
                        <div className="flex items-center text-gray-400 text-xs mb-1">
                          <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                          <span>{school.district}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-xs">
                          <Calendar className="w-3 h-3 mr-1 flex-shrink-0" />
                          <span>{school.years.join(", ")}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-800/30">
                <div className="text-3xl font-bold text-gray-100 mb-2">
                  {schools.length}
                </div>
                <div className="text-gray-300 font-medium">
                  Schools & Colleges
                </div>
              </div>
              <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-800/30">
                <div className="text-3xl font-bold text-gray-100 mb-2">
                  {Array.from(new Set(schools.map((s) => s.district))).length}
                </div>
                <div className="text-gray-300 font-medium">
                  Districts Covered
                </div>
              </div>
              <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-800/30">
                <div className="text-3xl font-bold text-gray-100 mb-2">12+</div>
                <div className="text-gray-300 font-medium">
                  Years of Outreach
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-24 bg-gray-900/20 backdrop-blur-sm rounded-lg p-12 text-center border border-gray-800/30">
            <h2 className="text-4xl font-bold mb-10 text-gray-100">
              Want us at your premises?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              Hey! Are you interested in having us at your schools or colleges?
              If so, help us get in touch with your class teacher or school
              authorities. Once connected, we&apos;ll take it from there! We
              would love to bring this Cosmania experience to your institution.
              We hope to see you soon!
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
              <a
                href="tel:+8801842267878"
                className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg transition-colors duration-300 border border-gray-700/50"
              >
                <Phone className="w-5 h-5 text-gray-300" />
                <span className="font-medium text-gray-200">
                  +8801842267878
                </span>
              </a>
              <a
                href="mailto:fieldeducation.camsust@gmail.com"
                className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg transition-colors duration-300 border border-gray-700/50"
              >
                <Mail className="w-5 h-5 text-gray-300" />
                <span className="font-medium text-gray-200">
                  fieldeducation.camsust@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-track-gray-800::-webkit-scrollbar-track {
          background-color: rgba(31, 41, 55, 0.5);
          border-radius: 0.375rem;
        }
        .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb {
          background-color: rgba(75, 85, 99, 0.8);
          border-radius: 0.375rem;
        }
        .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb:hover {
          background-color: rgba(107, 114, 128, 1);
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
      `}</style>
    </div>
  );
};

export default CosmaniaPage;
