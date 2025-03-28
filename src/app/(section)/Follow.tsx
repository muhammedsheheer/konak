import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-4 pt-12 md:pt-16">
      <div className="flex flex-col gap-6 md:gap-12">
        <div className="flex flex-col items-center justify-center gap-6 px-4 md:flex-row md:justify-between md:px-12">
          <h1 className="font-playfair text-4xl font-[500] uppercase text-[#fff] md:text-6xl">
            Connect
          </h1>
          <Button className="rounded-full bg-[#fff] px-7 py-7 font-playfair text-2xl font-[400] uppercase text-[#323232] hover:bg-[#d7cece] md:px-10 md:py-8 md:text-5xl md:tracking-[5px]">
            <Link href={""}>@konakcafewilmslow</Link>
          </Button>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-2">
          <div className="w-full md:w-[20%]">
            <Image
              src={"/images/home/follow/image1.png"}
              width={281}
              height={74}
              alt="frame"
              className="h-[350px] w-full md:h-[400px]"
            />
          </div>
          <div className="w-full md:w-[20%]">
            <Image
              src={"/images/home/follow/image2.png"}
              width={281}
              height={74}
              alt="frame"
              className="h-[350px] w-full md:h-[400px]"
            />
          </div>
          <div className="w-full md:w-[20%]">
            <Image
              src={"/images/home/follow/image6.png"}
              width={281}
              height={74}
              alt="frame"
              className="h-[350px] w-full md:h-[400px]"
            />
          </div>
          <div className="w-full md:w-[20%]">
            <Image
              src={"/images/home/follow/image4.png"}
              width={281}
              height={74}
              alt="frame"
              className="h-[350px] w-full md:h-[400px]"
            />
          </div>
          <div className="w-full md:w-[20%]">
            <Image
              src={"/images/home/follow/image5.png"}
              width={281}
              height={74}
              alt="frame"
              className="h-[350px] w-full md:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
