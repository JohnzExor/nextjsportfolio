import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaPerson,
  FaReact,
  FaDiagramProject,
  FaBookAtlas,
  FaFeatherPointed,
} from "react-icons/fa6";

const navigations = [
  {
    link: "#about",
    name: "About Me",
    text: "This is where i introduce myself",
    icon: <FaPerson />,
  },
  {
    link: "#stack",
    name: "Tech Stack",
    text: "The frameworks i used",
    icon: <FaReact />,
  },
  {
    link: "#projects",
    name: "Projects",
    text: "I'll introduce you to my projects",
    icon: <FaDiagramProject />,
  },
  {
    link: "#contact",
    name: "Contact",
    text: "Contact me anytime",
    icon: <FaBookAtlas />,
  },
  {
    link: "#socmed",
    name: "Social Media",
    text: "This is my social media accounts",
    icon: <FaFeatherPointed />,
  },
];

const SideBar = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex flex-col gap-8 font-semibold text-4xl z-50">
      {navigations.map(({ link, name, text, icon }, index) => (
        <Link
          onClick={() => onClick()}
          href={link}
          key={index}
          className=" space-y-1"
        >
          <motion.div
            whileInView={{ scaleY: [0, 1] }}
            transition={{ delay: index * 0.2, type: "spring" }}
            className="flex items-center gap-2"
          >
            {icon}
            {name}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: index * 0.2, type: "spring" }}
            className="text-sm"
          >
            {text}
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
