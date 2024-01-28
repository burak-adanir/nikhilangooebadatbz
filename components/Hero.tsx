"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-2 pt-36 padding-x">
        <h1 className="hero__title">
          Suchen Sie unter 2948 Fahrzeugen
        </h1>
        <p className="hero__subtitle">Auf dem grossten Schweizer Automarktplatz fur Occasionen und Neuwagen</p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
