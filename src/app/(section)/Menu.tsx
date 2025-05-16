import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    name: "Arabic Ice Cream",
    price: 4.0,
  },
  {
    name: "Cheesecake",
    price: 4.0,
  },
  {
    name: "Cupcakes",
    price: 3.0,
  },
  {
    name: "Fayseleh",
    price: 3.0,
  },
  {
    name: "Mahal Biya",
    price: 3.0,
  },
];

const data1 = [
  {
    name: "Apple Juice",
    price: 4.0,
  },
  {
    name: "Berry Kiwi Punch",
    price: 4.0,
  },
  {
    name: "Bright Morning",
    price: 4.0,
  },
  {
    name: "Citrus Tropic",
    price: 4.0,
  },
  {
    name: "Green Duo",
    price: 4.0,
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
          <div className="absolute inset-0 ml-6 flex w-full flex-col items-start justify-center gap-4 px-4 md:ml-12 md:px-0">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-start justify-start gap-2 pb-6 pt-6"
              >
                {/* Name & Price */}
                <div className="flex w-full items-center">
                  <h1 className="w-[70%] font-poppins text-base font-[400] uppercase tracking-[2.5px] text-white md:w-[60%] md:text-lg">
                    {item.name}
                  </h1>
                  <h1 className="w-[20%] text-right font-poppins text-base font-[400] uppercase tracking-[0.812px] text-white md:text-lg">
                    £{item.price}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          {/* Frame Image */}
          <Image
            src={"/images/home/menu/frame1.png"}
            width={281}
            height={74}
            alt="frame"
            className="h-[550px] w-full md:h-[850px]"
          />
        </motion.div>

        <motion.div
          className="relative md:w-[50%]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 ml-6 flex w-full flex-col items-start justify-center gap-4 px-4 md:ml-12 md:px-0">
            {data1.map((item, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-start justify-start gap-2 pb-6 pt-6"
              >
                {/* Name & Price */}
                <div className="flex w-full items-center">
                  <h1 className="w-[70%] font-poppins text-base font-[400] uppercase tracking-[2.5px] text-white md:w-[60%] md:text-lg">
                    {item.name}
                  </h1>
                  <h1 className="w-[20%] text-right font-poppins text-base font-[400] uppercase tracking-[0.812px] text-white md:text-lg">
                    £{item.price}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          {/* Frame Image */}
          <Image
            src={"/images/home/menu/frame2.png"}
            width={281}
            height={74}
            alt="frame"
            className="h-[550px] w-full md:h-[850px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
