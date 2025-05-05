"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#111] py-12">
      <div className="absolute right-[13%] top-[17%] hidden md:block">
        <Link href={"/menu"}>
          <Button
            className={
              "rounded-none border border-[#fff] bg-[#fff] px-7 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2.08px] text-[#111] hover:bg-[#111] hover:text-[#fff]"
            }
          >
            View menu
          </Button>
        </Link>
      </div>
      <div className="absolute right-[10%] top-[35%] hidden md:block">
        <p className="w-full max-w-[280px] text-center font-playfair text-sm font-[400] lowercase tracking-[1.8px] text-[#fff] md:text-start md:text-base">
          Explore our menu for a delicious selection of freshly prepared meals,
          from hearty breakfasts to indulgent treats.
        </p>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex flex-col items-center justify-center gap-4 pb-4 md:flex-row md:gap-0 md:pb-8">
                <motion.h6
                  className="text-center font-playfair text-5xl font-[400] capitalize tracking-[-4px] text-[#fff] md:text-7xl"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  Signatures
                </motion.h6>
                <p className="w-full max-w-[350px] text-center font-playfair text-sm font-[400] lowercase tracking-[1.8px] text-[#fff] md:hidden md:text-start md:text-base">
                  Explore our menu for a delicious selection of freshly prepared
                  meals, from hearty breakfasts to indulgent treats.
                </p>
                <div className="md:hidden">
                  <Link href={"/menu"}>
                    <Button
                      className={
                        "rounded-none border border-[#fff] bg-[#fff] px-7 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2.08px] text-[#111] hover:bg-[#111] hover:text-[#fff]"
                      }
                    >
                      View menu
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-50 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
