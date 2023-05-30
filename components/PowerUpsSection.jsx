import React, { useState } from "react";
import { powerUps } from "@/data/SiteData";
import { motion, AnimatePresence } from "framer-motion";
import PowerUps from "./PowerUps";

export default function PowerUpsSection() {
  const [data, setData] = useState(powerUps);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main
      id="power-ups"
      className="h-full w-full flex justify-center items-center relative pt-[200px]">
      <motion.h1
        className="absolute md:text-6xl top-0 text-center mt-5 text-4xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>
        pack a punch <br />
        with powerups
      </motion.h1>
      <motion.div
        className="w-full md:w-[70%] h-auto md:h-[100%] md:px-[4rem] rounded-[75px] grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible">
        <AnimatePresence>
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.2 * index, delay: 0.1 * index }}
              exit="hidden">
              <PowerUps powerups={item} {...item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
