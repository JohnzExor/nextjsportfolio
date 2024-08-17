"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Name = () => {
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

  // Set opacity to 1 if scrollY is 160 or more, otherwise calculate opacity based on scrollY.
  const opacityValue = scrollY >= 160 ? 1 : scrollY / 160;

  return (
    <motion.div style={{ opacity: opacityValue }} className=" font-normal">
      Johnzyll Jimeno&rsquo;s <span className="font-thin">Portfolio </span>
    </motion.div>
  );
};

export default Name;
