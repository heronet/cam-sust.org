import { FloatingNav } from "../ui/floating-navbar";
import { Home, School, Activity, Book } from "lucide-react";

export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-white" />,
    },
    {
      name: "Activities",
      link: "#activities",
      icon: <Activity className="h-4 w-4 text-white" />,
    },
    {
      name: "Magazine",
      link: "#magazine",
      icon: <Book className="h-4 w-4 text-white" />,
    },
    {
      name: "Research",
      link: "#research",
      icon: <School className="h-4 w-4 text-white" />,
    },
  ];
  return <FloatingNav navItems={navItems} />;
}
