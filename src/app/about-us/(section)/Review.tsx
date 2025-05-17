"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import { motion } from "framer-motion";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#111] px-4 pb-28 pt-10 md:pb-32 md:pt-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 pb-4 md:gap-4 md:pb-16">
          <div className="flex flex-col items-center justify-center gap-2">
            <motion.h3
              className="text-center font-playfair text-4xl font-[500] uppercase text-[#fff] md:text-6xl"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              REVIEWS FROM OUR CLIENTS
            </motion.h3>
          </div>
        </div>
        <div>
          {reviews && (
            <Carousel className="w-full px-4 md:px-0">
              <CarouselContent className="flex gap-4">
                {reviews
                  .filter((review) => review.rating >= 4)
                  .map((review, index) => (
                    <CarouselItem
                      key={index}
                      className={`flex basis-full flex-col gap-6 rounded-none border border-[#000] bg-[#000] py-6 md:basis-1/4 md:py-12`}
                    >
                      <div className="flex flex-col items-center justify-center gap-6 px-6 pb-4">
                        <div className="flex justify-center">
                          {Array.from({ length: review.rating }).map(
                            (_, index) => (
                              <Icons.star
                                key={index}
                                className="text-[#DCB355]"
                              />
                            ),
                          )}
                        </div>
                        <div className="flex flex-col gap-4">
                          <p className="line-clamp-5 text-center font-inter text-sm font-[400] text-[#fff] md:text-base">
                            {review.text.text}
                          </p>
                          <p className="text-center font-inter text-sm font-[500] tracking-[0.54] text-[#fff] md:text-base">
                            {review.authorAttribution.displayName}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-8 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#000] text-[#000] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#000] text-[#000] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
