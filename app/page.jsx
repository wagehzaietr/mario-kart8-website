"use client";
import { React, useRef, useState } from "react";
import mario from "../public/mario.png";
import bowser from "../public/bowser.png";
import Image from "next/image";
import boo from "../public/boo.png";
import redshell from "../public/redshell.png";
import { motion } from "framer-motion";
import fireball from "../public/fireball.png";
import { ImPlay2, ImPause } from "react-icons/im";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import YouTube from "react-youtube";

const metadata = {
  title: "Home",
  description: "Home page description",
};

export default function HomePage() {
  const [show, setShow] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoRef = useRef(null);

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: "tKlRN2YpxRE",
    },
  };

  const videoPlay = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) videoRef.current.play();
  };

  return (
    <main className={styles.container}>
      <Image
        src={boo}
        alt="boo"
        width={100}
        height={100}
        className={styles.iconimage1}
      />
      <Image
        src={redshell}
        alt="redshell"
        width={60}
        height={70}
        className={styles.iconimage2}
      />
      {isVideoPlaying && (
        <div className="bg-black/90 z-[8] hidden md:flex absolute justify-center items-center top-0 left-0 right-0 bottom-0">
          <YouTube
            videoId="tKlRN2YpxRE"
            opts={videoOptions}
            onReady={() => setIsVideoPlaying(true)}
            className="z-[1]"
          />
          <AiOutlineCloseCircle
            onClick={() => setIsVideoPlaying(false)}
            size={40}
            color="#25bffd"
            className="absolute z-[9] top-[17rem] cursor-pointer"
          />
        </div>
      )}
      <motion.div
        className={styles.content1}
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}>
        {show && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Image
              src={fireball}
              alt="fireball"
              width={140}
              height={70}
              className="absolute hidden md:block top-[-2.2rem] object-cover"
            />
          </motion.div>
        )}
        <Image
          src={mario}
          alt="mario"
          width={500}
          height={500}
          priority={true}
          className={`${styles.mainimages} transform scale-x-[-1]`}
        />
      </motion.div>
      <div className={styles.content2}>
        <div className="flex justify-center gap-3 pb-5 ">
          <button className=" uppercase hidden md:block cursor-pointer mb-5">
            {isVideoPlaying ? (
            null
            ) : (
              <motion.div
                animate={{ scale: 1 }}
                transition={{ duration: 1, repeat: Infinity }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}>
                <ImPlay2 onClick={videoPlay} size={40} color="#ef4444" />
              </motion.div>
            )}
          </button>
        </div>
        <h1 className={styles.heading}>
          Race anytime <br /> anywhere
        </h1>
        <p className={styles.paragraph}>
          hit the road with the definitive <br />
          version of mario kart 8
        </p>
        <button onClick={() => setShow(!show)} className={styles.button}>
          start the race <br /> <span className="text-[1rem]"></span>
        </button>
      </div>
      <motion.div
        className={styles.content3}
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}>
        <Image
          src={bowser}
          alt="bowser"
          width={500}
          height={500}
          className={styles.mainimages}
        />
        {show && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Image
              src={redshell}
              alt="redshell"
              width={80}
              height={70}
              className="bottom-[7rem] hidden md:block absolute right-[2.2rem]"
            />
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}

//styles
const styles = {
  container: `w-full pb-[12rem] md:pb-[0rem] overflow-hidden h-[calc(100vh-5rem)] flex items-center uppercase`,
  iconimage1: `transform md:left-[22rem] md:w-[100px] w-[70px] rotate-[10deg] object-cover blur-[2px] absolute bottom-[2rem] left-[1rem]`,
  iconimage2: `transform w-auto md:right-[21rem] rotate-[10deg] object-cover blur-[2px] absolute bottom-[-1rem] right-[1rem]`,
  overlayBlur: `overlay-blur absolute inset-0 bg-opacity-50 blur-[1px] opacity-80 z-[-1]`,
  content1: `w-[25%] mt-[5rem] bg-red-500 md:h-[39%] h-[21%] flex-[2] md:flex-[1.7] justify-center rounded-md flex relative`,
  content2: `w-[25%] h-[25%] flex-[3] text-center mb-[8rem] md:mb-[23rem]`,
  heading: `text-white font-bold text-[1.3rem] md:text-[5rem] tracking-wide`,
  paragraph: `text-white font-bold text-[.7rem] md:text-[1.5rem] mt-[2rem] tracking-widest`,
  button: `bg-red-500 text-white md:w-[20rem] md:text-[1rem] md:px-10 font-bold text-[.6rem] mt-[2rem] px-10 py-3 rounded-md hover:bg-red-600 transition-all duration-300 ease-in-out w-[rem]`,
  content3: `w-[35%] bg-[#25bffd] mt-[5rem] h-[20%] md:h-[39%] flex-[2] md:flex-[1.7] justify-center rounded-md flex relative`,
  mainimages: `transform object-cover absolute top-[1rem] md:top-[-3rem]`,
};
