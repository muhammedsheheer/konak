import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Authentic: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] px-4 py-12 md:px-16 md:py-20">
      <div className="absolute left-[15%] top-[25%]">
        <Image
          src={"/images/home/authentic/star.svg"}
          width={281}
          height={74}
          alt="logo"
          className="hidden h-[150px] w-full md:block"
        />
      </div>
      <div className="absolute bottom-[25%] right-[15%]">
        <Image
          src={"/images/home/authentic/star.svg"}
          width={281}
          height={74}
          alt="logo"
          className="hidden h-[150px] w-full md:block"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-center font-playfair text-4xl font-[400] capitalize text-[#040404] md:text-7xl">
          Savour the flavours of rich <br /> ingredients with konak
        </h1>
        <div className="relative flex flex-col gap-4">
          <div className="absolute -top-14 left-[38%]">
            <Image
              src={"/images/home/authentic/image.png"}
              width={281}
              height={74}
              alt="logo"
              className="hidden h-[350px] w-full md:block md:h-[535px]"
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
            <Image
              src={"/images/home/authentic/image.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-fiull h-[350px] md:hidden md:h-full"
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
            <p className="w-full max-w-[350px] font-playfair text-sm font-[400] text-[#262626] md:text-right md:text-base">
              Visit us to savor the essence of quality food in a warm and
              inviting ambiance.
            </p>
            <p className="w-full max-w-[350px] font-playfair text-sm font-[400] text-[#262626] md:text-base">
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
