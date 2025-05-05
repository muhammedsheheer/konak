import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-4 pt-12 md:pt-16">
      <div className="flex flex-col gap-6 md:gap-12">
        <div className="flex flex-col items-center justify-center gap-6 px-4 md:flex-row md:justify-between md:px-12">
          <h1 className="font-playfair text-4xl font-[500] uppercase text-[#fff] md:text-6xl">
            Connect
          </h1>
          <Button className="rounded-full bg-[#fff] px-7 py-7 font-playfair text-2xl font-[400] uppercase text-[#323232] hover:bg-[#d7cece] md:px-10 md:py-8 md:text-5xl md:tracking-[5px]">
            <Link
              href={"https://www.instagram.com/konakcafewilmslow/"}
              target="_blank"
            >
              @konakcafewilmslow
            </Link>
          </Button>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-2">
          <motion.div
            className="w-full md:w-[20%]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={"/images/home/follow/image1.png"}
              width={281}
              height={74}
              alt="frame"
              className="h-[350px] w-full md:h-[400px]"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-[20%]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={"/images/home/follow/image2.png"}
              width={281}
              height={74}
              alt="frame"
              className="h-[350px] w-full md:h-[400px]"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-[20%]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={"/images/home/follow/image6.png"}
              width={281}
              height={74}
              alt="frame"
              className="h-[350px] w-full md:h-[400px]"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-[20%]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={"/images/home/follow/image4.png"}
              width={281}
              height={74}
              alt="frame"
              className="h-[350px] w-full md:h-[400px]"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-[20%]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={"/images/home/follow/image5.png"}
              width={281}
              height={74}
              alt="frame"
              className="h-[350px] w-full md:h-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
