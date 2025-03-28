import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#fff]">
      <h1 className="px-2 text-center font-playfair text-5xl font-[500] capitalize text-[#000] md:text-8xl md:tracking-[-5px]">
        Konak
      </h1>
    </section>
  );
};

export default Hero;
