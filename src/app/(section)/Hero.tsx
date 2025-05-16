"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const text = "Konak";

const Hero: React.FC = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 300,
      },
    }),
  };
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(false);
          setTimeout(() => setInView(true), 50);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <video
          className="min-h-full min-w-full object-cover"
          style={{ objectPosition: "center" }}
          src="/videos/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className="absolute inset-0 z-0 bg-black/50" />
      <h1 className="z-40 px-2 text-center font-playfair text-5xl font-[500] capitalize text-[#fff] md:text-8xl md:tracking-[-5px]">
        {inView &&
          [...text].map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
      </h1>
    </section>
  );
};

export default Hero;
