import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Highlights: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#000] px-12 py-8 md:px-20 md:py-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 md:gap-16">
        <div className="flex flex-col items-center justify-center gap-8 md:ml-20 md:flex-row md:gap-20">
          <h1 className="text-center font-playfair text-5xl font-[500] capitalize text-[#fff] md:text-7xl md:tracking-[-4px]">
            Explore our menu
          </h1>
          <div className="md:mt-5">
            <Button className="rounded-none bg-[#fff] px-6 py-6 text-center font-open_sans text-xs font-[400] uppercase tracking-[2px] text-[#000] hover:bg-[#e4e0e0] md:px-7 md:text-sm">
              <Link href={"/menu"}>View menu</Link>
            </Button>
          </div>
        </div>
        <div className="flex h-full w-full flex-col gap-8 md:flex-row">
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[25%]">
            <div className="h-full w-full rounded-t-full">
              <Image
                src={"/images/home/highlights/image1.png"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full rounded-t-full"
              />
            </div>
            <h6 className="text-center font-italiana text-2xl font-[400] capitalize text-[#fff] md:text-3xl md:tracking-[1.8px]">
              English <br />
              breakfast
            </h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[25%]">
            <div className="h-full w-full rounded-t-full">
              <Image
                src={"/images/home/highlights/image2.png"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full rounded-t-full"
              />
            </div>
            <h6 className="text-center font-italiana text-2xl font-[400] capitalize text-[#fff] md:text-3xl md:tracking-[1.8px]">
              Turkish <br />
              Breakfast
            </h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[25%]">
            <div className="h-full w-full rounded-t-full">
              <Image
                src={"/images/home/highlights/image3.png"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full rounded-t-full"
              />
            </div>
            <h6 className="text-center font-italiana text-2xl font-[400] capitalize text-[#fff] md:text-3xl md:tracking-[1.8px]">
              Sandwiches
            </h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[25%]">
            <div className="h-full w-full rounded-t-full">
              <Image
                src={"/images/home/highlights/image4.png"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full rounded-t-full"
              />
            </div>
            <h6 className="text-center font-italiana text-2xl font-[400] capitalize text-[#fff] md:text-3xl md:tracking-[1.8px]">
              Salads
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
