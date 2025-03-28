import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] py-12 md:py-24">
      <div className="absolute -left-[310px] top-0 hidden md:block">
        <h1 className="text-center font-playfair text-8xl font-[500] uppercase text-[#000] md:text-[550px]">
          On
        </h1>
      </div>
      <div className="absolute -right-56 top-0 hidden md:block">
        <h1 className="text-center font-playfair text-8xl font-[500] uppercase text-[#000] md:text-[550px]">
          Ak
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 px-4 md:ml-16 md:px-0 md:pt-16">
        <h6 className="text-center font-playfair text-4xl font-[500] uppercase text-[#000] md:text-6xl">
          Reserve
        </h6>
        <p className="w-full max-w-[350px] text-center font-playfair text-base font-[400] lowercase tracking-[2px] text-[#000] md:text-xl md:leading-[95%]">
          Savor the best of Wilmslow at Konak Cafe, where delicious flavors meet
          a welcoming ambiance for a perfect dining experience.
        </p>
        <div className="md:mt-4">
          <Link href={"/table-booking"}>
            <Button
              className={
                "rounded-none border border-[#000] bg-[#000] px-7 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2.08px] text-[#fff] hover:bg-[#222] hover:text-[#fff]"
              }
            >
              Reserve
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
