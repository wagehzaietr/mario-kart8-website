import React, { useEffect, useState } from "react";
import Image from "next/image";
import RedShell from "./RedShell";
import Star from "./Star";
import { motion } from "framer-motion";
import { data } from "../data/SiteData";
import luigikart from "../public/luigikart.png";

export default function Characters() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);

  const handleCharacterClick = (index) => {
    setSelectedCharacter(data[index]);
  };

  const handleMouseEnter = (index) => {
    setHoveredCharacter(data[index]);
  };

  const handleMouseLeave = () => {
    setHoveredCharacter(null);
  };

  return (
    <main
      id="Characters"
      className="h-screen mx-5 flex flex-wrap items-center justify-center relative py-[100px]">
      <RedShell styles={styles.reshell} />
      <Star styles={styles.star} />
      <motion.div
        viewport={{ once: true }}
        className="bg-[#20d44d] w-[100%] h-[100%] md:w-[70%] md:h-[80%] rounded-[25px] flex justify-center items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <div className="w-[80%] flex-col-reverse md:flex-row h-[80%] mx-auto flex items-center">
          <div className="flex-[1.8] relative w-[80%] h-[100%] md:w-[80%] md:h-[80%] rounded-[25px]">
            <motion.h2
              viewport={{ once: true }}
              className="uppercase mt-[2rem] md:mt-0 text-3xl md:text-5xl leading-tight"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              biggest <br /> mario kart <br /> roster ever
            </motion.h2>
            <motion.p
              viewport={{ once: true }}
              className="mt-[2rem] md:mt-[3rem] text-[1rem] md:text-[1.2rem] leading-tighter"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}>
              the mario kart deluxe has 42 characters <br />
              to choose from - the biggest roster in the series
            </motion.p>
            <div className="flex mt-10 bottom-0 items-center gap-5">
              {data.map((item, index) => (
                <motion.div
                  viewport={{ once: true }}
                  key={index}
                  onClick={() => handleCharacterClick(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="w-[300px] md:w-[70px] relative cursor-pointer md:bg-white md:p-3 rounded-lg shadow-lg mx-0 md:mx-2">
                  <Image
                    src={item.img}
                    width={68}
                    height={68}
                    alt={item.name}
                    className="object-cover"
                  />
                  {hoveredCharacter === item && (
                    <motion.span
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: -100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-[#ffffff] hidden md:block text-center absolute right-0 mt-5 text-[1.1rem] font-semibold">
                      {item.name}
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex-[1] md:flex-[1.5] relative flex justify-center items-center">
            {selectedCharacter ? (
              <motion.div
                viewport={{ once: true }}
                className="relative"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.3,
                  mass: 0.5,
                  stiffness: 100,
                }}
                key={selectedCharacter.name}>
                <Image
                  className="object-cover ml-[0rem] md:ml-[5rem] w-[250px] md:w-[500px]"
                  width={500}
                  height={500}
                  src={selectedCharacter.showenimage}
                  alt={selectedCharacter.name}
                />
              </motion.div>
            ) : (
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative">
                <Image
                  src={luigikart}
                  alt="Default Image"
                  width={500}
                  height={500}
                  className="object-cover w-[250px] md:w-[500px]"
                />
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </main>
  );
}

// styles
const styles = {
  reshell:
    "absolute bottom-5 z-[5] rotate-[10deg] object-cover blur-[2px] left-[8rem] rounded-full",
  star: "absolute bottom-[16rem] right-[12.3rem] z-[-5] rotate-[15deg] object-cover blur-[2px] w-[100px]",
};
