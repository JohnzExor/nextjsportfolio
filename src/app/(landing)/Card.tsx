"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      initial={{ height: 110 }}
      animate={{ height: 500 }}
      transition={{ delay: 1, type: "spring" }}
      className="relative w-full flex flex-col -z-10"
    >
      <div className="mt-auto m-4 text-white">
        <h1 className="text-4xl font-medium">Johnzyll Jimeno</h1>
        <p>Full Stack Developer</p>
      </div>
      <Image
        src={"/images/profile.jpg"}
        alt="profile"
        fill
        className=" object-cover -z-10 rounded-xl"
      />
    </motion.div>
  );
};

export default Card;
