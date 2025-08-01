import Activities from "./sections/activities/activities";
import Hero from "./sections/hero/hero";
import Magazine from "./sections/magazine/magazine";
import ResearchPapers from "./sections/research/research";
import Testimonials from "./sections/testimonials/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Activities />
      <Magazine />
      <ResearchPapers />
      <Testimonials />
    </main>
  );
}
