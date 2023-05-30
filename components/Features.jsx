import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ninswitch from "../public/switch.png";
import bowser from "../public/bowser.png";
import flower from "../public/flower.png";

export default function Features() {
  const [showMore, setShowMore] = useState(false);
  const text =
    "whether you're racing your family on the big screen in your living room, playing in the park, or visiting a friend's place, Nintendo Switch lets you play Mario Kart any way you like!";
  const maxLength = 40; // Maximum number of characters to display

  const slicedText =
    text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <main className="h-screen w-full flex justify-center items-center">
      <section className="w-[90%] flex-col md:w-[65%] relative p-2 gap-10 h-[100%] flex-wrap md:flex-row md:h-[90%] flex justify-center items-center">
        <motion.div
          viewport={{ once: true }}
          className="flex-[1] relative rounded-[40px] bg-white h-full w-full md:h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="flex h-[40%] md:h-[45%] px-5 flex-col justify-center items-center">
            <motion.div
              viewport={{ once: true }}
              className="relative top-[-3rem] w-[300px] md:w-[500px]"
              initial={{ y: -100 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3 }}>
              <Image
                src={ninswitch}
                alt="nin switch"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
          <div className="px-[3rem] md:px-[5rem] md:mt-[2rem] mt-[1rem]">
            <motion.h1
              viewport={{ once: true }}
              className="uppercase text-[30px] md:text-[50px] text-[#0633ad]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}>
              race <br /> anytime <br /> anywhere
            </motion.h1>
            <motion.p
              viewport={{ once: true }}
              className="text-[#3b61c2] text-[.6rem] py-5 md:text-[1.1rem] md:mt-[2rem] mt-[.6rem]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}>
              <button onClick={handleShowMore}>
                {showMore ? "show less" : "show more"}
              </button>
            </motion.p>
            <motion.h2
              viewport={{ once: true }}
              className="text-[#3b61c2] text-[.7rem] md:text-[1.1rem]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}>
              {showMore ? text : slicedText}
            </motion.h2>
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          className="flex-[1] w-full relative rounded-[40px] bg-red-500 h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="flex h-[35%] justify-center items-center">
            <motion.div
              viewport={{ once: true }}
              className="absolute right-[-1rem] md:right-[-3rem] w-[200px] md:w-[500px]"
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.4 }}>
              <Image src={bowser} alt="bowser" width={500} height={500} />
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              className="absolute bottom-[0rem]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}>
              <h2 className="md:mt-5 text-[1.3rem] md:text-[4rem] md:py-10 pb-1">
                ... an <br /> absolute <br /> must for <br /> switch <br />{" "}
                owners.
              </h2>
            </motion.div>
          </div>
        </motion.div>
        <Image
          src={flower}
          width={80}
          height={80}
          alt="flower"
          className="absolute blur-[2px] bottom-[-9rem] right-[-.6rem] rotate-[15deg]"
        />
      </section>
    </main>
  );
}
