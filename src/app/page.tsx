import Activities from "@/components/activities/activities";
import Hero from "@/components/hero/hero";
import Magazine from "@/components/magazine/magazine";
import ResearchPapers from "@/components/research/research";

export default function Home() {
  return (
    <main>
      <Hero />
      <Activities />
      <Magazine />
      <ResearchPapers />
    </main>
  );
}
