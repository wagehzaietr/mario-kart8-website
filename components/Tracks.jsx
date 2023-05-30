import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RedShell from "./RedShell";
import Star from "./Star";
import course1 from "../public/course1.jpg";
import course2 from "../public/course2.jpg";
import course3 from "../public/course3.jpg";

export default function Tracks() {
  const slideVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <main
      id="tracks"
      className="h-screen mx-5 flex flex-wrap items-center justify-center relative py-[100px]">
      <RedShell styles={styles.reshell} />
      <Star styles={styles.star} />
      <div className="bg-red-500 w-[100%] h-[100%] md:w-[65%] md:h-[70%] rounded-[25px] flex justify-center items-center">
        <div className="w-[80%] flex-col-reverse md:flex-row h-[80%] mx-auto flex items-center">
          <motion.div
            className="relative flex-[1.5] w-[80%] h-[100%] mt-[3rem] md:w-[100%] md:h-[80%]"
            variants={slideVariants}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"

            transition={{ duration: 0.8 }}>
            <div>
              <h2 className="uppercase mt-[2rem] md:mt-0 text-3xl md:text-5xl">
                Tons of <br /> Tracks
              </h2>
              <p className="mt-[2rem] md:mt-[3rem] text-[1rem] md:text-[1rem]">
                Race for the cups on 48 courses, including ones inspired by
                Excite Bike and The Legend of Zelda Series.
              </p>
            </div>
            <button className="bg-white text-red-500 px-10 py-5 mt-[3rem] rounded-xl">
              Find Out More
            </button>
          </motion.div>
          <motion.div
            className="left-[0rem] md:left-[9rem] bg-white flex-[1.7] p-1 relative flex justify-center items-center"
            variants={slideVariants}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
            transition={{ duration: 0.8 }}>
            <div className="object-cover">
              <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div>
                  <Image src={course1} width={1080} priority alt="course1" />
                </div>
                <div>
                  <Image src={course2} width={1920} priority alt="course2" />
                </div>
                <div>
                  <Image src={course3} width={1920} priority alt="course3" />
                </div>
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

const styles = {
  reshell:
    "absolute bottom-5 z-[5] rotate-[10deg] object-cover blur-[2px]  left-[8rem]  rounded-full",
  star: "absolute bottom-[16rem] right-[15.3rem] z-[-5] rotate-[15deg] object-cover blur-[2px] w-[100px]",
};
