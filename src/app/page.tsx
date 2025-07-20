import Activities from "@/components/activities/activities";
import Hero from "@/components/hero/hero";
import Magazine from "@/components/magazine/magazine";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Activities />
      <Magazine />
    </main>
  );
}
