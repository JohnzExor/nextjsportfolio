"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Card = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const height = scrollY >= 400 ? 100 : 500 - scrollY;
  const top = scrollY >= 200 ? 0 : 60 - scrollY / 5;

  return (
    <div className=" fixed w-full -z-20">
      <motion.div
        initial={{ height: 500, top: 60 }}
        animate={{ height: height, top: top }}
        className="relative w-full flex flex-col"
      >
        <div className="mt-auto m-4 text-white">
          <h1 className="text-4xl font-medium">Johnzyll Jimeno</h1>
          <p>Full Stack Developer</p>
        </div>
        <Image
          src={"/images/profile.jpg"}
          alt="profile"
          fill
          className=" object-cover -z-50 rounded-xl"
        />
      </motion.div>
    </div>
  );
};

export default Card;
