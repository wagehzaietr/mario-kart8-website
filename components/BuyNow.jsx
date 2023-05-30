import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gamedisc from "../public/gamedisc.png";
import mariofight from "../public/mariofight.png";

export default function BuyNow() {
  const buyNowUrl =
    "https://www.nintendo.com/games/detail/mario-kart-8-deluxe-game-nintendo-switch/8RKJY0";

  return (
    <main id="buynow" className="flex justify-center items-center">
      <section className="w-[90%] flex-col md:w-[65%] relative p-2 gap-10 h-[100%]flex-wrap md:flex-row md:h-[90%] flex justify-center items-center">
        <motion.div
          className="flex-[1]"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <Image
            src={gamedisc}
            alt="game"
            priority={true}
            className="rotate-[-6deg] object-cover"
          />
        </motion.div>
        <motion.div
          className="flex-[1.3] relative md:mt-[5.5rem] mt-[1.5rem] md:my-0 my-[90px]"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <div>
            <h1 className="text-[#fff] text-[2rem] tracking-wide md:text-[3rem] font-bold uppercase">
              biggest <br />
              mario kart <br />
              roster ever
            </h1>
            <p className="mt-5">
              The Mario Kart 8 Deluxe game has 42 characters <br /> to choose
              from - the biggest roster in the series!
            </p>
            <button
              onClick={() => window.open(buyNowUrl, "_blank")}
              className="mt-10 py-3 md:py-5 px-[1.6rem] md:px-[3.6rem] rounded-lg bg-[#13b1e9] text-[#fff]">
              BUY NOW
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute w-[250px] md:w-[480px] h-[250px] md:h-[280px] object-cover bottom-[-12rem] right-[-2rem] md:bottom-[-10rem] md:right-[-7rem]">
              <Image
                src={mariofight}
                width={480}
                height={480}
                alt="game"
                priority={true}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
