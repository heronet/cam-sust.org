import Activities from "@/components/activities/activities";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Activities />
    </main>
  );
}
