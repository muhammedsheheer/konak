import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    name: "ROASTED LAMB RUMP",
    description: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
    price: 25,
  },
  {
    name: "PAN SEARED SEA BASS",
    description: "Saffron and mussel's broth, new potatoes, edamame beans",
    price: 38,
  },
  {
    name: "KING PRAWNS AND LOBSTER",
    description: "Creamy saffron, sauce Vierge",
    price: 38,
  },
  {
    name: "BEEF BURGER MEAL",
    description: "Classic greek salad, barrel aged feta cheese, bread",
    price: 32,
  },
  {
    name: "ROASTED LAMB RUMP",
    description: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
    price: 25,
  },
];

const Menu: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#111] py-0 md:py-12">
      <div className="pb-6 md:pb-10">
        <div className="flex flex-row overflow-hidden">
          <h1 className="text-center font-playfair text-5xl font-[400] capitalize text-[#fff] md:text-8xl">
            KONAK{" "}
          </h1>
          <h1 className="text-center font-playfair text-5xl font-[400] capitalize text-[#fff] md:text-8xl">
            KONAK{" "}
          </h1>
          <h1 className="text-center font-playfair text-5xl font-[400] capitalize text-[#fff] md:text-8xl">
            KONAK{" "}
          </h1>
          <h1 className="text-center font-playfair text-5xl font-[400] capitalize text-[#fff] md:text-8xl">
            KONAK{" "}
          </h1>
          <h1 className="text-center font-playfair text-5xl font-[400] capitalize text-[#fff] md:text-8xl">
            KONAK{" "}
          </h1>
          <h1 className="text-center font-playfair text-5xl font-[400] capitalize text-[#fff] md:text-8xl">
            KONAK{" "}
          </h1>
          <h1 className="text-center font-playfair text-5xl font-[400] capitalize text-[#fff] md:text-8xl">
            KONAK{" "}
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-2 md:flex-row md:px-20">
        {/* Left Image */}

        {/* Menu Items Section */}
        <motion.div
          className="relative md:w-[50%]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 ml-16 flex w-full flex-col items-start justify-center gap-4 px-4 md:ml-32 md:px-0">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-start justify-start gap-2 pb-6 pt-6"
              >
                {/* Name & Price */}
                <div className="flex w-full items-center">
                  <h1 className="w-[40%] font-poppins text-base font-[400] uppercase tracking-[2.5px] text-white md:text-lg">
                    {item.name}
                  </h1>
                  <h1 className="w-[20%] text-right font-poppins text-base font-[400] uppercase tracking-[0.812px] text-white md:text-lg">
                    ${item.price}
                  </h1>
                </div>

                {/* Description */}
                <p className="w-[60%] font-poppins text-sm font-[300] text-white md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Frame Image */}
          <Image
            src={"/images/home/menu/frame1.png"}
            width={281}
            height={74}
            alt="frame"
            className="h-[900px] w-full md:h-[850px]"
          />
        </motion.div>

        <motion.div
          className="relative md:w-[50%]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 ml-16 flex w-full flex-col items-start justify-center gap-4 px-4 md:ml-32 md:px-0">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-start justify-start gap-2 pb-6 pt-6"
              >
                {/* Name & Price */}
                <div className="flex w-full items-center">
                  <h1 className="w-[40%] font-poppins text-base font-[400] uppercase tracking-[2.5px] text-white md:text-lg">
                    {item.name}
                  </h1>
                  <h1 className="w-[20%] text-right font-poppins text-base font-[400] uppercase tracking-[0.812px] text-white md:text-lg">
                    ${item.price}
                  </h1>
                </div>

                {/* Description */}
                <p className="w-[60%] font-poppins text-sm font-[300] text-white md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Frame Image */}
          <Image
            src={"/images/home/menu/frame2.png"}
            width={281}
            height={74}
            alt="frame"
            className="h-[900px] w-full md:h-[850px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
