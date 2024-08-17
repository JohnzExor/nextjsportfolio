"use client";
import Image from "next/image";
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

  const height = scrollY >= 220 ? 390 : 500 - scrollY / 2;
  const top = scrollY >= 220 ? 0 : 45 - scrollY / 5;
  const textTop =
    scrollY <= 0
      ? 16
      : scrollY / 4 >= 16
      ? scrollY >= 10
        ? scrollY / 2
        : scrollY / 4
      : 16;

  return (
    <div className=" fixed w-full -z-30">
      <div
        style={{ height: `${height}px`, top: `${top}px` }}
        className={`relative w-full flex flex-col`}
      >
        <div
          style={{ marginBottom: `${textTop}px` }}
          className="mt-auto m-4 text-white"
        >
          <h1 className="text-4xl font-medium">Johnzyll Jimeno</h1>
          <p>Full Stack Developer</p>
        </div>
        <Image
          src={"/images/profile.jpg"}
          alt="profile"
          fill
          className=" object-cover -z-50 rounded-b-xl"
        />
      </div>
    </div>
  );
};

export default Card;
