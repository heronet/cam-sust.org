import SectionHeader from "@/components/section-header";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "I am glad to see the students of Shahjalal University of Science and Technology being involved in activities to promote and create interest in science. The Copernicus Astronomical Memorial of SUST is an organization which has been active for several years, to involve the youths of the Sylhet region in creative and scientific activities. I wish CAM-SUST all the best and hope that they will keep up their good work in the future.",
    name: "Dr. Yasmin Haque",
    title: "Professor, Dept. of Physics, @ SUST",
    image: "/images/people/yasmin.webp",
  },
];

export default function Testimonials() {
  return (
    <div
      id="recommendations"
      className="flex flex-col py-24 antialiased p-4 items-center justify-center relative overflow-hidden"
    >
      <SectionHeader
        title="People Talking About Us"
        subtitle="Here are a few words from people who have been associated with us or have seen our work."
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
        pauseOnHover={false}
      />
    </div>
  );
}
