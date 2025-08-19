"use client";
import React, { useState, useEffect } from "react";
import {
  Star,
  Rocket,
  Palette,
  PlaneTakeoff,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Presentation,
  Wallpaper,
} from "lucide-react";

interface ImageIndexState {
  astro: number;
  poster: number;
  art: number;
  plane: number;
}

interface StarProps {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
}

interface ImageSliderProps {
  section: keyof ImageIndexState;
  images: string[];
}

const CosmaniaPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<ImageIndexState>({
    astro: 0,
    poster: 0,
    art: 0,
    plane: 0,
  });

  // Mock images for different sections
  const sectionImages: Record<keyof ImageIndexState, string[]> = {
    astro: [
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&h=400&fit=crop",
    ],
    poster: [
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&h=400&fit=crop",
    ],
    art: [
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&h=400&fit=crop",
    ],
    plane: [
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&h=400&fit=crop",
    ],
  };

  const nextImage = (section: keyof ImageIndexState): void => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [section]: (prev[section] + 1) % sectionImages[section].length,
    }));
  };

  const prevImage = (section: keyof ImageIndexState): void => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [section]:
        prev[section] === 0
          ? sectionImages[section].length - 1
          : prev[section] - 1,
    }));
  };

  const ImageSlider: React.FC<ImageSliderProps> = ({ section, images }) => (
    <div className="relative group">
      <div className="overflow-hidden rounded-lg bg-black/40 backdrop-blur-sm border border-gray-800/50">
        <img
          src={images[currentImageIndex[section]]}
          alt={`${section} activity`}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105 opacity-90"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={() => prevImage(section)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-gray-300 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-gray-700/50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => nextImage(section)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-gray-300 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-gray-700/50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentImageIndex[section]
                    ? "bg-gray-400"
                    : "bg-gray-600/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );

  // Animated stars background
  const StarsBackground: React.FC = () => {
    const [stars, setStars] = useState<StarProps[]>([]);

    useEffect(() => {
      const generateStars = (): void => {
        const newStars: StarProps[] = [];
        for (let i = 0; i < 80; i++) {
          newStars.push({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 2 + 0.5,
            duration: Math.random() * 4 + 3,
          });
        }
        setStars(newStars);
      };
      generateStars();
    }, []);

    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-gray-400 rounded-full animate-pulse opacity-30"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>
    );
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

              {/* Subtitle with enhanced typography */}
              {/* <div className="mb-8">
                <p className="text-gray-300 font-light tracking-wide uppercase text-xs md:text-sm mb-2 opacity-70">
                  Symbol of
                </p>
                <p className="text-2xl md:text-3xl text-gray-200 font-light tracking-wide">
                  Astronomy Outreach Events
                </p>
              </div> */}

              {/* Enhanced description with better visual hierarchy */}
              <div className="max-w-3xl mx-auto relative">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  Our outreach program is conducted in schools and colleges
                  across the country to inspire students.
                </p>
              </div>

              {/* Floating elements for visual interest */}
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
                    <div className="text-center">
                      <Rocket className="w-14 h-14 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-400 font-light">YouTube Video</p>
                      <p className="text-sm text-gray-500 mt-2 font-light">
                        Water Rocket Launch Demo
                      </p>
                    </div>
                  </div>
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
    </div>
  );
};

export default CosmaniaPage;
