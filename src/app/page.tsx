import Activities from "@/components/activities/activities";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Magazine from "@/components/magazine/magazine";
import Navbar from "@/components/navbar/navbar";
import ResearchPapers from "@/components/research/research";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Activities />
      <Magazine />
      <ResearchPapers />
      <Footer />
    </main>
  );
}
