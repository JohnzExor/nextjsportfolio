import { FaReact } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress, SiPrisma } from "react-icons/si";

const tech = [
  {
    name: "React",
    description:
      "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
    icon: <FaReact size={50} />,
  },
  {
    name: "Next.JS",
    description:
      "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
    icon: <RiNextjsLine size={50} />,
  },
  {
    name: "Tailwind",
    description:
      "Tailwind CSS is an open-source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.",
    icon: <RiTailwindCssFill size={50} />,
  },
  {
    name: "Typescript",
    description:
      "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.",
    icon: <BiLogoTypescript size={50} />,
  },
  {
    name: "Express.JS",
    description:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. APIs.",
    icon: <SiExpress size={40} />,
  },
  {
    name: "Prisma",
    description:
      "Prisma provides the best experience for your team to work and interact with databases.",
    icon: <SiPrisma size={40} />,
  },
];

const Stack = () => {
  return (
    <div id="stack">
      <h1 className=" font-semibold text-4xl mb-4">TechStack</h1>
      <div className=" flex flex-col gap-4">
        {tech.map(({ name, description, icon }) => (
          <div className="flex items-center gap-6 border p-3 rounded-xl">
            <div>{icon}</div>
            <div>
              <h1 className="text-xl font-medium">{name}</h1>
              <p className="text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
