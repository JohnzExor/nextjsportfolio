"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import SideBar from "./SideBar";
import { IoIosArrowForward } from "react-icons/io";

const SideBarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  const animation = isOpen
    ? { x: 0 } // Slide in from right to left
    : { x: 800 }; // Slide out from left to right

  return (
    <div className=" md:hidden">
      <button onClick={handleOnClick}>
        <HiBars3BottomRight size={30} />
      </button>
      <motion.div
        initial={{ x: 800 }}
        animate={animation}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="fixed inset-0"
      >
        <div className="w-full h-screen bg-black text-white p-8 flex flex-col gap-8">
          <button
            onClick={handleOnClick}
            className="font-semibold w-fit ml-auto flex items-center"
          >
            Close
            <IoIosArrowForward size={30} />
          </button>
          <SideBar onClick={handleOnClick} />
          <div className="mt-auto text-xs text-center">
            Johnzyll Jimeno 2024 Portfolio
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SideBarToggle;
