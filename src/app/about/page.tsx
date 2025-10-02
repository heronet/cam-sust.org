import {
  Star,
  Users,
  Megaphone,
  FlaskConical,
  Lightbulb,
  GraduationCap,
} from "lucide-react";
import ImageSlider from "@/components/image-slider";
import StarsBackground from "@/components/stars-background";

const AboutPage = () => {
  const sectionImages = {
    education: [
      "/images/about/education1.webp",
      "/images/about/education2.webp",
    ],
    outreach: ["/images/about/outreach1.webp", "/images/about/outreach2.webp"],
    research: ["/images/about/research1.webp", "/images/about/research2.webp"],
    development: [
      "/images/about/development1.webp",
      "/images/about/development2.webp",
    ],
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 relative pt-24">
      <StarsBackground />

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-20">
          <div className="relative text-center mb-24">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gray-700/5 rounded-full blur-3xl"></div>
            </div>

            {/* Main title */}
            <div className="relative z-10">
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-gray-100 tracking-wider">
                <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">
                  A
                </span>
                <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-75">
                  B
                </span>
                <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-150">
                  O
                </span>
                <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-225">
                  U
                </span>
                <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-300">
                  T
                </span>
                <span className="inline-block mx-4"></span>
                <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-375">
                  U
                </span>
                <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-450">
                  S
                </span>
              </h1>

              {/* Subtle line separator */}
              <div className="flex items-center justify-center mb-8">
                <div className="h-px bg-gray-600 w-16"></div>
                <Star className="w-4 h-4 text-gray-500 mx-4 animate-pulse" />
                <div className="h-px bg-gray-600 w-16"></div>
              </div>

              <div className="max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  Promoting and encouraging interest in astronomy, astrophysics,
                  and cosmology throughout Bangladesh.
                </p>
              </div>

              {/* Floating elements */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-500 rounded-full animate-pulse opacity-30"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gray-400 rounded-full animate-pulse opacity-40 delay-1000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse opacity-20 delay-2000"></div>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-10 mb-20 border border-gray-800/30">
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-5xl mx-auto font-light">
              Copernicus Astronomical Memorial of SUST (CAM-SUST) is an
              Astronomy Research & Outreach organization at Shahjalal University
              of Science and Technology, Bangladesh. Promoting and encouraging
              interest in astronomy, astrophysics, and cosmology throughout the
              country is what CAM-SUST is all about.
            </p>
          </div>

          {/* Behind The Name Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-10 text-center text-gray-100">
              Behind The Name
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-10 border border-gray-800/30">
                <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                  Nicolaus Copernicus (19 February 1473 – 24 May 1543) was a
                  Renaissance astronomer and the first person to formulate a
                  comprehensive heliocentric model which displaced the Earth
                  from the center of the universe. His work is considered as the
                  starting point of modern astronomy.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                  Copernicus could not prove his theories, but he showed that
                  celestial motions could be explained more simply by
                  Earth&apos;s movement. He paved the way for Galileo and Kepler
                  to later prove his ideas.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  In spite of the great and remarkable contributions in modern
                  time, Copernicus does not seem to be reputed to his true
                  value. So, our organization is a little tribute to this great
                  scholar without whom the astronomy as we know today might
                  never have existed.
                </p>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://en.wikipedia.org/wiki/Nicolaus_Copernicus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 hover:border-gray-700 transition-all duration-300">
                    <img
                      src="/images/about/copernicus-portrait.webp"
                      alt="Nicolaus Copernicus - Toruń portrait (ca. 1580)"
                      className="w-full max-w-sm rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-center text-gray-400 mt-4 text-sm">
                      Toruń portrait (ca. 1580)
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Our History Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-10 text-center text-gray-100">
              <Users className="inline-block w-8 h-8 mr-3 text-gray-300" />
              Our History
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-10 border border-gray-800/30">
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  It was early 2012, and there was no way to study astronomy
                  academically in Bangladesh. A few motivated students from
                  Shahjalal University of Science and Technology, who loved
                  discussing astronomy and wanted to promote it among all, came
                  together. They formed the Copernicus Astronomical Memorial of
                  SUST (CAM-SUST) on{" "}
                  <span className="text-gray-100 font-medium">
                    July 7, 2012
                  </span>
                  . It is a university-based student organization of SUST. On{" "}
                  <span className="text-gray-100 font-medium">
                    July 17, 2012
                  </span>
                  , CAM-SUST was officially registered by the University
                  Authority.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50">
                  <img
                    src="/images/about/a-procession.webp"
                    alt="A procession of CAM-SUST from our early days"
                    className="w-full rounded-lg shadow-2xl"
                  />
                  <p className="text-center text-gray-400 mt-4 text-sm">
                    A procession of CAM-SUST from our early days. Photo taken-
                    July, 2013.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Motto and Goal Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-10 border border-gray-800/30">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-100">
                Our Motto
              </h2>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-200 mb-4">
                  Pursuing the Infinity
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  This is about acquiring knowledge from countless unknowns and
                  sharing that knowledge with everyone.
                </p>
              </div>
            </div>
            <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-10 border border-gray-800/30">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-100">
                Our Goal
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-light text-center">
                To introduce the subject of astronomy to the general public and
                create their interest in it. Above all, to create a platform
                dedicated to astronomy.
              </p>
              <p className="text-center text-gray-400 text-sm mt-4">
                — Article 1.2.7 of the CAM-SUST Constitution
              </p>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-10 text-center text-gray-100">
              What Do We Do?
            </h2>
            <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-10 mb-12 border border-gray-800/30">
              <p className="text-lg text-gray-300 leading-relaxed text-center max-w-5xl mx-auto font-light">
                Everything we do is guided by our goal of promoting astronomy.
                CAM-SUST was established as an astronomy knowledge-sharing
                organization. In the early stages, our activities primarily
                focused on learning astronomy among our members through study
                circles and other activities. Then we started doing outreach
                programs throughout the university and in other educational
                institutions to inspire and spread astronomy. Today, most of our
                activities are centered around 4 main areas.
              </p>
            </div>

            {/* Activity Areas */}
            <div className="space-y-20">
              {/* Education */}
              <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-8 flex items-center text-gray-100">
                    <GraduationCap className="w-7 h-7 mr-3 text-gray-300" />
                    <span className="mr-4">1.</span> Education
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                    This area is the foundation of CAM-SUST. The whole CAM
                    &apos;s why we organize a range of activities to promote
                    learning and intellectual growth in astronomy.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed font-light">
                    We study astronomy by self-learning and collective
                    knowledge. We discuss various astronomical topics through
                    Study Circle and Journal Talk. To complement this, we host
                    CAM-Talk, Seminars, Workshops, and Summer/Winter School
                    featuring professors, researchers, and scholars. They
                    provide expert knowledge and insights bridging the gap
                    between self-learning and professional knowledge.
                  </p>
                </div>
                <ImageSlider
                  section="education"
                  images={sectionImages.education}
                  autoSlide={true}
                  interval={5000}
                />
              </div>

              {/* Outreach */}
              <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="lg:order-2">
                  <h3 className="text-3xl font-bold mb-8 flex items-center text-gray-100">
                    <Megaphone className="w-7 h-7 mr-3 text-gray-300" />
                    <span className="mr-4">2.</span> Outreach
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                    We love to spread astronomy. That&apos;s why we focus on
                    this area a lot to engage students beyond university and the
                    general public.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed font-light">
                    Our flagship program, Cosmania, brings astronomy to schools
                    and colleges across Bangladesh through various interesting
                    segments and competitions. To reach an even wider audience,
                    we host the annual SUST Astro Carnival, a nationwide
                    celebration. Another core part of our outreach is Stargazing
                    and World Space Week celebrations. By these, we try to spark
                    curiosity and build awareness among the general mass.
                  </p>
                </div>
                <div className="lg:order-1">
                  <ImageSlider
                    section="outreach"
                    images={sectionImages.outreach}
                    autoSlide={true}
                    interval={5000}
                  />
                </div>
              </div>

              {/* Research */}
              <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-8 flex items-center text-gray-100">
                    <FlaskConical className="w-7 h-7 mr-3 text-gray-300" />
                    <span className="mr-4">3.</span> Research
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                    We want to contribute to the scientific community.
                    That&apos;s why we encourage our members to go beyond
                    curiosity.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed font-light">
                    Each year, we launch some research-based projects. We
                    approach experienced mentors and make some teams from our
                    members. The mentor guides students through the project.
                    Also we run a Journal Club, where members select and discuss
                    published research papers, critically analyzing
                    methodologies, results, and implications. Through these
                    activities, CAM-SUST is cultivating a culture for future
                    research.
                  </p>
                </div>
                <ImageSlider
                  section="research"
                  images={sectionImages.research}
                  autoSlide={true}
                  interval={5000}
                />
              </div>

              {/* Development */}
              <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="lg:order-2">
                  <h3 className="text-3xl font-bold mb-8 flex items-center text-gray-100">
                    <Lightbulb className="w-7 h-7 mr-3 text-gray-300" />
                    <span className="mr-4">4.</span> Development
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                    We want to solve real-world problems using astronomy and
                    technology and make learning more enjoyable for all.
                    That&apos;s why we work on creative projects.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed font-light">
                    We have our custom-designed water rockets and launchers for
                    outreach events. We also design educational materials and
                    tools and make them accessible to all. In addition, we
                    experiment with EdTech solutions to create innovative
                    learning experiences.
                  </p>
                </div>
                <div className="lg:order-1">
                  <ImageSlider
                    section="development"
                    images={sectionImages.development}
                    autoSlide={true}
                    interval={5000}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-12 text-center border border-gray-800/30">
            <h2 className="text-4xl font-bold mb-6 text-gray-100">
              Join Our Journey
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Whether you&apos;re a student, astronomy enthusiast, or someone
              fascinated by the cosmos, there&apos;s a place for you in the
              CAM-SUST family. Together, we explore the infinite wonders of the
              universe.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px bg-gray-600 w-12"></div>
              <Star className="w-5 h-5 text-gray-400 animate-pulse" />
              <div className="h-px bg-gray-600 w-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
