import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Authentic: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#111] px-4 py-12 md:px-16 md:py-20">
      <motion.div
        className="absolute left-[15%] top-[25%]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={"/images/home/authentic/star.svg"}
          width={281}
          height={74}
          alt="logo"
          className="hidden h-[150px] w-full md:block"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[25%] right-[15%]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={"/images/home/authentic/star.svg"}
          width={281}
          height={74}
          alt="logo"
          className="hidden h-[150px] w-full md:block"
        />
      </motion.div>
      <div className="flex flex-col gap-4">
        <motion.h1
          className="text-center font-playfair text-4xl font-[400] capitalize text-[#fff] md:text-7xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Savour the flavours of rich <br /> ingredients with konak
        </motion.h1>
        <div className="relative flex flex-col gap-4">
          <div className="absolute -top-14 left-[38%]">
            <motion.img
              src={"/images/home/authentic/image.png"}
              width={281}
              height={74}
              alt="logo"
              className="hidden h-[350px] w-full md:block md:h-[535px]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-40">
            <Image
              src={"/images/home/authentic/frame.png"}
              width={281}
              height={74}
              alt="logo"
              className="h-[350px] md:h-full"
            />
            <motion.img
              src={"/images/home/authentic/image.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-fiull h-[350px] md:hidden md:h-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <Image
              src={"/images/home/authentic/frame.png"}
              width={281}
              height={74}
              alt="logo"
              className="h-[350px] md:h-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start">
            <p className="w-full max-w-[350px] font-playfair text-sm font-[400] text-[#fff] md:text-right md:text-base">
              Visit us to savor the essence of quality food in a warm and
              inviting ambiance.
            </p>
            <p className="w-full max-w-[350px] font-playfair text-sm font-[400] text-[#fff] md:text-base">
              Konak is committed to using the freshest and seasonal ingredients
              to create a delightful dining experience. Our menu is carefully
              crafted to cater to various dietary preferences including
              vegetarian, vegan, and gluten-free options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authentic;
